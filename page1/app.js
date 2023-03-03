const teams = [
  {
    id: 1,
    name: 'PSV Eindhoven',
    MP: 36,
    G: 28,
    PTS: 89,
  },
  {
    id: 2,
    name: 'Team2',
    MP: 36,
    G: 28,
    PTS: 89,
  },
  {
    id: 3,
    name: 'Team3',
    MP: 36,
    G: 28,
    PTS: 89,
  },
  {
    id: 4,
    name: 'Team4',
    MP: 36,
    G: 28,
    PTS: 89,
  },
  {
    id: 5,
    name: 'Team5',
    MP: 36,
    G: 28,
    PTS: 89,
  },
  {
    id: 5,
    name: 'Team6',
    MP: 36,
    G: 28,
    PTS: 89,
  },
  {
    id: 6,
    name: 'Team7',
    MP: 36,
    G: 28,
    PTS: 89,
  },
  {
    id: 7,
    name: 'Team8',
    MP: 36,
    G: 28,
    PTS: 89,
  },
  {
    id: 8,
    name: 'Team9',
    MP: 36,
    G: 28,
    PTS: 89,
  },
  {
    id: 9,
    name: 'Team10',
    MP: 36,
    G: 28,
    PTS: 89,
  },
];

const teamTable = document.querySelector('.table-body');
const firstCategory = [
  ...document.querySelectorAll('input[name="first-menu"]'),
];
const secondCategory = [
  ...document.querySelectorAll('input[name="first-submenu"]'),
];
const thirdCategory = [
  ...document.querySelectorAll('input[name="second-submenu"]'),
];

thirdCategory.forEach((element) => {
  element.addEventListener('click', () => {
    if (
      isButtonChecked('first-menu', 'standings') &&
      isButtonChecked('first-submenu', 'overall') &&
      isButtonChecked('second-submenu', 'full time')
    ) {
      displayTeams(teams);
    } else {
      teamTable.innerHTML = '';
    }
  });
});

secondCategory.forEach((element) => {
  element.addEventListener('click', () => {
    if (!isButtonChecked('first-submenu', 'overall')) {
      teamTable.innerHTML = '';
    } else if (
      isButtonChecked('first-menu', 'standings') &&
      isButtonChecked('first-submenu', 'overall') &&
      isButtonChecked('second-submenu', 'full time')
    ) {
      displayTeams(teams);
    }
  });
});

firstCategory.forEach((element) => {
  element.addEventListener('click', () => {
    if (!isButtonChecked('first-menu', 'standings')) {
      teamTable.innerHTML = '';
    } else if (
      isButtonChecked('first-menu', 'standings') &&
      isButtonChecked('first-submenu', 'overall') &&
      isButtonChecked('second-submenu', 'full time')
    ) {
      displayTeams(teams);
    }
  });
});

const isButtonChecked = (category, name) => {
  let val = document.querySelector(`input[name="${category}"]:checked`)?.value;
  if (val === name) {
    return true;
  }
  return false;
};

const displayTeams = (teamsArr) => {
  let displayTeam = teamsArr.map((item) => {
    return `
      <tr class="row">
      <td class="size"><span class="index">${item.id}</span></td>
      <td class="team size">${item.name}</td>
      <td class="score size">${item.MP}</td>
      <td class="score size">${item.G}</td>
      <td class="score size">${item.PTS}</td>
    </tr>`;
  });
  displayTeam = displayTeam.join('');

  teamTable.innerHTML = displayTeam;
};
