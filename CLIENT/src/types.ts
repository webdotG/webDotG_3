export type typeUser = {
  id?: string | number,
  email?: string,
  name?: string, 
  confirmed?: boolean,
  token?: string,
  password?: string,
  confirmPassword?: string
}

export interface typeUserData {
  user: typeUser & { token: string } | null;
  id?:  number; 
  email?:  string | undefined ; 
}

export interface typeFetchAuthFulfilledAction {
  type: string;
  payload: typeUser;
  meta: {
    arg: { email: string; password: string };
    requestId: string;
    requestStatus: 'fulfilled';
  };
}
