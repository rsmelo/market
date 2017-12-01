# Market
A market demo application for using pagar.me API as a payment service provider.

this application is a simple e-commerce that demonstrates the visualization and purchase of products.
the client will be able to visualize items, add, remove and buy them, using pagar.me API to process the payment

# Considerations
This project uses mocked data to products and recipient, so you will need to use my api key to do an transaction using pagar.me API

# Technologies and Tools
* NodeJS
* GIT
* Javascript
* Libraries: React, Redux, Babel, Jest, redux-saga, redux-form
* Tools: VSCode IDE, Webpack, eslint, dotenv

## How to run
To run this project you must have NodeJS and GIT installed;
* Open your terminal, enter a folder of your choice.
* Clone the project with the command below

  git clone https://github.com/rsmelo/market.git

* After the download enter in the project folder
* Create a .env file in the project folder with a valid pagar.me api key

```
REACT_APP_API_KEY=<a_valid_api_key>
```
* Run the following npm commands (or you can use yarn)

```
npm install
npm start
```

* Open the project in a browswer of your choice
the default([http://localhost:3000/cart](http://localhost:3000/cart))

## Running the tests
* Run the following npm command

```
npm test
```

