import Post from "../model/Post.js";

class PostServis {
  async create(body) {
    const post = await Post.create({ title, author, price, description });
    return post;
  }
  async getAll() {
    const posts = await Post.find();
    return posts;
  }
  async getOne(id) {
    if (!id) return console.log(error);

    const onePost = await Post.findById(id);
    return onePost;
  }
  async update(id, body) {
    if (!id || !body) return console.log(error);

    const updatePost = await Post.findByIdAndUpdate(id, body, { new: true });
    return updatePost;
  }
  async delete(id) {
    if (!id) return console.log("error");
    const deletPost = await Post.findByIdAndDelete(id);
    return deletPost;
  }
}
export default new PostServis();
