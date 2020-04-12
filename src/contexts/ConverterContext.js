import React, { createContext, Component } from 'react';

export const ConverterContext = createContext();

class ConverterContextProvider extends Component {
    state = {
        miles: null,
        kilometers: null,
        feet: null,
        yards: null,
        stone: null,
    }

    handleMilesInput = (e) => {

        this.setState({
            miles: e.target.value,
        });
        e.preventDefault();
    }

    handleKilometersInput = (e) => {
        this.setState({
            kilometers: e.target.value,

        });
        e.preventDefault();
    }

    handleFeetInput = (e) => {
        this.setState({
            feet: e.target.value,

        });
        e.preventDefault();
    }

    handleYardsInput = (e) => {
        this.setState({
            yards: e.target.value,

        });
        e.preventDefault();
    }

    handleStoneInput = (e) => {
        this.setState({
            stone: e.target.value,

        });
        e.preventDefault();
    }

    handleKilosInput = (e) => {

        this.setState({
            kilograms: e.target.value,
        });
        e.preventDefault();
    }

    handlePoundsInput = (e) => {
        this.setState({
            pounds: e.target.value,

        });
        e.preventDefault();
    }

    handleOuncesInput = (e) => {
        this.setState({
            ounces: e.target.value,

        });
        e.preventDefault();
    }


    render() {

        return (
            <ConverterContext.Provider value={{
                ...this.state,
                handleMilesInput: this.handleMilesInput,
                handleKilometersInput: this.handleKilometersInput,
                handleFeetInput: this.handleFeetInput,
                handleYardsInput: this.handleYardsInput,
                handleStoneInput: this.handleStoneInput,
                handleKilosInput: this.handleKilosInput,
                handlePoundsInput: this.handlePoundsInput,


            }}>

                {this.props.children}
            </ConverterContext.Provider>
        );
    }
}

export default ConverterContextProvider;