<template>
  <v-layout column justify-center align-center>

    <v-btn @click="send()">Send message</v-btn>
  </v-layout>
</template>

<script>

  export default {
    sockets: {
      connect: function () {
        console.log('socket connected ----------------------- ')
      }
    },
    methods: {
      send() {
        this.$socket.emit('createMessage', {text: 'text from client to '})
      }
    }
  }
</script>
