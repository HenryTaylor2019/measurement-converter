import React, { Component } from 'react';
import { ConverterContext } from '../../contexts/ConverterContext';

class Yards extends Component {
    static contextType = ConverterContext;


    render() {
        const { handleYardsInput, yards } = this.context;

        let yardsToYards= (yards * 5280.0).toFixed(2) + ' ft'
        let yardsToKilometers = (yards / 0.62137).toFixed(2) + ' km';
        let yardsToMiles= (yards * 5280.0).toFixed(2) + ' ft'
        

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
                            <p>{yardsToYards}</p>
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