# Jerry Nwaeze - SOLIDCAD

This project was created with:
- NestJS (NodeJS)
- ReactJS
- MongoDB (mongoose) and TypeORM
- Styled-Components
- Docker (more or less)

## How To Run Application

### Clone the repo

In this project root directory, you will find /backend and /frontend folders representing the server and client respectively, a docker-compose file and this README.md. Go ahead to run: 

### Without Docker

To run the application without docker, simply ```cd``` into the backend folder from the terminal and run ```yarn install --ignore-engines && yarn start:dev```

After that is complete, open a new terminal and ```cd``` into the frontend folder and run ```yarn install --ignore-engines && yarn start```

Now you should be able to open a browser tab to [http://localhost:3000](http://localhost:3000) for view the application

### With Docker

To run the application with docker-compose, simply run this command in the project root directory:

```docker-compose -f "docker-compose.yml" up -d --build``` (Recommended)

OR 

```docker-compose up```

Now you should be able to open a browser tab to [http://localhost:3000](http://localhost:3000) for view the application

### IMPORTANT NOTES

TO RUN TEST on the server, cd into the backend folder and run `yarn test:e2e` OR `yarn test`
TO RUN TEST on the server, cd into the frontend folder and run `yarn test`