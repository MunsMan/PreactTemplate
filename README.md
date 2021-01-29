# Preact Typescript Template

### Available Scripts

Run in the project directory:

**`yarn`** or **`npm install`**

to install the dependencies package.

To run a script use

**`yarn run`** or **`npm run`**

with:

-   **`dev`**

Runs the development Server on [http://localhost:3000](http://localhost:3000), with hot reloading.

-   **`storybook`**

Starts the Storybook Server. It should open a Browser Tab, showing your Project. There are same Examples provided.

-   **`build`**

when you run `build` it generates a static html pages, with the belonging css files. This can be served with [nginx](https://www.nginx.com).

-   **`serve`**

serving the webpack with [sirv](https://sirv.com). First it uses the build command and then serve the pages on [http://localhost/8080](http://localhost/8080). Cors are enabled.

-   **`lint`**

checking your code for better code quality with [eslint](https://eslint.org).

-   **`test`**

for testing your application. Tests are run with [jest](https://jestjs.io) and [Testing Library](https://testing-library.com). There are example tests included into the project.

### Docker

Why should you use Docker?

There are many articles about why you should use Docker or Container in general. Here is a list of some advantages:

-   faster deployment - perfect for Micro Service Architecture

-   Security - your codes only runs in the container and your main OS is protected

-   Scale - which tool like [Kubernetes](https://kubernetes.io) is easy to scale your Application

-   Execution - when someone has Docker, he can run your code and it always behaviors the same.

#### Production

There is basic [Docker](https://www.docker.com) support integrated into the Project. There is a Production Dockerfile with can run build with `yarn run buildDocker` which builds a Docker Image. It creates a production ready Image, which hosts the App with Nginx.

#### Development

There is a development Dockerfile and docker-compose setup to run the development environment without the need to install the node environment locally. Docker Compose shares the src directory which the container, in which the development server runs.
