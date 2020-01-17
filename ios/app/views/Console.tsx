import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  LayoutAnimation,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
} from 'react-native';

import {connect} from 'react-redux';
import {Button} from '../components';
import {StyleConfig} from '../configs';
import AppImages from '../assets/AppImages';
import * as AppActions from '../AppActions';
import {Profile, FamilyMember, ReduxState} from '../redux/types';

const {
  green,
  nobel20,
  white,
  black3,
  TOP_PADDING,
  dollyReg16,
  nobel14,
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
    borderColor: 'black',
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
    height: SMALLSCREEN ? 150 : 100,
    width: '100%',
  },
});

type Props = {
  componentId: string;
  profile: Profile;
  familyMembers: FamilyMember[];
  medicalHistory: any;
};

class Console extends React.PureComponent<Props> {
  render() {
    const {componentId, profile, familyMembers, medicalHistory} = this.props;
    return (
      <KeyboardAvoidingView style={styles.container}>
        <TouchableOpacity
          style={styles.touchArea}
          onPress={() => AppActions.popScreen(componentId)}>
          <Image source={AppImages.backIcon} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Parsley Health</Text>
        <View>
          <Text style={styles.headerText2}>Console</Text>
          <Text style={styles.description}>Raw JSON</Text>
        </View>
        <ScrollView
          onScroll={e => {
            let paddingToBottom = 50;
            paddingToBottom += e.nativeEvent.layoutMeasurement.height;
            if (
              e.nativeEvent.contentOffset.y >=
              e.nativeEvent.contentSize.height - paddingToBottom
            ) {
              this.setState({scrolledToBottom: true});
            }
          }}
          style={{marginTop: 10, paddingHorizontal: 20}}>
          <Text style={styles.description}>
            {JSON.stringify(profile)}
            {JSON.stringify(familyMembers)}
            {JSON.stringify(medicalHistory)}
          </Text>
          <View style={styles.padding} />
        </ScrollView>
        <Button
          onPress={() => AppActions.setRoot('DemographicData')}
          text="RESET PROFILE"
          style={{backgroundColor: black3, borderColor: black3}}
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

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Console);
