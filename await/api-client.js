const API_KEY = "73c1ee41e10f5d52a2e62d037efa4216";

const getData = async () => {
  const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;

  try {
    const res = await fetch(apiUrl, {method: "GET"});
    const result = await res.json();
    console.log(result);
    return result;
  } catch (err) {
    console.log("er is iets fout gegaan");
  }
}


 