// const body = document.querySelector("body");
// const header = document.querySelector("header");
// const bgMode = document.querySelector(".dark-mode");
// const search = document.querySelector(".search input");
// const filter = document.querySelector(".filter select");

// const main = document.querySelector("main");
// const countryBox = document.querySelector(".country_box");

// bgMode.addEventListener("click", () => {
//   body.style.backgroundColor = "#202d36";
//   body.style.color = "#fff";
//   header.style.backgroundColor = "#2b3743";
//   search.style.backgroundColor = "#2b3743";
//   filter.style.backgroundColor = "#2b3743";
//   search.style.color = "#fff";
//   filter.style.color = "#fff";

//   search.style.boxShadow = "1px 1px 1px rgba(155, 155, 155, 0.164)";
//   filter.style.boxShadow = "1px 1px 1px rgba(155, 155, 155, 0.164)";
//   search.style.boxShadow = "1px 1px 1px rgba(155, 155, 155, 0.164)";
//   countryBox.style.boxShadow = "1px 1px 1px rgba(155, 155, 155, 0.164)";

//   countryBox.style.backgroundColor = "#2b3743";
// });

const countryContainer = document.querySelector(".country_box");

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((country) => {
      console.log(country);

      const countryCard = document.createElement("a");
      countryCard.classList.add("countryCard");
      countryCard.innerHTML = `
            <img src="${country.flags.svg}" alt="img">
            <div class="box-text">
                <h3>${country.name.common}</h3>
                <p>Population: <span> ${country.population.toLocaleString()}</span></p>
                <p>Region: <span> ${country.region}</span></p>
                <p>Capital: <span> ${country.capital?.[0]}</span></p>
            </div>
        `
      countryContainer.append(countryCard);
    });
  });
