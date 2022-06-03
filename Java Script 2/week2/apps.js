'use strict';

let book_titles = ['cleanse_to_heal', 'nutrition_and_physical_degeneration', 'fruit_infused_water', 'building_story_brand', 'starting_business_quickstart_quide', 'on_writing_well', '48_laws_of_power', 'a_promised_land', 'the_palace_papers', 'town_country'];

console.log(book_titles);

let new = document.createElement("ul");
document.body.appendChild("new");


let book_title = () => {
   for (let i = 0; i < book_titles.length; i++) {
     let li = document.createElement("li");
     li.setAttribute('id', `${book_titles[i]}`);
     li.textContent = `${book_titles[i]}`;
     console.log(li);
     ul.appendChild(li);
     console.log(li);
   }
 };

 book_title()

 let titles_properties = {
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
    48_laws_of_power: {
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
}

let new = document.createElement("ul");
let container = document.querySelector('.container').appendChild(ul);
let booksArray = Object.entries(book_titles).map(book => book[1]);

let objectElements = () => {
  for (let i = 0; i < booksArray.length; i++) {
    let li = document.createElement('li');
    ul.appendChild(li);

    let cover = document.createElement('div');
    let image = document.createElement('img');
    cover.appendChild(image);
    cover.classList.add('cover');
    li.appendChild(cover);

    let info = document.createElement('div');
    info.classList.add('info');
    li.appendChild(info);
  };
}

