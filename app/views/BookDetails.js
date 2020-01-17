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
  TextInput,
  Alert
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
  lightblue,
  grey,
  green,
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
    backgroundColor: lightblue
  },
  headerContainer: {
    // height: TOP_PADDING,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 20,
    zIndex: 2
  },
  bookCover: {
    width: 200,
    height: 450,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  mainTitle: {
    ...nobel32,
    width: WIDTH - 40,
    alignSelf: 'center'
  },
  description: {
    ...nobel14,
    width: WIDTH - 40,
    alignSelf: 'center',
    marginTop: 10
  },
  touchArea: {
    // backgroundColor: 'red',
    height: 50,
    width: 50,
    position: 'absolute',
    top: 30,
    left: 10,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2
  },
  backIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    zIndex: 1
  }
});

class BookDetails extends React.PureComponent<Props> {
  render() {
    const {
      componentId,
      setBookstate,
      bookstate,
    } = this.props;
    const {selectedCategory, selectedBook} = bookstate
    const {
      name,
      image,
      price,
      description,
      author
    } = selectedBook
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
        </View>
        <View style={{ zIndex: 1 }}>
          <Image source={image} style={styles.bookCover}/>
        </View>
        <TouchableOpacity
          style={styles.touchArea}
          onPress={() => AppActions.popScreen(componentId)}>
          <Image source={AppImages.backIcon} style={styles.backIcon}/>
        </TouchableOpacity>
        <ScrollView>
          <Text style={styles.mainTitle}>{name}</Text>
          <Text style={[styles.description, { fontSize: 16 }]}>{author}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.description}>{price}</Text>
        </ScrollView>
        <Button
          onPress={() => Alert.alert('Added book to cart.')}
          text={"BUY"}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);
