import ClassicRules     from '../resources/rules/classic';
import LizardSpockRules from '../resources/rules/lizard-spock';

function getRules(mode) {
    if (mode === 'lizard-spock') return LizardSpockRules;
    else return ClassicRules;
}

function getElement(element, mode) {
    let rules = getRules(mode);
    for (let i = 0; rules && i < rules.length; i++) {
        if (rules[i].reference === 'element') {
            return rules[i];
        }
    }
    return null;
}

const MyRyles = {
    getRules,
    getElement,
};

export default MyRyles;