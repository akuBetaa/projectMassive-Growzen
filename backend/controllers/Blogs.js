import Blog from "../models/BlogModel.js";
import path from "path";

export const getBlogs = async (req, res) => {
    try {
        const response = await Blog.findAll({
            attributes : ['uuid', 'title', 'deskripsi', 'img', 'userId', 'url']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg : error.message });
    }
}

export const getBlogsById = async (req, res) => {
    try {
        const response = await Blog.findOne({
            where : {
                id : req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg : error.message });
    }
}

export const createBlogs = async (req, res) => {
    if (req.files === null)
        return res.status(400).json({ msg : "Gambar belum di upload"});

    const deskripsi = req.body.deskripsi;
    const name = req.body.title;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    
    const allowType = ['.png', '.jpg', '.jpeg'];
    if(!allowType.includes(ext.toLocaleLowerCase())) return res.status(422).json({msg : "Gambar tidak valid"});

    if(fileSize > 5000000) return res.status(422).json({msg : "Gambar tidak boleh lebih dari 5MB"});

    file.mv(`./public/images/${fileName}`, async(err) => {
        if(err)
            return res.status(500).json({msg: err.message});

            try {
                await Blog.create({
                    title: name,
                    deskripsi : deskripsi,
                    img : fileName,
                    userId : req.userId,
                    url : url
                });
                res.status(201).json({ msg : "Artikel berhasil dibuat"})
            } catch (error) {
                res.status(500).json({ msg : error.message })
            }
    })
    
}

export const updateBlogs = (req, res) => {

}

export const deleteBlogs = (req, res) => {

}
