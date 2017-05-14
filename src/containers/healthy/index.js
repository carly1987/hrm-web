import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Healthy from '../../components/healthy';
import * as actions from '../../actions/healthy';

function mapStateToProps(state) {
	return { ...state.healthy, tab: 'healthy'};
}

function mapDispatchToProps(dispatch) {
	return {
		action: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Healthy);