# MX51 Story Workflow Interview

Hi!

This interview process is a pair programming exercise where you will drive, and we will follow along and provide feedback as is required.
When the interview begins, you will be assigned a user story to modify this POS (Point of Sale) application.
We will be available to answer any questions around the application or story.

Please take the time before your interview day to get this app up and running,
study the code base and familiarise yourself with the common patterns used.

The interview will last for 1 hour, and we will work together on the story for
roughly 35-45 minutes before having further discussion.

## Interview Setup
Please let us know which IDE you would prefer to use. Ideally we will be able to pair program remotely.

### For VS Code
Please install the [liveshare](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack) extension.

### For Webstorm
If possible, please use [Code with Me](https://www.jetbrains.com/code-with-me/)

If either of these is not suitable please update us beforehand.

# Application

This project demonstrates a small POS application for a tuckshop. It ties to a mock json based backend, using an interceptor for retry attempts if a requests fails, and another for authentication. The auth inteceptor just adds withCredentials and a dummy auth token.

## Development server

Run `npm install` to get the required packages.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running end-to-end tests

I have created a simple cypress test as an example. It opens the page, clicks an item and expects it to be added to the order.
Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## External Packages

Using the below to create GUIDs 
https://www.npmjs.com/package/uuid