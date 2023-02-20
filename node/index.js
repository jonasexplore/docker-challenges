const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  return res.send("<h1>Full Cycle Rocks!</h1>");
});

app.listen(3000, () => console.log("🔮 server is running at port 3000"));
