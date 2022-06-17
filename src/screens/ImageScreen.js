import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../Components/ImageDetail';

//ImageScreen is the parent component of ImageDetail
//each time we call the child ImagaDetail, we can pass a prop down to it, such as title 'title' and 'imageSource'
//we can name these props that we pass down to them whatever we want
//since we are passing props down to the child, we need to receive it in the component file of the child
//each copy of ImageDetail is 100% disconected from the others
const ImageScreen = () => {
    return (
        <View>
            <ImageDetail 
                title="Forest" 
                score={9} 
                imageSource={require('../../assets/forest.jpg')} 
            />
            <ImageDetail 
                title="Beach" 
                score={7} 
                imageSource={require('../../assets/beach.jpg')} 
            />
            <ImageDetail 
                title="Mountain" 
                score={10} 
                imageSource={require('../../assets/mountain.jpg')} 
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;