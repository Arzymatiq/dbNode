import Post from "../model/Post.js"

class PostController{
    async create(req,res){
        try{
            const {title, author,price,description} = req.body
            const post = await Post.create({title, author,price,description})
            res.json(post)
        }catch(e){
            throw new Error(e)
        }
    }
    async getAll(req,res){
        try{
           const posts = await Post.find()
           res.json(posts)
        }catch(e){
            throw new Error(e)
        }
    }
    async getOne(req,res){
        try{    
            const {id} = req.params
            const onePost = await Post.findById(id)
            res.json(onePost)
         }catch(e){
             throw new Error(e)
         }
    }
    async update(req,res){
        try{    
            const {id} = req.params
            const {title, author,price,description} = req.body
            const updatePost = await Post.findByIdAndUpdate(id,{title, author,price,description}, {new:true})
            res.json(updatePost)
         }catch(e){ 
             throw new Error(e)
         }
    }
    async delete(req,res){
        try{    
            const {id} = req.params
            const deletPost = await Post.findByIdAndDelete(id)
            res.json(deletPost)
         }catch(e){
             throw new Error(e)
         }
    }
}

export default new PostController()