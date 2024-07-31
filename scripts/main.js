import { mostHolyFish, soldierFish, regularFish } from './fishList.js';
import { tipList } from './tipList.js';
import { locationList } from './locationList.js';

// Generate the fish lists
const holyFishHTML = mostHolyFish();
const soldierFishHTML = soldierFish();
const regularFishHTML = regularFish();

// Generate the care tips
const tipHTML = tipList();

// Generate the location list
const locationHTML = locationList();

// Render each HTML string to the correct DOM element
document.getElementById('fishList').innerHTML = `${holyFishHTML}${soldierFishHTML}${regularFishHTML}`;
document.getElementById('tipList').innerHTML = tipHTML;
document.getElementById('locationList').innerHTML = locationHTML;
