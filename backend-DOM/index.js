import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js"

import UserRoute from "./routes/UserRoute.js";


dotenv.config();
const app = express();

app.use(session({
    secret : process.env.SESSION_SECRET,
    resave : false,
    saveUninitialized : true, 
    cookie : {
        secure : 'auto'
    }
}))

app.use(express.json());
app.use(UserRoute);


app.listen(process.env.APP_PORT, () => {
    console.log(`Server berjalan pada Port ${process.env.APP_PORT}`)
})




// //UNTUK MEMBUATT DATABASE
// import createUsers from "./models/UserModels.js";
// import createBlogs from "./models/BlogModels.js";

//     db.query(createUsers, function (err, results, fields) {
//         if (err) {
//             console.log('Tabel Gagal dibuat' + err.message);
//         }
//     });

//     db.query(createBlogs, function (err, results, fields) {
//         if (err) {
//             console.log('Tabel Gagal dibuat' + err.message);
//         }
//     });

//     //tuutp koneksi setelah selesai
//     db.end(function (err) {
//         if (err) {
//             return console.log(err.message);
//         }
//     });