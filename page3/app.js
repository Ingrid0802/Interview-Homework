const teams = [
  {
    name: 'Copa Libertados-Grupe',
    data: '15.05.22',
    flag: 'resources/Flag_of_Europe.svg.webp',
    name2: 'Gimnasia y Esgrima La Plata',
    score: '60-15',
    name3: 'Gimnasia y Esgrima La Plata',
  },
  {
    name: 'Copa Libertados-Grupe',
    data: '15.05.22',
    flag: 'resources/Flag_of_Europe.svg.webp',
    name2: 'Gimnasia y Esgrima La Plata',
    score: '60-15',
    name3: 'Gimnasia y Esgrima La Plata',
  },
  {
    name: 'Copa Libertados-Grupe',
    data: '15.05.22',
    flag: 'resources/Flag_of_Europe.svg.webp',
    name2: 'Gimnasia y Esgrima La Plata',
    score: '60-15',
    name3: 'Gimnasia y Esgrima La Plata',
  },
  {
    name: 'Copa Libertados-Grupe',
    data: '15.05.22',
    flag: 'resources/Flag_of_Europe.svg.webp',
    name2: 'Gimnasia y Esgrima La Plata',
    score: '60-15',
    name3: 'Gimnasia y Esgrima La Plata',
  },
  {
    name: 'Copa Libertados-Grupe',
    data: '15.05.22',
    flag: 'resources/Flag_of_Europe.svg.webp',
    name2: 'Gimnasia y Esgrima La Plata',
    score: '60-15',
    name3: 'Gimnasia y Esgrima La Plata',
  },
  {
    name: 'Copa 6',
    data: '15.05.22',
    flag: 'resources/Flag_of_Europe.svg.webp',
    name2: 'Gimnasia y Esgrima La Plata',
    score: '60-15',
    name3: 'Gimnasia y Esgrima La Plata',
  },
  {
    name: 'Copa 7',
    data: '15.05.22',
    flag: 'resources/Flag_of_Europe.svg.webp',
    name2: 'Gimnasia y Esgrima La Plata',
    score: '60-15',
    name3: 'Gimnasia y Esgrima La Plata',
  },
  {
    name: 'Copa 8',
    data: '15.05.22',
    flag: 'resources/Flag_of_Europe.svg.webp',
    name2: 'Gimnasia y Esgrima La Plata',
    score: '60-15',
    name3: 'Gimnasia y Esgrima La Plata',
  },
  {
    name: 'Copa 9',
    data: '15.05.22',
    flag: 'resources/Flag_of_Europe.svg.webp',
    name2: 'Gimnasia y Esgrima La Plata',
    score: '60-15',
    name3: 'Gimnasia y Esgrima La Plata',
  },
  {
    name: 'Copa 10',
    data: '15.05.22',
    flag: 'resources/Flag_of_Europe.svg.webp',
    name2: 'Gimnasia y Esgrima La Plata',
    score: '60-15',
    name3: 'Gimnasia y Esgrima La Plata',
  },
  {
    name: 'Copa 11',
    data: '15.05.22',
    flag: 'resources/Flag_of_Europe.svg.webp',
    name2: 'Gimnasia y Esgrima La Plata',
    score: '60-15',
    name3: 'Gimnasia y Esgrima La Plata',
  },
];

const array = teams.slice(0, 5);
const teamTable = document.querySelector('.table-body');
const showMore = document.querySelector('.table-container');
const btnShowMore = document.querySelector('.btn-more');
const firstCategory = [
  ...document.querySelectorAll('input[name="second-submenu"]'),
];

btnShowMore.addEventListener('click', () => {
  if (teams.length > 5) {
    displayTeams(teams);
  }
});

firstCategory.forEach((element) => {
  element.addEventListener('click', () => {
    if (isButtonChecked('second-submenu', 'all')) {
      showMore.classList.remove('hidden');
      displayTeams(array);
    } else {
      showMore.classList.add('hidden');
      teamTable.innerHTML = '';
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
    <tr>
    <td class="size">
      <div class="table-first-sect">
        <p>${item.name}</p>
        <div class="table-first-subsect">
          <img
            src="${item.flag}"
            alt="eu-flag"
            class="eu-flag"
          />
          <p>${item.data}</p>
        </div>
      </div>
    </td>
    <td class="score size">
      <span>${item.name2}</span>
    </td>
    <td class="score size min-dim">${item.score}</td>
    <td class="score">
      <span>${item.name3}</span>
    </td>
  </tr>`;
  });
  displayTeam = displayTeam.join('');

  teamTable.innerHTML = displayTeam;
};
