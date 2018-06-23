import React, { Component } from 'react';

class Cards extends Component {

    render() {
        let suit = 'spades';
        const suitedCards = this.props.deckOfCards.map(card => <img src={"/cards/" + card + "_of_" + suit.toLowerCase() + ".png"} alt="cards" />)
        console.log(suitedCards)
        return (
            <div>{suitedCards}</div>
        );
    }
}
export default Cards;