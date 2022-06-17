import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

/*
    any time we call the setCounter funciton, React is going to automatically
    re-run the entire function component, which in this case is CounterScreen
    */
const CounterScreen = () => {
    //below, we define the starting value of counter as 0
    const [counter, setCounter] = useState(0);

    return (
        <View>
            <Button title="Increase" onPress={() => {
                setCounter(counter + 1);
            }} />
            <Button title="Decrease" onPress={() => {
                setCounter(counter - 1);
            }} />
            <Text>Current Count: {counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;