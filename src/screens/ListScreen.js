import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', age: 'Age 26' },
        { name: 'Friend #2', age: 'Age 20' },
        { name: 'Friend #3', age: 'Age 45' },
        { name: 'Friend #4', age: 'Age 32' },
        { name: 'Friend #5', age: 'Age 27' },
        { name: 'Friend #6', age: 'Age 53' },
        { name: 'Friend #7', age: 'Age 30' },
    ];
    return (
        <FlatList
            keyExtractor={friend => {friend.name}}
            data={friends}
            renderItem={({ item }) => {
                return (
                    <Text style={styles.textStyle}>
                        {item.name} - {item.age}
                    </Text>
                );
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;

//keyExtractor allows us to define our key property at runtime with a single line of code
//this is the preferred method because it doesn't require us to modify each original object

//breakdown of an object element
//element === { item: { name: 'Friend #1' }, index: 0 }
//item === { name: 'Friend #1' }