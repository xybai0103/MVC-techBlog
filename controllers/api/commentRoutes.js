const router = require('express').Router();
const { User, BlogPost, Comment } = require('../../models');

router.post('/blogPost/:id', withAuth, async (req, res) => {
  try {
    await Comment.create(req.body);

    const blogPostData = await BlogPost.findAll({
      where: {id: req.params.id},
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          attributes: ['content', 'data_posted'],
          include: {
            model: User,
            attributes: ['username'],
          }
        }
      ],
    });

    const blogPosts = blogPostData.map((blogPost) => blogPost.get({ plain: true }));

    res.render('comment', {
      ...blogPosts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});