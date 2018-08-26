import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../app/user/actions';

export interface IProps {
    signoutUser?: () => any;
}

class Signout extends PureComponent<IProps> {

    constructor(props: IProps) {
        super(props)
    }

    componentWillMount() {
        this.props.signoutUser();
    }

    render() {
        return (
            <div>Sorry to see you go ...</div>
        )
    }
}

export default connect(null, actions)(Signout);