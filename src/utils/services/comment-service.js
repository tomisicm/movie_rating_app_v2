import http from './http-service'

class CommentService {
  getCommentsByItemId(id, page = 1, perPage = 5) {
    return http
    .get(`/api/comment/item/${id}`, {
        params: {
          page,
          perPage
        }
    })
    .then(({ data }) => {
      return data
    })
  }

  createComment(comment) {
    return http.post('/api/comment/', 
      comment
    )
    .then(({ data }) => {
      return data
    })
  }

  editComment(id, comment) {
    return http.put(`/api/comment/${id}`, {
      body: comment.body,
      movie: comment.movie
    })
    .then(({ data }) => {
      return data
    })
  }

  deleteComment(id) {
    return http.delete(`/api/comment/${id}`)
  }
}

const commentService = new CommentService()

export default commentService