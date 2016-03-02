import {DefaultSize} from '../constants/MobileBrands';
import {SET_PHONE} from '../actions';

const initialState = Object.assign({}, DefaultSize);

module.exports = (state = initialState, action = {type:null}) => {
  switch (action.type) {
    case SET_PHONE:
      return Object.assign({}, state, action.phone);
    default:
      return state
  }
}
