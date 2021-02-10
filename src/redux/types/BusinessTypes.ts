export const LOAD_BUSINESS_LIST = 'LOAD_BUSINESS_LIST';
export const CLEAR_COCKTAILS_LIST = 'CLEAR_COCKTAILS_LIST';

export type LoadBusinesslsListAction = {
  type: typeof LOAD_BUSINESS_LIST;
  payload: any;
};

export type BusinessActionType = LoadBusinesslsListAction;
