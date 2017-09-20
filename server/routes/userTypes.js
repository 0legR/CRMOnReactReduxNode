import express from 'express';
import UserTypes from '../models/userTypes';
import commonValidations from '../validations/userTypes';
import isEmpty from 'lodash/isEmpty';

let router = express.Router();

function validateInput(data, otherValidations) {
	let {errors} =otherValidations(data);
	return UserTypes.query({
		where: {typeId: data.typeId},
		orWhere: {typename: data.typename}
	}).fetch().then((type) => {
		if (type) {
			if (type.get('typename') === data.typename) {
				errors.typename = "There is type with such type-name!";
			}
			if (type.get('typeId') === data.typeId) {
				errors.typeId = "There is type with such identifier!";
			}
		}
		return {errors, isValid: isEmpty(errors)};
	});
}

router.post('/', (req, res) => {
	validateInput(req.body, commonValidations)
		.then(({errors, isValid}) => {
			if (isValid) {
				const {typename, typeId} = req.body;
				UserTypes.forge(
					{typename, typeId},
					{hasTimestamps: true}
				).save().then(type => res.json({success: true}))
				.catch(err => res.status(500).json({error: err}));
			} else {
				res.status(400).json(errors);
			}
		});
});

router.get('/:identifier', (req, res) => {
	UserTypes.query({
		select: ["typename", "typeId"],
		where: {typename: req.params.identifier},
		orWhere: {typeId: req.params.identifier} 
	}).fetch().then(type => {res.json({type})});
});

router.get('/', (req, res) => {
	UserTypes.query({
		select: ["typename", "typeId"]
	}).fetchAll().then(types => {res.json({types})});
});

export default router;
