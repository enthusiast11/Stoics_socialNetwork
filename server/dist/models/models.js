"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = exports.UserRole = exports.Comment = exports.Bookmark = exports.Subcription = exports.Role = exports.Message = exports.Meet = exports.Post = exports.User = void 0;
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../db"));
exports.User = db_1.default.define("user", {
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: ''
    },
    avatar: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: null
    },
    location: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: ''
    },
    quote: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: ''
    },
    about: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: ''
    },
    email: sequelize_1.DataTypes.STRING,
    password: sequelize_1.DataTypes.STRING,
    role: sequelize_1.DataTypes.STRING
});
exports.Post = db_1.default.define("post", {
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    photo: {
        type: sequelize_1.DataTypes.BLOB('long'),
        defaultValue: null
    },
    releaseData: sequelize_1.DataTypes.STRING,
    header: sequelize_1.DataTypes.STRING,
    mainText: sequelize_1.DataTypes.STRING,
    author: sequelize_1.DataTypes.STRING,
});
exports.Meet = db_1.default.define("meet", {
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    organizator: sequelize_1.DataTypes.STRING,
    theme: sequelize_1.DataTypes.STRING,
    location: sequelize_1.DataTypes.STRING,
    description: sequelize_1.DataTypes.STRING,
    price: sequelize_1.DataTypes.STRING || " ",
});
exports.Message = db_1.default.define("message", {
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    avatar: {
        type: sequelize_1.DataTypes.BLOB('long'),
        defaultValue: null
    },
    text: sequelize_1.DataTypes.STRING,
    session: sequelize_1.DataTypes.STRING,
    file: sequelize_1.DataTypes.STRING || undefined,
});
exports.Role = db_1.default.define("role", {
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: sequelize_1.DataTypes.STRING
});
exports.Subcription = db_1.default.define("subcription", {
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    author: sequelize_1.DataTypes.STRING,
});
exports.Bookmark = db_1.default.define("bookmark", {
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    header: sequelize_1.DataTypes.STRING,
});
exports.Comment = db_1.default.define("comment", {
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    author: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    text: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    file: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    } || undefined,
    avatar: {
        type: sequelize_1.DataTypes.BLOB('long'),
        defaultValue: null
    },
});
exports.UserRole = db_1.default.define("UserRole", {
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
});
exports.Token = db_1.default.define('token', {
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    token: sequelize_1.DataTypes.STRING
});
const UserSubs = db_1.default.define('UserSubs', {
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
});
exports.User.hasMany(exports.Post);
exports.Post.belongsTo(exports.User);
exports.User.hasMany(exports.Bookmark);
exports.Bookmark.hasOne(exports.User);
exports.User.hasMany(exports.Meet);
exports.Meet.hasOne(exports.User);
exports.User.hasMany(exports.Message);
exports.Message.hasOne(exports.User);
exports.User.hasMany(exports.Comment);
exports.Comment.hasOne(exports.User);
exports.User.hasMany(exports.Role);
exports.Role.belongsToMany(exports.User, { through: exports.UserRole });
exports.User.hasOne(exports.Token);
exports.Token.belongsTo(exports.User);
exports.User.belongsToMany(exports.User, {
    through: UserSubs,
    as: 'Subscribers',
    foreignKey: 'userId',
    otherKey: 'subscriberId'
});
exports.User.belongsToMany(exports.User, {
    through: UserSubs,
    as: 'Subscriptions',
    foreignKey: 'subscriberId',
    otherKey: 'userId'
});
