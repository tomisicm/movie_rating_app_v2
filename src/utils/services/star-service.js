import http from './http-service'

class StarService {
  searchForStarsorGetAll(query, page, perPage) {
    return http
    .get('/api/star', {
      params: {
        query: query,
        page,
        perPage
      }
    })
    .then(({ data }) => {
      return data
    })
  }


  get(id) {
    return http.get(`/api/star/${id}`)
    .then(({ data }) => data)
  }

  createStar(star) {
    return http.post('/api/star/', 
      star
    )
  }

  editStar(id, star) {
    return http.put(`/api/star/${id}`, 
      star
    )
  }

  deleteStar(id) {
    return http.delete(`/api/star/${id}`)
  }
}

const starService = new StarService()

export default starService