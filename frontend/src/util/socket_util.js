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
>>>>>>> c1ee586e1d7d6afffa50f1e6c1386d05b98137b0
