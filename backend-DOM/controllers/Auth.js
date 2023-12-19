import argon2 from "argon2";
import db from "../config/Database.js";

export const Login = async (req, res) => {
  try {
    const q = "SELECT * FROM user WHERE email = ?";
    const [rows] = await db.execute(q, [req.body.email]);

    if (rows.length === 0) {
      return res.status(404).json({ msg: "Email user tidak ditemukan" });
    }

    const user = rows[0];

    // Pastikan user memiliki properti passwordHash
    if (!user.passwordHash) {
      return res.status(500).json({ msg: "Password hash tidak valid" });
    }

    const passwordMatch = await argon2.verify(user.passwordHash, req.body.password);

    if (passwordMatch) {
      // req.session.userId = user.id; // Pastikan properti ID pengguna yang sesuai
      // return res.status(200).json({ msg: "Login berhasil" });
      req.session.userId = user.uuid;
      const { uuid, name, email, role } = user;
      res.status(200).json({ uuid, name, email, role });
    } else {
      return res.status(400).json({ msg: "Password yang dimasukkan salah" });
    }
  } catch (error) {
    console.error("Kesalahan selama proses login:", error);
    return res.status(500).json({ msg: "Kesalahan server internal" });
  }
};

// export const Me = async (req, res) => {
//   try {
//     // Pastikan pengguna sudah login
//     if (!req.session.userId) {
//       return res.status(401).json({ msg: 'Mohon login ke akun Anda' });
//     }

//     // Log the value of req.session.userId for debugging
//     console.log('User ID from session:', req.session.userId);

//     // Ambil informasi pengguna berdasarkan ID sesi
//     const q = "SELECT * FROM user WHERE id = ?";
//     const [rows] = await db.execute(q, [req.session.userId]);

//     // Pastikan pengguna ditemukan
//     if (rows.length === 0) {
//       return res.status(404).json({ msg: 'User tidak ditemukan' });
//     }

//     // Kirim informasi pengguna sebagai respons
//     const user = rows[0];
//     res.status(200).json(user);

//   } catch (error) {
//     console.error("Kesalahan selama proses mendapatkan informasi pengguna:", error);
//     return res.status(500).json({ msg: "Kesalahan server internal" });
//   }
// };

export const Me = async (req, res) => {
  try {
    // Pastikan pengguna sudah login
    if (!req.session.userId) {
      return res.status(401).json({ msg: 'Mohon login ke akun Anda' });
    }

    // Log the value of req.session.userId for debugging
    console.log('User ID from session:', req.session.userId);

    // Ambil informasi pengguna berdasarkan UUID sesi
    const q = "SELECT * FROM user WHERE uuid = ?";
    const [rows] = await db.execute(q, [req.session.userId]);

    // Pastikan pengguna ditemukan
    if (rows.length === 0) {
      return res.status(404).json({ msg: 'User tidak ditemukan' });
    }

    // Kirim informasi pengguna sebagai respons
    const user = rows[0];
    res.status(200).json(user);

  } catch (error) {
    console.error("Kesalahan selama proses mendapatkan informasi pengguna:", error);
    return res.status(500).json({ msg: "Kesalahan server internal" });
  }
};
