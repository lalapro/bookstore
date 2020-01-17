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
  LayoutAnimation,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
} from 'react-native';

import {connect} from 'react-redux';
import {Button, Checkbox} from '../components';
import {StyleConfig, Constants} from '../configs';
import {medicalHistoryActions, screenActions} from '../redux/actions';
import AppImages from '../assets/AppImages';
import * as AppActions from '../AppActions';
import {ReduxState} from '../redux/types';

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

const {DISEASE_LIST} = Constants;

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
  screens: any;
  medicalHistory: any;
  setScreens: (any) => void;
};

class MedicalHistory extends React.PureComponent<Props> {
  componentDidMount() {}

  componentDidUpdate() {
    LayoutAnimation.configureNext(LinearSlideAnimation);
  }

  render() {
    const {componentId, medicalHistory, screens, setScreens} = this.props;
    const {isEdit} = screens;
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
          <Text style={styles.headerText2}>Medical History</Text>
          <Text style={styles.description}>
            Please check any you might have.
          </Text>
        </View>
        <ScrollView style={{marginTop: 10}}>
          {DISEASE_LIST.map(disease => {
            const selected = medicalHistory[disease].length > 0;
            return (
              <Checkbox selected={selected} key={disease} disease={disease} />
            );
          })}
          <View style={styles.padding} />
        </ScrollView>
        <Button
          onPress={() => {
            if (isEdit) {
              setScreens({isEdit: false});
              AppActions.dismissModal(componentId);
            } else {
              AppActions.pushScreen(componentId, 'Contract');
            }
          }}
          text={isEdit ? 'CLOSE MODAL' : 'CONTINUE'}
        />
      </KeyboardAvoidingView>
    );
  }
}

function mapStateToProps(state: ReduxState) {
  return {
    medicalHistory: state.medicalHistory,
    screens: state.screens,
  };
}

const mapDispatchToProps = {
  ...medicalHistoryActions,
  ...screenActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalHistory);
