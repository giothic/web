async function fetchCarData() {
    try {
        const response = await fetch('/database/dados.json');
        const carsData = await response();

        return carsData;
    } catch (error) {
        console.error('Erro ao carregfar os dados dos carros em:  ', error);

        return [];
    }
}

function renderCards() {
    const cardContainer = document.getElementById('car-cards');

    //limpar o card que eventualmente esteja carregado antes
    cardContainer.innerHTML = '';

    const filteredCars = brand === 'todos' ? carsData : carsData.filter(car => car.brand === brand);

    filteredCars.forEach(car => {
        const card = `                <div class="card bg-dark text-white">
        <img src="${car.image}" class="card-img" alt="...">
        <div class="card-img-overlay">
            <h5 class="card-title">${car.name}</h5>
            <p class="card-text">${car.price}</p>
            <p class="card-text">${car.brand}</p>
            <p class="card-text">${car.km}</p>
            <p class="card-text">${car.year}</p>
            <p class="card-text">Last updated 3 mins ago</p>
        </div>
`;

        cardContainer.innerHTML += card;
    });
}

document.querySelectorAll('dropdown-item').forEach(link => {
    link.addEventListener('click', async (e) => {
        e.preventDefault()
        const brand = e.target.getAttribute('data-brand');
        const carsData = await fetchCarData()
        renderCards(carsData, brand);
    });

    //render inicial

    fetchCarData().then(carsData => renderCards(carsData, 'todos'));
})