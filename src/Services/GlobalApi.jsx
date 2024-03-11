import axios from 'axios'

const movieBaseUrl= 'https://api.themoviedb.org/3'
const api_key = '8b60d9f8721f7608ef2fc8b0b9951b23'
//"https://api.themovie.org/3/trending/all/day?api_key=8b60d9f8721f7608ef2fc8b0b9951b23"
const getTrendingVideos=axios.get(this.moviesBaseUrl+ "trending/all/day?api_key")

export default{
    getTrendingVideos
}