import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola mundo desde Express con ES6 modules");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
