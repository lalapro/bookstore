import {Navigation} from 'react-native-navigation';
import store from './redux/store';
//
export function pushScreen(currentScreen, newScreen, options = {}) {
  if (!currentScreen) return;
  Navigation.push(currentScreen, {
    component: {
      name: newScreen,
      id: newScreen,
      options: {
        ...options,
        bottomTabs: {
          visible: false,
          drawBehind: true,
        },
      },
    },
  });
}
//
export function popScreen(currentScreen) {
  Navigation.pop(currentScreen);
}

export function triggerSideMenu(componentId, state) {
  console.log(state)
  Navigation.mergeOptions(componentId, {
    sideMenu: {
      left: {
        visible: state,
      },
    },
  });
}
