//Actions
export interface IActions {
  GET_USER_LOGGED: string;
}

//Models DB

//Reducer
export interface IState {
  userSession: any;
  userSchool: any;
  matchUsers: any;
}

export type SubmitEvent = React.SyntheticEvent;
export type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type ClickEvent = React.MouseEvent<HTMLElement>;
export interface ICredential {
  email: string;
  password: string;
}

export interface ISchoolId {
  id: string;
}

export interface IUser {
  userType: string;
  filter: string;
}

//for components
