# Interview Test

## Introduction

Welcome to MagiDash Corp - Our mission is to empower people in corporations to have one place to visualise any data relevant to their job. As such, we create rich and flexible dashboarding tools which will integrate seamlessly with any data source and present the data in many different formats. 

To get the project started we want to be able to show a list of dummy dashboards to users so that we can get a feel for if the clients like the concepts in a demo form.

Provided is a docker based environment that uses [docker-compose](https://docs.docker.com/compose/) which contains a mysql container and an nginx container.

## Interview Task

Your task is to build a simple frontend, along with an api that has a `/dashboards` endpoint. This simple application should display a list of dashboards retrieved from the mysql database provided.

The list of dashboards visible in the user interface should contain the title of the dashboard and when it was created.

The expected format of the dashboard object returned from the api should be roughly:
```json
{
  "id": <Long>,
  "createdAt": <Date>,
  "updatedAt": <Date>,
  "title": <String>
}
```

You may choose any language and framework to build both the frontend, and the api. During the onsite portion of the interview you will be expected to work through a set of stories which will evolve this application to meet new requirements.

You will need to update the docker-compose.yml file to include your api service so that `smoke_tests.sh` runs against your service.

You should also ensure that the smoke tests pass. This will require a sql script that seeds the database with some data.

## Getting Started

### Prerequisites

Before running the environment you will need to ensure you have the required software installed.

Running `./check_prerequisites.sh` will check what software you need to install on your machine to get this working.

### Running the environment

To run the environment, run `docker-compose up --force-recreate` in the terminal. This will bring up the terminal and the "fake" api service.

Once the environment is running, in another shell you should be able to run `./smoke_tests.sh` which will test that the api service returns at least one dashboard and it has the correct properties.

The api is available on `http://localhost/` and the mysql server is available on mysql:3306. These ports can be easily changed in the docker-compose.yml file, however be aware that the smoke_tests.sh file will also need updating.

### Working with the database

The seed scripts for the database are located in the `database` folder. When the database container is created, the
scripts will be run automatically.

To apply any script changes when the database is already running you will need to stop the running database container
and destroy it. Running `docker-compose down` will stop the environment and destroy the containers for you, the next
time you bring the environment up the containers will be created again.

### Notes

* Completed the task to specifications, however some things needed to be changed in the Docker and .sql file to have things running properly. 
* In the SQL file I added a variable called titles to the query. 
* In the docker file a few changes needed to be made to accommodate my m1 mac's hardware as well as changing the port number from 3306 to 3305.

#### Before running Project:
*   npm install inside both build-your-own-api and build-your-own-app folders
*   Use the run-docker script in api package.json or use: "docker-compose up --force-recreate"
*   Ensure Docker is running the mysql container without error

#### NOTES ON API
* To run the API use the dev or start script in api package.json
* The DB has to be filled via postman or directly into MySql Workbench prior to getting data from the front end. 
* Ideally this would involve an input form, but that is not in the requirements for this project.
* The endpoints for the backend are as follows:
*   Get all dashboards: "/api/dashboards" 
*   Get a single dashboard by title: "/api/get-dashboard/:title"
*   Add mutiple dashboards at a time with the same title: "/api/add-new-dashboards/:num/:title"
*   Add a single dashboard: "/api/add-new-dashboard/:title"

#### NOTES ON APP
* To run the APP, make sure the API is running properly use the start script in api package.json
* App will be running on localhost port 3000
* The App is self explanatory, but a quick run through of it is that it gets all dashboards from the db and displays them in a bootstrap table.
* I also built out pagination. I know this was not in the requirements, but I thought it to be useful when viewing larger sets of data from the DB.

That should be mostly it, thank you for the opportunity to complete this challenge!
