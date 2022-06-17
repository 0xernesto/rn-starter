import React, { useState } from 'react';
import { View, StyleSheet, Button, FlatList } from 'react-native';

const ColorScreen = () => {
    const [colors,setColors] = useState([])

    return (
        <View>
            <Button title="Add a Color" onPress={() => {
                //we should not modify the colors array
                //we are creating a new array with the setColors function
                //the ...colors tells setColors to take a copy of colors and copy it in the new array
                //after that, we add a new entry in the new array by calling RandomRgb
                //since any time we change a state variable, we re-reun the entire component,
                //we can see the view below get updated every time we tap the button
                //each time we tap the button, a new element gets added to the new array
                setColors([...colors, randomRgb()]);
            }} />
            <FlatList
                keyExtractor={(item) => item}
                data={colors}
                renderItem={({ item }) => {
                    //item === 'rgb(0,0,0)'
                    return <View style={{ height: 100, width: 100, backgroundColor: item }} />
                }}
            />
        </View>
    );
};

//helper function to generate random RGB numbers
const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    //we are returning a template string, for which we use back tick characters (NOT single quotes)
    return `rgb(${red}, ${green}, ${blue})`
};

const styles = StyleSheet.create({});

export default ColorScreen;