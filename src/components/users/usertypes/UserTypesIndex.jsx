import React, {Component} from 'react';
import usertypes from '../../../le/eng/users/usertypes';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getTypes} from '../../../actions/usertypeActions';
import PropTypes from 'prop-types';

class UserTypesIndex extends Component {
	constructor(props) {
		super(props);
		this.state = {
			typename: "",
			typeId: ""
		}
		this.handlerOnChange = this.handlerOnChange.bind(this);
	}

	componentDidMount()	{
		this.props.getTypes();
	}

	handlerOnChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	render() {
		const {typename, typeId} = this.state;
		const userTypes = this.props.types.map(type => 
					<tr key={type.typeId}>
				      <td><div className="usertype-th">{type.typename}</div></td>
				      <td><div className="usertype-th">{type.typeId}</div></td>
				    </tr>);
		return (
			<div>
				<button
					className="ui orange basic right floated button create-button"
				><Link to="/users/types/create">{usertypes.createUserType}</Link></button>
				<table className="ui striped table">
				  <thead>
				    <tr>
				      <th className="">{usertypes.thTypeName}</th>
				      <th>{usertypes.thTypeId}</th>
				    </tr>
				    <tr className="table-filter">
				    	<th>
					    	<div className="ui icon input loading">
					    		<input type="text" name="typename" value={typename} />
					    		<i className="search icon"></i>
				    		</div>
				    	</th>
				    	<th>
				    		<div className="ui icon input loading">
					    		<input type="text" name="typeId" value={typeId} />
					    		<i className="search icon"></i>
				    		</div>
				    	</th>
				    </tr>
				  </thead>
				  <tbody>
				    {userTypes}
				  </tbody>
				</table>
			</div>
		);
	}
}

UserTypesIndex.propTypes = {
	getTypes: PropTypes.func.isRequired,
	types: PropTypes.array.isRequired
}

function mapStateToProps(state) {
	return {
		types: state.userTypes
	}
}

export default connect(mapStateToProps, {getTypes})(UserTypesIndex);