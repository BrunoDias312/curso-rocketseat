import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Alert,
} from 'react-native'
import { style } from './styles'
import { Participant } from '../../components/Participant/index'
import { useState } from 'react'
// View = Div


export const Home = () => {
    //const partipant = ['lucas']
    const [partipant, setPartipant] = useState<String[]>([])
    const [participanteName, setParticipantName] = useState<String>('')


    const handleParticipantAdd = () => {

        if (partipant.includes(participanteName)) {
            return Alert.alert("Participante Existe", "Este cara ja participa");
        }
        // partipant.push('Ana');
        // setPartipant([...partipant, 'pas'])

        //pega o estado atual do objeto e entao add o dado atual.
        setPartipant(prevState => [...partipant, participanteName])
        console.log(partipant)
        setParticipantName('')
    }


    const handleParticipantRemove = (name: any) => {
        console.log(partipant.filter(participante => participante !== name)) //logica


        Alert.alert("Remover", `Remover o participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => { setPartipant(prevState => prevState.filter(participante => participante !== name)) },
            },
            {
                text: 'Nao',
                style: 'cancel'
            }
        ])
    }

    const handleStates = (value: string) => {
        setParticipantName(value)
        console.log(value)
    }

    return (
        <View style={style.container}>
            <Text style={style.title}>
                React
            </Text>
            <View style={style.form}>
                <TextInput
                    style={style.input}
                    placeholder='Nome do Participante'
                    placeholderTextColor='#6b6b6b'
                    // keyboardType='numeric'
                    onChangeText={e => setParticipantName(e)}
                    value={participanteName}
                />
                <TouchableOpacity style={style.button} onPress={handleParticipantAdd}>
                    <Text style={style.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
            {/* <View>
                <Participant name='Rodrigo' onRemove={() => handleParticipantRemove('rodrigo')}/>
                <Participant name='Bruno' onRemove={() => handleParticipantRemove('rodrigo')}/>
            </View> */}
            {/* <ScrollView showsVerticalScrollIndicator={false}>
                {
                    partipant.map((partipante, key) => (
                        <Participant name={partipante} onRemove={() => handleParticipantRemove('rodrigo')} key={key} />
                    ))
                }
            </ScrollView> */}


            {/* 
                //testando assicrono
            <Text style={style.textState}>Testando o estado Assicrono</Text>
            <Text style={style.textState}>{participanteName}</Text>
            <View style={style.formState}>
                <TextInput
                    style={style.input}
                    placeholder='Nome do Participante'
                    placeholderTextColor='#6b6b6b'
                    onChangeText={e => handleStates(e)}
                    value={participanteName}
                />
            </View> */}

            <FlatList
                data={partipant}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant name={item} onRemove={() => handleParticipantRemove(item)} key={item} />
                )}
                ListEmptyComponent={() => (
                    <Text style={style.listEmpryt}>
                        Sem participantes...
                    </Text>
                )}
            />

        </View>
    )
}