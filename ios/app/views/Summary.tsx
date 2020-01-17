import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {connect} from 'react-redux';
import {Button} from '../components';
import {StyleConfig} from '../configs';
import {screenActions} from '../redux/actions';
import * as AppActions from '../AppActions';
import {Profile, FamilyMember, ReduxState} from '../redux/types';
// import AppImages from '../assets/AppImages';

const {
  nobel20,
  black3,
  TOP_PADDING,
  dollyReg16,
  nobel12,
  nobel14,
  nobel16,
  WIDTH,
  nobel22,
  SMALLSCREEN,
} = StyleConfig;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: TOP_PADDING,
  },
  headerText: {
    ...nobel20,
    color: black3,
  },
  headerText2: {
    ...dollyReg16,
    marginTop: SMALLSCREEN ? 20 : 40,
    color: black3,
    marginBottom: 20,
  },
  buttonStyles: {
    bottom: 0,
  },
  description: {
    ...nobel14,
    marginTop: SMALLSCREEN ? 10 : 30,
    color: black3,
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
    left: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    borderColor: 'black',
    borderWidth: 0.5,
  },
  padding: {
    height: SMALLSCREEN ? 150 : 100,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    height: 30,
    backgroundColor: 'white',
    paddingHorizontal: SMALLSCREEN ? 10 : 40,
    justifyContent: 'space-between',
  },
  row2: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 40,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  left: {
    ...nobel16,
  },
  right: {
    ...nobel16,
  },
  summaryContainer: {
    borderColor: 'black',
    borderWidth: 1,
    width: WIDTH - 80,
    alignSelf: 'center',
    padding: 10,
  },
  titleText: {
    ...nobel22,
    marginVertical: 10,
  },
  divider: {
    backgroundColor: 'white',
  },
  bulletPoint: {
    backgroundColor: 'black',
    height: 8,
    width: 8,
    borderRadius: 4,
    marginRight: 2,
  },
});

type Props = {
  componentId: string;
  profile: Profile;
  familyMembers: FamilyMember[];
  medicalHistory: any;
  setScreens: (any) => void;
};

class Summary extends React.PureComponent<Props> {
  componentDidMount() {}

  createTitle = title => {
    let newString = title[0].toUpperCase();
    for (let i = 1; i < title.length; i++) {
      const char = title[i];
      if (char === char.toUpperCase()) {
        newString += ' ';
      }
      newString += char;
    }
    return newString;
  };

  alertUserForReset = () => {
    Alert.alert('', 'Are you sure you want to reset?', [
      {
        text: 'Yes',
        onPress: () => {
          AppActions.setRoot('DemographicData');
        },
      },
      {
        text: 'Nah',
        onPress: () => {},
      },
    ]);
  };

  render() {
    const {
      componentId,
      profile,
      familyMembers,
      medicalHistory,
      setScreens,
    } = this.props;
    const profileList = Object.entries(profile);
    const medicalHistoryList = Object.entries(medicalHistory);
    return (
      <KeyboardAvoidingView style={styles.container}>
        <TouchableOpacity
          style={styles.touchArea}
          onPress={this.alertUserForReset}>
          <Text style={{alignText: 'center'}}>Reset profile</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Parsley Health</Text>
        <View>
          <Text style={styles.headerText2}>Summary - click on box to edit</Text>
        </View>
        <ScrollView>
          <Text style={styles.titleText}>Profile</Text>
          <TouchableOpacity
            onPress={async () => {
              await setScreens({isEdit: true});
              AppActions.showModal('DemographicData');
            }}
            style={styles.summaryContainer}>
            {profileList.map((tuple, i) => {
              const title = tuple[0];
              const value = tuple[1];
              return (
                <View style={styles.row} key={`${title}${i}`}>
                  <Text style={styles.left}>{this.createTitle(title)}</Text>
                  <Text style={styles.right}>{value}</Text>
                </View>
              );
            })}
          </TouchableOpacity>
          <Text style={styles.titleText}>Family Members</Text>
          <TouchableOpacity
            onPress={async () => {
              setScreens({isEdit: true});
              AppActions.showModal('FamilyMembers');
            }}
            style={styles.summaryContainer}>
            {familyMembers.map(member => {
              const {name, age, deceased} = member;
              return (
                <View style={[styles.divider]} key={`${name}summary`}>
                  <Text style={styles.right}>{name}</Text>
                  <View style={styles.row}>
                    <Text style={styles.left}>Age</Text>
                    <Text style={styles.right}>{age}</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.left}>Alive</Text>
                    <Text style={styles.right}>{deceased}</Text>
                  </View>
                </View>
              );
            })}
          </TouchableOpacity>
          <Text style={styles.titleText}>Medical History</Text>
          <TouchableOpacity
            onPress={async () => {
              await setScreens({isEdit: true});
              AppActions.showModal('MedicalHistory');
            }}
            style={styles.summaryContainer}>
            {medicalHistoryList.map((tuple, i) => {
              const condition = tuple[0];
              const affectedMembers = tuple[1];
              if (affectedMembers.length) {
                return (
                  <View style={styles.divider} key={`${i}summary2`}>
                    <View style={[styles.row, {marginBottom: -5}]}>
                      <Text style={{...nobel14}}>{condition}</Text>
                    </View>
                    <View style={styles.row2}>
                      <View>
                        {affectedMembers.map(members => (
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              justifyContent: 'flex-start',
                            }}>
                            <View style={styles.bulletPoint} />
                            <Text style={{...nobel12}}>{members.name}</Text>
                          </View>
                        ))}
                      </View>
                    </View>
                  </View>
                );
              }
            })}
          </TouchableOpacity>
          <View style={styles.padding} />
        </ScrollView>
        <Button
          onPress={() => AppActions.pushScreen(componentId, 'Console')}
          text="SUBMIT"
        />
      </KeyboardAvoidingView>
    );
  }
}

function mapStateToProps(state: ReduxState) {
  return {
    profile: state.profile,
    familyMembers: state.familyMembers,
    medicalHistory: state.medicalHistory,
  };
}

const mapDispatchToProps = {
  ...screenActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
