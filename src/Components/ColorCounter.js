import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

//we also could have called the entire props object, const ColorCounter = props => {...
const ColorCounter = ({ color, onIncrease, onDecrease }) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button title={`Increase ${color}`} onPress={() => onIncrease()} />
            <Button title={`Decrease ${color}`} onPress={() => onDecrease()} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ColorCounter;