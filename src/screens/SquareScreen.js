import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../Components/ColorCounter';

//constant value
const COLOR_INCREMENT = 15;

//we should define the reducer function outside of the screen componenent to avoid confusion
//the first argument is the object that contains all of our state variables inside of it
//the second argument is the method for how to change the state object
const reducer = (state, action) => {
    //state === { red: number, green: number, blue: number };
    //action === { type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15 }

    switch (action.type) {
        case 'change_red':
            //since we don't want to modify our state values directly, we make a new object from the
            //original state object, and modify the new object with the updated values
            //we will also add validation so that the state variable is between 0 adn 255
            return state.red + action.payload > 255 || state.red + action.payload < 0
            ? state
            : { ...state, red: state.red + action.payload }
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0
            ? state
            : { ...state, green: state.green + action.payload }
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
            ? state
            : { ...state, blue: state.blue + action.payload }
        default:
            return state;
    };
};

const SquareScreen = () => {

    //initially, state is going to initially be equal to the object { red: 0, green: 0, blue: 0 }
    //the state variable is gointg to be how we access our different state values within a single object
    //the purpose of the dispatch function is to run the reducer function
    //'runMyReducer' is a more appropriate name for 'dispatch', but 'dispatch' is what it's called by convention
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    //to refer to red, green, and blue within the state object, we could call them by saying
    //state.red, state.green, and state.blue
    //however, we can destructure them so that it's easier to call them
    const { red, green, blue } = state;

    return (
        <View>
            <ColorCounter 
                color="Red" 
                onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })} 
                onDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })}
            />
            <ColorCounter 
                color="Green"
                onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT })} 
                onDecrease={() => dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT })} 
            />
            <ColorCounter 
                color="Blue"
                onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })} 
                onDecrease={() => dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })}
            />
            <View style=
                {{ 
                    height: 150, 
                    width: 150, 
                    backgroundColor: `rgb(${red}, ${green}, ${blue})` 
                }} 
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;


/*
//how the code looks like with a reducer, before applying the community convention

import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../Components/ColorCounter';

//constant value
const COLOR_INCREMENT = 15;

//we should define the reducer function outside of the screen componenent to avoid confusion
//the first argument is the object that contains all of our state variables inside of it
//the second argument is the method for how to change the state object
const reducer = (state, action) => {
    //state === { red: number, green: number, blue: number };
    //action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 }
    switch (action.colorToChange) {
        case 'red':
            //since we don't want to modify our state values directly, we make a new object from the
            //original state object, and modify the new object with the updated values
            //we will also add validation so that the state variable is between 0 adn 255
            return state.red + action.amount > 255 || state.red + action.amount < 0
            ? state
            : { ...state, red: state.red + action.amount }
        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount < 0
            ? state
            : { ...state, green: state.green + action.amount }
        case 'blue':
            return state.blue + action.amount > 255 || state.blue + action.amount < 0
            ? state
            : { ...state, blue: state.blue + action.amount }
        default:
            return state;
    };
};

const SquareScreen = () => {

    //initially, state is going to initially be equal to the object { red: 0, green: 0, blue: 0 }
    //the state variable is gointg to be how we access our different state values within a single object
    //the purpose of the dispatch function is to run the reducer function
    //'runMyReducer' is a more appropriate name for 'dispatch', but 'dispatch' is what it's called by convention
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    //to refer to red, green, and blue within the state object, we could call them by saying
    //state.red, state.green, and state.blue
    //however, we can destructure them so that it's easier to call them
    const { red, green, blue } = state;

    return (
        <View>
            <ColorCounter 
                color="Red" 
                onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })} 
                onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })}
            />
            <ColorCounter 
                color="Green"
                onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })} 
                onDecrease={() => dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })} 
            />
            <ColorCounter 
                color="Blue"
                onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })} 
                onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })}
            />
            <View style=
                {{ 
                    height: 150, 
                    width: 150, 
                    backgroundColor: `rgb(${red}, ${green}, ${blue})` 
                }} 
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;
*/





/*
//how the code looks like without using a reducer, only useState

import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../Components/ColorCounter';

//constant value
const COLOR_INCREMENT = 15;

const SquareScreen = () => {
    //state variables
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    //helper function to decide what color we want to update and validate number is between 0 and 255
    const setColor = (color, change) => {
        //color === 'red', 'green', or 'blue'
        //change === +15 or -15
        switch (color){
            case 'red':
                if (red + change > 255 || red + change < 0) {
                    return;
                } else {
                    setRed(red + change);
                };
                return;
            case 'green':
                if (green + change > 255 || green + change < 0) {
                    return;
                } else {
                    setGreen(green + change);
                };
                return;
            case 'blue':
                if (blue + change > 255 || blue + change < 0) {
                    return;
                } else {
                    setBlue(blue + change);
                };
                return;
                default:
                    return;
        };
    };

    return (
        <View>
            <ColorCounter 
                color="Red" 
                onIncrease={() => setColor('red', COLOR_INCREMENT)} 
                onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
            />
            <ColorCounter 
                color="Green"
                onIncrease={() => setColor('green', COLOR_INCREMENT)} 
                onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)} 
            />
            <ColorCounter 
                color="Blue"
                onIncrease={() => setColor('blue', COLOR_INCREMENT)} 
                onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
            />
            <View style=
                {{ 
                    height: 150, 
                    width: 150, 
                    backgroundColor: `rgb(${red}, ${green}, ${blue})` }} 
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;
*/



/*
    //Alternate way doing the conditional logic in setColor helper function above
        if (color === 'red') {
            if (red + change > 255 || red + change < 0) {
                return;
            } else {
                setRed(red + change);
            };
        };
        if (color === 'green') {
            if (green + change > 255 || green + change < 0) {
                return;
            } else {
                setGreen(green + change);
            };
        };
        if (color === 'blue') {
            if (blue + change > 255 || blue + change < 0) {
                return;
            } else {
                setBlue(blue + change);
            };
        };
*/

/*
    Alternate way doing the conditional logic in setColor helper function above
        switch (color){
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
                return;
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                return;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                return;
            default:
                return;
        };
*/