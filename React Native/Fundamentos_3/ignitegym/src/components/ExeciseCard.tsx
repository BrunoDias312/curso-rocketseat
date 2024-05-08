import { HStack, Heading, Image, Text, VStack, Icon } from "native-base"
import { TouchableOpacity, TouchableOpacityProps } from "react-native"
import { Entypo } from '@expo/vector-icons'

type Props = TouchableOpacityProps & {
    title: string
}

export const ExeciseCard = ({ title, ...rest }: Props) => {
    return (
        <TouchableOpacity

            {...rest}
        >
            <HStack bg='gray.500' alignItems='center' p={2} pr={4} rounded={'md'} mb={3}>
                <Image
                    alt="Imagem do exercicio"
                    source={{ uri: 'https://blog.gsuplementos.com.br/wp-content/uploads/2022/09/Serrote-exercicio.jpg' }}
                    w={16}
                    h={16}
                    rounded='md'
                    mr={4}
                    resizeMode="cover"
                />
                <VStack flex={1}>
                    <Heading fontSize='lg' color='white'>Remada unilateral</Heading>
                    <Text fontSize='sm' color='gray.200' mt={1} numberOfLines={2}>
                        {title}
                    </Text>
                </VStack>
                <Icon as={Entypo} name='chevron-thin-right' color='gray.300' />
            </HStack>
        </TouchableOpacity>
    )
}