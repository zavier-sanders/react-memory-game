import { combineReducers } from 'redux';
import CardReducer from './reducer_cards';

const rootReducer = combineReducers({
  card: CardReducer
});

export default rootReducer;
