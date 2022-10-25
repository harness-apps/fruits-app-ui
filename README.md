# Fruits UI

The UI that act as frontend to the APIs built as part of[Fruits API](https://github.com/harness-apps/fruits-app).

 The UI is built using [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and [Chakra UI](https://chakra-ui.com).

## Pre-requisites

- [Docker Desktop](https://docs.docker.com/desktop/)
- [kubectl](https://kubernetes.io/docs/tasks/tools)
- [Drone CI CLI](https://docs.drone.io/cli/install/)

## Environment Setup

Copy the `.env.example` to `.build.env` and update the following variables to suit your settings.

- `PLUGIN_REGISTRY` - the docker registry to use
- `PLUGIN_TAG`      - the tag to push the image to docker registry
- `PLUGIN_REPO`     - the docker registry repository
- `PLUGIN_USERNAME` - the docker Registry username
- `PLUGIN_PASSWORD` - the docker registry password
- `FRUITS_API_IMAGE` - The fruits api backend image to use

Based on the `FRUITS_API_IMAGE` you may need to configure the following values, some images that you can use for testing,

- PostgreSQL - `kameshsampath/0.1.1-pgsql`
- MongoDB - `kameshsampath/0.2.0-go-mongo`

### Database

Based on the database backend you choose to use RDBMS/NoSQL(MongoDB) you need to configure the following extra variables on `.build.env`

### RDBMS

#### Backend Database to use

- `FRUITS_DB_TYPE` - the database to use with fruits api, defaults: `sqlite`

##### Postgresql DB Settings

- `POSTGRES_HOST` - the postgresql host usually the docker or kubernetes service name e.g. `postgresql`
- `POSTGRES_PORT` - the postgresql port e.g. `5432`
- `POSTGRES_USER` - the postgresql user e.g. `demo`
- `POSTGRES_PASSWORD` - the postgresql password e.g `pa55Word!`
- `POSTGRES_DB` - the postgresql database to use e.g `demodb`

##### MariaDB/MySQL Settings

- `MYSQL_HOST` - the MySQL host usually the docker or kubernetes service name e.g.`mysql`
- `MYSQL_PORT` - the MySQL port e.g. `3306`
- `MYSQL_ROOT_PASSWORD` - the MySQL root password `superS3cret!`
- `MYSQL_PASSWORD` - the MySQL password `pa55Word!`
- `MYSQL_USER` - the MySQL user e.g `demo`
- `MYSQL_DATABASE` - the MySQL database to use e.g `demodb`

##### SQLite

- `FRUITS_DB_FILE` - the default database file to use.

### NoSQL

Only MongoDB is supported right now. When you use `MongoDB` then you need to configure the following values,

- `QUARKUS_MONGODB_CONNECTION_STRING` - the mongodb connection string
- `FRUIT_DB` - the mongodb database that needs to be used e.g. `demodb`
- `FRUITS_DB_COLLECTION` - the mongodb collection to use for fruits e.g. fruits
- `MONGO_INITDB_DATABASE` - the mongodb database that will be used for testing e.g. `demodb`
- `MONGO_INITDB_ROOT_USERNAME` - optional mongodb connection user
- `MONGO_INITDB_ROOT_PASSWORD` - optional mongodb connection user password

## Build the Application

```shell
drone exec --trusted --env-file=.build.env
```

The command will test, build and push the container image to the `$PLUGIN_REPO:$PLUGIN_TAG`.

## Run Application

### Locally

```shell
docker-compose --env-file=.build.env up
```

Open [http://localhost:3000](http://localhost:3000) with your browser to application UI.

### Kubernetes

To deploy application to Kubernetes, you can use the Helm Charts from [here](https://github.com/harness-apps/fruits-app).

## Hacking Locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Chakra](https://chakra-ui.com/docs/getting-started) - learn about Chakra UI

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
