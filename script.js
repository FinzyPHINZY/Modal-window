'use strict';

const btnOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
// const btn = document.querySelector('.btn');
const overlay = document.querySelector('.overlay');

for (let i = 0; i < btnOpenModal.length; i++) {
  const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  };

  btnOpenModal[i].addEventListener('click', openModal);

  const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };

  btnCloseModal.addEventListener('click', closeModal);

  overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', function (x) {
    if (x.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}
