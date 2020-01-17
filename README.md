# KPMG Takehome

## App Overview

This application follows the specifications of the following prompt: https://docs.google.com/document/d/1IUHa5X9U35RtzKApTX9MsrHdSESKkD0XtdyYcrD7mtw/edit

### To build - iOS

Xcode version - 11.3.0

Assumes user has `react-native-cli`, and `npm` installed

1. clone repo, cd into project root
2. `npm install`
3. `cd ios && pod install`
4. `npm start`
5. `react-native run-ios` or build on xcode


### To build - Android

Android version - 3.5.0

1. clone repo, cd into project root
2. `npm install`
3. `npm start`
4. `cd ./android && ./gradlew app:assembleDebug && ./gradlew installDebug` OR build/run on Android Studio



## Features not implemented due to time constraint
* Books are shuffled each time a user selects a new category to mock search function
* Search bar accepts input but does not trigger any search as there are only 10 books in library
* Footer links do not go anywhere
* Account details are hardcoded
* User cannot log out
* Adding book to cart does nothing
