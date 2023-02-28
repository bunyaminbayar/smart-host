# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

## Detailed explanation about the application

The code is a simple web application that allows hotel owners to enter the number of available premium and economy rooms for the night, and calculates how many rooms of each category will be occupied and the total revenue generated for the night, based on an array of numbers representing the willingness of potential guests to pay for a room.

The application is built using React.js, a popular JavaScript library for building user interfaces. The code starts by defining a functional component called RoomOccupancyCalculator, which renders the user interface of the application.

The component uses React hooks, specifically the useState hook, to manage the state of the application. It defines two state variables, numPremiumRooms and numEconomyRooms, which store the number of available premium and economy rooms entered by the user.

The component also defines a state variable called potentialGuests, which is an array of numbers representing the willingness of potential guests to pay for a room. The array is hard-coded in the code, but could be easily replaced with dynamic data from an external source.

The RoomOccupancyCalculator component has a form with two input fields, one for the number of premium rooms and one for the number of economy rooms. The input fields are bound to their corresponding state variables using the value and onChange attributes. When the user changes the values of the input fields, the state variables are updated accordingly.

When the user submits the form, an event handler called handleSubmit is called. This event handler calculates the number of premium and economy rooms that will be occupied, based on the rules specified in the prompt, and calculates the total revenue generated for the night. The results are then displayed in a table below the form.

## Is there a problem ?

If you have any questions, feel free to email me directly.