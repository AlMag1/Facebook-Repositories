This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all the necessary modules to run this app.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### Developer thoughts

This app is based on bootstrap css framework. 
Styling is implemented using Sass preprocessor, based on 7-1 pattern.

As far as concern logic implementation, in my opinion paging mechanism should be done in server side. Api should return paging information, like total page results, current page and total pages, avoiding weird calculations in client side.
