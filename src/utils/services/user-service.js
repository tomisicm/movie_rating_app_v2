import http from './http-service'

class UserService {

  searchForUsers(query, page, perPage) {
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