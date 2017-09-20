import React, {Component} from 'react';
import {TextFieldGroup} from '../../layout/TextFieldGroup';
import classnames from 'classnames';
import usertypes from '../../../le/eng/users/usertypes';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {isTypeExists, userTypeRequest} from '../../../actions/usertypeActions';
import {addFlashMessages} from '../../../actions/flashMessages';
import validateInput from '../../../utils/validations/usertype';

class UserTypesCreate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			typename: "",
			typeId: "",
			errors: {},
			isLoading: false,
			invalid: false
		}

		this.handlerOnSubmit = this.handlerOnSubmit.bind(this);
		this.handlerOnChange = this.handlerOnChange.bind(this);
		this.handlerIsTypeExists = this.handlerIsTypeExists.bind(this);
	}

	handlerOnChange(e) {
		this.setState({
			[e.target.name]: e.target.value.toLowerCase()
		});
	}

	handlerIsTypeExists(e) {
		const field = e.target.name;
		const val = e.target.value;
		if (val !== "") {
			this.props.isTypeExists(val).then(res => {
				let errors = this.state.errors;
				let invalid;

				if (res.data.type) {
					errors[field] = "There is type with such " + field;
					invalid = true;
				} else {
					errors[field] = "";
					invalid = false;
				}
				this.setState({errors, invalid});
			});
		};
	}

	isValid() {
		const {errors, isValid} = validateInput(this.state);
		if (!isValid) {
			return this.setState({errors});
		}
		return isValid;
	}

	handlerOnSubmit(e) {
		e.preventDefault();
		if (this.isValid()) {
			this.setState({errors: {}, isLoading: true});
			this.props.userTypeRequest(this.state)
				.then(() => {
					this.props.addFlashMessages({
						type: "success",
						text: "You have created new user type successful"
					});
					this.context.router.history.push('/users/types/');
				})
				.catch(
					(error) => this.setState({errors: error.response.data, isLoading: false})
				);
		};
	}

	render() {
		const {typename, typeId, errors, isLoading, invalid} = this.state;
		return (
			<form className={classnames("ui", "form signup", {loading: this.state.isLoading})} onSubmit={this.handlerOnSubmit}>
				<h1>{usertypes.createUserType}</h1>
				<TextFieldGroup
					error={errors.typename}
					label={usertypes.typenameLabel}
					onChange={this.handlerOnChange}
					value={typename}
					field="typename"
					isUserExists={this.handlerIsTypeExists}
				/>
				<TextFieldGroup
					error={errors.typeId}
					label={usertypes.idLabel}
					onChange={this.handlerOnChange}
					value={typeId}
					field="typeId"
					isUserExists={this.handlerIsTypeExists}
				/>
				<div className="field create-type-button">
					<div className="create-type-button">
						<button
							disabled={isLoading || invalid }
							className="ui orange basic right floated button"
						>{usertypes.saveButton}</button>
					</div>
				</div>
			</form>
		);
	}
}

UserTypesCreate.propTypes = {
	userTypeRequest: PropTypes.func.isRequired,
	isTypeExists: PropTypes.func.isRequired,
	addFlashMessages: PropTypes.func.isRequired
}

UserTypesCreate.contextTypes = {
	router: PropTypes.object.isRequired
}

export default connect(null, {userTypeRequest, isTypeExists, addFlashMessages})(UserTypesCreate);
