/* @flow */

import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import Counter from '../components/counter';
import * as counterActions from '../actions/dimeActions';
import { connect } from 'react-redux';

import DashboardView from '../components/dashboard/DashboardView';
import PurchaseCreateView from '../components/purchase/PurchaseCreateView';

class DimeApp extends Component {
  constructor(props: Object) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    return (
      <PurchaseCreateView
        {...actions}/>
    )
  }
}

export default DimeApp;

// export default connect(state => ({
//     state: state.counter
//   }),
//   (dispatch) => ({
//     actions: bindActionCreators(counterActions, dispatch)
//   })
// )(CounterApp);
