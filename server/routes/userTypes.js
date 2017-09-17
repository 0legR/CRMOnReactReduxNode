import express from 'express';
import UserTypes from '../models/userTypes';
import commonValidations from '../validations/userTypes';

let router = express.Router();

function validateInput(data, otherValidations) {
	let {errors} =otherValidations(data);
	return UserTypes.query({
		where: {id: data.id},
		orWhere: {typename: data.typename}
	}).fetch().then((type) => {
		if (type) {
			if (type.get('typename') === data.typename) {
				errors.typename = "There is type with such type-name!";
			}
			if (type.get('id') === data.id) {
				errors.id = "There is type with such identifier!";
			}
		}
		return {errors, isValid: isEmpty(errors)};
	});
}

router.post('/', (req, res) => {
	validateInput(req.body, commonValidations)
		.then(({errors, isValid}) => {
			if (isValid) {
				const {typename, id} = req.body;
				UserTypes.forge(
					{typename, id},
					{hasTimestamps: true}
				).save().then(type => res.json({success: true}))
				.catch(err => res.status(500).json({error: err}));
			} else {
				res.status(400).json(errors);
			}
		});
});

export default router;
