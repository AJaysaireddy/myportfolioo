const countryNameInput = document.getElementById("country-name");
const countryInfoContainer = document.getElementById("country-info");

countryNameInput.addEventListener("input", () => {
  const countryName = countryNameInput.value;

  fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then((response) => response.json())
    .then((data) => {
      countryInfoContainer.innerHTML = "";

      if (data.length > 0) {
        const countryInfo = data[0];

        countryInfoContainer.innerHTML += `
          <h3>${countryInfo.name.common}</h3>
          <img src="${countryInfo.flags.svg}" />
          <p>Capital: ${countryInfo.capital[0]}</p>
          <p>Continent: ${countryInfo.continents[0]}</p>
        `;
      } else {
        countryInfoContainer.innerHTML = "Country not found";
      }
    });
});
