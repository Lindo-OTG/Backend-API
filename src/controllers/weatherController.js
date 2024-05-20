export async function getCurrentWeather(req, res) {
  try {
    const city = req.params.city;
    const APIkey = process.env.WEATHER_API_KEY;

    const requestOptions = {
      method: "GET",
    };

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result));
        res.status(200).send(JSON.parse(result));
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send(error);
      });

  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}


