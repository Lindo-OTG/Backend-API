import express, { json } from "express";
import productsRouter from "./routes/products.js";
import usersRouter from "./routes/user.js";
import weatherRouter from "./routes/weather.js";
import auth from "./middleware/auth.js";
import swaggerUi from "swagger-ui-express"
import swaggerSpec from "./config/swagger.js";
import session from 'express-session';
import dotenv from "dotenv";

dotenv.config()

const app = express();
const AuthSecret = process.env.AUTH_SECRET
app.use(json());

app.use(
    session({
      secret: AuthSecret,
      resave: false,
      saveUninitialized: true,
      cookie: { maxAge: 15 * 60 * 1000 } // 15 minutes
    })
  );

const port = process.env.PORT || 3000;

app.use("/products", auth, productsRouter);
app.use("/users", usersRouter);
app.use("/weather", weatherRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => console.log(`Server is running on port ${port}`));

export default app;
