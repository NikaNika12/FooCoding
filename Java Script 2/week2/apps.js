'use strict';

let bookTitles = ['cleanse_to_heal', 'nutrition_and_physical_degeneration', 'fruit_infused_water', 'building_story_brand', 'starting_business_quickstart_quide', 'on_writing_well', '48_laws_of_power', 'a_promised_land', 'the_palace_papers', 'town_country'];

console.log(bookTitles);


function generateList() {
  let newList = document.createElement('ul');

  for (let i = 0; i < bookTitles.length; i++) {
     newList.innerHTML += `<li>${bookTitles[i]}<li>`;
  }
  return newList;
};

document.body.append(generateList());
let titlesProperties = {
    cleanse_to_heal: {
      id: 'cleanse_to_heal',
      title: 'cleanse_to_heal',
      author: 'Anthony William',
      language: 'English',
      year: '2020',
    },
    nutrition_and_physical_degeneration: {
        id: 'nutrition_and_physical_degeneration',
        title: 'nutrition_and_physical_degeneration',
        author: 'Weston Price',
        language: 'English',
        year: '2009',
    },
    fruit_infused_water: {
        id: 'fruit_infused_water',
        title: 'fruit_infused_water',
        author: 'Susan Marque',
        language: 'English',
        year: '2015',
    },
    building_story_brand: {
        id: 'building_story_brand',
        title: 'building_story_brand',
        author: 'Donald Miller',
        language: 'English',
        year: '2017',
    },
    starting_business_quickstart_quide: {
        id: 'starting_business_quickstart_quide',
        title: 'starting_business_quickstart_quide',
        author: 'Ken Colwell',
        language: 'English',
        year: '2019',
    },
    on_writing_well: {
        id: 'on_writing_well',
        title: 'on_writing_well',
        author: 'William Zinsser',
        language: 'English',
        year: '2016',
    },
    laws_of_power: {
        id: '48_laws_of_power',
        title: '48_laws_of_power',
        author: 'Robert Greene',
        language: 'English',
        year: '2000',
    },
    a_promised_land: {
        id: 'a_promised_land',
        title: 'a_promised_land',
        author: 'Barack Obama',
        language: 'English',
        year: '2021',
    },
    the_palace_papers: {
        id: 'the_palace_papers',
        title: 'the_palace_papers',
        author: 'Tina Brown',
        language: 'English',
        year: '2022',
    },
    town_country: {
        id: 'town_country',
        title: 'town_country',
        author: 'Victoria Murphy',
        language: 'English',
        year: '2021',
    },  
};

for (const [key, value] of Object.entries(titlesProperties)) {
  console.log(`${key}: ${value}`)}
  
console.log(Object.keys(titlesProperties));
console.log(Object.values(titlesProperties));
