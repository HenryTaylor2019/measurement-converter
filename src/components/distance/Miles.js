import React, { Component } from 'react';
import { ConverterContext } from '../../contexts/DistanceContext';

class Miles extends Component {
    static contextType = ConverterContext;


    render() {
        const { handleMilesInput, miles } = this.context;

        let milesToKilometers = (miles / 0.62137).toFixed(2) + ' km';
        let milesToFeet = (miles * 5280).toFixed(2) + ' ft'
        let milesToYards = (miles * 1760).toFixed(2) + ' yd'

        return (
            <div>
                <div>

                    <div>
                        <div>
                            <label> <h3>Miles</h3></label>
                            <input type="number" value={miles} onInput={handleMilesInput} />
                        </div>
                    </div>
                    {miles > 0 ?
                        <div className="answer">
                            <p>{milesToKilometers}</p>
                            <p>{milesToFeet}</p>
                            <p>{milesToYards}</p>
                        </div>
                        : null}

                </div>
            </div>
        )
    }


}
export default Miles;