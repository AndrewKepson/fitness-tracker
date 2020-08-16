const router = require('express').Router();
const path = require('path');

router.get('/excercise', (req, res) => {
	res.sendFile(path.join(__dirName, '../public/exercise.html'));
});

router.get('/stats', (req, res) => {
	res.sendFile(path.join(__dirName, '../public/stats.html'));
});

module.exports = router;