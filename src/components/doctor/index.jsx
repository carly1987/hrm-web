import React from 'react';
import ReactDom from 'react-dom';
import { Form, FormGroup, FormControl, Checkbox, Button, Col } from 'react-bootstrap';
import Layout from '../layout';

export default class Doctor extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<Layout activeKey="doctor">
				<div>就诊记录</div>
			</Layout>
		);
	}
}

