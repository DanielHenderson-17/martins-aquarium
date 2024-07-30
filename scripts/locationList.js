import { database } from './aquariumData.js'

export const locationList = () => {
    return database.locations.map(location => `
        <div class="card">
            <h3>${location.name}</h3>
            <p>${location.country}</p>
            <p>${location.description}</p>
        </div>
    `).join('')
}
