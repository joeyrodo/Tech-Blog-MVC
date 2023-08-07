const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    console.log('======================');
  Post.findAll({
    attributes: [
      'id',
      'post_content',
      'title',
      'created_at'
    ],
    include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(postData => res.json(postData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.post('/', withAuth, async (req, res) => {
    const content = req.body.content;
    const title  = req.body.title;
    
    try {
      const newPost = await Post.create({  userId: req.session.userId, content, title});
      res.json(newPost);
    } catch (err) {
        console.log(err)
      res.status(500).json(err);
    }
  });

  
module.exports = router;