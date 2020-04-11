import React, { Component } from 'react';
import { ConverterContext } from '../../contexts/ConverterContext';

class Stone extends Component {
    static contextType = ConverterContext;


    render() {
        const { stone, handleStoneInput } = this.context;

        let stoneTopounds = (stone * 14).toFixed(2) + ' lb';
        let stoneToKilograms = (stone / 0.15747).toFixed(2) + ' kg';
        let stoneToOunces = (stone * 224).toFixed(2) + ' oz';


        return (
            <div>
                <div>

                    <div class="ui form">
                        <div class="field">
                            <label> <h3>Stone</h3> </label>
                            <input type="number" value={stone} onInput={handleStoneInput} />
                        </div>
                    </div>
                    {stone > 0 ?
                        <div className="answer">
                            <p>{stoneTopounds}</p>
                            <p>{stoneToKilograms}</p>
                            <p>{stoneToOunces}</p>
                        </div>
                        : null}

                </div>
            </div>
        )
    }


}
export default Stone;