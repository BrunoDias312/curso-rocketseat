import { StyleSheet } from 'react-native';



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1A1A1A',
        width: '100%',
        height: '100%',
        position: 'relative'

    },
    header: {
        width: '100%',
        height: 170,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0D0D0D'

    },
    imgRocket: {
        height: 52,
        width: 30,
        marginRight: 5
    },
    imgLetters: {
        height: 28,
        width: 44
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        position: 'absolute',
        top: 140,
        border: '1px solid #0D0D0D',
        borderRadius: 5,
        zIndex: 200
    },
    input: {
        backgroundColor: '#1f1e25',
        color: '#fff',
        padding: 16,
        flex: 1,
        marginRight: 10,
        marginLeft: 20,
        borderRadius: 10,
    },
    addButton: {
        backgroundColor: '#1E6F9F',
        padding: 20,
        borderRadius: 6,
        marginRight: 10
    },
    imgAddButton: {
        height: 18,
        width: 18
    },
    body: {
        width: '100%',
        height: '100%',
        padding: 23,
        marginTop: 50,
        paddingRight: 24,
    },
    statusTasks: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#333',
        marginBottom: 22
    },
    itensTasks: {
        flexDirection: 'row'
    },
    textStatusLeft: {
        color: '#4EA8DE',
        fontWeight:'700',
        fontSize: 14,
        marginRight: 8
    },
    textStatusRight: {
        color: '#8284FA',
        fontWeight:'700',
        fontSize: 14,
        marginRight: 8
    },
    valueTask: {
        paddingTop: 2,
        paddingRight: 8,
        paddingBottom: 2,
        paddingLeft: 8,
        backgroundColor: '#333',
        borderRadius: 10,
        color: '#D9D9D9',
        fontWeight: 'bold',
        fontSize: 12
    }

});



export default styles;