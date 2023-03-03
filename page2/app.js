const modal = document.querySelector('.modal');
const modalBtn = document.querySelector('.btn-submit');
const closeBtn = document.querySelector('.btn');

modalBtn.addEventListener('click', () => {
  modal.classList.add('hide-modal');
});

closeBtn.addEventListener('click', () => {
  modal.classList.add('hide-modal');
});
