const router = require('express').Router();
const db = require("../models");

router.get('/api/workouts', (req, res) => {
	db.find()
		.then((allWorkouts) => {
			res.send(allWorkouts);
		})
		.catch((err) => {
			res.json(err);
		});
});

router.get('/api/workouts/range', (req, res) => {
	db.find({})
		.limit(7)
		.then((lastWeeksWorkouts) => {
			res.json(lastWeeksWorkouts);
		})
		.catch((err) => {
			res.json(err);
		});
});

router.post('/api/workouts', (req, res) => {
	db.create(req.body)
		.then((newWorkout) => {
			res.json(newWorkout);
		})
		.catch((err) => {
			res.json(err);
		});
});

router.put('/api/workouts/:id', (req, res) => {
	db.findByIdAndUpdate(
		req.params.id,
		{
			$push: { exercises: req.body }
		},
		{
			new: true,
			runValidators: true
		}
	)
		.then((workoutsById) => {
			res.json(workoutsById);
		})
		.catch((err) => {
			res.json(err);
		});
});

module.exports = router;