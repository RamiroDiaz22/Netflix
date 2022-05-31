const API_KEY = "k_vwjf6adi";

const requests = {
  API_KEY: API_KEY,
  topMovies: `https://imdb-api.com/en/API/Top250Movies/${API_KEY}`,
  popularMovies: `https://imdb-api.com/en/API/MostPopularMovies/${API_KEY}`,
  popularTv: `https://imdb-api.com/en/API/MostPopularTVs/${API_KEY}`,
  comingSoon: `https://imdb-api.com/en/API/ComingSoon/${API_KEY}`,
};

export default requests;
