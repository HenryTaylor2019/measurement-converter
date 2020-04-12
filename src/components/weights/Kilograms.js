import React, { Component } from 'react';
import { ConverterContext } from '../../contexts/ConverterContext';

class Kilograms extends Component {
    static contextType = ConverterContext;


    render() {
        const { kilograms, handleKilosInput } = this.context;

        let kiloToStone = (kilograms / 6.35029318).toFixed(2) + ' stone';
        let kiloToPounds = (kilograms * 2.2046).toFixed(2) + ' lb';
        let kiloToOunces = (kilograms * 35.274).toFixed(2) + ' oz';


        return (
            <div>
                <div>

                    <div class="ui form">
                        <div class="field">
                            <label> <h3>Kilograms</h3> </label>
                            <input type="number" value={kilograms} onInput={handleKilosInput} />
                        </div>
                    </div>
                    {kilograms > 0 ?
                    <div className="answer">
                        <p>{kiloToStone}</p>
                        <p>{kiloToPounds}</p>
                        <p>{kiloToOunces}</p>
                    </div>
                    : null}



                </div>
            </div>
        )
    }


}
export default Kilograms;