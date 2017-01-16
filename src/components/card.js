import React from 'react';
import { connect } from 'react-redux';

export const Card = ({clickCard, cardId, id, matched, flipped}) => {

    return (

      <div
        className={`card ${flipped ? 'flipped' : ''} ${matched ? 'matched' : ''} `}
        onClick={() => clickCard(cardId)}>
        <div className="card-content">
          <div className="card-face">
            <span>{id}</span>
          </div>
          <div className="card-back">
          </div>
        </div>
      </div>
    );
}

function mapStateToProps(state) {
  return {
    isPending: state.card.isPending
  }
}

export default connect(mapStateToProps)(Card)
