import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";
// import Users from "./UserModel";

const {DataTypes} = Sequelize;

const Blog = db.define('blog', {
    uuid: {
        type : DataTypes.STRING,
        defaultValue : DataTypes.UUIDV4,
        allowNull : false,
        validate : {
            notEmpty : true,
        }
    },
    title: {
        type : DataTypes.STRING,
        allowNull : false,
        validate : {
            notEmpty : true,
            len : [3, 100]
        }
    },
    deskripsi: {
        type : DataTypes.STRING,
        allowNull : false,
        validate : {
            notEmpty : true,
            len : [3, 10000]
        }
    },
    img: {
        type : DataTypes.STRING,
        allowNull : false,
        validate : {
            notEmpty : true,
        }
    },
    userId: {
        type : DataTypes.INTEGER,
        allowNull : false,
        validate : {
            notEmpty : true,
        }
    },
}, {
    freezeTableName : true,
});

Users.hasMany(Blog);
Blog.belongsTo(Users, { foreignKey : 'userId'});

export default Blog;