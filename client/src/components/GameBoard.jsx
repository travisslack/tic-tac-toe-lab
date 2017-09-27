import React, {Component} from 'react';
import SquareDetail from "./SquareDetail.jsx"


class GameBoard extends Component {

    render() {
        return(
            <article>
                <section>
                    <SquareDetail id="1"/>
                    <SquareDetail id="2"/>
                    <SquareDetail id="3"/>
                </section>
                <section>
                    <SquareDetail id="4"/>
                    <SquareDetail id="5"/>
                    <SquareDetail id="6"/>
                </section>
                <section>
                    <SquareDetail id="7"/>
                    <SquareDetail id="8"/>
                    <SquareDetail id="9"/>
                </section>
            </article>
        )
    }

}

export default GameBoard;