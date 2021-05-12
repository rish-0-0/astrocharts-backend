const app = require("./app")();
const PORT = 8080;
app.listen(PORT, "0.0.0.0", (err, addr) => {
  if (err) {
    console.error("Server failed to setup\n", err);
    process.exit(1);
  }
  console.log(`ASTROCHARTS-BACKEND: Listening on ${addr}`);
});
