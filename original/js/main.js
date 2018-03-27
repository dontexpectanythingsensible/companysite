function toggleProjects(e) {
    e.preventDefault();
    document.querySelector('.projects__older').classList.toggle('hidden');
    document.querySelector('#showProjects').classList.add('hidden');
}

function showOtherProjects(e) {
    e.preventDefault();
    document.querySelector('#otherProjects').classList.add('active');
    document.querySelector('.projects__other').classList.remove('hidden');
    document.querySelector('#games').classList.remove('active');
    document.querySelector('.games').classList.add('hidden');
}

function showGames(e) {
    e.preventDefault();
    document.querySelector('#games').classList.add('active');
    document.querySelector('.games').classList.remove('hidden');
    document.querySelector('#otherProjects').classList.remove('active');
    document.querySelector('.projects__other').classList.add('hidden');
}

const toggle = document.querySelector('#showProjects');
toggle.addEventListener('click', toggleProjects);

const projectToggle = document.querySelector('#otherProjects');
projectToggle.addEventListener('click', showOtherProjects);

const gameToggle = document.querySelector('#games');
gameToggle.addEventListener('click', showGames);