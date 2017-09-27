import React, {Component} from 'react';
import GameBoard from '../components/GameBoard.jsx';

class GameContainer extends Component {
constructor(props) {
    super(props);
    this.state = {
        leftColumn: [],
        middleColumn: [],
        rightColumn: [],
        topRow: [],
        middleRow: [],
        bottomRow: [],
        leftDiag: [],
        rightDiag: []
    };
    this.handleDetailClick = this.handleDetailClick.bind(this);
}

    addToArrays(event, value) {       
        if (id === "1" || id === "2" || id === "3"){
            this.setState( { topRow: this.state.topRow.push(value) } );
        } 

        if (id === "4" || id === "5" || id === "6"){
            this.setState( { middleRow: this.state.middleRow.push(value) } );
        } 

        if (id === "7" || id === "8" || id === "9"){
            this.setState( { bottomRow: this.state.bottomRow.push(value) } );
        } 

        if (id === "1" || id === "4" || id === "7"){
            this.setState( { leftColumn: this.state.leftColumn.push(value) } );
        } 

        if (id === "2" || id === "5" || id === "8"){
            this.setState( { middleColumn: this.state.middleColumn.push(value) } );
        } 

        if (id === "3" || id === "6" || id === "9"){
            this.setState( { rightColumn: this.state.rightColumn.push(value) } );
        } 


        if (id === "1" || id === "5" || id === "9"){
            this.setState( { leftDiag: this.state.leftDiag.push(value) } );
        } 


        if (id === "3" || id === "5" || id === "7"){
            this.setState( { rightDiag: this.state.rightDiag.push(value) } );
        } 


    }

    render() {
        return(
            <main>
                <h1>Tic Tac Toe</h1>
                <GameBoard />
            </main>
        )
    }


}

export default GameContainer;