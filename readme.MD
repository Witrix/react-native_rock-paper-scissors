# Rock Paper Scissors - React Native
[![Build Status](https://travis-ci.org/Witrix/react-native_rock-paper-scissors.svg?branch=master)](https://travis-ci.org/Witrix/react-native_rock-paper-scissors)
  
This project is the game "Rock paper scissors" made for a test, for a job interview.

:warning: This project was tested only with Android, I currently do not have access to a Mac to test it on iOS.

- Framework: `react-native` & `react`
- Libraries: None
- Unit Testing Libraries: `jest`, `babel-jest`, `babel-preset-react-native` & `react-test-renderer`


  
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
To launch the unit testing, use the command `npm test`.
Unit tests are on
- Components `/src/components`
- My Libraries `/src/my-lib`

## Game options
#### Player Type
- **Player VS AI**: The player can play against the computer.
- **AI VS AI**: The computer play against the computer. When the computer plays, he waits 1 second, then it plays randomly.
#### Mode
- **Classic**: Classic game with the elements: `paper` `rock` & `scissors`
- **Lizard Spock**: Mode with the elements: `paper` `rock` `scissors` `spock` & `lizard`

The rules can be changed with the files in `/src/resources/rules`.
#### Difficulty
- **Random**: The computer play randomly.
- **Algorithm**: Use the previous game to determine which element is more likely to appear and play its counter. For example: The player plays most of the time `rock`, so the computer will play `paper`.
- **Impossible**: The computer wait that the player plays, to play his counter. In other words, the computer cheats.