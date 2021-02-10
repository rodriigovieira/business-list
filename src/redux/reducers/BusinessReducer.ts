import {BusinessActionType, LOAD_BUSINESS_LIST} from '../types/BusinessTypes';

type BusinessReducerType = {
  business: [];
};

const InitialState: BusinessReducerType = {
  business: [],
};

export const BusinessReducer = (
  state = InitialState,
  action: BusinessActionType,
) => {
  switch (action.type) {
    case LOAD_BUSINESS_LIST: {
      return {
        ...state,
        business: action.payload,
      };
    }
    default: {
      return {...state};
    }
  }
};
