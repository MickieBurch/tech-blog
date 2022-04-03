const router = require('express').Router();
const blogRoutes = require('./blog-Routes');
const commentRoutes = require('./comment-Routes');
const userRoutes = require('./user-Routes');

router.use('/blogs', blogRoutes);
router.use('/comments', commentRoutes);
router.use('/users', userRoutes);

module.exports = router;


