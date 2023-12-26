export type typeUser = {
  id?: string,
  email?: string,
  name?: string, 
  confirmed?: boolean,
  token?: string
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
