import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {Dropdown} from 'react-native-material-dropdown';
import {StyleConfig, Constants} from '../configs';
import {familyMemberActions} from '../redux/actions';
import {FamilyMember, ReduxState} from '../redux/types';

const {WIDTH, nobel16, grey1} = StyleConfig;
const {FAMILY_MEMBER_LIST} = Constants;

const styles = StyleSheet.create({
  inputField: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    width: WIDTH - 40,
    height: 55,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'black',
    alignSelf: 'center',
    borderWidth: 1,
    marginBottom: 10,
  },
  pickerItem: {
    ...nobel16,
    textAlign: 'center',
  },
  fieldInput: {
    width: 30,
    backgroundColor: grey1,
  },
});

const OPTIONS = [
  {
    value: 'Yes',
  },
  {
    value: 'No',
  },
];

type Props = {
  name: string;
  style: Object;
  age: string;
  index: number;
  deceased: string;
  setFamilyMembers: (any) => void;
  familyMembers: FamilyMember[];
};

class FamilyField extends React.PureComponent<Props> {
  render() {
    const {
      name,
      age,
      style,
      setFamilyMembers,
      familyMembers,
      index,
      deceased,
    } = this.props;
    return (
      <View style={[styles.inputField, style]}>
        <View>
          <Dropdown
            containerStyle={{width: 95}}
            inputContainerStyle={{borderBottomColor: 'transparent'}}
            label="Relationship"
            data={FAMILY_MEMBER_LIST}
            onChangeText={(text: string) => {
              const updateList = familyMembers;
              updateList[index].name = text;
              setFamilyMembers(updateList);
            }}
            value={name}
          />
        </View>
        <View>
          <Text>Age</Text>
          <TextInput
            style={styles.fieldInput}
            allowFontScaling={false}
            autoCorrect={false}
            value={age}
            blurOnSubmit={false}
            keyboardType="phone-pad"
            placeholderTextColor={grey1}
            selectionColor="black"
            numberOfLines={1}
            maxLength={3}
            onChangeText={userInput => {
              const updateList = familyMembers;
              updateList[index].age = userInput;
              setFamilyMembers(updateList);
            }}
          />
        </View>
        <Dropdown
          containerStyle={{width: 70}}
          inputContainerStyle={{borderBottomColor: 'transparent'}}
          label="Alive"
          data={OPTIONS}
          onChangeText={text => {
            const updateList = familyMembers;
            updateList[index].deceased = text;
            setFamilyMembers(updateList);
          }}
          value={deceased}
        />
      </View>
    );
  }
}

function mapStateToProps(state: ReduxState) {
  return {
    familyMembers: state.familyMembers,
  };
}

export default connect(mapStateToProps, {...familyMemberActions})(FamilyField);
