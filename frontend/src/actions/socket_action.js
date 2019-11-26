export const RECEIVE_SOCKET = "RECEIVE_SOCKET";
export const REMOVE_SOCKET = "REMOVE_SOCKET";


export const receiveSocket = socket => ({
    type: RECEIVE_SOCKET,
    socket
})

export const removeSocket = socket => ({
    type: REMOVE_SOCKET,
    socket
})