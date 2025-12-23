# Init Agent

## This agent is the first agent to be initialized and is responsible for setting up the environment and initializing the other agents.

### Tools

### Tasks

- Review the CLAUDE.MD and README.md files to understand the overall project structure and goals.

Review the code in:

- sections/
- templates/
- tools/
- snippets/
- layouts/
- assets/
- config/
- property-tests/
- property-test-agents/
- docs/

Review the code in the .claude directory to understand the overall project structure and goals.

## Output

### Output: CLAUDE.MD

Create CLAUDE.MD that explain the code in the following directories:

- sections/
- templates/
- snippets/

### Output: .claude/ configuration directory

- Make a .claude directory in the root of the project.
- Create a config.yml file in the .claude directory.
- Create a tasks.yml file in the .claude directory.
- Create an agents.yml file in the .claude directory.
- Create a tools.yml file in the .claude directory.
- Create a property-tests.yml file in the .claude directory.
- Create a property-test-agents.yml file in the .claude directory.
- Create a docs directory in the .claude directory.

Make sure I can run the following commands:

- /task tasks.yml
- /task task-requirments.md

Claude should use subagents to complete the tasks. The subagents should be initialized in the agents.yml file.


- `init`: Initializes the environment and creates the necessary files and directories.

- `init:agent`: Initializes the agent and creates the necessary files and directories.
- `init:task`: Initializes the task and creates the necessary files and directories.
- `init:tool`: Initializes the tool and creates the necessary files and directories.
- `init:property`: Initializes the property and creates the necessary files and directories.
- `init:property-test`: Initializes the property test and creates the necessary files and directories.
- `init:property-test:agent`: Initializes the property test agent and creates the necessary files and directories.