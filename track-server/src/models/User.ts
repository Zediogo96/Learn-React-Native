import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
  username: string;
  email: string;
  password: string;
}

const userSchema: Schema<IUser> = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
);

userSchema.methods.toJSON = function () {
	const user = this.toObject();
	delete user.password;
	return user;
};

export const User = mongoose.model<IUser>("User", userSchema);
