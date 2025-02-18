 const API_KEY = process.env.REACT_APP_API_KEY

 const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatedMovies: `/movie/top_rated?api_ key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/dicover/movie?api-key=${API_KEY}&with_geners=28`,
     fetchComedyMovies: `/dicover/movie?api-key=${API_KEY}&with_geners=35`,
    fetchHorrorMovies: `/dicover/movie?api-key=${API_KEY}&with_geners=27`,
    fetchRomanceMovies: `/dicover/movie?api-key=${API_KEY}&with_geners=10749`,
    fetchDocumentaries: `/dicover/movie?api-key=${API_KEY}&with_geners=99`,
    fetchTvShow: `tv/popular?api_key=${API_KEY}&language=en-US&page=1`
 }

 export default requests