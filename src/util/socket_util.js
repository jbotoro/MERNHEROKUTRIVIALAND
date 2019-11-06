export const emitSetup = (socket) => {
    return (event, data) => socket.emit(event, data);
<<<<<<< HEAD
}

export const onSetup = (socket) => {
    return (event, cb) => socket.on(event, cb);
}
=======
  }
  export const onSetup = (socket) => {
    return (event, cb) => socket.on(event, cb);
  }
>>>>>>> 4df3049fab519f99225118d5c749ca2396a7cb42
