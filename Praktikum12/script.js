let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
searchBtn.addEventListener("click", () => {
  let countryName = countryInp.value;
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(finalURL);
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {

      result.innerHTML = `
        <img src="${data[0].flags.svg}" class="flag-img">
        <h2>${data[0].name.common}</h2>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>IbuKota:</h4>
                <span>${data[0].capital[0]}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Benua:</h4>
                <span>${data[0].continents[0]}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Subregion:</h4>
                <span>${data[0].subregion}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Kode Negara:</h4>
                <span>${data[0].cioc}</span>
            </div>
        </div>

        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Koordinat:</h4>
                <span>${data[0].latlng}</span>
            </div>
        </div>
         <div class="wrapper">
            <div class="data-wrapper">
                <h4>Penduduk:</h4>
                <span>${data[0].population}</span>
            </div>
        </div>
        </div>
         
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Mata Uang:</h4>
                <span>${
                  data[0].currencies[Object.keys(data[0].currencies)].name
                } - ${Object.keys(data[0].currencies)[0]}</span>
            </div>
        </div>
         <div class="wrapper">
            <div class="data-wrapper">
                <h4>Bahasa Yang Dipakai:</h4>
                <span>${Object.values(data[0].languages)
                  .toString()
                  .split(",")
                  .join(", ")}</span>
            </div>
        </div>
      `;
    })
    .catch(() => {
      if (countryName.length == 0) {
        result.innerHTML = `<h3>Kolom input tidak boleh kosong !</h3>`;
      } else {
        result.innerHTML = `<h3>Masukkan nama negara yang valid !</h3>`;
      }
    });
});