fetch("https://www.breakingbadapi.com/api/characters")
   .then(res => res.json())
   .then(data => {
      console.log(data);

         document.body.style.backgroundColor = '#676967';

         const headline = document.createElement("h1");
         headline.innerText = 'The Breaking Bad Cards';
         headline.style.textTransform = 'uppercase';
         headline.style.textAlign = 'center';
         headline.style.letterSpacing = '10px';
         headline.style.color = '#11a030';
         document.body.prepend(headline);

         for (let charIndex = 0; charIndex < data.length; charIndex++) {
         const cardData = data[charIndex];
         const wrapper = document.querySelector("#wrapper");
         wrapper.style.display = 'grid';
         wrapper.style.justifyItems = 'center';
         wrapper.style.gridTemplateColumns = 'repeat(6, 1fr';
         wrapper.style.gap = '10px';

         const card = document.createElement("div");
         card.setAttribute("class", "card");
         card.style.width = '220px';
         wrapper.appendChild(card);
    
         const cardImg = document.createElement("img");
         cardImg.setAttribute("class", "cardImg");
         cardImg.setAttribute("src", cardData.img);
         cardImg.style.height = '300px';
         cardImg.style.width = '200px';
         card.style.flexWrap = 'wrap';
         card.style.border = 'thick solid #11a030';
         cardImg.style.margin = '10px 10px 0 10px';
         card.appendChild(cardImg);
  
         const cardName = document.createElement("h2");
         cardName.innerText = cardData.name;
         cardName.style.textAlign = 'center';
         card.appendChild(cardName);
       
         const cardNickname = document.createElement("h3");
         cardNickname.innerText = cardData.nickname;
         cardNickname.style.textAlign = 'center';
         card.appendChild(cardNickname);
      
         const attribute1 = document.createElement("div");
         attribute1.setAttribute("class", "attribute");
         card.appendChild(attribute1);
       
         const para1L = document.createElement("p");
         para1L.setAttribute("class", "paraL");
         para1L.innerText = "Birthday";
         attribute1.appendChild(para1L);
       
         const para1R = document.createElement("p");
         para1R.setAttribute("class", "paraR");
         para1R.innerText = cardData.birthday;
         attribute1.appendChild(para1R);

         const button = document.createElement("button");
         button.innerText = 'More info';
         button.style.backgroundColor = '#11a030';
         button.style.margin = '10px';
         card.appendChild(button);

         button.addEventListener('click', function(evt){
            alert('Status: ' + cardData.status + '. Ocupation: ' + cardData.occupation + '. Appearance: ' + cardData.appearance);
         });
      
         

      };
   });


  