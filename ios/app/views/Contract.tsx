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
import {StyleConfig, Constants} from '../configs';
import AppImages from '../assets/AppImages';
import * as AppActions from '../AppActions';

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
    height: SMALLSCREEN ? 150 : 100,
    width: '100%',
  },
});

type Props = {
  componentId: string;
};

type State = {
  scrolledToBottom: boolean;
};

class Contract extends React.PureComponent<Props, State> {
  state: State = {
    scrolledToBottom: false,
  };

  render() {
    const {scrolledToBottom} = this.state;
    const {componentId} = this.props;
    const readyToSubmit: boolean = false;
    return (
      <KeyboardAvoidingView style={styles.container}>
        <TouchableOpacity
          style={styles.touchArea}
          onPress={() => AppActions.popScreen(componentId)}>
          <Image source={AppImages.backIcon} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Parsley Health</Text>
        <View>
          <Text style={styles.headerText2}>Contract</Text>
          <Text style={styles.description}>Accept me please.</Text>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa
            tincidunt dui ut ornare lectus sit amet. Ullamcorper sit amet risus
            nullam eget felis eget nunc. Eget duis at tellus at urna condimentum
            mattis pellentesque. Lectus urna duis convallis convallis. Fringilla
            ut morbi tincidunt augue interdum velit. Donec ultrices tincidunt
            arcu non sodales neque sodales ut etiam. Eget est lorem ipsum dolor.
            Sagittis id consectetur purus ut. Sit amet dictum sit amet justo
            donec. Gravida cum sociis natoque penatibus et magnis dis. Varius
            duis at consectetur lorem donec massa sapien faucibus et. In ante
            metus dictum at. Iaculis nunc sed augue lacus. Tincidunt ornare
            massa eget egestas purus viverra accumsan in. Enim nunc faucibus a
            pellentesque. Mattis vulputate enim nulla aliquet porttitor. Leo a
            diam sollicitudin tempor id eu nisl nunc mi. Purus gravida quis
            blandit turpis cursus in. Mollis nunc sed id semper. Ut placerat
            orci nulla pellentesque dignissim enim sit amet. Neque egestas
            congue quisque egestas diam in arcu cursus. Adipiscing bibendum est
            ultricies integer quis. Lorem ipsum dolor sit amet consectetur
            adipiscing elit duis tristique. Posuere morbi leo urna molestie at
            elementum. Ullamcorper sit amet risus nullam. Tempus quam
            pellentesque nec nam aliquam sem. Tempus iaculis urna id volutpat
            lacus. Enim tortor at auctor urna nunc id cursus. Ultricies integer
            quis auctor elit sed vulputate. Justo eget magna fermentum iaculis
            eu non. Dolor purus non enim praesent elementum. Tempor commodo
            ullamcorper a lacus vestibulum sed arcu non odio. Ornare arcu dui
            vivamus arcu felis bibendum. Eget aliquet nibh praesent tristique
            magna sit. Turpis egestas integer eget aliquet nibh praesent. Dui
            accumsan sit amet nulla facilisi morbi tempus. Viverra aliquet eget
            sit amet tellus cras adipiscing enim eu. Orci eu lobortis elementum
            nibh tellus molestie. Quis risus sed vulputate odio ut enim blandit
            volutpat maecenas. Diam sollicitudin tempor id eu nisl nunc mi ipsum
            faucibus. Cursus metus aliquam eleifend mi in nulla posuere
            sollicitudin. Sed cras ornare arcu dui vivamus arcu felis bibendum
            ut. Tempus iaculis urna id volutpat lacus laoreet non. Integer quis
            auctor elit sed vulputate mi. Sit amet nisl suscipit adipiscing
            bibendum est ultricies integer. Sed risus pretium quam vulputate
            dignissim suspendisse in est ante. Porta non pulvinar neque laoreet
            suspendisse. Maecenas ultricies mi eget mauris pharetra et. Est sit
            amet facilisis magna etiam. Porttitor leo a diam sollicitudin tempor
            id eu nisl nunc. Augue eget arcu dictum varius duis at consectetur.
            Odio ut enim blandit volutpat. Viverra justo nec ultrices dui sapien
            eget mi proin sed. Sit amet facilisis magna etiam tempor. Non
            curabitur gravida arcu ac tortor dignissim convallis aenean et. Arcu
            cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Quis
            commodo odio aenean sed adipiscing. Sagittis nisl rhoncus mattis
            rhoncus. Nunc sed blandit libero volutpat sed cras. Nec tincidunt
            praesent semper feugiat. Commodo viverra maecenas accumsan lacus
            vel. Justo donec enim diam vulputate ut pharetra. Ac turpis egestas
            maecenas pharetra convallis posuere morbi leo. Augue neque gravida
            in fermentum. Arcu non sodales neque sodales ut etiam sit amet nisl.
            Venenatis a condimentum vitae sapien. Pulvinar mattis nunc sed
            blandit libero. Pretium nibh ipsum consequat nisl vel pretium. Et
            netus et malesuada fames ac. Proin nibh nisl condimentum id. Blandit
            massa enim nec dui. Phasellus egestas tellus rutrum tellus. Diam
            donec adipiscing tristique risus nec. In hendrerit gravida rutrum
            quisque non tellus orci ac. Sed odio morbi quis commodo. In iaculis
            nunc sed augue lacus viverra vitae congue eu. Urna nec tincidunt
            praesent semper. Euismod nisi porta lorem mollis aliquam.
          </Text>
          <View style={styles.padding} />
        </ScrollView>
        <Button
          onPress={() => AppActions.setRoot('Summary')}
          text="I ACCEPT"
          disabled={!scrolledToBottom}
        />
      </KeyboardAvoidingView>
    );
  }
}

function mapStateToProps(state: any) {
  return {};
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Contract);
