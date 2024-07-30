import { database } from './aquariumData.js'

export const fishList = () => {
    return database.fish.map(fish => `
        <div class="card">
            <h3>${fish.name}</h3>
            <img src="${fish.image}" alt="${fish.name}">
            <p>Species: ${fish.species}</p>
            <p>Length: ${fish.length} inches</p>
            <p>Location: ${fish.location}</p>
            <p>Diet: ${fish.diet}</p>
        </div>
    `).join('')
}
