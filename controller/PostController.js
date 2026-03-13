class PostController {
  async create(req, res) {
    try {
      const post = await PostServis.create(req.body);
      res.json(post);
    } catch (e) {
      throw new Error(e);
    }
  }
  async getAll(req, res) {
    try {
      const posts = await PostServis.getAll();
      res.json(posts);
    } catch (e) {
      throw new Error(e);
    }
  }
  async getOne(req, res) {
    try {
      const onePost = await PostServis.getOne(req.params.id);
      res.json(onePost);
    } catch (e) {
      throw new Error(e);
    }
  }
  async update(req, res) {
    try {
      const updatePost = await PostServis.update(req.params.id, req.body, {
        new: true
      });
      res.json(updatePost);
    } catch (e) {
      throw new Error(e);
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      const deletPost = await PostServis.delete(id);
      res.json(deletPost);
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default new PostController();
