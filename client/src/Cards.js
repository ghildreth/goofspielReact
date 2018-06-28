import React, { Component } from 'react';
import './Cards.css';

class Cards extends Component {
    state = {
        suit: ['spades', 'hearts', 'clubs', 'diamonds'],
    }
 
    handleSuitSelect() {
        return Math.floor(Math.random() * this.state.suit.length)
    }

    render() {
        console.log(this.state.suit)
        let player1Suit = this.handleSuitSelect();
        let player1Hand = this.state.suit[player1Suit];
        this.state.suit.splice(player1Suit, 1);
        let player2Suit = this.handleSuitSelect();
        let player2Hand = this.state.suit[player2Suit];
        this.state.suit.splice(player2Suit, 1);
        const suitedCardsP1 = this.props.deckOfCards.map(card => <img src={"/cards/" + card + "_of_" + player1Hand.toLowerCase() + ".png"} alt="cards" />)
        const suitedCardsP2 = this.props.deckOfCards.map(card => <img src={"/cards/" + card + "_of_" + player2Hand.toLowerCase() + ".png"} alt="cards" />)
        console.log(this.state.suit)
        return (
            <div>
            <div className="Player1">{suitedCardsP1}</div>
            <div className="Player2">{suitedCardsP2}</div>
            </div>
        );
    }
}
export default Cards;