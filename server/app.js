const app = require("express")()
const server = require("http").createServer(app)
const io = require("socket.io")(server)

io.on('connection', socket => {
  console.log('IO connection')
  socket.emit('newMessage', {
    text: 'emmited new message'
  })

  socket.on('createMessage', data => {
    setTimeout(() => {
      socket.emit('newMessage', {
        text: data.text + ' server'
      })
    }, 1000)
  })
})

module.exports = {
  app, server
}
