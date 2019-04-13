import http from './http-service'

class MessagingService {
  sendUserMessage(message) {
    return http
    .post('/api/messaging', 
      message
    )
    .then(({ data }) => {
      return data
    })
  }

  getAllUserMessages() {
    return http
    .get('/api/messaging')
    .then(({ data }) => {
      return data
    })
  }
}

const messagingService = new MessagingService()

export default messagingService
