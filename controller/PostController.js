import PostServis from "../servis/PostServis.js";

class PostController {
  async create(req, res) {
    try {
      console.log(req.files.image);

      const post = await PostServis.create(req.body, req.files.image);

      res.json(post);
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "Server error" });
    }
  }

  async getAll(req, res) {
    try {
      const posts = await PostServis.getAll();
      res.json(posts);
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "Server error" });
    }
  }

  async getOne(req, res) {
    try {
      const onePost = await PostServis.getOne(req.params.id);
      res.json(onePost);
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "Server error" });
    }
  }

  async update(req, res) {
    try {
      const updatePost = await PostServis.update(req.params.id, req.body, {
        new: true
      });
      res.json(updatePost);
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "Server error" });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const deletePost = await PostServis.delete(id);

      res.json(deletePost);
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "Server error" });
    }
  }
}

export default new PostController();
