const express = require("express")
const { createBlog, getBlogs, getBlog, deleteBlog, updateBlog, likes, dislike} = require("../Controllers/BlogController")
const router = express.Router()

//Kreiranje bloga
router.post("/blogs/" , createBlog)

//Uzimanje svih blogova
router.get("/blogs/" , getBlogs)

//Uzimanje jednog bloga sa njegovim id-om
router.get("/blogs/:id" , getBlog)

//Brisanje bloga
router.delete("/blogs/:id" , deleteBlog)

//Azuriranje bloga
router.put("/blogs/:id" , updateBlog)

//Dodavanje +1 na like
router.post("/blogs/:id/like", likes);

//Oduzimanje -1 na like
router.post("/blogs/:id/unlike", dislike);


module.exports = router