import React, { Component } from 'react';
import { IState, StateProps } from './types';

export default class Location extends Component<StateProps, IState> {
  constructor(props: StateProps) {
    super(props);

    this.state = {
      location: '',
      type: '',
      text: ''
    };
  }

  componentDidMount() {}

  updateLocation = (location: any) => {
    this.setState({ location: location });
  };
  updateType = (type: any) => {
    this.setState({ type: type });
  };

  handlePress = () => false;

  render() {
    return (
      <div>
        Location
      </div>
    );
  }
}

