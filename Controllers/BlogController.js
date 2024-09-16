const Blog = require('../Models/blogModel')

const createBlog = async (req, res) => {
    try {
        const blog = await Blog.create(req.body)
        res.status(200).json(blog)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

const getBlogs = async (req, res) => {
    try {
        const blog = await Blog.find()
        res.status(200).json(blog)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

const getBlog = async (req, res) => {
    try {
        const { id } = req.params
        const blog = await Blog.findById(id)
        res.status(200).json(blog)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

const likes = async (req, res) => {
    const id = req.params.id; 
  
    try {
      const blog = await Blog.findById(id);
  
      if (!blog) {
        return res.status(404).json({ message: 'Blog not found' });
      }
  
      blog.likes += 1;
  
      await blog.save();
  
      return res.status(200).json({ message: 'Like added successfully', likesCount: blog.likes });
    } catch (error) {
      console.error('Error adding like:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  const dislike = async (req, res) => {
    const id = req.params.id; 
  
    try {
      const blog = await Blog.findById(id);
  
      if (!blog) {
        return res.status(404).json({ message: 'Blog not found' });
      }
  
      if (blog.likes > 0) {
        blog.likes -= 1;
      }
  
      await blog.save();
  
      return res.status(200).json({ message: 'Unlike successful', likesCount: blog.likes });
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
 

const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params
        const blog = await Blog.findByIdAndDelete(id)
        res.status(200).json("User deleted successfully")
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

const updateBlog = async (req, res) => {
    try{
        const { id } = req.params
        const blog = await Blog.findByIdAndUpdate(
            {_id: id},
            req.body,
            {
                new: true,
                runValidators: true
            }
        )
        if(!blog){
            res.status(404).json(`No task with that id.`)
        }
        res.status(200).json(blog)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

module.exports = {
    createBlog,
    getBlogs,
    getBlog,
    deleteBlog,
    updateBlog,
    likes,
    dislike
}