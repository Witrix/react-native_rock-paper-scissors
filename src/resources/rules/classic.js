module.exports = [
  {
    "reference": "rock",
    "localizedKey": "rock",
    "resourceKey": require('../images/elements/rock.png'),
    "beat": [
      "scissors"
    ],
    "beatBy": [
      "paper"
    ]
  },
  {
    "reference": "paper",
    "localizedKey": "paper",
    "resourceKey": require('../images/elements/paper.png'),
    "beat": [
      "rock"
    ],
    "beatBy": [
      "scissors"
    ]
  },
  {
    "reference": "scissors",
    "localizedKey": "scissors",
    "resourceKey": require('../images/elements/scissors.png'),
    "beat": [
      "paper"
    ],
    "beatBy": [
      "rock"
    ]
  }
];