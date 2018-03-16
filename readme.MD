# Rock Paper Scissors - React Native  
This project is the game "Rock paper scissors" made for a test, for a job interview.

:warning: This project was tested only with Android, I currently do not have access to a Mac to test it on iOS.

For this project, I did not use any library except `react` and `react-native`, and libraries for unit testing.

  
## Installation  & usage
1. Clone this repository.
2. Install the dependencies with `npm install`  .
3. Define Android SDK location with `sdk.dir` in the `local.properties` file or with an `ANDROID_HOME` environment variable.  
Example of `local.properties`  
```  
sdk.dir=C:\\Users\\USERNAME\\AppData\\Local\\Android\\Sdk  
```  
This file must be at the root of the `/android` folder. This path example is for Windows.  

4. Check the build tools version of Android installed in the SDK. This project use the version `26.0.1`.
5. Launch an android emulator.
6. Compile & launch the project with `react-native run-android`.

## Unit Testing
For the tests, I use the library `jest`. To launch the unit testing, use the command `npm test`.