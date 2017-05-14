import React from 'react';
import ReactDom from 'react-dom';
import { Form, FormGroup, FormControl, Checkbox, Button, Col } from 'react-bootstrap';
import Layout from '../layout';

export default class Healthy extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<Layout activeKey="healthy">
				<div>健康信息</div>
			</Layout>
		);
	}
}

