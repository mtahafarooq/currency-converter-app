# currency-converter-app

## Project Setup Guide

After cloning the project run the following commands
```
$ npm install
$ cd ios
$ pod install
$ cd..
```
After successful installation of dependencies you can run the project by using following commands

###  For ios
```
$ react-native run-ios
```


###  For android
```
$ react-native run-android
```

These are the steps to setup and run project on you machine.

## General Info
After successful launch of application on android/ios emulator you will be landed on login screen.To login you can use any username or password and press login button and you will be navigated on Home Screen. After this you can test all the functionalities that were mentioned in requirement docs. During your loggedin time whatever you do i-e mark specific currency as favourite, select any theme from themes list, it will be persisted untill unless you logged out from the app. If you mark any currency as favourite or change default theme with one of the available theme option in themes screen and close and relaunch the app the whole state will remain persisted until you logout the app.

## Running Unit Tests

you can run unit tests by running following command in the project's main directory
```
$ yarn test

```
This will run all the unit tests that are located under __tests__ directory under projects main directory.

## Loading Stories from Storybook

You can run storybook server to load stories by running following command
```
$ yarn run storybook

```
This will load all the stories in your browser at your machine's localhost server(port 7007)
