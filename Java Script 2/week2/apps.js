'use strict';

//let bookTitles = ['cleanse_to_heal', 'nutrition_and_physical_degeneration', 'fruit_infused_water', 'building_story_brand', 'starting_business_quickstart_quide', 'on_writing_well', '48_laws_of_power', 'a_promised_land', 'the_palace_papers', 'town_country'];

//console.log(bookTitles);

//const bookSection = document.createElement("div");
//  bookSection.setAttribute("id", "#book_section")
//  document.body.appendchild(bookSection);
//  const ul = document.createElement("ul");
//  bookSection.appendChild(ul);
  

//console.log(bookSection);

//function bookList() {

//    for (let i = 0; i < bookTitles.length; i++){
//      let li = document.createElement("li");
//      ul.appendChild(li)
//      li.innerHTML = li.innerHTML += bookTitles[i]
//  }
// }
//console.log(bookList());

let titlesProperties = {
    cleanse_to_heal: {
      id: 'cleanse_to_heal',
      title: 'cleanse_to_heal',
      author: 'Anthony William',
      language: 'English',
      info: https://liveweave.com,
      year: '2020',
      img: ""
    },
    nutrition_and_physical_degeneration: {
        id: 'nutrition_and_physical_degeneration',
        title: 'nutrition_and_physical_degeneration',
        author: 'Weston Price',
        language: 'English',
        info: https://liveweave.com,
        year: '2009',
        img: ""
    },
    fruit_infused_water: {
        id: 'fruit_infused_water',
        title: 'fruit_infused_water',
        author: 'Susan Marque',
        info: https://liveweave.com,
        language: 'English',
        year: '2015',
        img: ""
    },
    building_story_brand: {
        id: 'building_story_brand',
        title: 'building_story_brand',
        author: 'Donald Miller',
        info: https://liveweave.com,
        language: 'English',
        year: '2017',
        img: ""
    },
    starting_business_quickstart_quide: {
        id: 'starting_business_quickstart_quide',
        title: 'starting_business_quickstart_quide',
        author: 'Ken Colwell',
        info: https://liveweave.com,
        language: 'English',
        year: '2019',
        img: ""
    },
    on_writing_well: {
        id: 'on_writing_well',
        title: 'on_writing_well',
        author: 'William Zinsser',
        info: https://liveweave.com,
        language: 'English',
        year: '2016',
        img: ""
    },
    laws_of_power: {
        id: '48_laws_of_power',
        title: '48_laws_of_power',
        author: 'Robert Greene',
        info: https://liveweave.com,
        language: 'English',
        year: '2000',
        img: ""
    },
    a_promised_land: {
        id: 'a_promised_land',
        title: 'a_promised_land',
        author: 'Barack Obama',
        info: https://liveweave.com,
        language: 'English',
        year: '2021',
        img: ""
    },
    the_palace_papers: {
        id: 'the_palace_papers',
        title: 'the_palace_papers',
        author: 'Tina Brown',
        info: https://liveweave.com,
        language: 'English',
        year: '2022',
        img: ""
    },
    town_country: {
        id: 'town_country',
        title: 'town_country',
        author: 'Victoria Murphy',
        info: https://liveweave.com,
        language: 'English',
        year: '2021',
        img: ""
    },  
};

function showBooks() {

    for (let key in titlesProperties) {
        const container = document.querySelector("container");
        const cover = document.createElement("img")
        cover.setAttribute("src", titlesProperties[key].img)
        cover.setAttribute("alt", "book cover")
        container.appendChild(cover)

        const bookSection = document.createElement("div");
        bookSection.setAttribute("class", "book_section");
        const oneBook = document.createElement("div");
        oneBook.setAttribute("class", "book");
      
        const h1 = document.createElement("h1");
        const h2 = document.createElement("h2");
        const year = document.createElement("p", ".year")
        const language = document.createElement("p", ".language")
      const info = document.createElement("a")
      info.setAttribute("href", titlesProperties[key].info)
      info.setAttribute("alt", "More information")
      info.setAttribute("target", "_blank")
      
        h1.innerHTML = h1.innerHTML += titlesProperties[key].title;
        h2.innerHTML = h2.innerHTML += titlesProperties[key].author;
        year.innerHTML = year.innerHTML += titlesProperties[key].year;
        lang.innerHTML = lang.innerHTML += titlesProperties[key].language;
        info.innerText = info.innerText += "More info";
        container.appendChild(bookSection);
        bookSection.appendChild(cover)
        bookSection.appendChild(oneBook)
        //cover.appendChild(oneBook)
        oneBook.appendChild(h1);
        oneBook.appendChild(h2);
        oneBook.appendChild(year);
        oneBook.appendChild(language);
        oneBook.appendChild(info);
      
      
      

      const onLoad = () => {
        oneBook.style.display = "none"
        cover.style.display = "block"
      }

      cover.addEventListener("load", onLoad);

      const mouseOver = () => {
        //cover.style.display = "none";
        cover.style.position = "absolute"
        cover.style.opacity = "0.2"
        oneBook.style.display = "block"
        oneBook.style.position = "relative"

        
        
      }
      const mouseOut = () => {
        cover.style.display = "block";
        cover.style.opacity = "1"
        oneBook.style.display = "none";
        cover.style.position = "relative"
        oneBook.style.position = "absolute"
        
      }

      
      cover.addEventListener("mouseenter", mouseOver)
      cover.addEventListener("mouseleave", mouseOut)

    }

  }
 
  showBooks();
};




function createButton() {
const div = ( document.all ) ? document.all['Button'] : document.getElementById('Button');
div.innerHTML = '<button id="btn" name="btn">Button</button>'; 
};

const button = document.getElementById('button');
button.addEventListener('click', showBooks);


