async function errorHandler(error, request, reply) {
  reply.code(500).send({ success: false, message: error.message, e: error });
}

module.exports = errorHandler;
