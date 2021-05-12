const fastify = require("fastify").default;
const errorHandler = require("./errorHandler");
const astroRoutes = require("./routes/astro");
function buildApp() {
  const app = fastify({ logger: true });
  app.register(require("fastify-cors").default, {});
  app.setErrorHandler(errorHandler);
  app.register(astroRoutes, { prefix: "/api/v1/astro" });
  app.ready(() => {
    console.log(app.printRoutes());
  });
  return app;
}

module.exports = buildApp;
