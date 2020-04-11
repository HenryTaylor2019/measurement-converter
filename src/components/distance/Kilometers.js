import React, { Component } from 'react';
import { ConverterContext } from '../../contexts/ConverterContext';

class MilesKilometers extends Component {
    static contextType = ConverterContext;


    render() {
        const { handleKilometersInput, kilometers } = this.context;


        let kilometersToMiles = (kilometers * 0.62137).toFixed(2) + ' miles';
        let kilometersToFeet = (kilometers * 3280.8).toFixed(2) + ' ft';
        let kilometersToYards = (kilometers * 1093.6).toFixed(2) + ' yd'


        return (
            <div>
                <div>

                    <div class="ui form">
                        <div class="field">
                            <label> <h3>Kilometers</h3></label>
                            <input type="number" value={kilometers} onInput={handleKilometersInput} />
                        </div>
                    </div>
                    {kilometers > 0 ?
                        <div className="answer">
                            <p>{kilometersToMiles}</p>
                            <p>{kilometersToFeet}</p>
                            <p>{kilometersToYards}</p>
                        </div>
                        : null}

                </div>
            </div>
        )
    }


}
export default MilesKilometers;