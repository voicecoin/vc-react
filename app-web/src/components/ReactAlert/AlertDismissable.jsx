import { FormattedMessage } from 'react-intl';

class AlertDismissable extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.handleDismiss = this.handleDismiss.bind(this);
		this.handleShow = this.handleShow.bind(this);

		this.state = {
			show: true
		};
	}

	handleDismiss() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}

	render() {
		if (this.state.show) {
			return (
				<Alert bsStyle="danger" onDismiss={this.handleDismiss}>
					<h4>{this.props.header}</h4>
					<p>
						{this.props.content}
					</p>
					<p>
						<Button bsStyle="danger">
							<FormattedMessage id='alertdismissable.run' defaultMessage='Take this action' />
						</Button>
						<span>
							<FormattedMessage id='alertdismissable.or' defaultMessage=' or ' />
						</span>
						<Button onClick={this.handleDismiss}>
							<FormattedMessage id='alertdismissable.hide' defaultMessage='Hide Alert' />
						</Button>
					</p>
				</Alert>
			);
		}

		return <Button onClick={this.handleShow}>
			<FormattedMessage id='alertdismissable.show' defaultMessage='Show Alert' />
		</Button>;
	}
}