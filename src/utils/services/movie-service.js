import http from './http-service'

class MovieService {
  getAll() {
    return http
    .get('/api/movie/all')
    .then(({ data }) => {
      return data;
    })
  }

  getSome(page = 1, perPage = 5) {
    return http
    .get('/api/movie', { 
      params: {
        page,
        perPage
      }
    })
    .then(({ data }) => {
      return data
    })
  }

  getUserMovies(id, page = 1, perPage = 5) {
    return http.get(`/api/movie/${id}`, {
      params: {
        page,
        perPage
      }
    })
    .then(({ data }) => data.movies)
  }

  getMovie(id) {
    return http.get(`/api/movie/${id}`)
    .then(({ data }) => data)
  }

  createMovie(body) {
    return http.post('/api/movie/', body)
  }

  editMovie(id, body) {
    return http.put(`/api/movie/${id}`, body)
  }

  deleteMovie(id) {
    return http.delete(`/api/movie/${id}`)
  }
}

const movieService = new MovieService()

export default movieService