/* @flow */

import React, { Component } from 'react';
import { AppRegistry, ListView, StyleSheet, View } from 'react-native';

import DashboardEntry from './DashboardEntry';

class DashboardView extends Component {
  state: Object = {};
  // Initialize the hardcoded data
  constructor(props: Object) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          id: '1',
          symbol: 'AAPL',
          purchasePrice: 100,
          currentPrice: 1000,
          numShares: 50,
        },
        {
          id: '2',
          symbol: 'FB',
          purchasePrice: 20,
          currentPrice: 111,
          numShares: 20,
        },
        {
          id: '3',
          symbol: 'SQ',
          purchasePrice: 25,
          currentPrice: 8,
          numShares: 100,
        },
      ]),
    };
  }
  render() {
    return (
      <View style={_styles.view}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData: Object): any => <DashboardEntry {...rowData} />}
        />
      </View>
    );
  }
}

const _styles: Object = StyleSheet.create({
  view: {
    backgroundColor: 'green',
    paddingTop: 22,
    flex: 1,
    flexDirection: 'row',
  }
})

export default DashboardView;
