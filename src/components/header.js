import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { newGame } from '../actions/index';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <span>Memory Game</span>
        <div className="help-text">
          <span>{this.props.matchedCards.length}/{this.props.cards.length}&nbsp;cards</span>
          <button onClick={this.props.newGame} className="btn-reset">Restart</button>
        </div>
      </header>
    );
  };
}

function mapStateToProps(state){
  return {
    cards: state.card.cards,
    matchedCards: state.card.matchedCards
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ newGame }, dispatch );
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
