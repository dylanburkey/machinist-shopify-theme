/* --- MACHINIST THEME: GLOBAL JS --- */

class QuantityInput extends HTMLElement {
  constructor() {
    super();
    this.input = this.querySelector('input');
    this.changeEvent = new Event('change', { bubbles: true });

    this.querySelectorAll('button').forEach((button) =>
      button.addEventListener('click', this.onButtonClick.bind(this))
    );
  }

  onButtonClick(event) {
    event.preventDefault();
    const previousValue = this.input.value;

    event.target.name === 'plus' ? this.input.stepUp() : this.input.stepDown();

    if (previousValue !== this.input.value) {
      this.input.dispatchEvent(this.changeEvent);
    }
  }
}

customElements.define('quantity-input', QuantityInput);

class AccordionSection extends HTMLElement {
  constructor() {
    super();
    this.header = this.querySelector('[data-accordion-header]');
    this.content = this.querySelector('[data-accordion-content]');

    if (this.header && this.content) {
      this.header.addEventListener('click', this.toggle.bind(this));
    }
  }

  toggle() {
    const isExpanded = this.header.getAttribute('aria-expanded') === 'true';
    this.header.setAttribute('aria-expanded', !isExpanded);
    this.content.hidden = isExpanded;
  }
}

customElements.define('accordion-section', AccordionSection);

class ProductGallery extends HTMLElement {
  constructor() {
    super();
    this.mainImage = this.querySelector('[data-main-image]');
    this.thumbnails = this.querySelectorAll('[data-thumbnail]');

    this.thumbnails.forEach((thumb) => {
      thumb.addEventListener('click', this.onThumbnailClick.bind(this));
    });
  }

  onThumbnailClick(event) {
    const thumb = event.currentTarget;
    const newSrc = thumb.dataset.src;

    if (!newSrc || !this.mainImage) return;

    this.thumbnails.forEach((t) => t.classList.remove('active'));
    thumb.classList.add('active');
    this.mainImage.src = newSrc;
  }
}

customElements.define('product-gallery', ProductGallery);

class AddToCartButton extends HTMLElement {
  constructor() {
    super();
    this.button = this.querySelector('button');
    this.button?.addEventListener('click', this.onButtonClick.bind(this));
  }

  async onButtonClick(event) {
    event.preventDefault();

    const form = this.closest('form');
    if (!form) return;

    this.button.classList.add('btn--loading');
    this.button.disabled = true;

    try {
      const formData = new FormData(form);
      const response = await fetch(window.routes.cart_add_url, {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.status === 422) {
        throw new Error(result.description);
      }

      document.dispatchEvent(
        new CustomEvent('cart:updated', {
          detail: { item: result },
        })
      );

      this.showSuccess();
    } catch (error) {
      console.error('Error adding to cart:', error);
      this.showError();
    } finally {
      this.button.classList.remove('btn--loading');
      this.button.disabled = false;
    }
  }

  showSuccess() {
    const textElement = this.button.querySelector('.btn__text');
    const originalText = textElement?.textContent;

    if (textElement) {
      textElement.textContent = 'ADDED!';
      setTimeout(() => {
        textElement.textContent = originalText;
      }, 1000);
    }
  }

  showError() {
    const textElement = this.button.querySelector('.btn__text');
    const originalText = textElement?.textContent;

    if (textElement) {
      textElement.textContent = 'ERROR';
      setTimeout(() => {
        textElement.textContent = originalText;
      }, 1000);
    }
  }
}

customElements.define('add-to-cart-button', AddToCartButton);

class CartDrawer extends HTMLElement {
  constructor() {
    super();
    this.overlay = this.querySelector('[data-overlay]');
    this.closeButton = this.querySelector('[data-close]');

    this.overlay?.addEventListener('click', this.close.bind(this));
    this.closeButton?.addEventListener('click', this.close.bind(this));

    document.addEventListener('cart:updated', this.onCartUpdated.bind(this));
  }

  open() {
    this.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  async onCartUpdated() {
    await this.refresh();
    this.open();
  }

  async refresh() {
    try {
      const response = await fetch(
        `${window.routes.cart_url}?section_id=cart-drawer`
      );
      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const newContent = doc.querySelector('cart-drawer');

      if (newContent) {
        this.innerHTML = newContent.innerHTML;
      }
    } catch (error) {
      console.error('Error refreshing cart:', error);
    }
  }
}

customElements.define('cart-drawer', CartDrawer);

class HeaderCart extends HTMLElement {
  constructor() {
    super();
    this.countElement = this.querySelector('[data-cart-count]');

    document.addEventListener('cart:updated', this.updateCount.bind(this));
  }

  async updateCount() {
    try {
      const response = await fetch(window.routes.cart_url + '.js');
      const cart = await response.json();
      if (this.countElement) {
        this.countElement.textContent = cart.item_count;
      }
    } catch (error) {
      console.error('Error updating cart count:', error);
    }
  }
}

customElements.define('header-cart', HeaderCart);

class VariantSelector extends HTMLElement {
  constructor() {
    super();
    this.addEventListener('change', this.onVariantChange);
  }

  onVariantChange() {
    this.updateOptions();
    this.updateMasterId();
    this.updateURL();
    this.updateFormId();
    this.updatePrice();
  }

  updateOptions() {
    this.options = Array.from(
      this.querySelectorAll('select'),
      (select) => select.value
    );
  }

  updateMasterId() {
    this.currentVariant = this.getVariantData().find((variant) => {
      return !variant.options
        .map((option, index) => this.options[index] === option)
        .includes(false);
    });
  }

  updateURL() {
    if (!this.currentVariant) return;
    window.history.replaceState(
      {},
      '',
      `${this.dataset.url}?variant=${this.currentVariant.id}`
    );
  }

  updateFormId() {
    const input = document.querySelector(
      `#product-form-${this.dataset.section} input[name="id"]`
    );
    if (input) {
      input.value = this.currentVariant?.id || '';
    }
  }

  updatePrice() {
    if (!this.currentVariant) return;

    const priceContainer = document.querySelector(
      `#price-${this.dataset.section}`
    );
    if (!priceContainer) return;

    const price = priceContainer.querySelector('[data-price]');
    const comparePrice = priceContainer.querySelector('[data-compare-price]');

    if (price) {
      price.textContent = this.formatMoney(this.currentVariant.price);
    }

    if (comparePrice) {
      if (this.currentVariant.compare_at_price > this.currentVariant.price) {
        comparePrice.textContent = this.formatMoney(
          this.currentVariant.compare_at_price
        );
        comparePrice.hidden = false;
      } else {
        comparePrice.hidden = true;
      }
    }
  }

  formatMoney(cents) {
    return '$' + (cents / 100).toFixed(2);
  }

  getVariantData() {
    this.variantData =
      this.variantData ||
      JSON.parse(this.querySelector('[type="application/json"]').textContent);
    return this.variantData;
  }
}

customElements.define('variant-selector', VariantSelector);

document.addEventListener('DOMContentLoaded', () => {
  console.log('// MACHINIST_THEME: SYSTEM_INITIALIZED');
});
