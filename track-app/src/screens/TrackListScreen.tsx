import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const TrackListScreen = ({ navigation }: { navigation: any }) => {
    return (
        <View style={styles.container}>
            <Text>TrackListScreen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('TrackDetail')} style={styles.button}>
                <Text style={styles.buttonText}>Go to Track Detail</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    button: {
        marginTop: 15,
        backgroundColor: 'dodgerblue',
        padding: 15,
        borderRadius: 10,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 20
    }
})

export default TrackListScreen
