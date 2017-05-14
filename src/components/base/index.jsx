import React from 'react';
import ReactDom from 'react-dom';
import { Form, FormGroup, FormControl, Checkbox, Button, Col } from 'react-bootstrap';
import Layout from '../layout';

export default class Base extends React.Component {
	constructor(props){
		super(props);
	}

	save = () => {
		this.props.action.saveBase();
	}

	render() {
		console.log(this.props)
		return (
			<Layout activeKey="base">
				<Form horizontal>
				    <FormGroup controlId="formHorizontalEmail">
				      <Col sm={2}>患者姓名</Col>
				      <Col sm={10}>
				        <FormControl type="text" placeholder="text" />
				      </Col>
				    </FormGroup>

				    <FormGroup controlId="formHorizontalPassword">
				      <Col sm={2}>家庭状况</Col>
				      <Col sm={10}>
				        <FormControl type="text" placeholder="text" />
				      </Col>
				    </FormGroup>

				    <FormGroup>
				      <Col smOffset={2} sm={10}>
				        <Checkbox>Remember me</Checkbox>
				      </Col>
				    </FormGroup>

				    <FormGroup>
				      <Col smOffset={2} sm={10}>
				        <Button type="submit" onClick={this.save}>
				          Sign in
				        </Button>
				        <span>{this.props.stage}</span>
				      </Col>
				    </FormGroup>
				  </Form>
			</Layout>
		);
	}
}

