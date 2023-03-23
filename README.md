# react-shop-app

This is an app (pet project) written in React.js using react router dom, axios and react context as a state manager.
This repository is a front end. If you want to try playing with this, follow the manual. 

## manual (simply)
#### Step 1
Clone repository with server using command git clone
```http
  git clone https://github.com/devlsl/react-shop-server.git react-shop-server  
```
#### Step 2
Go to the react-shop-server directory and run the package installation command
```http
  npm i
```
And the command to run server
```http
  npm start
```
#### Step 3
Follow the [link](https://react-shop-app-lovat.vercel.app/)

## manual (full installation)

#### Step 1
Clone repository using command git clone
```http
  git clone https://github.com/devlsl/react-shop-app.git .
```
This command will clone repository in current folder.
If you want to create a new folder, then instead of "." specify the name of the folder to be created.
```http
  git clone https://github.com/devlsl/react-shop-app.git new-project
```
#### Step 2
You need the data that the application will work with. You can clone the react-shop-server repository. This is a fake api that uses json server.
```http
  git clone https://github.com/devlsl/react-shop-server.git react-shop-server
```
#### Step 3 (optional)
The server starts automatically on port 8000. You can change this at index.js
```http
  const PORT = 3050
```
You should also change port in the client app at src/serverMethods/API.js
```http
  const PORT = 3050
```
#### Step 4
Go to the react-shop-server directory and run the package installation command
```http
  npm i
```
And the command to run server
```http
  npm start
```
#### Step 5
Go to the react-shop-app directory and run the package installation command
```http
  npm i
```
And the command to run app
```http
  npm start
```

**Hope you'll enjoy**