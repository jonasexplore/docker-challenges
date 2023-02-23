const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

app.use(cors());

app.get("/", (req, res) => {
  const connection = mysql.createConnection(config);
  const sql = `
    CREATE TABLE IF NOT EXISTS 
      people (
        id int not null auto_increment, 
        name varchar(255), 
        primary key(id)
      ); 
      
    INSERT INTO people(name) values('Full Cycle')`;

  connection.query(sql);
  connection.end();

  return res.send("<h1>Full Cycle Rocks!</h1>");
});

app.listen(3000, () => console.log("🔮 server is running at port 3000"));
