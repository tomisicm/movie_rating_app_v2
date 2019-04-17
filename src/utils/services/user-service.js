import http from './http-service'

class UserService {

  searchForUsers(query, page=10, perPage=10) {
    return http
    .get('/api/user/all', {
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

}

const userService = new UserService()

export default userService