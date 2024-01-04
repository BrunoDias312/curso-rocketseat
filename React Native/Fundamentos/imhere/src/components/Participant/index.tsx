import {
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native'
import { style } from './styles'

type Props = {
    name: string;
    onRemove: () => void
}




export const Participant = (props:Props) => {
    return (
        <View style={style.container}>
            <Text style={style.name}>{props.name}</Text>
            <TouchableOpacity style={style.button} onPress={props.onRemove}>
                <Text style={style.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
    )
}