function createOdessaCity(cityProperties) {
  if (cityProperties.length === 5) {
      const odessaCity = {
          name: cityProperties[0],
          area: cityProperties[1],
          population: cityProperties[2],
          'main street': cityProperties[3],
          "mayor's name": cityProperties[4]
      };
      return odessaCity;
  } else {
      return null; 
  }
}


const cityProperties = ['Одеса', 154.55, 1010848, 'Дерибасівська', 'Геннадій Труханов'];
const odessaCity = createOdessaCity(cityProperties);

if (odessaCity !== null) {
  console.log(odessaCity);
} else {
  console.log("Неправильна кількість властивостей міста Одеса.");
}