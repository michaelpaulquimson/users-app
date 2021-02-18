# Getting Started with Users App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Assumptions

* Node v14.15.4 is installed on your machine.

* Used functional components because they are easier to read, debug, and test.
They offer performance benefits, decreased coupling, and greater reusability.

* Used json-server to mock api.
* This app is designed with service layer for easier and structured way to swap out data from source.

## Overview

* Users App is a responsive web application to view registered users.

* The users data are being displayed using a table element.

* Used modals for creating and updating a user.

* Delete user has a confirmation alert.

* Each user has the following information:
 
		id
		firstName
		lastName
		email
		dob

Unit tests are available to assert the following:

* CreateUser Component
	* renders create user button
	* display create user modal upon clicking the create user button
	* hide create user modal upon clicking the close button
	* firstname input on change is working
	* invalid input on firstname should display error msg
	* lastname input on change is working
	* invalid input on lastname should display error msg
	* email input on change is working
	* invalid input on email should display error msg
	* dob input on change is working
	* invalid input on dob should display error msg

* UpdateUser Component
	* renders update user button
	* display update user modal upon clicking the update user button
	* hide update user modal upon clicking the close button
	* firstname input on change is working
	* invalid input on firstname should display error msg
	* lastname input on change is working
	* invalid input on lastname should display error msg
	* email input on change is working
	* invalid input on email should display error msg
	* dob input on change is working
	* invalid input on dob should display error msg

The source code is available in GitHub and can be accessed via the following url:

* https://github.com/michaelpaulquimson/users-app
## Available Scripts

In the project directory, you can run:

* ### `npm run dev`

	Runs the app in the development mode.<br/>
	Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

	API running on [http://localhost:3001/users](http://localhost:3001/users).

	The page will reload if you make edits.<br/>
	You will also see any lint errors in the console.

* ### `npm test`

	Launches the test runner in the interactive watch mode.

* ### `npm run build`

	Builds the app for production to the `build` folder.<br/>
	It correctly bundles React in production mode and optimizes the build for the best performance.

	The build is minified and the filenames include the hashes.<br/>
	Your app is ready to be deployed!
