'use strict';

module.exports = function (nodecg) {
    const initialValue = {
        leftPlayer: {
            name: "",
            runner: "",
            corp: "",
            score: 0,
            team: "",
            country: ""
        },
        rightPlayer: {
            name: "",
            runner: "",
            corp: "",
            score: 0,
            team: "",
            country: ""
        },
        leftPlayerRunning: true,
        round: {
            endTime: null,
            title: ""
        },
        teamsEnabled: true
    };

    const r_scoreboard = nodecg.Replicant('scoreboard', { defaultValue: initialValue });
};
