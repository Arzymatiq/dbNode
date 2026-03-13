import Post from "../model/Post.js";
import FielServis from "./FielServis.js";

class PostServis {
  async create(body, image) {
    if (body.colors) {
      body.colors = JSON.parse(body.colors);
    }

    const fileName = await FielServis.saveFile(image);
    const post = await Post.create({ ...body, image: fileName });
    return post;
  }

  async getAll() {
    return await Post.find();
  }

  async getOne(id) {
    if (!id) throw new Error("ID is required");

    return await Post.findById(id);
  }

  async update(id, body) {
    if (!id || !body) throw new Error("Invalid data");

    return await Post.findByIdAndUpdate(id, body, { new: true });
  }

  async delete(id) {
    if (!id) throw new Error("ID is required");

    return await Post.findByIdAndDelete(id);
  }
}

export default new PostServis();
