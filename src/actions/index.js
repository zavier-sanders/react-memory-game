export const NEW_GAME = 'NEW_GAME';
export const CLICK_CARD = 'CLICK_CARD';
export const NEXT_MOVE = 'NEXT_MOVE';

export const newGame = () => {
  return {
    type: NEW_GAME
  }
}

export const clickCard = cardId => (dispatch, getState) => {
  dispatch({ type: CLICK_CARD, cardId })
  const isPending = getState().card.isPending;

  if (isPending) {
    setTimeout(() => dispatch({ type: NEXT_MOVE }), 500)
  }
}
