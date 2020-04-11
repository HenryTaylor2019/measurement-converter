import React, { Component } from 'react';
import { ConverterContext } from '../../contexts/ConverterContext';

class Yards extends Component {
    static contextType = ConverterContext;


    render() {
        const { handleYardsInput, yards } = this.context;

        let yardsToFeet= (yards * 3).toFixed(2) + ' ft'
        let yardsToKilometers = (yards / 1093.6).toFixed(2) + ' km';
        let yardsToMiles= (yards * 0.00056818).toFixed(2) + ' miles'
        

        return (
            <div>
                <div>

                    <div>
                        <div>
                            <label> <h3>Yards</h3></label>
                            <input type="number" value={yards} onInput={handleYardsInput} />
                        </div>
                    </div>
                    {yards > 0 ?
                        <div className="answer">
                            <p>{yardsToFeet}</p>
                            <p>{yardsToKilometers}</p>
                            <p>{yardsToMiles}</p>
                        </div>
                        : null}

                </div>
            </div>
        )
    }


}
export default Yards;