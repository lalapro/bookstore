// @flow

import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {StyleConfig, Constants} from '../configs';
import {profileActions} from '../redux/actions';
import {Profile, ReduxState} from '../redux/types';

const {white, black, nobel16, grey7} = StyleConfig;
const {FIELD_WIDTH} = Constants;

const styles = StyleSheet.create({
  inputField: {
    ...nobel16,
    backgroundColor: white,
    borderBottomWidth: 1,
    borderColor: black,
    height: 50,
    width: FIELD_WIDTH,
    textAlign: 'left',
    alignItems: 'flex-end',
  },
});

type Props = {
  style: Object;
  ref: string;
  keyboardType: string;
  placeholder: string;
  value: string;
  onChangeText: () => void;
  onSubmitEditing: () => void;
  type: string;
  maxLength: number;
  profile: Profile;
  setProfile: (any) => void;
};

class Field extends React.PureComponent<Props> {
  handleBackspace = event => {
    const {type, profile, setProfile} = this.props;
    let {birthdate} = profile;
    if (type !== 'birthdate') return;
    if (event.nativeEvent.key === 'Backspace') {
      if (birthdate[birthdate.length - 1] === '/') {
        setProfile({birthdate: birthdate.slice(0, birthdate.length - 2)});
      } else {
        setProfile({birthdate: birthdate.slice(0, birthdate.length - 1)});
      }
    } else {
      if (birthdate.length >= 10) return;
      let newInput = (birthdate += event.nativeEvent.key);
      if (newInput.length === 2 || newInput.length === 5) {
        newInput += '/';
      }
      setProfile({birthdate: newInput});
    }
  };

  render() {
    const {
      style,
      keyboardType,
      placeholder,
      value,
      onChangeText,
      onSubmitEditing,
      maxLength,
    } = this.props;
    return (
      <TextInput
        style={[styles.inputField, style]}
        allowFontScaling={false}
        autoCorrect={false}
        blurOnSubmit={false}
        keyboardShouldPersistTaps="always"
        placeholder={placeholder}
        keyboardType={keyboardType}
        placeholderTextColor={grey7}
        selectionColor="black"
        value={value}
        numberOfLines={1}
        maxLength={maxLength || 200}
        onChangeText={onChangeText}
        onKeyPress={this.handleBackspace}
        onSubmitEditing={onSubmitEditing}
      />
    );
  }
}

function mapStateToProps(state: ReduxState) {
  return {
    profile: state.profile,
  };
}

export default connect(mapStateToProps, {...profileActions})(Field);
