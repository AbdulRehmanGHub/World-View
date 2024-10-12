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

let dataContainer = document.querySelector(".data");

let countryName = new URLSearchParams(location.search).get("name");
// console.log(countryName);

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((countryInfo) => {
      //   console.log(countryInfo);

      let countryBox = document.querySelector(".country_box");
      let countryCurrency = Object.values(countryInfo.currencies)
        .map((currency) => `${currency.name} (${currency.symbol})`)
        .join(", ");

      let countryLanguage = Object.values(countryInfo.languages).join(", ");

      countryBox.innerHTML = `
        <div class="countryFlag">
            <img src="${countryInfo.flags.svg}" alt="img">
        </div>
        <div class="box-text">
            <h3>${countryInfo.name.common}</h3>
            <div class="box-text_paras">
                <div>
                    <p>Official Name: <span> ${
                      countryInfo.name.official
                    }</span></p>
                    <p>Population: <span> ${countryInfo.population.toLocaleString()}</span></p>
                    <p>Region: <span> ${countryInfo.region}</span></p>
                    <p>Sub Region: <span> ${countryInfo.subregion}</span></p>
                    <p>Capital: <span> ${countryInfo.capital}</span></p>
                </div>
                <div>
                    <p>Top Level Domain: <span> ${countryInfo.tld[0]}</span></p>
                    
                    <p>Currencies: <span> ${countryCurrency}</span></p>
                    <p>Languages: <span> ${countryLanguage}</span></p>
                </div>
            </div>

            <div class="countryBorders">
                <p>Border Countries: </p>
                <div class="border_box">
                    <a href="#">
                        <div class="border_btn">

                        </div>
                    </a>
                </div>
            </div>
        </div>
            `;
      const borderCountries = countryInfo.borders;
      if (
        countryInfo.borders &&
        Array.isArray(countryInfo.borders) &&
        countryInfo.borders.length > 0
      ) {
        const borderBox = document.querySelector(".border_box");
        borderBox.innerHTML = "";

        borderCountries.forEach((border) => {
          const anchor = document.createElement("a");
          anchor.href = `#`;

          const span = document.createElement("span");
          span.classList.add("border_btn");
          span.textContent = border;

          anchor.appendChild(span);
          borderBox.appendChild(anchor);
        });
      } else {
        document.querySelector(".border_box").innerHTML =
          "<span>No border countries</span>";
      }

      dataContainer.append(countryBox);
    });
  });
