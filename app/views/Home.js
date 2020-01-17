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
  nobel12,
  nobel14,
  nobel26,
  nobel32,
  black3,
  blue1,
  blue2,
  lightblue,
  grey,
  nobel16,
  green,
  dollyReg16,
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
    // justifyContent: 'space-between'
  },
  headerText: {
    ...nobel26,
    color: black3,
    left: -20
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: blue1,
    height: FOOTER_HEIGHT,
    paddingHorizontal: 20
  },
  headerContainer: {
    height: TOP_PADDING,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 20,
    backgroundColor: lightblue
  },
  searchBar: {
    height: SEARCH_BAR_HEIGHT,
    width: WIDTH - 40,
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 10,
    overflow: 'visible'
  },
  contentContainer: {
    // justifyContent: 'center'
  },
  searchBarText: {
    ...nobel14,
    textAlign: 'left',
    marginLeft: 20
  },
  selectedCategoryContainer: {
    width: WIDTH - 80,
    marginTop: 10,
    height: TITLE_CONTAINER,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: green
  },
  selectedCategoryText: {
    ...nobel32,
  },
  thumbnail: {
    width: 100,
    height: 200,
    resizeMode: 'contain'
  },
  padding: {
    height: 50,
    width: WIDTH
  },
  chooseCategory: {

  },
  mainCategory: {
    fontSize: 16,
    marginLeft: 10
  },
  horizontalPadding: {
    width: 30
  },
  searchIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    position: 'absolute',
    right: 5
  },
  libraryContainer: {
    height: SCROLLVIEW_HEIGHT,
    width: WIDTH,
  },
  profileIcon: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    position: 'absolute',
    right: 20,
    bottom: 20
  },
  menuIcon: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
    left: -15
  },
  selectedText: {
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  footerText: {
    ...nobel12,
    textAlign: 'left',
    color: 'white'
  },
  copyright: {
    ...nobel16
  }
});

class Home extends React.PureComponent<Props> {
  render() {
    const {
      componentId,
      setBookstate,
      bookstate,
    } = this.props;
    const {selectedCategory} = bookstate
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.headerContainer}>
          <Image source={AppImages.hamburgerMenu} style={styles.menuIcon} onTouchEnd={() => AppActions.triggerSideMenu(componentId, true)}/>
          <Text style={styles.headerText}>Fanatic Books</Text>
        </View>
        <View style={styles.contentContainer}>
          <ScrollView
            style={{
              height: 30,
              paddingHorizontal: 10,
              backgroundColor: lightblue
            }}
            horizontal>
            {MAIN_NAVIGATION.map(category => {
              const selected = selectedCategory === category
              return (
                <TouchableOpacity
                  key={category}
                  onPress={() => setBookstate({ selectedCategory: category })}
                  style={{ }}>
                  <Text style={[styles.mainCategory, selected && styles.selectedText]}>
                    {category}
                  </Text>
                </TouchableOpacity>
              )
            })}
            <View style={styles.horizontalPadding}/>
          </ScrollView>
          <View style={{ backgroundColor: lightblue }}>
            <View style={styles.searchBar}>
              <TextInput
                style={styles.searchBarText}
                allowFontScaling={false}
                autoCorrect={false}
                blurOnSubmit={false}
                keyboardShouldPersistTaps="always"
                placeholder={'Search tens of books...'}
                keyboardType={"default"}
                placeholderTextColor={"black"}
                selectionColor="black"
                numberOfLines={1}
              />
              <Image source={AppImages.searchIcon} style={styles.searchIcon}/>
            </View>
          </View>
          <View style={styles.selectedCategoryContainer}>
            <Text style={styles.selectedCategoryText}>
              {selectedCategory}
            </Text>
          </View>
          <View style={styles.libraryContainer}>
            <ScrollView
              contentContainerStyle={{ alignItems: 'center' }}
              style={{ width: WIDTH }}>
              {selectedCategory !== '' && (
                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: WIDTH,
                  paddingHorizontal: 80
                }}>
                  <View>
                    {BOOKS.slice(0,5).map(book => {
                      return (
                        <TouchableOpacity
                          onPress={() => {
                            setBookstate({ selectedBook: book })
                            AppActions.pushScreen(componentId, 'BookDetails')
                          }}
                          key={book.name}>
                          <Image source={book.image} style={styles.thumbnail}/>
                        </TouchableOpacity>
                      )
                    })}
                  </View>
                  <View>
                    {BOOKS.slice(5).map(book => {
                      return (
                        <TouchableOpacity
                          onPress={() => {
                            setBookstate({ selectedBook: book })
                            AppActions.pushScreen(componentId, 'BookDetails')
                          }}
                          key={book.name}>
                          <Image source={book.image} style={styles.thumbnail}/>
                        </TouchableOpacity>
                      )
                    })}
                  </View>
                </View>
              )}
              <View style={styles.padding}>
                {selectedCategory !== '' && (
                  <Text style={styles.copyright}>Copyright 2020 {'\u00A9'}</Text>
                )}
              </View>
            </ScrollView>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={{ marginTop: 15 }}>
            <TouchableOpacity>
              <Text style={styles.footerText}>About us</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.footerText}>Corporate Information</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.footerText}>Careers</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 15 }}>
            <TouchableOpacity>
              <Text style={styles.footerText}>Customer Service</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.footerText}>Site map</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
