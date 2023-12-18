const MessageRespone = (ms: Boolean) => {
    if (ms) {
        return {
            message: "Success!",
            status: true
        }
    } else {
        return {
            message: "Fail!",
            status: false
        }
    }
}

export default MessageRespone;