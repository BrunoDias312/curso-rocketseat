import { ScreenHeader } from "@components/ScreenHeader";
import { useNavigation } from "@react-navigation/native";
import { Center, Box, Text, VStack, Heading } from "native-base";
import { HistoryCard } from "./Components/HistoryCard";
import { SectionList } from "native-base";
import { useState } from "react";


const data = [
    {
        title: '12:10',
        data: ['Puxada frontal', 'unilatela']
    },
    {
        title: '10:10',
        data: ['Puxada frontal', 'unilatela']
    },
]


export const History = () => {
    const navigation = useNavigation()
    const [exercise, setExecise] = useState(data)


    return (
        <VStack flex={1}>
            <ScreenHeader title='Historico de exercicios' />

            <SectionList
                sections={exercise}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <HistoryCard />
                )}
                renderSectionHeader={({ section }) => (
                    <Heading
                        color='gray.200'
                        fontSize='md'
                        mt={10}
                        mb={3}>
                        {section.title}
                    </Heading>
                )}
                px={8}
                contentContainerStyle={exercise.length === 0 && {flex: 1, justifyContent: "center"}}
                ListEmptyComponent={() => (
                    <Text color='gray.100' textAlign='center'>
                        Não há exercicios registrados ainda. {'\n'}
                        Vamos fazer exercicios hoje?
                    </Text>
                )}
                showsVerticalScrollIndicator={false}
            />


        </VStack>
    )
}