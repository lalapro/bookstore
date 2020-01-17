import React from 'react';
import {Provider} from 'react-redux';
import Home from './app/views/Home';
import LeftMenu from './app/views/LeftMenu';
import BookDetails from './app/views/BookDetails';
import store from './app/redux/store';
import { Navigation } from "react-native-navigation";

Navigation.registerComponent(
  'Home',
  () => props => (
    <Provider store={store}>
      <Home {...props} />
    </Provider>
  ),
  () => Home,
);

Navigation.registerComponent(
  'LeftMenu',
  () => props => (
    <Provider store={store}>
      <LeftMenu {...props} />
    </Provider>
  ),
  () => LeftMenu,
);

Navigation.registerComponent(
  'BookDetails',
  () => props => (
    <Provider store={store}>
      <BookDetails {...props} />
    </Provider>
  ),
  () => BookDetails,
);


Navigation.events().registerAppLaunchedListener(() => {
  
  Navigation.setDefaultOptions({
    topBar: {
      visible: false,
      drawBehind: true,
      height: 0,
    },
    layout: {
      orientation: ['portrait'],
    },
  });

  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            name: 'LeftMenu'
          }
        },
        center: {
          stack: {
            options: {},
            children: [{
              component: {
                name: 'Home'
              }
            }]
          }
        }
      }
    }
  });
});
