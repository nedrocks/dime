/* @flow */

import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const _styles = StyleSheet.create({
  entryView: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'black',
  },

  symbol: {
    marginLeft: 30,
    justifyContent: 'center',
    textAlign: 'left',
    color: 'white',
  },

  delta: {
    marginRight: 30,
    justifyContent: 'center',
    textAlign: 'right',
    color: 'white',
  },
});

class DashboardEntry extends Component {
  state: Object = {};

  constructor(props: Object) {
    super(props);
  }

  render() {
    const delta = this.props.numShares *
      (this.props.currentPrice - this.props.purchasePrice);
    return (
      <View style={_styles.entryView}>
        <View style={{flex: 1}}><Text style={_styles.symbol}>${this.props.symbol}</Text></View>
        <View style={{flex: 1}}><Text style={_styles.delta}>+/- ${delta}</Text></View>
      </View>
    );
  }
}

DashboardEntry.propTypes = {
  id: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  currentPrice: PropTypes.number.isRequired,
  purchasePrice: PropTypes.number.isRequired,
  numShares: PropTypes.number.isRequired,
};

export default DashboardEntry;
