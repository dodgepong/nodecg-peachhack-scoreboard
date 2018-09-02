(function () {
    'use strict';

    var endTime = null;

    const o_leftTeamName = document.getElementById('leftTeamName');
    const o_leftPlayerName = document.getElementById('leftPlayerName');
    const o_leftPlayerID = document.getElementById('leftPlayerID');
    const o_leftPlayerScore = document.getElementById('leftPlayerScore');

    const o_rightTeamName = document.getElementById('rightTeamName');
    const o_rightPlayerName = document.getElementById('rightPlayerName');
    const o_rightPlayerID = document.getElementById('rightPlayerID');
    const o_rightPlayerScore = document.getElementById('rightPlayerScore');

    const o_roundTitle = document.getElementById('roundTitle');
    const o_roundTime = document.getElementById('roundTime');

    const r_scoreboard = nodecg.Replicant('scoreboard');

    function getTimeRemainingMinutesSeconds(myEndTime) {
        const now = moment();

        if (now.isAfter(myEndTime)) {
            return "TIME UP";
        } else {
            var duration = moment.duration(myEndTime.diff(now));
            var hours = duration.hours();
            var minutes = duration.minutes();
            if (hours >= 1) {
                minutes += 60;
            }
            var seconds = duration.seconds();
            if (seconds < 10) {
                seconds = "0" + seconds.toString();
            }
            return minutes.toString() + ":" + seconds.toString();
        }
    }

    function tickTimer() {
        if (!endTime || endTime === null || endTime === "" || endTime === undefined) {
            o_roundTime.innerHTML = "";
        } else {
            o_roundTime.innerHTML = getTimeRemainingMinutesSeconds(endTime);
        }
    }

    r_scoreboard.on('change', newScore => {
        o_leftPlayerName.innerHTML = newScore.leftPlayer.name;
        o_rightPlayerName.innerHTML = newScore.rightPlayer.name;
        o_leftPlayerScore.innerHTML = newScore.leftPlayer.score;
        o_rightPlayerScore.innerHTML = newScore.rightPlayer.score;
        if (o_leftTeamName && o_rightTeamName) {
            o_leftTeamName.innerHTML = newScore.leftPlayer.team;
            o_rightTeamName.innerHTML = newScore.rightPlayer.team;
        }

        if (newScore.leftPlayerRunning) {
            o_leftPlayerID.innerHTML = newScore.leftPlayer.runner;
            o_rightPlayerID.innerHTML = newScore.rightPlayer.corp;
        } else {
            o_leftPlayerID.innerHTML = newScore.leftPlayer.corp;
            o_rightPlayerID.innerHTML = newScore.rightPlayer.runner;
        }

        const newEndTime = newScore.round.endTime;
        var same = false;
        if (newEndTime && newEndTime !== null && newEndTime !== "") {
            const newMomentEndTime = moment(newEndTime);
            if (newMomentEndTime.isSame(endTime)) {
                same = true;
            } else {
                endTime = moment(newEndTime);
            }
        } else {
            endTime = null;
        }
        if (!same) {
            window.clearInterval(timeInterval);
            tickTimer();
            timeInterval = window.setInterval(tickTimer, 1000);
        }

        o_roundTitle.innerHTML = newScore.round.title;
    });

    var timeInterval = window.setInterval(tickTimer, 1000);
})();