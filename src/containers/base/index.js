import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Base from '../../components/base';
import * as actions from '../../actions/base';

function mapStateToProps(state) {
	return { ...state.base, tab: 'base'};
}

function mapDispatchToProps(dispatch) {
	return {
		action: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Base);