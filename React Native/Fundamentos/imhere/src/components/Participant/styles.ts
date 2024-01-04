import {
    Text,
    View,
    StyleSheet
} from 'react-native'


export const style = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5
    },
    name: {
        fontSize: 20,
        color: '#fff',
        flex: 1,
        marginLeft: 16
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#E23C44',
        alignItems: 'center',
        justifyContent: 'center',
    },
})