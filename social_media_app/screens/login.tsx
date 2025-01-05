import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from "react-native"
import { useState, useEffect } from "react"
import {db} from '../firebaseConfig'
import {auth} from '../firebaseConfig'
import { signInWithEmailAndPassword } from "firebase/auth"

export default function Login({navigation}:any) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        navigation.setOptions({
            headerTitle: '',
        })
    }, [])

    const handleLogin = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            navigation.navigate('Home')
        } catch (error){
            Alert.alert('Invalid email or password', '', [{text: 'OK'}])
            setEmail('')
            setPassword('')
        }

    }



    return(
        <View style={styles.container}>
            <View style={styles.tab}>
                <TextInput style={styles.emailInput} value={email} onChange={(event)=>setEmail(event.nativeEvent.text)} placeholder="Enter your Email" placeholderTextColor='darkgrey'/> 
                <TextInput style={styles.passwordInput} value={password} onChange={(event)=>setPassword(event.nativeEvent.text)} placeholder="Password" placeholderTextColor='darkgrey'/> 
                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={{color: 'white'}}>Login</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('Sign Up')}> 
                <Text style={{color: 'white'}}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    tab: {
        alignItems: 'center',
        width: '100%',

    },
    emailInput: {
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 20,
        padding: 10,
        width: '80%',
        margin: 10,
    },
    passwordInput: {
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 20,
        padding: 10,
        width: '80%',
        margin: 10,
    },
    loginButton: {
        marginTop: 20,
        borderRadius: 20,
        backgroundColor: 'blue',
        padding: 10,
        paddingHorizontal: 20,
    },
    signUpButton: {
        position: 'relative',
        top: 200,
        marginTop: 20,
        borderRadius: 20,
        backgroundColor: 'blue',
        padding: 10,
        paddingHorizontal: 20,

    },

})