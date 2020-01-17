import {Platform, Dimensions} from 'react-native';

const DIMENSIONS = Dimensions.get('window');
const HEIGHT = DIMENSIONS.height;
const WIDTH = DIMENSIONS.width;
const IPHONEX = HEIGHT >= 800;
const RETINA20 = DIMENSIONS.height === 667;
const RETINA55 = DIMENSIONS.width > 375;
const RETINA35 = DIMENSIONS.height === 480;
const RETINA4 = DIMENSIONS.width < 375 && DIMENSIONS.height < 570;
const SMALLSCREEN = DIMENSIONS.height < 570;
const TOP_PADDING = SMALLSCREEN ? 35 : 75;
const BOT_PADDING = 40;

const phoneConfig = {
  HEIGHT,
  WIDTH,
  IPHONEX,
  TOP_PADDING,
  BOT_PADDING,
  RETINA4,
  RETINA20,
  RETINA35,
  RETINA55,
  IPHONE_X_PADDING: 40,
  IPHONE_X_PADDING2: 40,
  SMALLSCREEN,
};

const fontConfig = {
  nobelReg: 'DTLNobelT',
  nobelBold: 'DTLNobelT-Bold',
  dollyReg: 'DollyPro-Regular',
  dollyBold: 'DollyPro-Bold',
};

const colorConfig = {
  green: 'rgba(100, 188, 173, 1)',
  red: '#E74C3C',
  grey: 'rgba(255, 0, 255, 1)',
  white: '#ffffff',
  black: '#000000',
  black2: '#212121', // 33,33,33
  black3: '#3d3d3d', // 61,61,61
  black4: 'rgba(55,57,61,1)', // 55,57,61
  grey1: '#e0e0e0', // 224,224,224
  grey2: '#f5f5f5', // 245,245,245
  grey3: '#9e9e9e', // 158,158,158
  grey4: '#eeeeee', // 238,238,238
  grey5: '#d9d9d9', // 217,217,217
  grey6: '#f0f0f0', // 240,240,240
  grey7: '#bdbdbd', // 189,189,189,
  grey8: '#eeeeee', // 238,238,238
};

const fontSettings = {
  nobel10: {
    fontFamily: fontConfig.nobelReg,
    fontSize: 10,
    color: colorConfig.black,
    letterSpacing: 0,
    textAlign: 'center',
  },
  nobel11: {
    fontFamily: fontConfig.nobelReg,
    fontSize: 11,
    color: colorConfig.black,
    letterSpacing: 0,
    textAlign: 'center',
  },
  nobel12: {
    fontFamily: fontConfig.nobelReg,
    fontSize: 12,
    color: colorConfig.black,
    letterSpacing: 0,
    textAlign: 'center',
  },
  nobel14: {
    fontFamily: fontConfig.nobelReg,
    fontSize: 14,
    color: colorConfig.black,
    letterSpacing: 0,
    textAlign: 'center',
  },
  nobel16: {
    fontFamily: fontConfig.nobelReg,
    fontSize: 16,
    color: colorConfig.black,
    letterSpacing: 0,
    textAlign: 'center',
  },
  nobel18: {
    fontFamily: fontConfig.nobelReg,
    fontSize: 18,
    color: colorConfig.black,
    letterSpacing: 0,
    textAlign: 'center',
  },
  nobel20: {
    fontFamily: fontConfig.nobelReg,
    fontSize: 20,
    color: colorConfig.black,
    letterSpacing: 0,
    textAlign: 'center',
  },
  nobel22: {
    fontFamily: fontConfig.nobelReg,
    fontSize: 22,
    color: colorConfig.black,
    letterSpacing: 0,
    textAlign: 'center',
  },
  nobel26: {
    fontFamily: fontConfig.nobelReg,
    fontSize: 26,
    color: colorConfig.black,
    letterSpacing: 0,
    textAlign: 'center',
  },
  nobel32: {
    fontFamily: fontConfig.nobelReg,
    fontSize: 32,
    color: colorConfig.black,
    letterSpacing: 0,
    textAlign: 'center',
  },
  nobelBold10: {
    fontFamily: fontConfig.nobelBold,
    fontSize: 10,
    color: colorConfig.black,
    letterSpacing: 0,
    textAlign: 'center',
  },
  nobelBold12: {
    fontFamily: fontConfig.nobelBold,
    fontSize: 12,
    color: colorConfig.black,
    letterSpacing: 0,
    textAlign: 'center',
  },
  nobelBold14: {
    fontFamily: fontConfig.nobelBold,
    fontSize: 14,
    color: colorConfig.black,
    letterSpacing: 0,
    textAlign: 'center',
  },
  nobelBold18: {
    fontFamily: fontConfig.nobelBold,
    fontSize: 18,
    color: colorConfig.black,
    letterSpacing: 0,
    textAlign: 'center',
  },
  nobelBold20: {
    fontFamily: fontConfig.nobelBold,
    fontSize: 20,
    color: colorConfig.black,
    letterSpacing: 0,
    textAlign: 'center',
  },
  nobelBold22: {
    fontFamily: fontConfig.nobelBold,
    fontSize: 22,
    color: colorConfig.black,
    letterSpacing: 0,
    textAlign: 'center',
  },
  dollyReg12: {
    fontFamily: fontConfig.dollyReg,
    fontSize: 12,
    color: colorConfig.black,
    letterSpacing: 0,
    textAlign: 'center',
  },
  dollyReg14: {
    fontFamily: fontConfig.dollyReg,
    fontSize: 14,
    color: colorConfig.black,
    letterSpacing: 0,
    textAlign: 'center',
  },
  dollyReg16: {
    fontFamily: fontConfig.dollyReg,
    fontSize: 16,
    color: colorConfig.black,
    letterSpacing: 0,
    textAlign: 'center',
  },
};

export default {
  ...phoneConfig,
  ...fontConfig,
  ...colorConfig,
  ...fontSettings,
};
