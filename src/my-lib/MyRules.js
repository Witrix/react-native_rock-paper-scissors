import ClassicRules     from '../resources/rules/classic';
import LizardSpockRules from '../resources/rules/lizard-spock';

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
    let rules = getRules(mode);
    if (rules && rules.length) {
        let number =  Math.floor(Math.random() * Math.floor(rules.length));
        if (rules[number]) return rules[number].reference;
        else return null;
    }
    return null;
}

function modeImpossible(mode) {
    let rules = getRules(mode);
    if (rules && rules.length) {
        let number =  Math.floor(Math.random() * Math.floor(rules.length));
        return rules[number].reference;
    }
    return null;
}


function playGame(element, mode, playerMode) {
    let enemyElement = null;
    if (mode === 'impossible') enemyElement = modeImpossible(mode);
    else enemyElement = modeRandom(mode);
    let victory = defineVictory(mode, element, enemyElement);
    return {
        victory: victory,
        myElement: element,
        enemyElement: enemyElement,
    }
}

const MyRules = {
    getRules,
    getElement,
    defineVictory,
    playGame,
};

export default MyRules;