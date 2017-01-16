import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './card';
import { bindActionCreators} from 'redux';
import { clickCard } from '../actions/index';

class Game extends Component {

  render() {
    const { cards, matchedCards, compareCards, clickCard } = this.props;
    return (
        <div className="container">
          {cards.map((card, index) =>
            <Card
              key={index}
              cardId={index}
              matched={matchedCards.includes(index)}
              flipped={compareCards.includes(index)}
              clickCard={clickCard}
              {... card}
            />
          )}
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cards: state.card.cards,
    compareCards: state.card.compareCards,
    matchedCards: state.card.matchedCards
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ clickCard }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
