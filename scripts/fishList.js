import { database } from './aquariumData.js';

export const mostHolyFish = () => {
    return database.fish
        .filter(fish => fish.length % 3 === 0)
        .map(fish => `
            <div class="card fishCard">
                <h3>${fish.name}</h3>
                <img src="${fish.image}" alt="${fish.name}">
                <p>Species: ${fish.species}</p>
                <p>Length: ${fish.length} inches</p>
                <p>Location: ${fish.location}</p>
                <p>Diet: ${fish.diet}</p>
            </div>
        `).join('');
};

export const soldierFish = () => {
    return database.fish
        .filter(fish => fish.length % 5 === 0 && fish.length % 3 !== 0)
        .map(fish => `
            <div class="card fishCard">
                <h3>${fish.name}</h3>
                <img src="${fish.image}" alt="${fish.name}">
                <p>Species: ${fish.species}</p>
                <p>Length: ${fish.length} inches</p>
                <p>Location: ${fish.location}</p>
                <p>Diet: ${fish.diet}</p>
            </div>
        `).join('');
};

export const regularFish = () => {
    return database.fish
        .filter(fish => fish.length % 3 !== 0 && fish.length % 5 !== 0)
        .map(fish => `
            <div class="card fishCard">
                <h3>${fish.name}</h3>
                <img src="${fish.image}" alt="${fish.name}">
                <p>Species: ${fish.species}</p>
                <p>Length: ${fish.length} inches</p>
                <p>Location: ${fish.location}</p>
                <p>Diet: ${fish.diet}</p>
            </div>
        `).join('');
};
