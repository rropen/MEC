# MEC

Meeting Efficiency Calculator (MEC)

## About

This code calculates the cost of meetings, and has user inputs to see if powerpoint was used.

Ex: If you have a meeting with 20 people for 120 min how much does that cost your company? This program will give you live updates so you can see by the second the cost of the meeting proice increase.

The valulation of each employee is at \$200 per hour.

## Project setup

``` bash
yarn install
```

Note: Make sure you have the following settings in your VSCode Settings.json file to allow auto lint on save.

``` json
"editor.codeActionsOnSave": {
        "source.fixAll": true,
        "source.fixAll.eslint": true
    }
```

### Commits & Contributions

This is the standard we use for commits: [Commit Standard](https://www.conventionalcommits.org/en/v1.0.0/)

``` bash
git add xxx  # stage your files
git commit -m "foo bar"  # this will fail on auto-commit-lint
git commit -m "feat(foo): bar stuff & things"  # this will pass
yarn commit  # interactive commit messages
```

### Changelog Update

``` bash
yarn release  # after commiting
```

### Compiles and hot-reloads for development


``` bash
yarn serve //standard development mode
yarn vite //crazy fast development mode
=======
```
yarn vite
```

### Compiles and minifies for production

``` bash
yarn build
```
