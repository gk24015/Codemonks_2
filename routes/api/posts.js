const express = require("express");
const router = express.Router();
const Post = require("../../models/Post");
const passport = require("passport");
const validatePostInput = require("../../validation/post");

// @route - GET api/posts/:author
// @desc - get blog posts of the current user
// @access - public


router.get("/post/:id", (req, res) => {
   Post.find({ _id: req.params.id })
      .then(post => res.status(200).json(post))
      .catch(err => res.status(400).json({ id: "Error fetching post by id" }));
});
// tentative
// home page of posts
router.get("/home",(req,res)=>{
   Post.find({})
   .then(post=>res.status(200).json(post))
   .catch(err => res.status(400).json({id:"Error fetching post"}));
})


router.post(
   "/create",
   passport.authenticate("jwt", { session: false }),
   (req, res) => {

     const author=req.body.name;
      const post = req.body;
      const { errors, isValid } = validatePostInput(post);
      if (!isValid) {
         return res.status(400).json(errors);
      }
      post.author = author;
      const newPost = new Post(post);
      newPost
         .save()
         .then(doc => res.json(doc))
         .catch(err => console.log({ create: "Error creating new post" }));
   }
);

// @route - PUT api/posts/update/:id
// @desc - updates an existing post
// @access - private

router.patch(
   "/update/:id",
   passport.authenticate("jwt", { session: false }),
   (req, res) => {
      const author = req.user.name;
      const { errors, isValid } = validatePostInput(req.body);
      if (!isValid) {
         return res.status(400).json(errors);
      }
      const { title, body } = req.body;
      Post.findOneAndUpdate(
         { author, _id: req.params.id },
         { $set: { title, body } },
         { new: true }
      )
         .then(doc => res.status(200).json(doc))
         .catch(err =>
            res.status(400).json({ update: "Error updating existing post" })
         );
   }
);

// @route - DELETE api/posts/delete/:id
// @desc - deletes a post
// @access - private

router.delete(
   "/delete/:id",
   passport.authenticate("jwt", { session: false }),
   (req, res) => {
      const author = req.user.name;
      Post.findOneAndDelete({ author, _id: req.params.id })
         .then(doc => res.status(200).json(doc))
         .catch(err =>
            res.status(400).json({ delete: "Error deleting a post" })
         );
   }
);

module.exports = router;