// fetch details of the submitted location
export const fetchDetails = (
  lat,
  lon,
  API_KEY,
  setDetailsArray,
  toggle,
  setToggle
) => {
  let dailyUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  fetch(dailyUrl)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setToggle(!toggle);
      setDetailsArray(data.list);
    })
    .catch((err) => {
      console.log(err);
    });
};