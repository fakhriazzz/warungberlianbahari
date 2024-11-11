import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../utils'
import { Buttons } from '../../components'

const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text2}>Ini Login</Text>
            <Buttons text='Ke Splash' onPress={() => navigation.goBack()} />
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnLogin: {
        backgroundColor: colors.red,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12
    },
    text: {
        fontSize: 16,
        color: colors.white
    },
    text2: {
        fontSize: 18,
        color: colors.black,
        textAlign: 'center'
    }
})