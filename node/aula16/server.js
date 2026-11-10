require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose
  .connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit("pronto");
  })
  .catch((e) => console.log(e));

const session = require("express-session");
// Versão anterior (connect-mongo v3 ou inferior usada na aula):
// const MongoStore = require("connect-mongo")(session);
// Na versão 6+, o connect-mongo exporta um objeto com a classe MongoStore (desestruturação):
const { MongoStore } = require("connect-mongo");
const flash = require("connect-flash");

const routes = require("./routes");
const path = require("path");
const { middlewareGlobal } = require("./src/middlewares/middleware");

// Isso daqui também são middlewares
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "public")));

const sessionOptions = session({
  secret:
    "skahdkjawhduiwanjmkanfikojadvgb6712tg671g267b 781he7120d91n2dnb1092nb 12312()",
  // Versão anterior (connect-mongo v3):
  // store: new MongoStore({ mongooseConnection: mongoose.connection }),
  // Versão atual (connect-mongo v4+ utiliza MongoStore.create):
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge:
      1000 /* ms */ *
      60 /* min */ *
      60 /* hour */ *
      24 /* day */ *
      7 /* how many days*/,
    httpOnly: true,
  },
});

app.use(sessionOptions);
app.use(flash());

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

// Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(routes);

app.on("pronto", () => {
  app.listen(3000, () => {
    console.log("Acessar http://localhost:3000");
    console.log("Servidor sendo executado na porta 3000");
  });
});
