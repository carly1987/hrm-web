import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Doctor from '../../components/doctor';
import * as actions from '../../actions/doctor';

function mapStateToProps(state) {
	return { ...state.doctor, tab: 'doctor'};
}

function mapDispatchToProps(dispatch) {
	return {
		action: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Doctor);