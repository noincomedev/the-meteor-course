# The Meteor Course

### DESCRIPTION

Learn how **I** build [SPAs](https://en.wikipedia.org/wiki/Single-page_application) from `--bare` [Meteor](https://www.meteor.com) app to production. [Apollo](https://www.apollographql.com) and [React](https://www.reactjs.org) included!

### REQUERIMENTS

- [NODEJS/NPM](https://nodejs.org/en/)
- [Meteor](https://www.meteor.com)

### CONTENT

- Users -> signup, login, logout.
- Routing with React Router
- Front End library [Material-UI](https://www.material-ui.com)
- Querys and Mutations (GraphQL)
- RESTDataSource (GraphQL)
- Deploying

### SLACK

Join [The Meteor Course](https://themeteorcourse.slack.com/) slack to get notified when new code is available to pull!

### HOW TO GET STARTED

- Clone this repo.
- Fetch development branch.
- Checkout to commit [9e50df](https://github.com/noincomedev/the-meteor-course/commit/9e50df20288148625a16dd6e2b639a52040bac31)
- Run `npm install --s` on your terminal
- Then `npm run dev`
- Read server console logs
- Open your browser on `localhost:3000`
- Open browser devtool console to read messages, if any
- Checkout to next commit, server will restart with new console.log messages (server and client side!), files, etc.
- You should check code diff between commits!

### GIT GUIDELINES

#### Branching Model

- [GITFLOW](https://datasift.github.io/gitflow/IntroducingGitFlow.html)

#### Commit Messages

- Always in english
- **One line**, 100 chars max.
- Format: `type(context):description`

<p align="center"><span style="font-weight: 800">Example:</span></br>feat(accounts):add sign in</p>

##### Type

- **feat**: new feature
- **fix**: bugfixes
- **docs**: changes on documentation
- **style**: identation, styling
- **refactor**: code refactor
- **perf** performance improvements
- **test**: changes on test
- **chore**: build and tools

##### Context

Word that makes reference to place where commit makes changes

##### Description

- imperative verb (ex. “change“)
- no mayus at the begining
- no dot at the end
