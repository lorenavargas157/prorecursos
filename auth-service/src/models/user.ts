const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
    },
    userName: {
      type: String,
      trim: true,
      unique: [true, "El nombre de usuario ya existe"],
    },
    email: {
      type: String,
      trim: true,
      unique: [true, "El correo ya existe"],
    },
    userType: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const User = model("User", UserSchema);

export { User };
