import React from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {Dropdown} from 'react-native-material-dropdown';
import {StyleConfig, Constants} from '../configs';
import {profileActions} from '../redux/actions';
import {ReduxState} from '../redux/types';

const {white, black, nobel16} = StyleConfig;
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
    justifyContent: 'center',
    paddingBottom: 15,
    // alignItems: 'center'
  },
  pickerItem: {
    ...nobel16,
    textAlign: 'center',
  },
});

type Props = {
  selectedValue: string;
  items: Array<{[key: string]: string}>;
  onValueChange: () => void;
  style: Object;
  placeholder: string;
  value: string;
};

class DropDown extends React.PureComponent<Props> {
  render() {
    const {onValueChange, items, style, placeholder, value} = this.props;
    return (
      <View style={[styles.inputField, style]}>
        <Dropdown
          inputContainerStyle={{borderBottomColor: 'transparent'}}
          overlayStyle={{borderColor: white}}
          label={placeholder}
          data={items}
          value={value}
          onChangeText={onValueChange}
        />
      </View>
    );
  }
}

function mapStateToProps(state: ReduxState) {
  return {
    profile: state.profile,
  };
}

export default connect(mapStateToProps, {...profileActions})(DropDown);
