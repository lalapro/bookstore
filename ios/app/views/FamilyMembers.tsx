/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
} from 'react-native';

import {connect} from 'react-redux';
import {Button, FamilyField} from '../components';
import {StyleConfig, Constants} from '../configs';
import {familyMemberActions, screenActions} from '../redux/actions';
import AppImages from '../assets/AppImages';
import * as AppActions from '../AppActions';
import {Screens, FamilyMember, ReduxState} from '../redux/types';

const {
  green,
  nobel20,
  white,
  black,
  black3,
  TOP_PADDING,
  dollyReg16,
  nobel14,
  SMALLSCREEN,
} = StyleConfig;

const {FAMILY_MEMBER_TEMPLATE} = Constants;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: TOP_PADDING,
    backgroundColor: white,
  },
  headerText: {
    ...nobel20,
    color: black3,
  },
  headerText2: {
    ...dollyReg16,
    marginTop: SMALLSCREEN ? 20 : 40,
    color: black3,
  },
  buttonStyles: {
    bottom: 0,
  },
  description: {
    ...nobel14,
    marginTop: SMALLSCREEN ? 10 : 30,
    color: black3,
  },
  infoContainer: {
    width: '100%',
    backgroundColor: green,
    paddingHorizontal: 20,
    height: 500,
  },
  formContainer: {
    paddingHorizontal: 20,
    width: '100%',
    marginTop: 20,
  },
  inputField: {
    ...nobel14,
    backgroundColor: white,
    borderBottomWidth: 1,
    borderColor: black,
    height: 40,
    width: 140,
    alignItems: 'flex-start',
    textAlign: 'left',
  },
  rowContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  backIcon: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
    zIndex: 1,
  },
  touchArea: {
    height: 50,
    width: 50,
    backgroundColor: 'white',
    position: 'absolute',
    top: TOP_PADDING - 20,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  padding: {
    height: 100,
    width: '100%',
  },
});

type Props = {
  componentId: string;
  familyMembers: FamilyMember[];
  setFamilyMembers: (any) => void;
  setScreens: (any) => void;
  screens: Screens;
};

class FamilyMembers extends React.PureComponent<Props> {
  state = {};

  render() {
    const {
      componentId,
      familyMembers,
      setFamilyMembers,
      setScreens,
      screens,
    } = this.props;
    const {isEdit} = screens;
    const readyToSubmit = familyMembers.every(member => {
      return (
        member.name.length > 0 &&
        Number(member.age) > 0 &&
        member.deceased.length > 0
      );
    });
    return (
      <KeyboardAvoidingView style={styles.container}>
        {!isEdit && (
          <TouchableOpacity
            style={styles.touchArea}
            onPress={() => AppActions.popScreen(componentId)}>
            <Image source={AppImages.backIcon} style={styles.backIcon} />
          </TouchableOpacity>
        )}
        <Text style={styles.headerText}>Parsley Health</Text>
        <View>
          <Text style={styles.headerText2}>Family Members</Text>
          <Text style={styles.description}>Add your family members.</Text>
        </View>
        <ScrollView style={{marginTop: 10}}>
          {familyMembers &&
            familyMembers.map((member, i) => {
              const {name, age, deceased} = member;
              return (
                <FamilyField
                  name={name}
                  age={age}
                  index={i}
                  deceased={deceased}
                  key={`${member.name}${i}`}
                />
              );
            })}
          <TouchableOpacity
            onPress={() =>
              setFamilyMembers([...familyMembers, {...FAMILY_MEMBER_TEMPLATE}])
            }
            style={{alignItems: 'center'}}>
            <Image
              source={AppImages.addRow}
              style={{width: 50, height: 50, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
          <View style={styles.padding} />
        </ScrollView>
        <Button
          onPress={() => {
            if (isEdit) {
              setScreens({isEdit: false});
              AppActions.dismissModal(componentId);
            } else {
              AppActions.pushScreen(componentId, 'MedicalHistory');
            }
          }}
          text={isEdit ? 'CLOSE MODAL' : 'CONTINUE'}
          disabled={!readyToSubmit}
        />
      </KeyboardAvoidingView>
    );
  }
}

function mapStateToProps(state: ReduxState) {
  return {
    familyMembers: state.familyMembers,
    screens: state.screens,
  };
}

const mapDispatchToProps = {
  ...familyMemberActions,
  ...screenActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(FamilyMembers);
