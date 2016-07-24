/* @flow */

import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';

import { lookupStock } from '../../actions/dimeActions';

class PurchaseCreateView extends Component {
  state: Object = {
    placeholderText: 'XYZ',
    text: '',
    lookupPending: null,
  };

  constructor(props: Object) {
    super(props);
    console.log('state: ', this.state);
  }

  handleTextChange = (text: string) => {
    console.log('text: ', text);
    if (this.state.lookupPending) {
      clearTimeout(this.state.lookupPending);
    }
    const timeout = setTimeout(() => {
      this.props.dispatch(lookupStock(this.state.text));
    }, 500);
    this.setState({
      text: text,
      lookupPending: timeout,
    });
  };

  componentWillReceiveProps = (nextProps: Object) => {
    console.log('about to receive props', nextProps);
  };

  render() {
    let resultView = null;
    const lookupResult = this.props.lookup.lookupResults[this.state.text];
    const symbolValidatorStyle = [_styles.symbolValidatorFeedback];
    if (lookupResult) {
      symbolValidatorStyle.push(_styles.symbolValidatorFeedbackValidated);
    }
    return (
      <View style={_styles.view}>
        <View style={_styles.title}>
          <Text style={_styles.titleText}>Symbol</Text>
        </View>
        <View style={_styles.textInputView}>
          <TextInput
            style={_styles.textInput}
            placeholder={this.state.placeholderText.toUpperCase()}
            placeholderTextColor='gray'
            value={this.state.text.toUpperCase()}
            onChangeText={this.handleTextChange} />
          <View style={symbolValidatorStyle}></View>
        </View>
      </View>
    )
  }
}

const _styles: Object = StyleSheet.create({
  view: {
    backgroundColor: 'green',
    paddingTop: 22,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 4,
    flex: 1,
    paddingLeft: 30,
  },
  title: {
    marginTop: 30,
  },
  titleText: {
    color: 'black',
    fontFamily: 'Helvetica',
    fontSize: 30,
  },
  textInputView: {
    position: 'relative',
    height: 80,
    backgroundColor: 'transparent',
    borderBottomColor: 'gray',
    borderBottomWidth: 1
  },
  textInput: {
    marginTop: 25,
    fontSize: 30,
    flex: 1,
    marginBottom: 25,
  },
  symbolValidatorFeedback: {
    position: 'absolute',
    height: 20,
    width: 20,
    backgroundColor: 'red',
    right: 15,
    top: 30,
  },
  symbolValidatorFeedbackValidated: {
    backgroundColor: 'green',
  },
  resultView: {
    backgroundColor: 'yellow',
    flex: 1,
  },
  resultRow: {
    color: 'black',
  },
});

const mapStateToProps: Function = (state: Object) => {
  console.log(`mapping state to props`, state);
  return {
    lookup: state.lookup,
  };
}

export default connect(
  mapStateToProps
)(PurchaseCreateView)
