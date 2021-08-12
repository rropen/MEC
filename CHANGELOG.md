# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.5.0](https://github.com/rropen/mec/compare/v0.3.1...v0.5.0) (2021-08-12)


### ⚠ BREAKING CHANGES

* **vite, cypress:** A number of changes

### Features

* **vite, cypress:** remove vue-cli, add vite, refactor cypress for testing ([1325ad6](https://github.com/rropen/mec/commit/1325ad6c9769a31bbdffc9955febcceb1fff2d18)), closes [#20](https://github.com/rropen/mec/issues/20)

### [0.4.1](https://github.com/rropen/mec/compare/v0.4.0...v0.4.1) (2021-07-22)


### Bug Fixes

* src/frontend/Dockerfile to reduce vulnerabilities ([4de3a68](https://github.com/rropen/mec/commit/4de3a680a0d34dae81ac336daf3a0ef09cc71950))
* **tailwindcss:** update tailwind config to repair IntelliSense error in VSCode ([85e45cf](https://github.com/rropen/mec/commit/85e45cfc631756829c2813762b96411a1bea7466))

## [0.4.0](https://github.com/rropen/mec/compare/v0.2.6...v0.4.0) (2021-07-22)


### ⚠ BREAKING CHANGES

* **delete rows:** API endpoints changed slightly, upgraded yarn packages
* **frontend and backend:** db schema is different so previous sqlite local databases won't work correctly

### Features

* **add past meeting form:** built a form for entering old meetings with validation, submission ([4ddbf11](https://github.com/rropen/mec/commit/4ddbf1155c8d0dd1002c088a743840bc4e8069ce))
* **api:** updates to API, modifying structure, added a delete meeting endpoint ([b7bfd28](https://github.com/rropen/mec/commit/b7bfd28a0101b358ff497cc435669c871133361a)), closes [#14](https://github.com/rropen/mec/issues/14)
* **delete rows:** update API with delete endpoint, add delete functionality to frontend ([c5c0963](https://github.com/rropen/mec/commit/c5c0963d22a886678e89952c0ff14b54cb845dce)), closes [#14](https://github.com/rropen/mec/issues/14)
* **frontend and backend:** restyled ui, modified api & db, changed some functionality ([5046469](https://github.com/rropen/mec/commit/5046469b2079e6719d9c96407f9091490d278f18))
* **statistics.vue and home2.vue:** added statistics to home page w/ homepage reformat ([d616d68](https://github.com/rropen/mec/commit/d616d684743ee61d8e1df90efbf93354af53eb5e)), closes [#12](https://github.com/rropen/mec/issues/12)


### Bug Fixes

* src/frontend/Dockerfile to reduce vulnerabilities ([ed96b57](https://github.com/rropen/mec/commit/ed96b574109efd4a8ae7a3e6e9a811d01fc0c4bb))

## [0.3.0](https://github.com/rollsroycedev/MEC/compare/v0.2.5...v0.3.0) (2021-05-28)


### ⚠ BREAKING CHANGES

* **frontend and backend:** db schema is different so previous sqlite local databases won't work correctly

### Features

* **frontend and backend:** restyled ui, modified api & db, changed some functionality ([5046469](https://github.com/rollsroycedev/MEC/commit/5046469b2079e6719d9c96407f9091490d278f18))

### [0.2.6](https://github.com/rollsroycedev/MEC/compare/v0.2.5...v0.2.6) (2021-05-21)


### Bug Fixes

* the frontend can now get and post data to the database ([165653b](https://github.com/rollsroycedev/MEC/commit/165653bd794af0d03a1ad7f93d240eeada677d85))

### [0.2.5](https://github.com/rollsroycedev/MEC/compare/v0.2.4...v0.2.5) (2021-05-14)

### [0.2.4](https://github.com/rollsroycedev/MEC/compare/v0.2.3...v0.2.4) (2021-05-14)


### Features

* **local docker:** now can run backend using docker and frontend with vite and they can communicate ([d7be6bc](https://github.com/rollsroycedev/MEC/commit/d7be6bc14846fb9b94596d5ddbfd05bedd0facef)), closes [#6](https://github.com/rollsroycedev/MEC/issues/6)

### [0.2.3](https://github.com/rollsroycedev/MEC/compare/v0.2.2...v0.2.3) (2021-05-13)

### [0.2.2](https://github.com/rollsroycedev/MEC/compare/v0.3.0...v0.2.2) (2021-05-13)

### Features

* Added Azure database connection
* Added date and avgCost to table

### [0.2.1](///compare/v0.0.1...v0.2.1) (2021-04-17)

### Features

* **std-ver:** Moving Standard-Version back to root 0cb8c2b

## [0.2.0](///compare/v0.1.6...v0.2.0) (2021-04-17)

### ⚠ BREAKING CHANGES

* **organization:** Moving all the front-end files and folders may require reinstalling node files

### Features

* **components:** Adding some rr styled components for future work 5dda863
* **docker:** adding dockerfiles and docker-compose for the frontend and backend services b7979bd

* **organization:** moving folders for docker capabilitiy 595fccc

### [0.1.6](https://github.com/ITM007/MEC/compare/v0.1.5...v0.1.6) (2021-04-16)

### Features

* Added Backend with sqlite server ([9c4f84a](https://github.com/ITM007/MEC/commit/9c4f84aea13971b218f107ea0186bc897c8798aa))
* Added tailwindJIT & Vite ([a59bd85](https://github.com/ITM007/MEC/commit/a59bd85b948d171d07f95e67d4d564035d4cb11a))
* Added tailwindJIT & Vite ([cff7d95](https://github.com/ITM007/MEC/commit/cff7d9513099117339521b10ee5061a6ef3590b5))
* test standard release feature ([08d36bd](https://github.com/ITM007/MEC/commit/08d36bdcfca133f5e35a1ea9a6780887ece54226))

### [0.1.5](///compare/v0.1.4...v0.1.5) (2021-04-13)

### Features

* **commits:** added commitizen, husky, commit linting, updated ReadMe 0c0127c, closes #25
* test standard release feature 08d36bd

### [0.1.4](https://github.com/ITM007/MEC/compare/v0.1.3...v0.1.4) (2021-04-12)

### Features

* Added tailwindJIT & Vite ([cff7d95](https://github.com/ITM007/MEC/commit/cff7d9513099117339521b10ee5061a6ef3590b5))
* test standard release feature ([08d36bd](https://github.com/ITM007/MEC/commit/08d36bdcfca133f5e35a1ea9a6780887ece54226))

### [0.1.3](https://github.com/ITM007/MEC/compare/v0.1.2...v0.1.3) (2021-04-12)

### Features

* Added Delete Button and Column Sort ([f108a9a](https://github.com/ITM007/MEC/commit/f108a9a77693691a97a0edb498e77ad4629c9e98))

### [0.1.2](https://github.com/ITM007/MEC/compare/v0.1.1...v0.1.2) (2021-04-11)

### Features

* Added, add new row on click ([2e83eb8](https://github.com/ITM007/MEC/commit/2e83eb8f936f8ab0353cc6a522d561d05ba62c53))

### 0.1.1 (2021-04-09)

### Features

* Added conventional commits and Changelog ([7ad9fea](https://github.com/ITM007/MEC/commit/7ad9fea176667f57f6bd6ab524de62a2fee3dacf))
