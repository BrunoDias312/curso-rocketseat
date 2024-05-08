import { Text, View, Alert, Image, TextInput, TouchableOpacity } from 'react-native';
import { useEffect, useState } from "react";
import { ListTask } from '../../ItensList/index'

import styles from './style'

type Props = {
    title?: string,
    checked?: boolean,
}


export const Home = () => {
    const [task, setTask] = useState<Props[]>([])
    const [nameTask, setNameTask] = useState<string>('')
    const completedTask = task.filter(task => task.checked === true).length;

    const handleAddTask = () => {
        const taskExists = task.some((data => data.title === nameTask))
        if(taskExists){
            return alert('Esta tarefa ja existe')
        }
        if(nameTask === '' || nameTask === null) {
            return alert('Coloque um nome a tarefa')
        }
        setTask([{ title: nameTask }, ...task])
        setNameTask('')
        return console.log(`${task}`)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.imgRocket} source={require('../../../assets/imgs/rocket.png')} />
                <Image style={styles.imgLetters} source={require('../../../assets/imgs/to.png')} />
                <Image style={styles.imgLetters} source={require('../../../assets/imgs/do.png')} />
            </View>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder='Adicione uma nova tarefa'
                    placeholderTextColor={'#808080'}
                    onChangeText={e => setNameTask(e)}
                    value={`${nameTask}`}
                />
                <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
                    <Image source={require('../../../assets/imgs/plus.png')} style={styles.imgAddButton} />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <View style={styles.statusTasks}>
                    <View style={styles.itensTasks}>
                        <Text style={styles.textStatusLeft}>Criadas</Text><Text style={styles.valueTask}>{task.length}</Text>
                    </View>
                    <View style={styles.itensTasks}>
                        <Text style={styles.textStatusRight}>Concluídas</Text><Text style={styles.valueTask}>{completedTask}</Text>
                    </View>
                </View>
                <ListTask data={task} updateList={setTask} />
            </View>
        </View>
    )
}