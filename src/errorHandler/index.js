function errorHandler(message) {
    console.error(message);
    throw new Error(message);
}

export default errorHandler;