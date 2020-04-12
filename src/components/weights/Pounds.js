import React, { Component } from 'react';
import { ConverterContext } from '../../contexts/ConverterContext';

class Pounds extends Component {
    static contextType = ConverterContext;


    render() {
        const { pounds, handlePoundsInput } = this.context;

        let poundsToStone = (pounds * 0.071429).toFixed(2) + ' stone';
        let poundsToKilos = (pounds / 2.2046).toFixed(2) + ' kg';
        let poundsToOunces = (pounds * 16).toFixed(2) + ' oz';


        return (
            <div>
                <div>

                    <div class="ui form">
                        <div class="field">
                            <label> <h3>Pounds</h3> </label>
                            <input type="number" value={pounds} onInput={handlePoundsInput} />
                        </div>
                    </div>
                    {pounds > 0 ?
                        <div className="answer">
                            <p>{poundsToStone}</p>
                            <p>{poundsToKilos}</p>
                            <p>{poundsToOunces}</p>
                        </div>
                        : null}


                </div>
            </div>
        )
    }


}
export default Pounds;