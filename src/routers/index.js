import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import BaseContainer from '../containers/base/';
import HealthyContainer from '../containers/healthy/';
import DoctorContainer from '../containers/doctor/';

const onRouteEnter = (nextSatte) => {
}

const onRouteChange = (prevState, nextSatte) => {
}

export default (
	<Route path="/" onEnter={onRouteEnter} onChange={onRouteChange}>
		<Route path="/base" component={BaseContainer} title="基本信息"/>
		<Route path="/healthy" component={HealthyContainer} title="健康信息"/>
		<Route path="/doctor" component={DoctorContainer} title="就诊记录"/>
		<IndexRedirect to="/base" />
		<Route path="*" compoent={BaseContainer} />
	</Route>
);