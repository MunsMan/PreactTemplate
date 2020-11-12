
![Node 12](https://github.com/MunsMan/PreactTemplate/workflows/Node%2012/badge.svg)
![Node 14](https://github.com/MunsMan/PreactTemplate/workflows/Node%2014/badge.svg)
![Docker](https://github.com/MunsMan/PreactTemplate/workflows/Docker/badge.svg)
# PreactTemplate

This is a light bare bones Preact starter kit with Typescript.

## To get up and running

1. `npm install` or `yarn`
2. `npm run start` or `yarn run start`
3. open your favorite Browser and navigate to http://localhost:3000

## To analyse your build and the size run

0. `npm install` or `yarn` *only if you have a new environment*
1. `npm run analyse` or `yarn run analyse`
2. analyse and get your bundle size down!
3. geek out about your small bundle size

## Test, Test, Test

This template includes a hole test suite. The basic tests are handled by [Jest](https://jestjs.io) and [enzyme](https://enzymejs.github.io/enzyme/), where we prepared some examples. When there are [GitHub Actions](https://github.com/features/actions), which run the test suite automatically by every commit to the master and by Pull Request to the Master.

If you want to test locally:

1. `npm install` or `yarn` only if you have a new environment
2. `npm run test` or `yarn run test`
3. Hopefully all our tests pass

## Docker

You probably already heard from [Docker](www.docker.com) and you know how awesome it is. 
Therefore we are providing a basic docker setup. There are two Dockerfiles:
- Dockerfile
	- this is a Production Dockerfile
		- build your project for Production
		- it will run all tests
		- configure a [nginx](https://www.nginx.com) server
- dev.Dockerfile
	- this is for development inside docker
		- if you don't want to run your code on your host
		- starts a dev server
	- needs the docker-compose.dev.yml
		- for mapping:
			- files
			- ports

To run your Docker DevServer:

1. `npm run devDocker` or `yarn run devDocker`

To build your Production Docker Image

1. `npm run buildDocker`
2. `docker run prod:latest`

For this you need to have docker installed. If you don't, check the installation out: [Docker Get Started](https://www.docker.com/get-started)


If you want to know, why docker is awesome:
- [Docker Explained Visually](https://www.iteachrecruiters.com/blog/docker-explained-visually-for-non-technical-folks/)
- [From Intel](https://software.intel.com/content/www/us/en/develop/documentation/intel-system-studio-docker-install/top/why.html)
- [From Docker themself](https://www.docker.com/why-docker)