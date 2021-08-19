<p>
    <img alt="Rolls-Royce Logo" width="140" src="https://raw.githubusercontent.com/rropen/.github/main/img/logo.png">
    <br>
    Meeting Efficiency Calculator  
</p>

<p>
    <a href="https://github.com/rrglobal/Developer-Handbook"><img src="https://img.shields.io/badge/Rolls--Royce-Software%20Factory-10069f"></a>
    <a href="http://commitizen.github.io/cz-cli/"><img src="https://img.shields.io/badge/commitizen-friendly-brightgreen?style=flat"></a><br><br>
</p>

------

## Overview

This code calculates the cost of meetings, and has user inputs to see if powerpoint was used.

Ex: If you have a meeting with 20 people for 120 min how much does that cost your company? This program will give you live updates so you can see by the second the cost of the meeting proice increase.

The valulation of each employee is at $140 per hour.

## Project Notes

```bash
# install npm packages to allow project-wide committing
yarn install # in the root directory

# install packages for the frontend
cd src/frontend
yarn install
```

Note: Make sure you have the following settings in your VSCode Settings.json file to allow auto lint on save.

```json
"editor.codeActionsOnSave": {
        "source.fixAll": true,
    }
```

### Commits & Contributions

This is the standard we use for commits: [Commit Standard](https://www.conventionalcommits.org/en/v1.0.0/)

```bash
git add xxx  # stage your files
git commit -m "foo bar"  # this will fail on auto-commit-lint
git commit -m "feat(foo): bar stuff & things"  # this will pass
yarn commit  # interactive commit messages
```

The following are good examples of commit messages:

`style(footer): remove blue border surrounding the right side text box`

`refactor(button props): change the button props to allow a text value to be passed in`

### Changelog Update

```bash
yarn release  # after commiting
```

## Frontend

For local development, the frontend just runs on your machine. Install the packages in `src/frontend` and run it with the commands below. This is the easiest way to work on this service.

### Compiles and hot-reloads for development

```bash
# from the root/src/frontend folder
yarn serve # standard development mode - app available at http://localhost:8080
yarn vite # crazy fast development mode - app available at http://localhost:3000
```

### Compiles and minifies for production

```bash
yarn build
```

### End-To-End Testing

You can run the E2E tests in one of two ways:

**In a Terminal**

```bash
# navigate to the frontend folder
cd /src/frontend

# run the command
yarn cy
```

**Interactively in a Browser**

```bash
# navigate to the frontend folder
cd /src/frontend

# run the command
yarn cy-open
```

### Component Testing

You can run the component tests in one of two ways:

**In a Terminal**

```bash
# navigate to the frontend folder
cd /src/frontend

# run the command
yarn cy-ct
```

**Interactively in a Browser**

```bash
# navigate to the frontend folder
cd /src/frontend

# run the command
yarn cy-open-ct
```

## Backend

For local development, the backend should be run in docker. You'll need to do one step before building the container.

```bash
# Navigate to the backend service location
cd src/backend

# make a new .env file
cp .env.example .env
```

The example .env file should already be sufficient for local development with only the two environment variables. The .env file you use for your development shouldn't be committed to source code. This should be taken care of automatically by the .gitignore file.

### Build the docker image

```bash
# Move to the docker-compose context where the docker-compose files are located
cd src

# Build the container
docker-compose -f docker-compose.yml -f local-docker-compose.yml build

# Run the container in detached mode to return your command prompt
docker-compose -f docker-compose.yml -f local-docker-compose.yml up -d backend

# Check the status of your container.
docker ps

# Attach to the log output from the container (ctrl+c to escape)
docker compose logs -f

# Create & migrate local database
docker exec -it src_backend_1 bash
alembic upgrade head
exit
```

### Run Locally

If you want to install the dependencies and run the backend project locally for some reason, use [pdm](https://pdm.fming.dev/usage/project.html). PDM uses the `pyproject.toml` file to store the project requirements instead of the `requirements.txt` like most people are used to. It's actually a much nicer system that lets you avoid the virtual environment messes of the past. But it's a bit different and can take some getting used to.

> You'll need python 3.8 or higher installed on your machine to use the packages as specified.

```bash
# verify you have pdm installed
pdm --version

# if you don't, install it
pip install pdm

cd src/backend
pdm install
```

To run the project just run `pdm run uvicorn main:app --workers 4 --host 0.0.0.0 --port 8181 --reload`

Your backend container should be running at `http://localhost:8181/docs` on your local machine.

### Unit Testing

To run the backend unit tests:

```bash
# Move to the tests directory
cd src/backend/tests

# Run pytest
pdm run pytest
```

Note: The command line options for pytest are configured in the `pytest.ini` file so you don't need to add them when running the command.

Code coverage will be displayed if all tests pass.
