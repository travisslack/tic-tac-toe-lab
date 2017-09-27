import React, {Component} from 'react';
import SquareDetail from "./SquareDetail.jsx"


class GameBoard extends Component {

    render() {
        return(
            <article>
                <section>
                    <SquareDetail/>
                    <SquareDetail/>
                    <SquareDetail/>
                </section>
                <section>
                    <SquareDetail/>
                    <SquareDetail/>
                    <SquareDetail/>
                </section>
                <section>
                    <SquareDetail/>
                    <SquareDetail/>
                    <SquareDetail/>
                </section>
            </article>
        )
    }

}

export default GameBoard;