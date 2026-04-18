const ACCESS_KEY = "uQI-bVx2kuiE1A1zou_6oFDCH5g3Tu1cVgeyERJzrng";

fetch(`https://api.unsplash.com/photos/random?count=10&client_id=${ACCESS_KEY}`)
  .then(res => res.json())
  .then(data => console.log(data));