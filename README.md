# Navarre Beach Accomadations App

A single-page map app that allows users to view vacation accomadations, filter them by available amenities, see them on the map, and view details of each place within a pop-up informational window.

## Getting Started

Navigate to [https://clsoar.github.io/react-map-page/](https://clsoar.github.io/react-map-page/) in order to see the app in action.

OR

Download or clone this repository and then in the project directory, run `npm start` or `npm run build` as described below.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

After the build completes, run `serve -s build`.
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

Note: The service worker will only be implemented if you build the app for production.

## Use

The dropdown menu provides a list of amenities that the user may use to filter the available accomadations.

More information can be viewed by clicking on the list of accomdations or on the map markers. Information includes name, address, phone number, website, type of accomadations, available amenities, and a description of the location.

## Dependencies

* Google Maps Javascript API v3 - The map runs in developer mode or an API key can be obtained and included in Map.js at 73:65 as key="YOUR-API-KEY-HERE".
* myJSON.com API is used to get the accomadation's information.

## Credit

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

React-google-maps library was used to integrate Google Maps into React. Documentation can be found at the Github Repo [https://github.com/tomchentw/react-google-maps](https://github.com/tomchentw/react-google-maps).

Forrest Walker's YouTube tutorial and Slack tips helped troubleshoot opening the InfoWindows and with a map refresh issue. His YouTube tutorial can be found on his [channel](https://www.youtube.com/watch?v=VhXuEvkpxK0).

## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    data.json
    FilterOptions.js
    index.css
    index.js
    InfoWindow.css
    Item.js
    ItemList.js
    Map.css
    Map.js
    markers.js
    MyMapComponenet.js
    registerServiceWorker.js
```

