const searchBtn = document.getElementById('search-btn');
const countryList = document.getElementById('result');
const countryDetailsContent = document.querySelector('.country-details-content');
const detailsCloseBtn = document.getElementById('details-close-btn');

// event listeners
searchBtn.addEventListener('click', getCountryList);
//countryList.addEventListener('click', getCountryDetailsContent);
detailsCloseBtn.addEventListener('click', () => {
    countryDetailsContent.parentElement.classList.remove('showCountry');
});


//
function getCountryList() {
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`https://restcountries.eu/rest/v2/region/${searchInputTxt}`)
      .then(response => {
        if(response.ok){
          return response.json();
        }else{
          var html = "Sorry, we didn't find any country in that region!";
          countryList.innerHTML = html;
          countryList.classList.add('notFound');
        }
      })
      .then(data => {
        var html = "";
        data.forEach(name => {
            html += `
            <div class = "item" data-id = "${name.region}">
                <div class = "flag-img">
                  <img src = "${name.flag}" alt = "flag">
                </div>
                <div class = "country-name">
                    <h3>${name.name}</h3>
                    <a href = "#" onclick="getCountryDetails('${name.alpha2Code}')" class="details-btn">Details</a>
                </div>
            </div>
        `;
        });
        countryList.innerHTML = html;
        countryList.classList.remove('notFound');
      });

}


//
function getCountryDetails(alpha2Code) {
  fetch('https://restcountries.eu/rest/v2/alpha/'+alpha2Code)
    .then(response => {
      if(response.ok){
        return response.json();
      }else{
        var html = "Sorry, we didn't find the country details!";
        countryDetailsContent.innerHTML = html;
        countryDetailsContent.classList.add('notFound');
      }
    })
    .then(data => countryDetailsModal(data));
};

function countryDetailsModal(country) {
    let html = `
        <h2 class = "country-title">${country.name}</h2>
        <p class = "country-region">${country.region}</p>
        <div class = "country-instruct">
            <h3>Details:</h3>
            <div class = "flag-country-img">
            <img src = "${country.flag}" alt = "">
        </div>
            <p>Capital: ${country.capital}</p>
            <p>Region: ${country.region}</p>
            <p>Population: ${country.population}</p>
            <p>Timezones: ${country.timezones}</p>
            <p>Borders: ${JSON.stringify(country.borders)}</p>
            <p>Native Name:${country.nativeName}</p>
            <p>Languages: ${JSON.stringify(country.languages)}</p>
        </div>
    `;
    countryDetailsContent.innerHTML = html;
    countryDetailsContent.parentElement.classList.add('showCountry');
};
