import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const port = 4000;
const pool = mysql.createPool({
  host: "localhost",
  user: "sbsst",
  password: "sbs123414",
  database: "a9",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

app.get("/users", async (req, res) => {
  const [usersRow] = await pool.query(`SELECT * FROM users order by id desc`);
  res.json(usersRow);
});

app.get("/users/:id", async (req, res) => {
  const { id } = req.params;

  const [user] = await pool.query(`SELECT * from users where id = ?`, [id]);

  if (user.length === 0) {
    res.status(404).json({
      msg: "not found",
    });
    return;
  }

  res.json(user);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
