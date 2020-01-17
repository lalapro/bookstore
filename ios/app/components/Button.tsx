import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {StyleConfig} from '../configs';

const {green, nobelBold, white, grey7, BOT_PADDING} = StyleConfig;

const styles = StyleSheet.create({
  defaultButton: {
    height: 55,
    backgroundColor: green,
    borderColor: green,
    borderRadius: 100,
    position: 'absolute',
    bottom: BOT_PADDING,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    borderWidth: 2,
  },
  defaultText: {
    fontFamily: nobelBold,
    fontSize: 14,
    letterSpacing: 1,
    color: white,
    textAlign: 'center',
  },
  disabled: {
    backgroundColor: grey7,
    borderColor: grey7,
  },
});

type Props = {
  style: object;
  onPress: () => void;
  text: string;
  textStyle: object;
  disabled: boolean;
};

type State = {
  lastPressedTime: number;
};

export default class Button extends React.PureComponent<Props, State> {
  state = {lastPressedTime: 0};

  canNavigate = () => {
    const {lastPressedTime} = this.state;
    const now = Date.now();
    if (!lastPressedTime || lastPressedTime + 750 < now) {
      this.setState({lastPressedTime: now});
      return true;
    }
    return false;
  };

  handlePress = () => {
    const {onPress} = this.props;
    if (this.canNavigate()) {
      onPress();
    }
  };

  render() {
    const {style, text, textStyle, disabled} = this.props;
    return (
      <TouchableOpacity
        style={[styles.defaultButton, style, disabled && styles.disabled]}
        onPress={this.handlePress}
        disabled={disabled}>
        <Text allowFontScaling={false} style={[styles.defaultText, textStyle]}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  }
}
