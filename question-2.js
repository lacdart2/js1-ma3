// answer for question 2


  const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
  
  const resultsContainer = document.querySelector(".results");
  const name = document.querySelector(".name");
  const rating = document.querySelector(".rating");
  const tags = document.querySelector(".tags");
  

  async function getGames() {
  
  try {
  const gamesResponse = await fetch (url);
  const gamesResults = await gamesResponse.json();
 const gamesData = gamesResults.all;
  
  resultsContainer.innerHTML = "";
for (let i = 0; i < gamesData.length; i++) {
     console.log(gamesData[i].name);
     console.log(gamesData[i].rating);
     console.log(gamesData[i].tags[i]);

    if (i === 8) {
      break;
    }

    resultsContainer.innerHTML += `<div class="result">${gamesData[i].name}</div>`;
    resultsContainer.innerHTML += `<div class="result">${gamesData[i].rating}</div>`;
    resultsContainer.innerHTML += `<div class="result">${gamesData[i].tags[i]}</div>`;
  
  /*  or 
   name.innerHTML += `<div class="result">${gamesData[i].name}</div>`;
   rating.innerHTML += `<div class="result">${gamesData[i].rating}</div>`;
   tags.innerHTML += `<div class="result">${gamesData[i].tags[i]}</div>`;
  */
  }  
  catch (error) {
        console.log("An error occurred");
        resultsContainer.innerHTML = ErrorMessage("An error occurred when calling the API");
    }

}
getGames();
  
  
  
  
  
  
 
  
