import Blog from "../models/BlogModel.js";
import path from "path";
import fs from "fs";
// import fileUpload from 'express-fileupload';
import Users from "../models/UserModel.js";

export const getBlogs = async (req, res) => {
    try {
        const response = await Blog.findAll({
            attributes: ['uuid', 'title', 'deskripsi', 'img', 'userId', 'url'],
            include: [{
                model: Users,
                attributes: ['name', 'email']
            }]
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const getBlogsById = async (req, res) => {
    try {
        const response = await Blog.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const createBlogs = async (req, res) => {
    if (req.files === null)
        return res.status(400).json({ msg: "Gambar belum di upload" });

    const deskripsi = req.body.deskripsi;
    const name = req.body.title;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

    const allowedType = ['.png', '.jpg', '.jpeg'];
    if (!allowedType.includes(ext.toLocaleLowerCase())) return res.status(422).json({ msg: "Gambar tidak valid" });

    if (fileSize > 5000000) return res.status(422).json({ msg: "Gambar tidak boleh lebih dari 5MB" });

    file.mv(`./public/images/${fileName}`, async (err) => {
        if (err)
            return res.status(500).json({ msg: err.message });

        try {
            await Blog.create({
                title: name,
                deskripsi: deskripsi,
                img: fileName,
                userId: req.userId,
                url: url
            });
            res.status(201).json({ msg: "Artikel berhasil dibuat" })
        } catch (error) {
            res.status(500).json({ msg: error.message })
        }
    })

}

export const updateBlogs = async (req, res) => {
    const blog = await Blog.findOne({
        where: {
            id: req.params.id
        }
    });

    if (!blog)
        return res.status(404).json({ msg: "Data tidak ditemukan" });

    let fileName = "";
    if (!req.files || !req.files.file) {
        fileName = blog.img;
    } else {
        const file = req.files.file;
        const fileSize = file.data.length;
        // const ext = path.extname(file.name);
        const ext = file && file.name ? path.extname(file.name) : '';
        if (!ext) {
            return res.status(422).json({ msg: "Nama file tidak valid" });
        }
        
        fileName = file.md5 + ext;

        const allowedType = ['.png', '.jpg', '.jpeg'];
        if (!allowedType.includes(ext.toLocaleLowerCase())) return res.status(422).json({ msg: "Gambar tidak valid" });

        if (fileSize > 5000000) return res.status(422).json({ msg: "Gambar tidak boleh lebih dari 5MB" });

        //menghapus gamabr
        const filepath = `./public/images/${blog.img}`;
        fs.unlinkSync(filepath);

        //update atau tenoat upload gambaer baru
        file.mv(`./public/images/${fileName}`, (err) => {
            if (err)
                return res.status(500).json({ msg: err.message });
        })
    }

    const deskripsi = req.body.deskripsi;
    const name = req.body.title;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

    try {
        await Blog.update({
            title: name,
            deskripsi: deskripsi,
            img: fileName,
            url: url,
            userId: req.userId
        }, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Artikel berhasil diperbaharui" });
    } catch (error) {
        console.log(error.message);
    }

}

export const deleteBlogs = async (req, res) => {
    const blog = await Blog.findOne({
        where: {
            id: req.params.id
        }
    });

    if (!blog)
        return res.status(404).json({ msg: "Data tidak ditemukan" });

    try {
        const filepath = `./public/images/${blog.img}`;
        fs.unlinkSync(filepath);
        await Blog.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200), json({ msg: "Artikel berhasil di Hapus" })
    } catch (error) {
        console.log(error.message);
    }
}
