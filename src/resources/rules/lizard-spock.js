module.exports = [
  {
    "reference": "rock",
    "localizedKey": "rock",
    "resourceKey": require('../images/elements/rock.png'),
    "beat": [
      "scissors",
      "lizard"
    ],
    "beatBy": [
      "paper",
      "spock"
    ]
  },
  {
    "reference": "paper",
    "localizedKey": "paper",
    "resourceKey": require('../images/elements/paper.png'),
    "beat": [
      "rock",
      "spock"
    ],
    "beatBy": [
      "scissors",
      "lizard"
    ]
  },
  {
    "reference": "scissors",
    "localizedKey": "scissors",
    "resourceKey": require('../images/elements/scissors.png'),
    "beat": [
      "paper",
      "lizard"
    ],
    "beatBy": [
      "rock",
      "spock"
    ]
  },
  {
    "reference": "spock",
    "localizedKey": "spock",
    "resourceKey": require('../images/elements/spock.png'),
    "beat": [
      "scissors",
      "rock"
    ],
    "beatBy": [
      "lizard",
      "paper"
    ]
  },
  {
    "reference": "lizard",
    "localizedKey": "lizard",
    "resourceKey": require('../images/elements/lizard.png'),
    "beat": [
      "spock",
      "paper"
    ],
    "beatBy": [
      "scissors",
      "rock"
    ]
  }
];