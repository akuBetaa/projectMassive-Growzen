import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";

import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import fileUpload from 'express-fileupload';

import UserRoute from "./routes/UserRoute.js";
import BlogRoute from "./routes/BlogRoute.js"
import AuthRoute from "./routes/AuthRoute.js"

dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore ({
    db:db
});

//untuk migrasi database
// (async() => {
//     await db.sync();
// })();

app.use(session({
    secret : process.env.SESSION_SECRET,
    resave : false,
    saveUninitialized : true,
    store: store,
    cookie : {
        secure : 'auto'
    }
}))

//midleware
app.use(cors({
    credentials: true,
    origin : "http://localhost:5173",
}));

app.use(express.json());
app.use(fileUpload());

app.use(express.static('public'));

app.use(UserRoute);
app.use(BlogRoute);
app.use(AuthRoute);

// store.sync();

app.listen(process.env.APP_PORT, () => {
    console.log(`Server berjalan pada Port ${process.env.APP_PORT}`)
})