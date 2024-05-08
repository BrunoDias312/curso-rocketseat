import { useNavigation } from "@react-navigation/native";
import { VStack, Box, Text, HStack, FlatList, Heading } from "native-base";
import { HomeHeader } from "./components/Header";
import { Group } from "./components/Group";
import { useState } from "react";

import { AppNavigateRoutesProps } from "@routes/app.routes";
import { ExeciseCard } from "@components/ExeciseCard";




export const Home = () => {
    const navigation = useNavigation<AppNavigateRoutesProps>()

    const [groups, setGroups] = useState(['Costa', 'Ombro', 'Tríceps', 'Bíceps'])
    const [groupSelected, setGroupSelected] = useState('Costa')
    const [exercises, setExercises] = useState([
        '3 série x 12 repetições',
        '3 série x 10 repetições',

    ])

    const handleOpenExeciseDetails = () => {
        navigation.navigate('exercise')
    }


    return (
        <VStack flex={1}>
            <HomeHeader />

            <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Group
                        name={item}
                        isActive={groupSelected === item}
                        onPress={() => setGroupSelected(item)}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                _contentContainerStyle={{ px: 8 }}
                my={10}
                maxH={10}
                minH={10}
            />

            <VStack flex={1} px={8}>
                <HStack justifyContent='space-between' mb={5}>
                    <Heading color='gray.200' fontSize='md'>
                        Exercicios
                    </Heading>

                    <Text color='gray.200' fontSize='sm'>
                        {exercises.length}
                    </Text>
                </HStack>



                <FlatList
                    data={exercises}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <ExeciseCard title={item} onPress={handleOpenExeciseDetails} />
                    )}
                    showsVerticalScrollIndicator={false}
                    _contentContainerStyle={{ paddingBottom: 20 }}
                />

            </VStack>



        </VStack>
    )
}