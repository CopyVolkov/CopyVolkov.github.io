const d = document,
  apiKey = "1d653a1391834a730f31d2dd1b79ea21",
  apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const $searchBox = d.querySelector(".search input"),
  $searchBtn = d.querySelector(".search button"); // Corregido para seleccionar el botón

const $temp = d.querySelector(".temp");
($city = d.querySelector(".city")),
  ($humidity = d.querySelector(".humidity")),
  ($windspeed = d.querySelector(".windspeed")),
  ($weatherIcon = d.querySelector(".weather-icon"));
$weather = d.querySelector(".weather");

async function checkweather(city) {
  try {
    const res = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await res.json();
    if (!res.ok || $searchBox.value === "")
      throw {
        status: res.status,
        statusText: res.statusText,
      };

    if (Response.status)

    // Añadir clase para la animación de entrada
    $weather.classList.add("fade-in");
    $weather.style.display = "block"

    

    $temp.textContent = `${data.main.temp}°`;
    $city.textContent = data.name;
    $humidity.textContent = `${data.main.humidity}%`;
    $windspeed.textContent = `${data.wind.speed} M/S`; // Modificado para mostrar en M/S
    // Cambia la imagen del clima basándose en la información que retorna la API
    let weatherIconName = data.weather[0].main.toLowerCase(); // Convertir a minúsculas para asegurar compatibilidad
    $weatherIcon.src = `assets/images/${weatherIconName}.svg`; // Cambiar la ruta de la imagen dinámicamente
    $weatherIcon.alt = data.weather[0].description; // Asignar una descripción como atributo "alt" para accesibilidad

    // Esperar a que la animación termine antes de quitar la clase
    await new Promise((resolve) => setTimeout(resolve, 1600));
    // Quitar la clase de animación
    $weather.classList.remove("fade-in");
  } catch (err) {
    console.error("Ha habido un error en la búsqueda:", err.statusText) 
    d.querySelector(".error").style.display = "block"
    d.querySelector(".weather").style.display = "none"


  }
}

$searchBtn.addEventListener("click", (e) => {
  checkweather($searchBox.value);
  $weather.classList.remove("inactive");
  $weather.classList.add("fade-in");

  $searchBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      checkweather($searchBox.value);
      $weather.classList.remove("inactive");
      $weather.classList.add("fade-in");

    }
  });
});