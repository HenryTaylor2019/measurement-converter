import React, { Component } from 'react';
import { ConverterContext } from '../../contexts/ConverterContext';

class Ounces extends Component {
    static contextType = ConverterContext;


    render() {
        const { ounces, handleOuncesInput } = this.context;

        let ouncesToStone = (ounces * 0.0044643).toFixed(3) + ' stone';
        let ouncesToKilos = (ounces / 35.274).toFixed(2) + ' kg';
        let ouncesToPounds = (ounces / 16).toFixed(2) + ' lb';


        return (
            <div>
                <div>

                    <div class="ui form">
                        <div class="field">
                            <label> <h3>Ounces</h3> </label>
                            <input type="number" value={ounces} onInput={handleOuncesInput} />
                        </div>
                    </div>
                    {ounces > 0 ?
                        <div className="answer">
                            <p>{ouncesToStone}</p>
                            <p>{ouncesToKilos}</p>
                            <p>{ouncesToPounds}</p>
                        </div>
                        : null}


                </div>
            </div>
        )
    }


}
export default Ounces;