import {
    Text,
    View,
    StyleSheet
} from 'react-native'


export const style = StyleSheet.create({
    container: {
        padding: 10,
        paddingTop: 30,
        backgroundColor: "#131016",
        flex: 1

    },
    title: {
        fontSize: 48,
        fontWeight: '600',
        color: '#fff'
    },
    input: {
        backgroundColor: '#1f1e25',
        height: 56,
        borderRadius: 5,
        color: '#fff',
        padding: 16,
        flex: 1,
        marginRight: 12
    },
    buttonText: {
        color: '#fff',
        fontSize: 24
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31cf67',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42
    },
    listEmpryt: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center'
    },
    //state
    formState: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42
    },
    textState: {
        fontSize: 25,
        fontWeight: '600',
        color: '#fff',
        marginBottom: 5
    }
});

//#31cf67