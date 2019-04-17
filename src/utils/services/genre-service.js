import http from './http-service'

class GenreService {
  getAll(genretype) {
    return http
    .get('/api/genre/all', {
      params: {
        type: genretype
      }
    })
    .then(({ data }) => {
      return data
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

  /* getUserMovies(id, page = 1, perPage = 5) {
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
  } */

  createGenre(genre) {
    return http.post('/api/genre/', 
      genre
    )
    .then(({ data }) => {
      return data
    })
  }

  editGenre(id, genre) {
    return http.put(`/api/genre/${id}`, genre
    )
  }

  deleteGenre(id) {
    return http.delete(`/api/genre/${id}`)
  }
}

const genreService = new GenreService()

export default genreService