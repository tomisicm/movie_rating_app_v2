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
}

const messagingService = new MessagingService()

export default messagingService
