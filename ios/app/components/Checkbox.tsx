import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {StyleConfig, Constants} from '../configs';
import {medicalHistoryActions} from '../redux/actions';
import AppImages from '../assets/AppImages';
import {FamilyMember, ReduxState} from '../redux/types';

const {nobel16, green} = StyleConfig;
const {FIELD_WIDTH} = Constants;

const styles = StyleSheet.create({
  inputField: {
    width: FIELD_WIDTH,
    backgroundColor: 'white',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  box: {
    width: 25,
    height: 25,
    borderWidth: 0.5,
    borderColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  diseaseField: {
    alignItems: 'flex-start',
    flexGrow: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  addFamilyMembers: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  selected: {
    color: green,
  },
  unselected: {
    ...nobel16,
  },
});

type Props = {
  selected: boolean;
  style: Object;
  disease: string;
  setMedicalHistory: (arg0: Object) => void;
  medicalHistory: Object;
  familyMembers: FamilyMember[];
};

type State = {
  expand: boolean;
};

class Checkbox extends React.PureComponent<Props, State> {
  state = {expand: false};

  render() {
    const {expand} = this.state;
    const {
      selected,
      disease,
      style,
      setMedicalHistory,
      medicalHistory,
      familyMembers,
    } = this.props;
    return (
      <View style={[styles.inputField, style]}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => this.setState({expand: !expand})}
            style={styles.box}>
            {selected && <Image source={AppImages.checkSelected} />}
          </TouchableOpacity>
          <View style={styles.diseaseField}>
            <Text>{disease}</Text>
          </View>
        </View>
        {expand && (
          <View style={styles.addFamilyMembers}>
            <Text style={{textAlign: 'center', marginTop: 10}}>
              Have you or any of your family members {'\n'} been diagnosed with{' '}
              {disease}?
            </Text>
            {familyMembers &&
              familyMembers.map(member => {
                const updateList = medicalHistory[disease];
                const selectedMember = updateList.findIndex(familyMember => {
                  return familyMember.name === member.name;
                });
                return (
                  <TouchableOpacity
                    style={{alignItems: 'center'}}
                    key={`${member.name}checkBox`}
                    onPress={() => {
                      if (selectedMember > -1) {
                        updateList.splice(selectedMember, 1);
                      } else {
                        updateList.push(member);
                      }
                      setMedicalHistory({[disease]: updateList});
                    }}>
                    <Text
                      style={[
                        styles.unselected,
                        selectedMember >= 0 && styles.selected,
                      ]}>
                      {member.name}
                    </Text>
                  </TouchableOpacity>
                );
              })}
          </View>
        )}
      </View>
    );
  }
}

function mapStateToProps(state: ReduxState) {
  return {
    medicalHistory: state.medicalHistory,
    familyMembers: state.familyMembers,
  };
}

export default connect(mapStateToProps, {...medicalHistoryActions})(Checkbox);
