const activities = document.getElementById('activities');

function fetchData(...callbacks) {
  fetch('data.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      callbacks.forEach((callback) => {
        callback(data);
      });
    })
    .catch((error) => {
      console.log(`cant fetch: error is ${error}`);
    });
}

// DAILY REPORT
function dailyReport(dataArray) {
  function work() {
    const workHour = document.getElementById('work-hour');
    const lastWeek = document.querySelector('.wh-last-week');

    if (!workHour || !lastWeek) {
      console.error('onew or more elements not found in the DOM');
      return;
    }

    const workData = dataArray.find((item) => item.title === 'Work');

    if (!workData) {
      console.error('work data not found');

      return;
    }

    workHour.textContent = `${workData.timeframes.daily.current}hrs`;
    lastWeek.textContent = `last Week - ${workData.timeframes.daily.previous}hrs`;
  }

  function play() {
    const playHour = document.getElementById('play-hour');
    const lastWeek = document.querySelector('.ph-last-week');

    if (!playHour || !lastWeek) {
      console.error('onew or more elements not found in the DOM');
      return;
    }

    const playData = dataArray.find((item) => item.title === 'Play');

    if (!playData) {
      console.error('play data not found');

      return;
    }

    playHour.textContent = `${playData.timeframes.daily.current}hrs`;
    lastWeek.textContent = `last Week - ${playData.timeframes.daily.previous} hrs`;
  }

  function study() {
    const studyHour = document.getElementById('study-hour');
    const lastWeek = document.querySelector('.sh-last-week');

    if (!studyHour || !lastWeek) {
      console.error('one or more elements not found in the DOM');
      return;
    }

    const studyData = dataArray.find((item) => item.title === 'Study');

    if (!studyData) {
      console.error('play data not found');

      return;
    }

    studyHour.textContent = `${studyData.timeframes.daily.current}hrs`;
    lastWeek.textContent = `last Week - ${studyData.timeframes.daily.previous} hrs`;
  }

  function exercise() {
    const exerciseHour = document.getElementById('exercise-hour');
    const lastWeek = document.querySelector('.eh-last-week');

    if (!exerciseHour || !lastWeek) {
      console.error('one or more elements not found in the DOM');
      return;
    }

    const exerciseData = dataArray.find((item) => item.title === 'Exercise');

    if (!exerciseData) {
      console.error('play data not found');

      return;
    }

    exerciseHour.textContent = `${exerciseData.timeframes.daily.current}hrs`;
    lastWeek.textContent = `last Week - ${exerciseData.timeframes.daily.previous} hrs`;
  }

  function social() {
    const socialHour = document.getElementById('social-hour');
    const lastWeek = document.querySelector('.smh-last-week');

    if (!socialHour || !lastWeek) {
      console.error('one or more elements not found in the DOM');
      return;
    }

    const socialData = dataArray.find((item) => item.title === 'Social');

    if (!socialData) {
      console.error('play data not found');

      return;
    }

    socialHour.textContent = `${socialData.timeframes.daily.current}hrs`;
    lastWeek.textContent = `last Week - ${socialData.timeframes.daily.previous} hrs`;
  }

  function selfCare() {
    const selfCareHour = document.getElementById('self-care-hour');
    const lastWeek = document.querySelector('.sch-last-week');

    if (!selfCareHour || !lastWeek) {
      console.error('one or more elements not found in the DOM');
      return;
    }

    const selfCareData = dataArray.find((item) => item.title === 'Self Care');

    if (!selfCareData) {
      console.error('play data not found');

      return;
    }

    selfCareHour.textContent = `${selfCareData.timeframes.daily.current}hrs`;
    lastWeek.textContent = `last Week - ${selfCareData.timeframes.daily.previous} hrs`;
  }

  work();
  play();
  study();
  exercise();
  social();
  selfCare();
}

//WEEKLY REPORT

function weeklyReport(dataArray) {
  function work() {
    const workHour = document.getElementById('work-hour');
    const lastWeek = document.querySelector('.wh-last-week');

    if (!workHour || !lastWeek) {
      console.error('onew or more elements not found in the DOM');
      return;
    }

    const workData = dataArray.find((item) => item.title === 'Work');

    if (!workData) {
      console.error('work data not found');

      return;
    }

    workHour.textContent = `${workData.timeframes.weekly.current}hrs`;
    lastWeek.textContent = `last Week - ${workData.timeframes.weekly.previous}hrs`;
  }

  function play() {
    const playHour = document.getElementById('play-hour');
    const lastWeek = document.querySelector('.ph-last-week');

    if (!playHour || !lastWeek) {
      console.error('onew or more elements not found in the DOM');
      return;
    }

    const playData = dataArray.find((item) => item.title === 'Play');

    if (!playData) {
      console.error('play data not found');

      return;
    }

    playHour.textContent = `${playData.timeframes.weekly.current}hrs`;
    lastWeek.textContent = `last Week - ${playData.timeframes.weekly.previous} hrs`;
  }

  function study() {
    const studyHour = document.getElementById('study-hour');
    const lastWeek = document.querySelector('.sh-last-week');

    if (!studyHour || !lastWeek) {
      console.error('one or more elements not found in the DOM');
      return;
    }

    const studyData = dataArray.find((item) => item.title === 'Study');

    if (!studyData) {
      console.error('play data not found');

      return;
    }

    studyHour.textContent = `${studyData.timeframes.weekly.current}hrs`;
    lastWeek.textContent = `last Week - ${studyData.timeframes.weekly.previous} hrs`;
  }

  function exercise() {
    const exerciseHour = document.getElementById('exercise-hour');
    const lastWeek = document.querySelector('.eh-last-week');

    if (!exerciseHour || !lastWeek) {
      console.error('one or more elements not found in the DOM');
      return;
    }

    const exerciseData = dataArray.find((item) => item.title === 'Exercise');

    if (!exerciseData) {
      console.error('play data not found');

      return;
    }

    exerciseHour.textContent = `${exerciseData.timeframes.weekly.current}hrs`;
    lastWeek.textContent = `last Week - ${exerciseData.timeframes.weekly.previous} hrs`;
  }

  function social() {
    const socialHour = document.getElementById('social-hour');
    const lastWeek = document.querySelector('.smh-last-week');

    if (!socialHour || !lastWeek) {
      console.error('one or more elements not found in the DOM');
      return;
    }

    const socialData = dataArray.find((item) => item.title === 'Social');

    if (!socialData) {
      console.error('play data not found');

      return;
    }

    socialHour.textContent = `${socialData.timeframes.weekly.current}hrs`;
    lastWeek.textContent = `last Week - ${socialData.timeframes.weekly.previous} hrs`;
  }

  function selfCare() {
    const selfCareHour = document.getElementById('self-care-hour');
    const lastWeek = document.querySelector('.sch-last-week');

    if (!selfCareHour || !lastWeek) {
      console.error('one or more elements not found in the DOM');
      return;
    }

    const selfCareData = dataArray.find((item) => item.title === 'Self Care');

    if (!selfCareData) {
      console.error('play data not found');

      return;
    }

    selfCareHour.textContent = `${selfCareData.timeframes.weekly.current}hrs`;
    lastWeek.textContent = `last Week - ${selfCareData.timeframes.weekly.previous} hrs`;
  }

  work();
  play();
  study();
  exercise();
  social();
  selfCare();
}

