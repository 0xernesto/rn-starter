import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = props => {
  const name = 'Ernesto'
  return (
    <View>
      <Text style={styles.text}>Getting started with react native!</Text>
      <Button 
        onPress={() => props.navigation.navigate('Components')}
        title="Go to Components Demo" 
      />
      <Button
        onPress={() => props.navigation.navigate('List')}
        title="Go to List Demo"
      />
      <Button
        onPress={() => props.navigation.navigate('Image')}
        title="Go to Image Demo"
      />
      <Button
        onPress={() => props.navigation.navigate('Counter')}
        title="Go to Counter Demo"
      />
      <Button
        onPress={() => props.navigation.navigate('Color')}
        title="Go to Color Demo"
      />
      <Button
        onPress={() => props.navigation.navigate('Square')}
        title="Go to Square Demo"
      />
      <Button
        onPress={() => props.navigation.navigate('Text')}
        title="Go to Text Demo"
      />
      <Button
        onPress={() => props.navigation.navigate('Box')}
        title="Go to Box Demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

/*

We can also pull just the navigation part of the props object as shown below

const HomeScreen = ({ navigation }) => {
  const name = 'Ernesto'
  return (
    <View>
      <Text style={styles.text}>Getting started with react native!</Text>
      <Button 
        onPress={() => navigation.navigate('Components')}
        title="Go to Components Demo" 
      />
      <Button
        onPress={() => navigation.navigate('List')}
        title="Go to List Demo"
      />
    </View>
  );
};
*/