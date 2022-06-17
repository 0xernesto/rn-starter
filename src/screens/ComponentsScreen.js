//react library contains code that knows how different components work together
//importing the entire library
import React from 'react';

//react-native library contains code that knows how to take information from components
//importing only some parts of the library
import { Text, StyleSheet, View } from 'react-native';

//component function
//can be either a keyword function or an arrow function
const ComponentsScreen = () => {
    const v1 = 'Hi';
    const v2 = <Text>Bye</Text>;
        return (
            <View>
                <Text style={styles.textStyle}>Hello World</Text>
                <Text>{v1}</Text>
                {v2}
            </View>
        );
}

/*
  by separating styles in a separate function like this, or in a separate styles.js file,
  we can name the styles, which improves code quality and makes it easier to understand.
  We also improve the performance of the app because we can refer to the style object by ID,
  instead of creating a new object every time. This means that the style object is only sent
  through the bridge once, and all subsequent uses will refer an ID. Lastly, StyleSheet helps
  validate content because it catches errors due to incorrect style properties at the time of
  compiling, rather than at runtime when the StyleSheet is actually implemented.

  https://freecontent.manning.com/applying-and-organizing-styles-in-react-native/
*/
//StyleSheet function
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

//export the component we just created so that we can use it somewhere else in our project
export default ComponentsScreen;
