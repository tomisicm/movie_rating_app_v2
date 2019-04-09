// import authService from './auth-service'
import http from './http-service'

class StarService {
  searchForStarsorGetAll(query) {
    return http
    .get('/api/star', {
      params: {
        query: query
      }
    })
    .then(({ data }) => {
      return data
    })
  }

  /* getSome(page = 1, perPage = 5) {
    return http
    .get('/api/star', { 
      params: {
        page,
        perPage
      }
    })
    .then(({ data }) => {
      return data
    })
  } */

  get(id) {
    return http.get(`/api/star/${id}`)
    .then(({ data }) => data)
  }

  /* create({ title, description, images }) {
    return http.post('/api/star/', {
      title,
      description,
      images
    })
  } */

  /* editStar(id, { title, description, images }) {
    return http.put(`/api/star/${id}`, {
     
    })
  } */

  deleteMovie(id) {
    return http.delete(`/api/star/${id}`)
  }
}

const starService = new StarService()

export default starService