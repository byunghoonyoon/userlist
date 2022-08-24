import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const port = 3001;
const pool = mysql.createPool({
  host: "localhost",
  user: "sbsst",
  password: "sbs123414",
  database: "a9",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

app.get("/todos", async (req, res) => {
  const [rows] = await pool.query(`SELECT * FROM todo order by id desc`);
  res.json(rows);
});

app.post("/login", async (req, res) => {
  const { user_id, password } = req.body;

  const [[user]] = await pool.query(
    `
  SELECT * 
  from \`user\` 
  where userid = ?
  `,
    [user_id]
  );

  if (!user) {
    res.status(401).json({
      authenticated: false,
      msg: "일치하는 회원이 없습니다.",
    });
    return;
  }
  if (user.password != password) {
    res.status(401).json({
      authenticated: false,
      msg: "비밀번호가 일치하지 않습니다.",
    });
    return;
  } else {
    res.status(200).json({ authenticated: true, msg: "로그인 되었습니다." });
  }
  console.log("user", user);
});

app.get("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const [rows] = await pool.query(
    `
  SELECT * FROM todo WHERE id = ?`,
    [id]
  );

  if (rows.length === 0) {
    res.status(404).json({
      msg: "not found",
    });
    return;
  }

  res.json(rows[0]);
});

app.patch("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const { performDate, text } = req.body;

  const [rows] = await pool.query(
    `
  SELECT * FROM todo where id = ?`,
    [id]
  );

  if (rows.length === 0) {
    res.status(404).json({
      msg: "not found",
    });
    return;
  }

  if (!performDate) {
    res.status(400).json({
      msg: "performDate Required",
    });
    return;
  }

  if (!text) {
    res.status(400).json({
      msg: "text Required",
    });
    return;
  }

  const [rs] = await pool.query(
    `
  UPDATE todo SET
  performDate = ?,
  text = ?
  where id = ?
  `,
    [performDate, text, id]
  );

  res.json({
    msg: `${id}번 할 일이 수정되었습니다.`,
  });
});

app.patch("/todos/checked/:id", async (req, res) => {
  const { id } = req.params;
  const [[todoRow]] = await pool.query(
    `
  SELECT * From todo where id = ? `,
    [id]
  );

  if (!todoRow) {
    res.status(404).json({
      msg: "not found",
    });
    return;
  }

  await pool.query(
    `
  update todo set checked=? where id = ?`,
    [!todoRow.checked, id]
  );

  const [updatedTodos] = await pool.query(`
  SELECT * from todo order by id desc`);

  res.json(updatedTodos);
});

app.put("/todos/update/:id", async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;

  const [[todoRow]] = await pool.query(
    `
  SELECT * FROM todo WHERE id = ?
  `,
    [id]
  );

  if (!todoRow) {
    res.status(404).json({
      msg: "not found",
    });
    return;
  }
  if (!text) {
    res.status(400).json({
      msg: "text required",
    });
    return;
  }

  await pool.query(
    `
    update todo set 
    text = ?
    where id = ?
    `,
    [text, id]
  );

  const [updatedTodos] = await pool.query(`
  SELECT * from todo order by id desc`);

  res.json(updatedTodos);
});

app.patch("/todos/swap/:id", async (req, res) => {
  const { id } = req.params;
  const { targetId } = req.body;
  if (!id) {
    res.status(400).json({
      msg: "id required",
    });
    return;
  }
  if (!targetId) {
    res.status(400).json({
      msg: "id targetId",
    });
    return;
  }

  await pool.query(
    `
  UPDATE todo a
  INNER JOIN todo b ON a.id != b.id
   SET a.regDate = b.regDate,
       a.performDate = b.performDate,
       a.checked = b.checked,
       a.text = b.text
  WHERE a.id IN (? , ?) AND b.id IN (? , ?)
  `,
    [targetId, id, id, targetId]
  );
  const [updatedTodos] = await pool.query(
    `
    SELECT *
    FROM todo
    ORDER BY id DESC
    `
  );
  res.json(updatedTodos);
});

app.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const { performDate, text } = req.body;

  const [[todoRow]] = await pool.query(
    `
  SELECT * FROM todo where id = ?`,
    [id]
  );

  if (todoRow === undefined) {
    res.status(404).json({
      msg: "not found",
    });
    return;
  }

  const [rs] = await pool.query(
    `
  DELETE from todo where id = ?`,
    [id]
  );

  res.json({
    msg: `${id}번 할 일이 삭제되었습니다.`,
  });
});

app.delete("/todos/delete/:id", async (req, res) => {
  const { id } = req.params;

  const [[todoRow]] = await pool.query(
    `
  SELECT * from todo Where id = ?
  `,
    [id]
  );

  if (todoRow === undefined) {
    res.status(404).json({
      msg: "not found",
    });
    return;
  }
  const [rs] = await pool.query(
    `
  DELETE from todo where id = ?`,
    [id]
  );

  res.json({
    msg: `${id}번 할 일이 삭제되었습니다.`,
  });
});

app.post("/todos", async (req, res) => {
  const { performDate, text } = req.body;

  const [rs] = await pool.query(
    `
  insert into todo set performDate = ?,
  text = ?,
  regDate = ?,
  checked = 0`,
    [performDate, text, now()]
  );

  res.json({
    msg: `할 일이 생성되었습니다.`,
  });
});

app.post("/todos/add", async (req, res) => {
  const { text } = req.body;

  if (!text) {
    res.status(400).json({
      msg: "text required",
    });
    return;
  }

  const [addTodo] = await pool.query(
    `
    INSERT INTO todo SET 
    regDate = now(), 
    performDate = ?,
    checked = 0,
    TEXT = ?
    `,
    [null, text]
  );
  const [updatedTodos] = await pool.query(`
  SELECT * from todo order by id desc`);

  res.json(updatedTodos);
});
// postman petch(수정) 가능
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
