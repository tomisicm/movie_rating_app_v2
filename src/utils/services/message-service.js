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

  getInboxMessages() {
    return http
    .get('/api/messaging/inbox')
    .then(({ data }) => {
      return data
    })
  }

  getOutboxMessages() {
    return http
    .get('/api/messaging/outbox')
    .then(({ data }) => {
      return data
    })
  }

  getConversation(id) {
    return http
    .get(`/api/messaging/conv/${id}`)
    .then(({ data }) => {
      return data
    })
  }
}

const messagingService = new MessagingService()

export default messagingService
