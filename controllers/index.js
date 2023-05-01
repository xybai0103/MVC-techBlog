const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

//a wildcard route for testing
app.get('*', (req, res) => {
    res.status(404).send('404 Error: Page not found');
});

module.exports = router;
