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
			searchString: "Seidr Laboratories",
			displayString: "Seidr Laboratories"
		},
		{
			searchString: "Skorpios Defense Systems",
			displayString: "Skorpios Defense Systems"
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

	function searchCorps(query, cb) {
		var matches = corps.filter(corp => corp.searchString.match(new RegExp(query, "i")));
		cb(matches);
	}

	function searchRunners(query, cb) {
		var matches = runners.filter(runner => runner.searchString.match(new RegExp(query, "i")));
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

	function resetScores() {
		const i_leftPlayerScore = document.getElementById('leftPlayerScore');
		const i_rightPlayerScore = document.getElementById('rightPlayerScore');

		i_leftPlayerScore.value = 0;
		i_rightPlayerScore.value = 0;
	}

	function switchSides() {
		resetScores();

		const i_leftPlayerRunning = document.getElementById('leftPlayerRunning');

		if (i_leftPlayerRunning.value === '1') {
			setLeftPlayerRunning(0);
		} else {
			setLeftPlayerRunning(1);
		}
	}

	function setEndTime(newTime) {
		if (!newTime || newTime === "") {
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

	function add65Min() {
		var now = moment();
		now.add(65, 'minutes');
		setEndTime(now);
	}

	const b_update = document.getElementById('update');
	const b_switchSides = document.getElementById('switchSides');
	const b_resetScores = document.getElementById('resetScores');
	const b_undoChanges = document.getElementById('undoChanges');

	const i_leftPlayerName = document.getElementById('leftPlayerName');
	const i_leftPlayerRunner = document.getElementById('leftPlayerRunner');
	const i_leftPlayerCorp = document.getElementById('leftPlayerCorp');
	const i_leftPlayerScore = document.getElementById('leftPlayerScore');
	const i_rightPlayerName = document.getElementById('rightPlayerName');
	const i_rightPlayerRunner = document.getElementById('rightPlayerRunner');
	const i_rightPlayerCorp = document.getElementById('rightPlayerCorp');
	const i_rightPlayerScore = document.getElementById('rightPlayerScore');

	const i_roundTitle = document.getElementById('roundTitle');

	const i_leftPlayerRunning = document.getElementById('leftPlayerRunning');
	const b_leftPlayerTakeCorp = document.getElementById('leftPlayerTakeCorp');
	const b_leftPlayerTakeRunner = document.getElementById('leftPlayerTakeRunner');

	const b_leftScoreMinus = document.getElementById('leftScoreMinus');
	const b_leftScorePlus = document.getElementById('leftScorePlus');
	const b_rightScoreMinus = document.getElementById('rightScoreMinus');
	const b_rightScorePlus = document.getElementById('rightScorePlus');

	const i_endHour = document.getElementById('endHour');
	const i_endMinute = document.getElementById('endMinute');
	const i_endSecond = document.getElementById('endSecond');
	const b_add65Min = document.getElementById('add65Min');
	const b_clearTime = document.getElementById('clearTime');

	nodecg.readReplicant('scoreboard', scoreboard => {
		i_leftPlayerName.value = scoreboard.leftPlayer.name;
		i_leftPlayerRunner.value = scoreboard.leftPlayer.runner;
		i_leftPlayerCorp.value = scoreboard.leftPlayer.corp;
		i_leftPlayerScore.value = scoreboard.leftPlayer.score;
		i_rightPlayerName.value = scoreboard.rightPlayer.name;
		i_rightPlayerRunner.value = scoreboard.rightPlayer.runner;
		i_rightPlayerCorp.value = scoreboard.rightPlayer.corp;
		i_rightPlayerScore.value = scoreboard.rightPlayer.score;

		setEndTime(moment(scoreboard.round.endTime));

		i_roundTitle.value = scoreboard.round.title;

		setLeftPlayerRunning(scoreboard.leftPlayerRunning);
	});

	b_update.addEventListener('click', () => {
		nodecg.readReplicant('scoreboard', scoreboard => {
			scoreboard.leftPlayer.name = i_leftPlayerName.value;
			scoreboard.leftPlayer.runner = i_leftPlayerRunner.value;
			scoreboard.leftPlayer.corp = i_leftPlayerCorp.value;
			scoreboard.leftPlayer.score = i_leftPlayerScore.value;
			scoreboard.rightPlayer.name = i_rightPlayerName.value;
			scoreboard.rightPlayer.runner = i_rightPlayerRunner.value;
			scoreboard.rightPlayer.corp = i_rightPlayerCorp.value;
			scoreboard.rightPlayer.score = i_rightPlayerScore.value;

			scoreboard.round.title = i_roundTitle.value;

			scoreboard.leftPlayerRunning = i_leftPlayerRunning.value === "1";

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

	b_resetScores.addEventListener('click', () => {
		resetScores();
	});

	b_undoChanges.addEventListener('click', () => {
		nodecg.readReplicant('scoreboard', scoreboard => {
			i_leftPlayerName.value = scoreboard.leftPlayer.name;
			i_leftPlayerRunner.value = scoreboard.leftPlayer.runner;
			i_leftPlayerCorp.value = scoreboard.leftPlayer.corp;
			i_leftPlayerScore.value = scoreboard.leftPlayer.score;
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
		add65Min();
	});

	b_clearTime.addEventListener('click', () => {
		setEndTime("");
	});

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