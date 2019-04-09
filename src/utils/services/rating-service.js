import http from './http-service'

class RatingService {
  getRatingByItemId(id) {
    return http
    .get(`/api/rating/item/${id}`)
    .then(({ data }) => {
      return data
    })
  }

  createRating(rating) {
    return http.post('/api/rating/', 
      rating
    )
    .then(({ data }) => {
      return data
    })
  }
}

const ratingService = new RatingService()

export default ratingService