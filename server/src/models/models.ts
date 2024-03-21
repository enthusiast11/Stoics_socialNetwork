import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../db";

export const User = sequelize.define("user", {
  id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
  name: {
    type:DataTypes.STRING,
    defaultValue: ''
  },
  avatar: {
    type:DataTypes.BLOB('long'),
    defaultValue: null
  },
  location: {
    type:DataTypes.STRING,
    defaultValue: ''
  },
  quote: {
    type:DataTypes.STRING,
    defaultValue: ''
  },
  about: {
    type:DataTypes.STRING,
    defaultValue: ''
  },
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  role: DataTypes.STRING

});

export const Post = sequelize.define("post", {
  id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
  photo: {
    type:DataTypes.BLOB('long'),
    defaultValue: null
  },
  releaseData: DataTypes.STRING,
  header: DataTypes.STRING,
  mainText: DataTypes.STRING,
  author: DataTypes.STRING,
});

export const Meet = sequelize.define("meet", {
  id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
  organizator: DataTypes.STRING,
  theme: DataTypes.STRING,
  location: DataTypes.STRING,
  description: DataTypes.STRING,
  price: DataTypes.STRING || " ",
});

export const Message = sequelize.define("message", {
  id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
  avatar: {
    type:DataTypes.BLOB('long'),
    defaultValue: null
  },
  text: DataTypes.STRING,
  session: DataTypes.STRING,
  file: DataTypes.STRING || undefined,
});

export const Role = sequelize.define("role", {
  id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
  name: DataTypes.STRING
});

export const Subcription = sequelize.define("subcription", {
  id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
  author: DataTypes.STRING,
});

export const Bookmark = sequelize.define("bookmark", {
  id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
  header: DataTypes.STRING,
});

export const Comment = sequelize.define("comment", {
  id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
  author: {
  type: DataTypes.STRING,
  allowNull: false
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false
    },
  file: {
    type: DataTypes.STRING,
    allowNull: false
    } || undefined,
  avatar: {
    type:DataTypes.BLOB('long'),
    defaultValue: null
  },
});

export const UserRole = sequelize.define("UsersRole", {
  id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
});

User.hasMany(Post);
Post.belongsTo(User);

User.hasMany(Bookmark);
Bookmark.hasOne(User);

User.hasMany(Meet);
Meet.hasOne(User);

User.hasMany(Message);
Message.hasOne(User);

User.hasMany(Comment);
Comment.hasOne(User);

User.hasMany(Subcription);
Subcription.hasOne(User);

User.hasMany(Role);
Role.belongsToMany(User, {through: UserRole});