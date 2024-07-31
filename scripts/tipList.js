import { database } from './aquariumData.js'

export const tipList = () => {
    let tipsHTML = '<ul class="">'

    for (const tip of database.tips) {
        tipsHTML += `
            <li class="tip">
                <h3>${tip.topic}</h3>
                <p>${tip.text}</p>
            </li>
        `
    }
    tipsHTML += '</ul>'
    return tipsHTML
}
