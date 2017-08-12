# YogiBot Website

## Prerequisites & QuickStart
1. Install [Node.js](https://nodejs.org/en/) 6.9.0 or higher, together with NPM 3 or higher.
2. Install [Angular CLI](https://github.com/angular/angular-cli) 
    ```
    npm install -g @angular/cli
    ```
3. Install all the dependencies of project.
    ```
    cd yogibot-website
    npm install
    ```
4. Build production APP
    ```
    ng build -prod
    ```
    It will generate artifacts into a `dist/` folder, upload everything in 'dist/' folder to your hosting server.
    If you do not want to host it in the root of your domain, use ```ng build -prod -d /YogiBot/``` (replace _/YogiBot/_ with your path).

5. If your URL is not root(Relative path), modify `index.html`
    ```html
    <base href="/YOUR_PATH/">
    ```
    Then build with following command:
    ```
    ng build -prod -d /YOUR_PATH/
    ```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Google Analytics and Piwik

You can use [Google Analytics](https://analytics.google.com/) or [Piwik](https://piwik.org/). Remember to keep your production-use Tracking ID private.

![YogiBot Analytics](https://user-images.githubusercontent.com/16610908/29240822-16c76078-7f6d-11e7-9c4a-3ea64dae9644.png)
