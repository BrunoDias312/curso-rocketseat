import { View, TextInput, FlatList, Text, Image, TouchableOpacity } from "react-native"
import { CheckBox, Separator } from "react-native-btr";
import Layer from '../../assets/imgs/Layer'
import styles from './style'

type data = {
    title?: string,
    checked?: boolean,
}

type Props = {
    data: data[],
    updateList: (list: data[]) => void
}

export const ListTask = (dataList: Props) => {
    const keyExtractor = (item: any, index: number) => item.title + index;

    const toggle = (index: number) => {//atualiza a marcação
        dataList.data[index].checked = !dataList.data[index].checked
        dataList.updateList([...dataList.data])
    }
    const handleRemoveTask = (index: number) => {
        dataList.data = dataList.data.splice(index, 1);
        dataList.updateList([...dataList.data])
    }

    const renderItem = ({ item, index }: any) => (
        <View style={styles.iten}>
            <CheckBox
                checked={item.checked}
                color='#4EA8DE'
                onPress={() => toggle(index)}
            />
            {
                item.checked ? <Text style={styles.labelChecked}>{item.title}</Text>
                    : <Text style={styles.label}>{item.title}</Text>
            }
            <TouchableOpacity onPress={() => handleRemoveTask(index)}>
                <Image source={require('../../assets/imgs/layer.png')} style={styles.imgAddButton} />
                {/* <Layer/> */}
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={dataList.data}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                ListEmptyComponent={() => (
                    <>
                        <View style={styles.boxNoTask}>
                            <Image source={require('../../assets/imgs/clip.png')} />
                            <Text style={styles.textNoTaskWeight}>
                                Você ainda não tem tarefas cadastradas
                            </Text>
                            <Text style={styles.textNoTask}>
                                Crie tarefas e organize seus itens a fazer
                            </Text>
                        </View>
                    </>
                )}
            />
        </View>
    );
}