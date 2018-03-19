import ClassicRules     from '../resources/rules/classic';
import LizardSpockRules from '../resources/rules/lizard-spock';
import { AsyncStorage } from 'react-native';

function getRules(mode) {
    if (mode === 'lizard-spock') return LizardSpockRules;
    else return ClassicRules;
}

function getElement(element, mode) {
    let rules = getRules(mode);
    for (let i = 0; rules && i < rules.length; i++) {
        if (rules[i].reference === element) {
            return rules[i];
        }
    }
    return null;
}

function defineVictory(mode, elementA, elementB) {
    let rules = getRules(mode);
    for (let i = 0; rules && i < rules.length; i++) {
        if (elementA === rules[i].reference) {
            for (let j = 0; rules[i].beat && j < rules[i].beat.length; j++) {
                if (rules[i].beat[j] === elementB) return 1;
            }
            for (let j = 0; rules[i].beatBy && j < rules[i].beatBy.length; j++) {
                if (rules[i].beatBy[j] === elementB) return -1;
            }
        }
    }
    return 0;
}

function modeRandom(mode) {
    return new Promise((resolve, reject) => {
        let rules = getRules(mode);
        if (rules && rules.length) {
            let number = Math.floor(Math.random() * Math.floor(rules.length));
            if (rules[number]) {
                return resolve(rules[number].reference);
            }
            else return null;
        }
        reject(new Error('Element not found'));
    });
}

function modeImpossible(mode, element) {
    return new Promise((resolve, reject) => {
        let rules = getRules(mode);
        for (let i = 0; rules && i < rules.length; i++) {
            for (let j = 0; rules[i].beat && j < rules[i].beat.length; j++) {
                if (rules[i].beat[j] === element) {
                    return resolve(rules[i].reference);
                }
            }
        }
        reject(new Error('Element not found'));
    });
}

function modeAlgorithm(mode) {
    return new Promise((resolve, reject) => {
        let rules = getRules(mode);
        AsyncStorage.getItem(mode).then(result => {
            result = JSON.parse(result);
            let lessPlayed = null;
            let lessNumber = 0;
            for (let i = 0; rules && i < rules.length; i++) {
                let statNumber = result[rules[i].reference] || 0;
                if (!lessPlayed || statNumber < lessNumber) {
                    lessPlayed = rules[i].reference;
                    lessNumber = result[lessPlayed] || 0;
                }
            }
            for (let i = 0; rules && i < rules.length; i++) {
                for (let j = 0; rules[i].beat && j < rules[i].beat.length; j++) {
                    if (rules[i].beat[j] === lessPlayed) {
                        return resolve(rules[i].reference);
                    }
                }
            }
            reject(new Error('Element not found'));
        }).catch(error => {reject(error)});
    });
}


function playGame(element, mode, difficulty) {
    return new Promise((resolve, reject) => {
        let enemyElement = null;
        if (difficulty === 'impossible') enemyElement = modeImpossible(mode, element);
        else if (difficulty === 'algorithm') enemyElement = modeAlgorithm(mode);
        else enemyElement = modeRandom(mode);
        enemyElement.then(result => {
            let victory = defineVictory(mode, element, result);
            resolve({
                victory: victory,
                myElement: element,
                enemyElement: result,
            });
        }).catch(error => {
            reject(error);
        })
    });

}

const MyRules = {
    getRules,
    getElement,
    defineVictory,
    playGame,
};

export default MyRules;