import createCards from '../data/cards';
import { NEW_GAME, CLICK_CARD, NEXT_MOVE } from '../actions/index';

const NEW_BOARD = () => ({
  cards: createCards(24),
  compareCards: [],
  matchedCards: [],
  isMatched: false,
  isPending: false
})

const clickCard = (state, index) => {
  if (cantBeClicked(state, index)) {
    return state
  }
  let newState = {
    compareCards: [...state.compareCards, index]
  }
  if (newState.compareCards.length === 2) {
    newState = checkCards({...state, ...newState}, index)
  }
  return {...state, ...newState}
}

const checkCards = (state, index) => {
  let newState = {
    compareCards: [...state.compareCards],
    isMatched: false,
    isPending: true
  }

  if (cardsMatch(state.cards, newState.compareCards)) {
    newState.isMatched = true
  }

  return {...state, ...newState}
}

const nextMove = (state) => {
  let newState = {
    compareCards: [],
    isPending: false,
    matchedCards: [...state.matchedCards]
  }

  if (state.isMatched) {
    newState.matchedCards = [...state.matchedCards, ...state.compareCards]
  }


  return {...state, ...newState}
}

const cardsMatch = (cards, compareList) => cards[compareList[0]].id === cards[compareList[1]].id

const cantBeClicked = (state, index) =>
    state.compareCards.includes(index) ||
    state.matchedCards.includes(index) ||
    state.isPending

export default function(state = NEW_BOARD(), action) {
  switch (action.type) {
    case NEW_GAME:
      return NEW_BOARD();
      break;
    case CLICK_CARD:
      return clickCard(state, action.cardId);
      break;
    case NEXT_MOVE:
      return nextMove(state);
      break;
    default: return state;
  }
}
