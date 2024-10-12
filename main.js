// Theme - Colors
const changeTheme = document.querySelector(".dark-mode");
const themeText = document.querySelector(".themeText");
flag = 1;
changeTheme.addEventListener("click", () => {
  if (flag == 0) {
    document.body.classList.add("dark");
    themeText.innerHTML = "Light Mode";
    flag = 1;
  } else {
    document.body.classList.remove("dark");
    themeText.innerHTML = "Dark Mode";
    flag = 0;
  }
});

const countryContainer = document.querySelector(".country_box");
const filterByRegion = document.querySelector("#filterByRegion");

function showCountries(data) {
  countryContainer.innerHTML = "";
  data.forEach((country) => {
    //   console.log(country);

    const countryCard = document.createElement("a");
    countryCard.href = `./countryPage/country.html?name=${country.name.common}`;
    countryCard.classList.add("countryCard");

    countryCard.innerHTML = `
        <img src="${country.flags.svg}" alt="img">
          <div class="box-text">
            <h3>${country.name.common}</h3>
            <p>Population: <span> ${country.population.toLocaleString()}</span></p>
            <p>Region: <span> ${country.region}</span></p>
            <p>Capital: <span> ${country.capital?.[0]}</span></p>
        </div>
      `;
    countryContainer.append(countryCard);
  });
}

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then(showCountries);

filterByRegion.addEventListener("change", () => {
  fetch(`https://restcountries.com/v3.1/region/${filterByRegion.value}`)
    .then((res) => res.json())
    .then(showCountries);
});
