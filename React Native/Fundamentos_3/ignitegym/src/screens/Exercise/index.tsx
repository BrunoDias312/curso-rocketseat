import { useNavigation } from "@react-navigation/native";
import { Box, Text, VStack, Icon, HStack, Heading, Image, ScrollView } from "native-base";
import { TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons'
import { AppNavigateRoutesProps } from "@routes/app.routes";

import BodySvg from '@assets/body.svg'
import SeriesSvg from '@assets/series.svg'
import RepetitionsSvg from '@assets/repetitions.svg'
import { Button } from "@components/Button";


export const Exercise = () => {
    const navigation = useNavigation<AppNavigateRoutesProps>()

    const handleGoBack = () => {
        navigation.goBack()
    }


    return (
        <VStack flex={1}>

            <VStack px={8} bg='gray.600' pt={12}>
                <TouchableOpacity onPress={handleGoBack}>
                    <Icon as={Feather} name="arrow-left" color='green.500' size={6} />
                </TouchableOpacity>

                <HStack justifyContent='space-between' mt={4} mb={8} alignItems='center' >
                    <Heading color='gray.100' fontSize='lg' flexShrink={1}>
                        Puxada frontal
                    </Heading>

                    <HStack alignItems='center'>
                        <BodySvg />
                        <Text color='gray.200' ml={1} textTransform='capitalize'>Costas</Text>
                    </HStack>
                </HStack>


            </VStack>

            <ScrollView>
                <VStack p={8}>
                    <Image
                        source={{ uri: 'https://blog.gsuplementos.com.br/wp-content/uploads/2022/09/Serrote-exercicio.jpg' }}
                        w='full'
                        h={80}
                        rounded='lg'
                        alt="nome do exercicio"
                        mb={3}
                        resizeMode="cover"
                    />

                    <Box bg='gray.600' rounded={4} px={4} pb={4} mb={4}>
                        <HStack alignItems='center' justifyContent='space-around' mb={6} mt={5}>
                            <HStack>
                                <SeriesSvg />
                                <Text color='gray.200' ml={2}>
                                    3 series
                                </Text>
                            </HStack>
                            <HStack>
                                <RepetitionsSvg />
                                <Text color='gray.200' ml={2}>
                                    12 repetiçoes
                                </Text>
                            </HStack>
                        </HStack>

                        <Button
                            title="Marcar como realizado"
                        />
                    </Box>
                </VStack>
            </ScrollView>



        </VStack>
    )
}