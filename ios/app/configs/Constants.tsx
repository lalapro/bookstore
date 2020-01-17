import {Dimensions} from 'react-native';

const DIMENSIONS = Dimensions.get('window');
const WIDTH = DIMENSIONS.width;

const fieldConfig = {
  FIELD_WIDTH: WIDTH - 40,
  FIELD_WIDTH_MULTI1: 100,
  FIELD_WIDTH_MULTI2: WIDTH - 180,
};

// Married, Single, Divorced, Life Partner, Separated, Widowed, Other

const profileConfig = {
  GENDER_LIST: [
    {
      value: 'Female',
    },
    {
      value: 'Male',
    },
    {
      value: 'Other',
    },
  ],
  MARITAL_STATUS_LIST: [
    {
      value: 'Married',
    },
    {
      value: 'Single',
    },
    {
      value: 'Divorced',
    },
    {
      value: 'Life Partner',
    },
    {
      value: 'Separated',
    },
    {
      value: 'Widowed',
    },
    {
      value: 'Other',
    },
  ],
  DISEASE_LIST: [
    'Cancer',
    'Heart Disease',
    'Diabetes',
    'Stroke',
    'High Blood Pressure',
    'High Cholesterol',
    'Liver Disease',
    'Alcohol / Drug Abuse',
    'Anxiety / Depression',
    'Tuberculosis',
    'Anesthesia Complications',
    'Genetic Disorder',
    'Hypertension',
    'Heart Attack',
    'Chronic Obstructive Pulmonary Disease',
    'Hepatitis',
    'Back Pain',
    'Psychotic disorder',
    'Irritable bowel syndrome',
    'Seizures',
    'Substance Abuse',
    'Depression',
    'Kidney Disease',
    'HIV',
    'Gastro esophageal reflux disease',
    'Thyroid disease',
    'Bipolar',
    'Eye disease',
    'Arthritis',
    'Asthma',
  ],
  FAMILY_MEMBER_TEMPLATE: {
    name: '',
    age: 0,
    deceased: '',
  },
  FAMILY_MEMBER_STARTING: [
    {
      name: 'Self',
      age: '',
      deceased: '',
    },
    {
      name: 'Mom',
      age: '',
      deceased: '',
    },
    {
      name: 'Dad',
      age: '',
      deceased: '',
    },
  ],
  FAMILY_MEMBER_LIST: [
    {
      value: 'Mom',
    },
    {
      value: 'Dad',
    },
    {
      value: 'Grandpa',
    },
    {
      value: 'Grandma',
    },
    {
      value: 'Sister',
    },
    {
      value: 'Brother',
    },
    {
      value: 'Son',
    },
    {
      value: 'Daughter',
    },
  ],
  MEDICAL_HISTORY_LIST: {
    Cancer: [],
    'Heart Disease': [],
    Diabetes: [],
    Stroke: [],
    'High Blood Pressure': [],
    'High Cholesterol': [],
    'Liver Disease': [],
    'Alcohol / Drug Abuse': [],
    'Anxiety / Depression': [],
    Tuberculosis: [],
    'Anesthesia Complications': [],
    'Genetic Disorder': [],
    Hypertension: [],
    'Heart Attack': [],
    'Chronic Obstructive Pulmonary Disease': [],
    Hepatitis: [],
    'Back Pain': [],
    'Psychotic disorder': [],
    'Irritable bowel syndrome': [],
    Seizures: [],
    'Substance Abuse': [],
    Depression: [],
    'Kidney Disease': [],
    HIV: [],
    'Gastro esophageal reflux disease': [],
    'Thyroid disease': [],
    Bipolar: [],
    'Eye disease': [],
    Arthritis: [],
    Asthma: [],
  },
};
export default {
  ...fieldConfig,
  ...profileConfig,
};
