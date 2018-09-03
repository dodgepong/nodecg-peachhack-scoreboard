(function () {
    'use strict';

    const corps = [
        {
            searchString: "Acme Consulting",
            displayString: "Acme Consulting"
        },
        {
            searchString: "AgInfusion",
            displayString: "AgInfusion"
        },
        {
            searchString: "Argus Security",
            displayString: "Argus Security"
        },
        {
            searchString: "Asa Group",
            displayString: "Asa Group"
        },
        {
            searchString: "Azmari EdTech",
            displayString: "Azmari EdTech"
        },
        {
            searchString: "Cerebral Imaging",
            displayString: "Cerebral Imaging"
        },
        {
            searchString: "Chronos Protocol",
            displayString: "Chronos Protocol"
        },
        {
            searchString: "Custom Biotics",
            displayString: "Custom Biotics"
        },
        {
            searchString: "Cybernetics Division",
            displayString: "Cybernetics Division"
        },
        {
            searchString: "Gagarin Deep Space",
            displayString: "Gagarin Deep Space"
        },
        {
            searchString: "GRNDL",
            displayString: "GRNDL"
        },
        {
            searchString: "Haarpsichord Studios",
            displayString: "Haarpsichord Studios"
        },
        {
            searchString: "HB: Architects of Tomorrow",
            displayString: "HB: Architects of Tomorrow"
        },
        {
            searchString: "HB: Engineering the Future",
            displayString: "HB: Engineering the Future"
        },
        {
            searchString: "HB: Stronger Together",
            displayString: "HB: Stronger Together"
        },
        {
            searchString: "HB: Strategic Innovations",
            displayString: "HB: Strategic Innovations"
        },
        {
            searchString: "Harishchandra Ent.",
            displayString: "Harishchandra Ent."
        },
        {
            searchString: "Harmony Medtech",
            displayString: "Harmony Medtech"
        },
        {
            searchString: "Industrial Genomics",
            displayString: "Industrial Genomics"
        },
        {
            searchString: "Jemison Astronautics",
            displayString: "Jemison Astronautics"
        },
        {
            searchString: "Jinteki Biotech",
            displayString: "Jinteki Biotech"
        },
        {
            searchString: "Jinteki: Personal Evolution",
            displayString: "Jinteki: Personal Evolution"
        },
        {
            searchString: "Jinteki: Potential Unleashed",
            displayString: "Jinteki: Potential Unleashed"
        },
        {
            searchString: "Jinteki: Replicating Perfection",
            displayString: "Jinteki: Replicating Perfection"
        },
        {
            searchString: "Jinteki: Synthetic Systems",
            displayString: "Jinteki: Synthetic Systems"
        },
        {
            searchString: "Mti Mwekundu",
            displayString: "Mti Mwekundu"
        },
        {
            searchString: "NBN: Controlling the Message",
            displayString: "NBN: Controlling the Message"
        },
        {
            searchString: "NBN: Information Dynamics",
            displayString: "NBN: Information Dynamics"
        },
        {
            searchString: "NBN: Making News",
            displayString: "NBN: Making News"
        },
        {
            searchString: "NBN: The World Is Yours*",
            displayString: "NBN: The World Is Yours*"
        },
        {
            searchString: "Near-Earth Hub",
            displayString: "Near-Earth Hub"
        },
        {
            searchString: "New Angeles Sol",
            displayString: "New Angeles Sol"
        },
        {
            searchString: "NEXT Design",
            displayString: "NEXT Design"
        },
        {
            searchString: "Nisei Division",
            displayString: "Nisei Division"
        },
        {
            searchString: "Palana Foods",
            displayString: "Pālanā Foods"
        },
        {
            searchString: "Saraswati Mnemonics",
            displayString: "Saraswati Mnemonics"
        },
        {
            searchString: "Seidr Laboratories",
            displayString: "Seidr Laboratories"
        },
        {
            searchString: "Skorpios Defense Systems",
            displayString: "Skorpios Defense Systems"
        },
        {
            searchString: "Sportsmetal",
            displayString: "Sportsmetal"
        },
        {
            searchString: "SSO Industries",
            displayString: "SSO Industries"
        },
        {
            searchString: "Spark Agency",
            displayString: "Spark Agency"
        },
        {
            searchString: "SYNC",
            displayString: "SYNC"
        },
        {
            searchString: "Tennin Institute",
            displayString: "Tennin Institute"
        },
        {
            searchString: "The Foundry",
            displayString: "The Foundry"
        },
        {
            searchString: "The Outfit",
            displayString: "The Outfit"
        },
        {
            searchString: "The Shadow",
            displayString: "The Shadow"
        },
        {
            searchString: "Titan Transnational",
            displayString: "Titan Transnational"
        },
        {
            searchString: "Weyland: Because We Built It",
            displayString: "Weyland: Because We Built It"
        },
        {
            searchString: "Weyland: Builder of Nations",
            displayString: "Weyland: Builder of Nations"
        },
        {
            searchString: "Weyland: Building a Better World",
            displayString: "Weyland: Building a Better World"
        },
        {
            searchString: "Weyland: Fringe Applications",
            displayString: "Weyland: Fringe Applications"
        }
    ];

    const runners = [
        {
            searchString: '419',
            displayString: '419'
        },
        {
            searchString: 'Adam',
            displayString: 'Adam'
        },
        {
            searchString: 'Akiko Nisei',
            displayString: 'Akiko Nisei'
        },
        {
            searchString: 'Alice Merchant',
            displayString: 'Alice Merchant'
        },
        {
            searchString: 'Andromeda',
            displayString: 'Andromeda'
        },
        {
            searchString: 'Apex',
            displayString: 'Apex'
        },
        {
            searchString: 'Armand "Geist" Walker',
            displayString: 'Armand "Geist" Walker'
        },
        {
            searchString: 'Ayla "Bios" Rahim',
            displayString: 'Ayla "Bios" Rahim'
        },
        {
            searchString: 'Boris "Syfr" Kovac (Criminal)',
            displayString: 'Boris "Syfr" Kovac (Criminal)'
        },
        {
            searchString: 'Chaos Theory',
            displayString: 'Chaos Theory'
        },
        {
            searchString: 'Edward Kim',
            displayString: 'Edward Kim'
        },
        {
            searchString: 'Ele "Smoke" Scovak',
            displayString: 'Ele "Smoke" Scovak'
        },
        {
            searchString: 'Exile',
            displayString: 'Exile'
        },
        {
            searchString: 'Freedom Khumalo',
            displayString: 'Freedom Khumalo'
        },
        {
            searchString: 'Gabriel Santiago',
            displayString: 'Gabriel Santiago'
        },
        {
            searchString: 'Hayley Kaplan',
            displayString: 'Hayley Kaplan'
        },
        {
            searchString: 'Iain Stirling',
            displayString: 'Iain Stirling'
        },
        {
            searchString: 'Jamie "Bzzz" Micken (Shaper)',
            displayString: 'Jamie "Bzzz" Micken (Shaper)'
        },
        {
            searchString: 'Jesminder Sareen',
            displayString: 'Jesminder Sareen'
        },
        {
            searchString: 'Kabonesa Wu',
            displayString: 'Kabonesa Wu'
        },
        {
            searchString: 'Kate "Mac" McCaffrey',
            displayString: 'Kate "Mac" McCaffrey'
        },
        {
            searchString: 'Ken "Express" Tenma',
            displayString: 'Ken "Express" Tenma'
        },
        {
            searchString: 'Khan',
            displayString: 'Khan'
        },
        {
            searchString: 'Laramy Fisk',
            displayString: 'Laramy Fisk'
        },
        {
            searchString: 'Liza Talking Thunder',
            displayString: 'Liza Talking Thunder'
        },
        {
            searchString: 'Leela Patel',
            displayString: 'Leela Patel'
        },
        {
            searchString: 'Los',
            displayString: 'Los'
        },
        {
            searchString: 'MaxX',
            displayString: 'MaxX'
        },
        {
            searchString: 'Nasir Meidan',
            displayString: 'Nasir Meidan'
        },
        {
            searchString: 'Nathaniel "Gnat" Hall',
            displayString: 'Nathaniel "Gnat" Hall'
        },
        {
            searchString: 'Nero Severn',
            displayString: 'Nero Severn'
        },
        {
            searchString: 'Noise',
            displayString: 'Noise'
        },
        {
            searchString: 'Null',
            displayString: 'Null'
        },
        {
            searchString: 'Omar Keung',
            displayString: 'Omar Keung'
        },
        {
            searchString: 'Quetzal',
            displayString: 'Quetzal'
        },
        {
            searchString: 'Reina Roja',
            displayString: 'Reina Roja'
        },
        {
            searchString: 'Rielle "Kit" Peddler',
            displayString: 'Rielle "Kit" Peddler'
        },
        {
            searchString: 'Silhouette',
            displayString: 'Silhouette'
        },
        {
            searchString: 'Steve Cambridge',
            displayString: 'Steve Cambridge'
        },
        {
            searchString: 'Sunny Lebeau',
            displayString: 'Sunny Lebeau'
        },
        {
            searchString: 'The Masque',
            displayString: 'The Masque'
        },
        {
            searchString: 'The Professor',
            displayString: 'The Professor'
        },
        {
            searchString: 'Valencia Estevez',
            displayString: 'Valencia Estevez'
        },
        {
            searchString: 'Whizzard',
            displayString: 'Whizzard'
        },
        {
            searchString: 'Wyvern (Anarch)',
            displayString: 'Wyvern (Anarch)'
        }
    ];

    const countries = ["Abkhazia", "Afghanistan", "Aland Islands", "Albania", "Algeria", "American Samoa", "andorra", "Angola", "Anguilla", "Antigua And Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Azores Islands", "Bahamas", "Bahrain", "Balearic Islands", "Bangladesh", "Barbados", "Basque Country", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bonaire", "Bosnia And Herzegovina", "Botswana", "Brazil", "British Columbia", "British Indian Ocean Territory", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Canary Islands", "Cape Verde", "Cayman Islands", "Central African Republic", "Ceuta", "Chad", "Chile", "China", "Christmas Island", "Cocos Island", "Colombia", "Comoros", "Cook Islands", "Corsica", "Costa Rica", "Croatia", "Cuba", "Curacao", "Cyprus", "Czech Republic", "Democratic Republic Of Congo", "Denmark", "Djibouti", "Dominican Republic", "Dominica", "East Timor", "Ecuador", "Egypt", "El Salvador", "England", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "European Union", "Falkland Islands", "Faroe Islands", "Fiji", "Files.txt", "Finland", "flagnames.py", "flags.json", "France", "French Polynesia", "Gabon", "Galapagos Islands", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea Bissau", "Guinea", "Haiti", "Hawaii", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle Of Man", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jersey", "Jordan", "jsonformatter.txt", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Madagascar", "Madeira", "Malasya", "Malawi", "Maldives", "Mali", "Malta", "Marshall Island", "Martinique", "Mauritania", "Mauritius", "Melilla", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nato", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Nigeria", "Niger", "Niue", "Norfolk Island", "Northern Cyprus", "Northern Marianas Islands", "North Korea", "Norway", "Oman", "Ossetia", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn Islands", "Poland", "Portugal", "Puerto Rico", "Rapa Nui", "Republic Of Macedonia", "Republic Of The Congo", "Romania", "Russia", "Rwanda", "Saba Island", "Sahrawi Arab Democratic Republic", "Saint Kitts And Nevis", "Samoa", "San Marino", "Sao Tome And Prince", "Sardinia", "Saudi Arabia", "Scotland", "Senegal", "Serbia", "Seychelles", "Sicily", "Sierra Leone", "Singapore", "Sint Eustatius", "Sint Maarten", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "Somaliland", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "St Barts", "St Lucia", "St Vincent And The Grenadines", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Tibet", "Togo", "Tokelau", "Tonga", "Transnistria", "Trinidad And Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks And Caicos", "Tuvalu 1", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United Nations", "United States", "Uruguay", "Uzbekistn", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Virgin Islands", "Wales", "Yemen", "Zambia", "Zimbabwe"]

    function searchCorps(query, cb) {
        var matches = corps.filter(corp => corp.searchString.match(new RegExp(query, "i")));
        cb(matches);
    }

    function searchRunners(query, cb) {
        var matches = runners.filter(runner => runner.searchString.match(new RegExp(query, "i")));
        cb(matches);
    }

    function searchCountries(query, cb) {
        var matches = countries.filter(country => country.match(new RegExp(query, "i")));
        cb(matches);
    }

    function setLeftPlayerRunning(leftPlayerRunning) {
        const i_leftPlayerRunning = document.getElementById('leftPlayerRunning');
        const b_leftPlayerTakeCorp = document.getElementById('leftPlayerTakeCorp');
        const b_leftPlayerTakeRunner = document.getElementById('leftPlayerTakeRunner');

        i_leftPlayerRunning.value = leftPlayerRunning;

        if (leftPlayerRunning) {
            b_leftPlayerTakeCorp.classList.remove('is-info');
            b_leftPlayerTakeRunner.classList.remove('is-danger');
            b_leftPlayerTakeRunner.classList.add('is-danger');
        } else {
            b_leftPlayerTakeCorp.classList.remove('is-info');
            b_leftPlayerTakeRunner.classList.remove('is-danger');
            b_leftPlayerTakeCorp.classList.add('is-info');
        }
    }

    function setTeamsEnabled(teamsEnabled) {
        const i_teamsEnabled = document.getElementById('teamsEnabled');
        const leftTeamNameContainer = document.getElementById('leftTeamNameContainer');
        const rightTeamNameContainer = document.getElementById('rightTeamNameContainer');
        const b_teams = document.getElementById('toggleTeams');

        i_teamsEnabled.value = teamsEnabled;

        if (teamsEnabled) {
            b_teams.classList.add('is-link');
            leftTeamNameContainer.style.display = 'block';
            rightTeamNameContainer.style.display = 'block';
        } else {
            b_teams.classList.remove('is-link');
            leftTeamNameContainer.style.display = 'none';
            rightTeamNameContainer.style.display = 'none';
        }
    }

    function toggleTeamsEnabled() {
        const i_teamsEnabled = document.getElementById('teamsEnabled');

        if (i_teamsEnabled.value === '1' || i_teamsEnabled.value === 'true') {
            setTeamsEnabled(0);
        } else {
            setTeamsEnabled(1);
        }
    }

    function resetScores() {
        const i_leftPlayerScore = document.getElementById('leftPlayerScore');
        const i_rightPlayerScore = document.getElementById('rightPlayerScore');

        i_leftPlayerScore.value = 0;
        i_rightPlayerScore.value = 0;
    }

    function toggleLeftPlayerRunning() {
        const i_leftPlayerRunning = document.getElementById('leftPlayerRunning');

        if (i_leftPlayerRunning.value === '1') {
            setLeftPlayerRunning(0);
        } else {
            setLeftPlayerRunning(1);
        }
    }

    function switchSides() {
        resetScores();
        toggleLeftPlayerRunning();
    }

    function setEndTime(newTime) {
        if (!newTime || newTime === "" || !newTime.isValid()) {
            document.getElementById('endHour').value = "";
            document.getElementById('endMinute').value = "";
            document.getElementById('endSecond').value = "";
        } else {
            document.getElementById('endHour').value = newTime.hour();
            document.getElementById('endMinute').value = newTime.minute();
            document.getElementById('endSecond').value = newTime.second();
        }
    }

    function getEndTime() {
        var endHour = parseInt(document.getElementById('endHour').value);
        if (isNaN(endHour)) {
            return false;
        }
        var endMinute = parseInt(document.getElementById('endMinute').value);
        if (isNaN(endMinute)) {
            return false;
        }
        var endSecond = parseInt(document.getElementById('endSecond').value);
        if (isNaN(endSecond)) {
            return false;
        }

        var now = moment();
        if (endHour < now.hour()) {
            now.add(1, 'days');
        }

        return now.hour(endHour).minute(endMinute).second(endSecond);
    }

    function addMin(minutes) {
        var now = moment();
        now.add(minutes, 'minutes');
        setEndTime(now);
    }

    const b_update = document.getElementById('update');
    const b_switchSides = document.getElementById('switchSides');
    const b_swapPlayerPositions = document.getElementById('swapPlayerPositions');
    const b_resetScores = document.getElementById('resetScores');
    const b_undoChanges = document.getElementById('undoChanges');

    const i_leftPlayerCountry = document.getElementById('leftPlayerCountry');
    const i_leftPlayerName = document.getElementById('leftPlayerName');
    const i_leftTeamName = document.getElementById('leftTeamName');
    const i_leftPlayerRunner = document.getElementById('leftPlayerRunner');
    const i_leftPlayerCorp = document.getElementById('leftPlayerCorp');
    const i_leftPlayerScore = document.getElementById('leftPlayerScore');

    const i_rightPlayerCountry = document.getElementById('rightPlayerCountry');
    const i_rightPlayerName = document.getElementById('rightPlayerName');
    const i_rightTeamName = document.getElementById('rightTeamName');
    const i_rightPlayerRunner = document.getElementById('rightPlayerRunner');
    const i_rightPlayerCorp = document.getElementById('rightPlayerCorp');
    const i_rightPlayerScore = document.getElementById('rightPlayerScore');

    const i_roundTitle = document.getElementById('roundTitle');

    const i_leftPlayerRunning = document.getElementById('leftPlayerRunning');
    const b_leftPlayerTakeCorp = document.getElementById('leftPlayerTakeCorp');
    const b_leftPlayerTakeRunner = document.getElementById('leftPlayerTakeRunner');

    const i_teamsEnabled = document.getElementById('teamsEnabled');
    const b_toggleTeams = document.getElementById('toggleTeams');

    const b_leftScoreMinus = document.getElementById('leftScoreMinus');
    const b_leftScorePlus = document.getElementById('leftScorePlus');
    const b_rightScoreMinus = document.getElementById('rightScoreMinus');
    const b_rightScorePlus = document.getElementById('rightScorePlus');

    const b_add65Min = document.getElementById('add65Min');
    const b_add40Min = document.getElementById('add40Min');
    const b_add60Min = document.getElementById('add60Min');
    const b_clearTime = document.getElementById('clearTime');

    nodecg.readReplicant('scoreboard', scoreboard => {
        i_leftPlayerCountry.value = scoreboard.leftPlayer.country;
        i_leftPlayerName.value = scoreboard.leftPlayer.name;
        i_leftTeamName.value = scoreboard.leftPlayer.team;
        i_leftPlayerRunner.value = scoreboard.leftPlayer.runner;
        i_leftPlayerCorp.value = scoreboard.leftPlayer.corp;
        i_leftPlayerScore.value = scoreboard.leftPlayer.score;
        i_rightPlayerCountry.value = scoreboard.rightPlayer.country;
        i_rightPlayerName.value = scoreboard.rightPlayer.name;
        i_rightTeamName.value = scoreboard.rightPlayer.team;
        i_rightPlayerRunner.value = scoreboard.rightPlayer.runner;
        i_rightPlayerCorp.value = scoreboard.rightPlayer.corp;
        i_rightPlayerScore.value = scoreboard.rightPlayer.score;

        setEndTime(moment(scoreboard.round.endTime));

        i_roundTitle.value = scoreboard.round.title;

        setLeftPlayerRunning(scoreboard.leftPlayerRunning);
        setTeamsEnabled(scoreboard.teamsEnabled);
    });

    b_update.addEventListener('click', () => {
        nodecg.readReplicant('scoreboard', scoreboard => {
            scoreboard.leftPlayer.country = i_leftPlayerCountry.value;
            scoreboard.leftPlayer.name = i_leftPlayerName.value;
            scoreboard.leftPlayer.team = i_leftTeamName.value;
            scoreboard.leftPlayer.runner = i_leftPlayerRunner.value;
            scoreboard.leftPlayer.corp = i_leftPlayerCorp.value;
            scoreboard.leftPlayer.score = i_leftPlayerScore.value;
            scoreboard.rightPlayer.country = i_rightPlayerCountry.value;
            scoreboard.rightPlayer.name = i_rightPlayerName.value;
            scoreboard.rightPlayer.team = i_rightTeamName.value;
            scoreboard.rightPlayer.runner = i_rightPlayerRunner.value;
            scoreboard.rightPlayer.corp = i_rightPlayerCorp.value;
            scoreboard.rightPlayer.score = i_rightPlayerScore.value;

            scoreboard.round.title = i_roundTitle.value;

            scoreboard.leftPlayerRunning = i_leftPlayerRunning.value === "1";
            scoreboard.teamsEnabled = i_teamsEnabled.value === "1";

            const endTime = getEndTime();
            if (endTime) {
                scoreboard.round.endTime = endTime.format()
            } else {
                scoreboard.round.endTime = null;
            }

            nodecg.Replicant('scoreboard').value = scoreboard;
        });
    });

    b_switchSides.addEventListener('click', () => {
        switchSides();
    });

    b_swapPlayerPositions.addEventListener('click', () => {
        var tempLeftCountry = i_leftPlayerCountry.value;
        var tempLeftName = i_leftPlayerName.value;
        var tempLeftTeam = i_leftTeamName.value;
        var tempLeftRunner = i_leftPlayerRunner.value;
        var tempLeftCorp = i_leftPlayerCorp.value;
        var tempLeftScore = i_leftPlayerScore.value;

        i_leftPlayerCountry.value = i_rightPlayerCountry.value;
        i_leftPlayerName.value = i_rightPlayerName.value;
        i_leftTeamName.value = i_rightTeamName.value;
        i_leftPlayerRunner.value = i_rightPlayerRunner.value;
        i_leftPlayerCorp.value = i_rightPlayerCorp.value;
        i_leftPlayerScore.value = i_rightPlayerScore.value;

        i_rightPlayerCountry.value = tempLeftCountry;
        i_rightPlayerName.value = tempLeftName;
        i_rightTeamName.value = tempLeftTeam;
        i_rightPlayerRunner.value = tempLeftRunner;
        i_rightPlayerCorp.value = tempLeftCorp;
        i_rightPlayerScore.value = tempLeftScore;

        toggleLeftPlayerRunning();
    });

    b_toggleTeams.addEventListener('click', () => {
        toggleTeamsEnabled();
    });

    b_resetScores.addEventListener('click', () => {
        resetScores();
    });

    b_undoChanges.addEventListener('click', () => {
        nodecg.readReplicant('scoreboard', scoreboard => {
            i_leftPlayerCountry.value = scoreboard.leftPlayer.country;
            i_leftPlayerName.value = scoreboard.leftPlayer.name;
            i_leftTeamName.value = scoreboard.leftPlayer.team;
            i_leftPlayerRunner.value = scoreboard.leftPlayer.runner;
            i_leftPlayerCorp.value = scoreboard.leftPlayer.corp;
            i_leftPlayerScore.value = scoreboard.leftPlayer.score;
            i_rightPlayerCountry.value = scoreboard.rightPlayer.country;
            i_rightPlayerName.value = scoreboard.rightPlayer.name;
            i_rightTeamName.value = scoreboard.rightPlayer.team;
            i_rightPlayerName.value = scoreboard.rightPlayer.name;
            i_rightPlayerRunner.value = scoreboard.rightPlayer.runner;
            i_rightPlayerCorp.value = scoreboard.rightPlayer.corp;
            i_rightPlayerScore.value = scoreboard.rightPlayer.score;

            i_roundTitle.value = scoreboard.round.title;

            if (!scoreboard.leftPlayerRunning || scoreboard.leftPlayerRunning === "0") {
                setLeftPlayerRunning(0);
            } else {
                setLeftPlayerRunning(1);
            }

            setEndTime(moment(scoreboard.round.endTime));

            nodecg.Replicant('scoreboard').value = scoreboard;
        });
    });

    b_leftScoreMinus.addEventListener('click', () => {
        i_leftPlayerScore.value = parseInt(i_leftPlayerScore.value) - 1;
    });

    b_leftScorePlus.addEventListener('click', () => {
        i_leftPlayerScore.value = parseInt(i_leftPlayerScore.value) + 1;
    });

    b_rightScoreMinus.addEventListener('click', () => {
        i_rightPlayerScore.value = parseInt(i_rightPlayerScore.value) - 1;
    });

    b_rightScorePlus.addEventListener('click', () => {
        i_rightPlayerScore.value = parseInt(i_rightPlayerScore.value) + 1;
    });

    b_leftPlayerTakeCorp.addEventListener('click', () => {
        setLeftPlayerRunning(0);
    });

    b_leftPlayerTakeRunner.addEventListener('click', () => {
        setLeftPlayerRunning(1);
    });

    b_add65Min.addEventListener('click', () => {
        addMin(65);
    });

    b_add40Min.addEventListener('click', () => {
        addMin(40);
    });

    b_add60Min.addEventListener('click', () => {
        addMin(60);
    });

    b_clearTime.addEventListener('click', () => {
        setEndTime("");
    });

    autocomplete('#leftPlayerCountry', { hint: false, autoselect: true, appendTo: '#leftPlayerCountryAutocomplete' }, [
        {
            source: searchCountries,
            displayKey: function(match) { return match; }
        }
    ]);

    autocomplete('#rightPlayerCountry', { hint: false, autoselect: true, appendTo: '#rightPlayerCountryAutocomplete' }, [
        {
            source: searchCountries,
            displayKey: function(match) { return match; }
        }
    ]);

    autocomplete('#leftPlayerRunner', { hint: false, autoselect: true, appendTo: '#leftPlayerRunnerAutocomplete' }, [
        {
            source: searchRunners,
            displayKey: 'displayString'
        }
    ]);

    autocomplete('#rightPlayerRunner', { hint: false, autoselect: true, appendTo: '#rightPlayerRunnerAutocomplete' }, [
        {
            source: searchRunners,
            displayKey: 'displayString'
        }
    ]);

    autocomplete('#leftPlayerCorp', { hint: false, autoselect: true, appendTo: '#leftPlayerCorpAutocomplete' }, [
        {
            source: searchCorps,
            displayKey: 'displayString'
        }
    ]);

    autocomplete('#rightPlayerCorp', { hint: false, autoselect: true, appendTo: '#rightPlayerCorpAutocomplete' }, [
        {
            source: searchCorps,
            displayKey: 'displayString'
        }
    ]);

})();