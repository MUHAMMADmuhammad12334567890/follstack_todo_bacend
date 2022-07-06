const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")

const port = 4000;

const app = express();

app.use(cors())
app.use(express.json());
app.use(require("./TodoRouts"));

mongoose
  .connect(
    "mongodb+srv://AgReSSoR:Magomed95@cluster0.rdhjd.mongodb.net/Todo_list?retryWrites=true&w=majority"
  )
  .then(() => console.log("Сервер MongooDB подключен"))
  .catch(() => console.log("Ощибка при подключение"));

app.listen(port, () => {
  console.log(`Сервер запушен: http://localhost:${port}`);
});
