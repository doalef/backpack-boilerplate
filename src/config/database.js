import mongoose from "mongoose";
const uri = "mongodb://127.0.0.1:27017/";
export default () => {
  mongoose.connect(uri, err => {
    console.log(
      err ? err.message : "Connected to database!"
    );
  });
};
