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
  TextInput
} from 'react-native';

import {connect} from 'react-redux';
import {Button} from '../components';
import {StyleConfig, Constants} from '../configs';
import AppImages from '../assets/AppImages';
import * as AppActions from '../AppActions';
import { bookstateActions } from '../redux/actions';

const {
  SMALLSCREEN,
  WIDTH,
  nobel14,
  nobel22,
  nobel32,
  black3,
  blue1,
  grey,
  nobel16
} = StyleConfig;

const {
  TOP_PADDING,
  MAIN_NAVIGATION,
  SUB_NAVIGATION,
  BOOKS,
  SCROLLVIEW_HEIGHT,
  FOOTER_HEIGHT,
  SEARCH_BAR_HEIGHT,
  TITLE_CONTAINER
} = Constants

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: grey
  },
  headerText: {
    ...nobel22,
    textAlign: 'left',
    color: 'black',
    marginTop: 15,
    marginLeft: 10
  },
  categoryText: {
    fontSize: 14,
    textAlign: 'left',
    color: 'black',
    marginTop: 5
  },
  accountInfo: {
    marginLeft: 10,
    marginTop: 45
  },
  selectedText: {
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  profile: {
    ...nobel14,
    textAlign: 'left'
  }
});

class LeftMenu extends React.PureComponent<Props> {
  render() {
    const {
      componentId,
      setBookstate,
      bookstate,
    } = this.props;
    const {
      selectedCategory
    } = bookstate
    return (
      <View style={styles.container}>
        <View style={styles.accountInfo}>
          <Text style={styles.profile}>Welcome, Doug Schitts</Text>
          <Text style={styles.profile}>My Account</Text>
          <Text style={styles.profile}>Log out</Text>
        </View>
        <Text style={styles.headerText}>
          Extra Categories
        </Text>
        <ScrollView style={{ paddingLeft: 15, marginTop: 10}}>
          {SUB_NAVIGATION.map(category => {
            const selected = selectedCategory === category
            return (
              <TouchableOpacity
                onPress={() => {
                  AppActions.triggerSideMenu('Home', false)
                  setBookstate({ selectedCategory: category })
                }}
                key={`${category}LeftMenu`}>
                <Text style={[styles.categoryText, selected && styles.selectedText]}>
                  {category}
                </Text>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>
    );
  }
}



function mapStateToProps(state) {
  return {
    bookstate: state.bookstate
  };
}

const mapDispatchToProps = {
  ...bookstateActions
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftMenu);
