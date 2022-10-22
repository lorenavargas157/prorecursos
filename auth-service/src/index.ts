import express, { Response, Request } from "express";
const app = express();
import { MongooseConnection } from "./db/mongoose";
import { BadRequestError, DatabaseConnectionError } from "@angelgoezg/common";
import { User } from "./models/user";

app.listen("8881", async () => {
  try {
    const connection = await MongooseConnection.connect();
    console.log(connection);
    console.log("auth-service is up and running on port 8881");
  } catch (err) {
    console.log(err);
    throw new DatabaseConnectionError();
  }
});

app.get("/api/sign-up", async (req: Request, res: Response) => {
  try {
    const user = new User({
      name: "Leisy Valentina Vasquez Martinez",
      psw: "12345",
      userName: "levasquezm",
      email: "leisyyvalentina@gmail.com",
      userType: "admin",
    });
    await user.save();
    res.status(201).send({ user });
  } catch (err: any) {
    throw new BadRequestError(err.message);
  }
});

app.get("/api/sign-up/:document", (req: Request, res: Response) => {
  const { document } = req.params;
  const database: any = {
    "123": "Yordan",
    "1234": "Leisy",
  };
  res.send(
    `<h1>Se registro la persona con documento: ${database[document]}</h1>`
  );
});

app.get("/api/json", (req: Request, res: Response) => {
  res.json({ meesage: "Hola mundo" });
});

app.get("/api/texto-plano", (req: Request, res: Response) => {
  res.send("Servidor de documentación");
});

app.all("*", (req: Request, res: Response) => {
  res.status(404).send("<h1>Page not found </h1>");
});

console.log("Hola mundo");
