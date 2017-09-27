import React, {Component} from 'react';
import GameBoard from '../components/GameBoard.jsx';

class GameContainer extends Component {
constructor(props) {
    super(props);
    this.state = {
        leftColumn: [],
        middleColumn: [],
        rightColumn: [],
        leftRow: [],
        middleRow: [],
        rightRow: [],
        leftDiag: [],
        rightDiag: []
    };
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