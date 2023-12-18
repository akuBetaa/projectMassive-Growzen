import argon2 from "argon2";
import db from "../config/Database.js";

export const findUserByEmail = async (email) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM user WHERE email = ?';
        db.query(sql, [email], (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results[0]); // Assuming you expect only one user or null
          }
        });
      });
    };

export const Login = async (req, res) => {
    const user = await findUserByEmail(req.body.email);

    if (!user) {
        return res.status(404).json({ msg: 'Email user tidak ditemukan' });
    }

    const match = await argon2.verify(user.password, req.body.password);
    if (!match) {
        return res.status(400).json({ msg: 'Password yang dimasukkan salah' });
    }

    req.session.userId = user.uuid;
    const { uuid, name, email, role } = user;

    res.status(200).json({ uuid, name, email, role });
};

export default Login;