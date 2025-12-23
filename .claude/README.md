# Claude Agent System Configuration

This directory contains the configuration for the Claude Code agent system used in the Machinist Shopify Theme project.

## Directory Structure

```
.claude/
├── README.md                      # This file
├── config.yml                     # Main configuration
├── agents.yml                     # Agent definitions
├── tasks.yml                      # Task management configuration
├── tools.yml                      # Tool definitions and capabilities
├── property-tests.yml             # Property-based testing configuration
├── property-test-agents.yml       # Property testing agent definitions
├── settings.local.json            # Local settings (user-specific)
├── agents/                        # Agent-specific documentation
│   └── init-agent.md             # Initialization agent guide
├── tasks/                         # Task definitions and requirements
│   └── task-requirments.md       # Comprehensive implementation plan
└── docs/                          # Generated documentation and reports
    ├── test-reports/             # Property test reports
    └── task-reports/             # Task execution reports
```

## Configuration Files

### config.yml
Main configuration file that defines:
- Project metadata
- Agent system settings
- Task management settings
- Tool configuration
- Property testing framework
- Development commands

### agents.yml
Defines specialized agents for different tasks:
- **init**: Initialization and setup
- **dev**: Code implementation and features
- **test**: Property-based testing
- **docs**: Documentation maintenance
- **review**: Code review and QA
- **shopify**: Shopify-specific operations

Each agent has defined capabilities, tools, and coordination rules.

### tasks.yml
Task management configuration including:
- Task categories (initialization, development, testing, etc.)
- Workflow patterns (feature development, section creation, property testing)
- Execution rules and timeouts
- Task dependencies
- Checkpoint definitions

### tools.yml
Comprehensive tool definitions organized by category:
- **File Operations**: Read, write, edit, glob, grep
- **Code Editing**: Liquid templating, web components, CSS
- **Testing**: Vitest, fast-check, test runners
- **Shopify API**: CLI, Admin API, Storefront API
- **Documentation**: Markdown, Mermaid diagrams
- **Quality Assurance**: Linting, validation, pattern matching
- **Communication**: Pub/sub, DOM events

### property-tests.yml
Property-based testing configuration with:
- 21 defined properties mapped to requirements
- Test execution settings (100 runs per property)
- Invariant definitions
- Test file locations
- Reporting configuration

### property-test-agents.yml
Specialized agents for property testing:
- **generator**: Creates fast-check generators
- **property**: Defines and validates properties
- **shrinker**: Analyzes and shrinks failures
- **coverage**: Tracks test coverage
- **integration**: Tests system integration

## Usage

### Running Commands

The agent system supports the following command patterns:

```bash
# Initialize the agent system
init:agent

# Initialize a specific task
init:task

# Initialize a tool
init:tool

# Initialize property tests
init:property
init:property-test
init:property-test:agent
```

### Working with Tasks

Tasks are defined in [tasks/task-requirments.md](tasks/task-requirments.md) and follow a comprehensive implementation plan with:
- 14 main task groups
- Property tests for validation
- Checkpoints for user approval
- Clear requirement traceability

### Agent Coordination

Agents follow a hierarchical structure:
- `init` can spawn: dev, docs, review
- `dev` can spawn: test, review
- `test`, `docs`, `review` are leaf agents

Communication between agents uses defined protocols:
- Task completion notifications
- Test results
- Documentation updates
- Review feedback

## Property-Based Testing

The system includes comprehensive property-based testing using Vitest and fast-check:

### Key Properties
1. **Product Catalog Completeness** (Critical)
2. **Metafield Data Population** (Critical)
3. **Cost Calculator Accuracy** (High)
4. **Marketing Section Layout** (High)
5. **Accessibility & Performance** (Critical)
6. **System Integration** (High)

Each property:
- Maps to specific requirements
- Defines clear invariants
- Has dedicated test files
- Includes priority level

### Test Execution
- 100 runs per property
- Automatic shrinking on failure
- Detailed counterexample reporting
- Coverage tracking

## Development Workflow

### Feature Development
1. **Plan**: Review requirements, identify files
2. **Implement**: Write code following theme patterns
3. **Test**: Create and run property tests
4. **Review**: Code review and quality checks
5. **Document**: Update documentation

### Section Creation
1. **Design schema**: Define settings and blocks
2. **Implement section**: Create .liquid file
3. **Style section**: Add CSS with theme variables
4. **Add interactivity**: Create web components if needed
5. **Test in theme editor**: Deploy and verify

## Integration with CLAUDE.md

The main project documentation is in [CLAUDE.md](../CLAUDE.md) at the project root. This configuration system enhances Claude Code's ability to:
- Understand project structure
- Follow theme patterns
- Maintain code quality
- Execute complex workflows
- Generate comprehensive tests

## Local Settings

The `settings.local.json` file contains user-specific settings and should not be committed to version control (it's gitignored).

## Documentation Output

Generated documentation and reports are stored in `docs/`:
- **test-reports/**: Property test execution reports
- **task-reports/**: Task completion reports

Reports are in Markdown format and include:
- Timestamps
- Agent information
- Results and metrics
- Recommendations

## Next Steps

After initialization, you can:
1. Review the comprehensive task plan in [tasks/task-requirments.md](tasks/task-requirments.md)
2. Use agents to implement features
3. Create property tests for validation
4. Generate documentation
5. Deploy to Shopify

## Support

For questions about:
- **Project structure**: See [CLAUDE.md](../CLAUDE.md)
- **Shopify theme development**: See [README.md](../README.md)
- **Agent system**: Review configuration files in this directory
- **Property testing**: See [property-tests.yml](property-tests.yml)
