const horoscopeArray = ["Capricorn","Aries","Taurus","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Aquarius","Pisces"];
const cityNames = ["Amman","London","Dubai","Abu Dhabi", "Khartoum", "Muscat", "Paris"];
const movieNames = ["Nemo","The Museum", "Avengers", "Spiderman"];
const arrayBatch = [cityNames, movieNames, horoscopeArray];
const arrayNumbers = [];
let randomAge = Math.floor(Math.random()*100);
let temporaryArray = [];
let finalArray = [];

const randomNumberGenerator = () => { 
    for (i=0;i<3;i++){
    arrayNumbers.push(Math.floor(Math.random()*arrayBatch[i].length)) 
    }};

const arrayCreator = () => {
    temporaryArray.push(`At age ${randomAge}, you will travel to ${cityNames[arrayNumbers[0]]}, and watch ${movieNames[arrayNumbers[1]]}`);
    temporaryArray.push(`Your kid's horoscope will be ${horoscopeArray[arrayNumbers[0]]}`)
};

randomNumberGenerator();
arrayCreator();

console.log(temporaryArray);
