import React, { Component } from 'react';
import { ConverterContext } from '../../contexts/ConverterContext';

class Feet extends Component {
    static contextType = ConverterContext;


    render() {
        const { handleFeetInput, feet } = this.context;

        let feetToYards= (feet * 0.33333).toFixed(2) + ' yd'
        let feetToKilometers = (feet / 3280.8).toFixed(2) + ' km';
        let feetToMiles= (feet * 5280).toFixed(2) + ' miles'
        

        return (
            <div>
                <div>

                    <div>
                        <div>
                            <label> <h3>Feet</h3></label>
                            <input type="number" value={feet} onInput={handleFeetInput} />
                        </div>
                    </div>
                    {feet > 0 ?
                        <div className="answer">
                            <p>{feetToKilometers}</p>
                            <p>{feetToMiles}</p>
                            <p>{feetToYards}</p>
                        </div>
                        : null}

                </div>
            </div>
        )
    }


}
export default Feet;