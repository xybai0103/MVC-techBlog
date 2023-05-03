const router = require('express').Router();
const { User, BlogPost, Comment } = require('../../models');
const withAuth = require('../utils/auth');

router.post('/blogPost/:id', withAuth, async (req, res) => {
  try {
    await Comment.create(req.body);

    const blogPostCommentData = await BlogPost.findAll({
      where: {id: req.params.id},
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          attributes: ['content', 'date_posted'],
          include: {
            model: User,
            attributes: ['username'],
          }
        }
      ],
    });

    const blogPostComments = blogPostCommentData.map((blogPostComment) => blogPostComment.get({ plain: true }));

    res.render('comment', {
      ...blogPostComments,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});