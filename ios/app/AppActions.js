import {Navigation} from 'react-native-navigation';
import store from './redux/store';
import {
  profileActions,
  medicalHistoryActions,
  familyMemberActions,
  screenActions,
} from './redux/actions';

const {cleanProfile} = profileActions;
const {cleanMedicalHistory} = medicalHistoryActions;
const {cleanFamilyMembers} = familyMemberActions;
const {cleanScreens} = screenActions;
const {dispatch} = store;

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

export function popScreen(currentScreen) {
  Navigation.pop(currentScreen);
}

export function showModal(screen) {
  Navigation.showModal({
    component: {
      name: screen,
      id: screen,
      options: {
        layout: {backgroundColor: 'white'},
        modalPresentationStyle: 'overCurrentContext',
        animations: {
          showModal: {
            alpha: {
              from: 0,
              to: 1,
              duration: 250,
            },
          },
        },
      },
    },
  });
}

export function dismissModal(componentId) {
  if (componentId) {
    Navigation.dismissModal(componentId);
  }
}

export function setRoot(componentId) {
  if (componentId === 'DemographicData') {
    dispatch(cleanProfile());
    dispatch(cleanFamilyMembers());
    dispatch(cleanMedicalHistory());
    dispatch(cleanScreens());
  }
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              id: componentId,
              name: componentId,
            },
          },
        ],
      },
    },
  });
}
