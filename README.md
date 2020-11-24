React app i'm making under study context to get more up to date with react development.

***_APP DESCRIPTION_***

Currently I am working part-time as a waiter in a restaurant. The restaurant has two floors, being the second only tables for costumers. Currently the orders are written in a paper, and when in chance, the waiters deliver the paper piece to the staff member behind the counter so tHey can comunicate the order to the kitchen.  

The goal of this app is to create a communication system where you can save the costumers orders online so other staff members can see it on real time on their media devices.

It's a component based app, that saves the orders in a json database. Orders are displayed in a section of the app 'Historico de Pedidos'

This app is still under development, and it is not fully functional. Currently is it possible to register and display the orders. Next step is to develop the 'edit order' functionality.

This version makes an axios request to a locally deplyed JSON server so if you try to run the app, you'll probably have to change the axios request to a differnet server.

In the bottom of this readme file there's the structure of the json database I use.

Keep in mind that i'm a begginer in development, and this app is build from the root by me, supported on tutorials and such.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# order-register

***_JSON database structure_***

{
  "dias": [
    {
      "data": "06 / 10 / 2020",
      "pedidos": [],
      "id": 1
    },
    {
      "data": "06 / 10 / 2020",
      "pedidos": [],
      "id": 2
    }
  ],
  "zonas": [
    {
      "id": 1,
      "nome": "Balcão",
      "mesas": {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6"
      }
    },
    {
      "id": 2,
      "nome": "Esplanada",
      "mesas": {
        "e1": "e1",
        "e2": "e2",
        "e3": "e3",
        "e4": "e4",
        "e5": "e5",
        "e6": "e6"
      }
    },
    {
      "id": 3,
      "nome": "Galeria",
      "mesas": {
        "g0": "g0",
        "g1": "g1",
        "g2": "g2",
        "g3": "g3",
        "g4": "g4",
        "g5": "g5",
        "g6": "g6"
      }
    },
    {
      "id": 4,
      "nome": "7, 8 e Marquize",
      "mesas": {
        "7": "7",
        "8": "8",
        "9": "9",
        "10": "10",
        "11": "11",
        "12": "12"
      }
    }
  ],
  "pedidos": [
    
  ]
}
