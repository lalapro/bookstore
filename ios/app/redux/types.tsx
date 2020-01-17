export interface FamilyMember {
  name: string;
  age: string;
  deceased: string;
}

export interface Screens {
  isEdit: boolean;
}

export interface Profile {
  firstName: string;
  lastName: string;
  gender: string;
  birthdate: string;
  email: string;
  phone: string;
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
  maritalStatus: string;
}

export interface ReduxState {
  familyMembers: FamilyMember[];
  medicalHistory: any;
  screens: Screens;
  profile: Profile;
}
