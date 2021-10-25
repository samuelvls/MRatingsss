import axios from 'axios';

//URL FILMES EM CARTAZ:
// https://api.themoviedb.org/3/

// movie/now_playing?api_key=bc717ebaf3781f69bee4e3fe3f6659e4&language=pt-BR&page=1

 export const key = 'bc717ebaf3781f69bee4e3fe3f6659e4'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api;