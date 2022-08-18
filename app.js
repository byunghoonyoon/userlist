import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const port = 3002;
const pool = mysql.createPool({
  host: "localhost",
  user: "sbsst",
  password: "sbs123414",
  database: "a9",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
//전체조회
app.get("/users", async (req, res) => {
  const [users] = await pool.query(`SELECT * FROM users order by id desc`);
  res.json(users);
});
//단건조회
app.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  const [userRow] = await pool.query(
    `
    SELECT * FROM users where id = ?
    `,
    [id]
  );

  if (userRow.length === 0) {
    res.status(404).json({
      msg: "not found",
    });
    return;
  }

  res.json([userRow]);
});
//전체수정
app.patch("/users/update/:id", async (req, res) => {
  const { id } = req.params;
  const { name, address, phone, feature } = req.body;

  const [userRow] = await pool.query(
    `
  select * from users where id = ?`,
    [id]
  );

  if (userRow.length === 0) {
    res.status(404).json({
      msg: "not found",
    });
    return;
  }

  if (!name || !address || !phone || !feature) {
    res.status(400).json({
      msg: "name, address, phone, feature required",
    });
  }
  const [rs] = await pool.query(
    `
  update users set
  name = ?,
  address = ?,
  phone = ?,
  regDate = now(),
  feature = ?
  where id = ?
  `,
    [name, address, phone, feature, id]
  );

  const [updateUsers] = await pool.query(
    `
    select * from users order by id desc
    `
  );
  res.json(updateUsers);
});
//이름수정
app.patch("/users/update_name/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const [userRow] = await pool.query(
    `
  select * from users where id = ?`,
    [id]
  );

  if (userRow.length === 0) {
    res.status(404).json({
      msg: "not found",
    });
    return;
  }

  if (!name) {
    res.status(400).json({
      msg: "name required",
    });
  }
  const [rs] = await pool.query(
    `
  update users set
  name = ?
  where id = ?
  `,
    [name, id]
  );

  res.json({
    msg: `${id}번 유저의 정보가 수정되었습니다.`,
  });
});
//주소수정
app.patch("/users/update_address/:id", async (req, res) => {
  const { id } = req.params;
  const { address } = req.body;

  const [userRow] = await pool.query(
    `
  select * from users where id = ?`,
    [id]
  );

  if (userRow.length === 0) {
    res.status(404).json({
      msg: "not found",
    });
    return;
  }

  if (!address) {
    res.status(400).json({
      msg: "address required",
    });
  }
  const [rs] = await pool.query(
    `
  update users set
  address = ?
  where id = ?
  `,
    [address, id]
  );

  res.json({
    msg: `${id}번 유저의 정보가 수정되었습니다.`,
  });
});
//연락처수정
app.patch("/users/update_phone/:id", async (req, res) => {
  const { id } = req.params;
  const { phone } = req.body;

  const [userRow] = await pool.query(
    `
  select * from users where id = ?`,
    [id]
  );

  if (userRow.length === 0) {
    res.status(404).json({
      msg: "not found",
    });
    return;
  }

  if (!phone) {
    res.status(400).json({
      msg: "phone required",
    });
  }
  const [rs] = await pool.query(
    `
  update users set
  phone = ?
  where id = ?
  `,
    [phone, id]
  );

  res.json({
    msg: `${id}번 유저의 정보가 수정되었습니다.`,
  });
});
//취미수정
app.patch("/users/update_feature/:id", async (req, res) => {
  const { id } = req.params;
  const { feature } = req.body;

  const [userRow] = await pool.query(
    `
  select * from users where id = ?`,
    [id]
  );

  if (userRow.length === 0) {
    res.status(404).json({
      msg: "not found",
    });
    return;
  }

  if (!feature) {
    res.status(400).json({
      msg: "feature required",
    });
  }
  const [rs] = await pool.query(
    `
  update users set
  feature = ?
  where id = ?
  `,
    [feature, id]
  );

  res.json({
    msg: `${id}번 유저의 정보가 수정되었습니다.`,
  });
});
//유저 한명 삭제
app.delete("/users/delete/:id", async (req, res) => {
  const { id } = req.params;

  const [user] = await pool.query(
    `
  select * from users where id = ?`,
    [id]
  );

  if (user === 0) {
    res.status(404).json({
      msg: "not found",
    });
    return;
  }

  const [rs] = await pool.query(
    `
  delete from users where id = ?`,
    [id]
  );

  res.json({
    msg: `${id}번 유저가 삭제되었습니다.`,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
