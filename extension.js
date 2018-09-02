'use strict';

module.exports = function (nodecg) {
    const initialValue = {
        leftPlayer: {
            name: "",
            runner: "",
            corp: "",
            score: 0,
            team: ""
        },
        rightPlayer: {
            name: "",
            runner: "",
            corp: "",
            score: 0,
            team: ""
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
