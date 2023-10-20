import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";



export default ToDoApp = ( { toDoList, changeStatus } ) => {

    return(
        <View style={styles.container}>

            {toDoList.map(item => (
                <TouchableOpacity key={item.id} onPress={() => changeStatus(item.id)}>
                    <View style={{...styles.entry, backgroundColor: item.done ? 'green': '#fff'}}>
                        <Text style={ styles.text }>{item.text}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    entry: {
        minWidth: 250,
        borderWidth: 1,
        borderColor: '#000',
        marginBottom: 10
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        padding: 5
    }
});
