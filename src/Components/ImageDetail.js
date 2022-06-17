import React from 'react';
import {View, Text, StyleSheet, Image } from 'react-native';

//this is a child component of ImageScreen, which is passing down props to it
//the first argument to this function needs to be the props object, since we are reveiving props from the parent component
const ImageDetail = props => {
    return (
        <View>
            <Image source={props.imageSource} />
            <Text>{props.title}</Text>
            <Text>Image Score = {props.score}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageDetail;