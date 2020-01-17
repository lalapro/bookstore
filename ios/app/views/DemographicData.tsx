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
  Keyboard,
  LayoutAnimation,
  KeyboardAvoidingView,
} from 'react-native';

import {connect} from 'react-redux';
import {Button, Field, DropDown} from '../components';
import {StyleConfig, Constants} from '../configs';
import {
  profileActions,
  screenActions,
  familyMemberActions,
} from '../redux/actions';
import * as AppActions from '../AppActions';
import {Profile, ReduxState} from '../redux/types';

const {
  green,
  nobel20,
  white,
  black3,
  TOP_PADDING,
  dollyReg16,
  nobel14,
  black,
  SMALLSCREEN,
} = StyleConfig;

const {
  FIELD_WIDTH,
  FIELD_WIDTH_MULTI1,
  FIELD_WIDTH_MULTI2,
  GENDER_LIST,
  MARITAL_STATUS_LIST,
} = Constants;

const LinearSlideAnimation = {
  duration: 250,
  create: {
    type: LayoutAnimation.Types.linear,
    property: LayoutAnimation.Properties.opacity,
  },
  update: {
    type: LayoutAnimation.Types.easeInEaseOut,
  },
};

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
  padding: {
    height: SMALLSCREEN ? 250 : 50,
    width: '100%',
  },
});

type Props = {
  componentId: string;
  screens: any;
  profile: Profile;
  setProfile: (any) => void;
  setScreens: (any) => void;
};

type State = {
  keyboardShowing: boolean;
};

class DemographicData extends React.PureComponent<Props, State> {
  state = {keyboardShowing: false};

  keyboardDidShowListener;

  keyboardDidHideListener;

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this.keyboardDidShow.bind(this),
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this.keyboardDidHide.bind(this),
    );
  }

  componentDidUpdate() {
    LayoutAnimation.configureNext(LinearSlideAnimation);
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  keyboardDidShow() {
    this.setState({keyboardShowing: true});
  }

  keyboardDidHide() {
    this.setState({keyboardShowing: false});
  }

  render() {
    const {keyboardShowing} = this.state;
    const {profile, setProfile, componentId, screens, setScreens} = this.props;
    const {isEdit} = screens;
    const {
      firstName,
      lastName,
      gender,
      birthdate,
      email,
      phone,
      streetAddress,
      city,
      state,
      zip,
      maritalStatus,
    } = profile;
    const readyToSubmit =
      firstName.length > 0 &&
      lastName.length > 0 &&
      gender.length > 0 &&
      birthdate.length > 0 &&
      email.length > 0 &&
      phone.length > 0 &&
      streetAddress.length > 0 &&
      city.length > 0 &&
      state.length > 0 &&
      maritalStatus.length > 0;
    // console.log('here', email)
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.headerText}>Parsley Health</Text>
        {!keyboardShowing && (
          <View>
            <Text style={styles.headerText2}>About You.</Text>
            <Text style={styles.description}>
              Enter your personal information {'\n'} to create your profile.
            </Text>
          </View>
        )}
        <ScrollView>
          <View style={styles.formContainer}>
            <Field
              keyboardType="default"
              placeholder="First Name"
              value={firstName}
              onChangeText={text => setProfile({firstName: text})}
            />
            <Field
              keyboardType="default"
              placeholder="Last Name"
              value={lastName}
              onChangeText={text => setProfile({lastName: text})}
            />
            <View style={styles.rowContainer}>
              <DropDown
                placeholder="Gender"
                style={{width: FIELD_WIDTH_MULTI1}}
                items={GENDER_LIST}
                value={gender}
                onValueChange={text => setProfile({gender: text})}
              />
              <Field
                keyboardType="phone-pad"
                placeholder="Birthdate (mm/dd/yyyy)"
                style={{width: FIELD_WIDTH_MULTI2}}
                value={birthdate}
                type="birthdate"
                maxLength={10}
              />
            </View>
            <Field
              keyboardType="email-address"
              placeholder="Email"
              onChangeText={text => setProfile({email: text})}
              value={email}
            />
            <Field
              keyboardType="phone-pad"
              placeholder="Phone"
              onChangeText={text => setProfile({phone: text})}
              value={phone}
            />
            <Field
              keyboardType="default"
              placeholder="Street Address"
              onChangeText={text => setProfile({streetAddress: text})}
              value={streetAddress}
            />
            <View style={styles.rowContainer}>
              <Field
                keyboardType="default"
                placeholder="City"
                value={city}
                style={{width: FIELD_WIDTH_MULTI1}}
                onChangeText={text => setProfile({city: text})}
              />
              <Field
                keyboardType="default"
                placeholder="State"
                value={state}
                style={{width: FIELD_WIDTH_MULTI1}}
                onChangeText={text => setProfile({state: text})}
              />
              <Field
                keyboardType="phone-pad"
                placeholder="Zip"
                value={zip}
                style={{width: FIELD_WIDTH_MULTI1}}
                onChangeText={text => setProfile({zip: text})}
              />
            </View>
            <DropDown
              placeholder="Marital Status"
              value={maritalStatus}
              style={{width: FIELD_WIDTH, height: 60, marginTop: 10}}
              items={MARITAL_STATUS_LIST}
              onValueChange={text => setProfile({maritalStatus: text})}
            />
            <View style={styles.padding} />
          </View>
        </ScrollView>
        <Button
          onPress={() => {
            if (isEdit) {
              setScreens({isEdit: false});
              AppActions.dismissModal(componentId);
            } else {
              AppActions.pushScreen(componentId, 'FamilyMembers');
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
    profile: state.profile,
    screens: state.screens,
    familyMembers: state.familyMembers,
  };
}

const mapDispatchToProps = {
  ...profileActions,
  ...screenActions,
  ...familyMemberActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(DemographicData);
