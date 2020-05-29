export const state = () => ({})

export const action = {
  SOCKET_NewMessage(ctx, data) {
    console.log('ms received: ' + data)
  }
}