//MONTHLY REPORT

function monthlyReport(dataArray) {
  function work() {
    const workHour = document.getElementById('work-hour');
    const lastWeek = document.querySelector('.wh-last-week');

    if (!workHour || !lastWeek) {
      console.error('onew or more elements not found in the DOM');
      return;
    }

    const workData = dataArray.find((item) => item.title === 'Work');

    if (!workData) {
      console.error('work data not found');

      return;
    }

    workHour.textContent = `${workData.timeframes.monthly.current}hrs`;
    lastWeek.textContent = `last Week - ${workData.timeframes.monthly.previous}hrs`;
  }

  function play() {
    const playHour = document.getElementById('play-hour');
    const lastWeek = document.querySelector('.ph-last-week');

    if (!playHour || !lastWeek) {
      console.error('onew or more elements not found in the DOM');
      return;
    }

    const playData = dataArray.find((item) => item.title === 'Play');

    if (!playData) {
      console.error('play data not found');

      return;
    }

    playHour.textContent = `${playData.timeframes.monthly.current}hrs`;
    lastWeek.textContent = `last Week - ${playData.timeframes.monthly.previous} hrs`;
  }

  function study() {
    const studyHour = document.getElementById('study-hour');
    const lastWeek = document.querySelector('.sh-last-week');

    if (!studyHour || !lastWeek) {
      console.error('one or more elements not found in the DOM');
      return;
    }

    const studyData = dataArray.find((item) => item.title === 'Study');

    if (!studyData) {
      console.error('play data not found');

      return;
    }

    studyHour.textContent = `${studyData.timeframes.monthly.current}hrs`;
    lastWeek.textContent = `last Week - ${studyData.timeframes.monthly.previous} hrs`;
  }

  function exercise() {
    const exerciseHour = document.getElementById('exercise-hour');
    const lastWeek = document.querySelector('.eh-last-week');

    if (!exerciseHour || !lastWeek) {
      console.error('one or more elements not found in the DOM');
      return;
    }

    const exerciseData = dataArray.find((item) => item.title === 'Exercise');

    if (!exerciseData) {
      console.error('play data not found');

      return;
    }

    exerciseHour.textContent = `${exerciseData.timeframes.monthly.current}hrs`;
    lastWeek.textContent = `last Week - ${exerciseData.timeframes.monthly.previous} hrs`;
  }

  function social() {
    const socialHour = document.getElementById('social-hour');
    const lastWeek = document.querySelector('.smh-last-week');

    if (!socialHour || !lastWeek) {
      console.error('one or more elements not found in the DOM');
      return;
    }

    const socialData = dataArray.find((item) => item.title === 'Social');

    if (!socialData) {
      console.error('play data not found');

      return;
    }

    socialHour.textContent = `${socialData.timeframes.monthly.current}hrs`;
    lastWeek.textContent = `last Week - ${socialData.timeframes.monthly.previous} hrs`;
  }

  function selfCare() {
    const selfCareHour = document.getElementById('self-care-hour');
    const lastWeek = document.querySelector('.sch-last-week');

    if (!selfCareHour || !lastWeek) {
      console.error('one or more elements not found in the DOM');
      return;
    }

    const selfCareData = dataArray.find((item) => item.title === 'Self Care');

    if (!selfCareData) {
      console.error('play data not found');

      return;
    }

    selfCareHour.textContent = `${selfCareData.timeframes.monthly.current}hrs`;
    lastWeek.textContent = `last Week - ${selfCareData.timeframes.monthly.previous} hrs`;
  }

  work();
  play();
  study();
  exercise();
  social();
  selfCare();
}

fetchData(dailyReport, weeklyReport, monthlyReport);

// document.querySelector('.daily').addEventListener('click', dailyReport);
// document.querySelector('.weekly').addEventListener('click', weeklyReport);
// document.querySelector('.monthly').addEventListener('click', monthlyReport);
