# Cyber Camp 2.0

This is a React.js application for beginner cyber security training. This training game consists of ten levels that the user will navigate through and find the password for the next level. The user will access the levels by SSH into the given ip on the web application. 
The levels are currently docker containers that host linux(ubuntu) servers that are hosted on a local machine. 

## Deploy Your Own

Deploy your own Create React App project with Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/vercel/tree/main/examples/create-react-app&template=create-react-app)

_Live Example: https://create-react-template.vercel.app/_

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

## Server Start Up

Enusre that docker is install and running on local machine. navigate to \cyber_camp2.0\Server\Scripts and run ".\start_servers_and_network.ps1"
This script will build and run all docker containers. To delete all servers run the script ".\delete_servers_and_network.ps1"
