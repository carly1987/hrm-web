import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import { History } from 'react-router';
import { Tabs, Button, Tab } from 'react-bootstrap';
import { getUserInfo } from '../../api/ajax';

const list = [
	{
		title: '基本信息',
		key: 'base'
	},
	{
		title: '健康信息',
		key: 'healthy'
	},
	{
		title: '就诊记录',
		key: 'doctor'
	}
];

export default class Layout extends React.Component {
	static propTypes = {
		activeKey: PropTypes.string
	}
	static contextTypes = {
		router: PropTypes.object
	}
	static context = {
		router: History
	}
	constructor(props){
		super(props);
		this.state = {
			user: ''
		}
	}

	handleSelect = (key) => {
		this.context.router.push(key);
	}

	getData () {
		getUserInfo({
			id: '222'
		}, (res) => {
			this.setState({
				user: res.data.user
			});
		}, (err) => {
			console.log(err);
		})
	}

	componentDidMount() {
		this.getData();
	}

	render() {
		const {
			activeKey,
			children
		} = this.props;
		const {
			user
		} = this.state;
		return (
			<div>
				<div>欢迎： {user}</div>
				<Tabs defaultActiveKey={activeKey} onSelect={this.handleSelect} id="tabs">
					{
						list.map((item, index) => (
							<Tab eventKey={item.key} title={item.title} key={item.key}>
								{
									item.key == activeKey ? children : null
								}
							</Tab>
						))
					}
				</Tabs>
			</div>
		);
	}
}

