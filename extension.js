'use strict';

var moment = require('moment');

module.exports = function (nodecg) {
    const initialValue = {
        leftPlayer: {
            name: "",
            runner: "",
            corp: "",
            score: 0
        },
        rightPlayer: {
            name: "",
            runner: "",
            corp: "",
            score: 0
        },
        leftPlayerRunning: true,
        round: {
            endTime: null,
            title: ""
        }
    };

    const r_scoreboard = nodecg.Replicant('scoreboard', { defaultValue: initialValue });
};
