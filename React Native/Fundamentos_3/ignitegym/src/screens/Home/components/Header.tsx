import { UserPhoto } from "@components/UserPhoto"
import { Heading, Text, HStack, VStack, Icon } from "native-base"
import { MaterialIcons } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native"






export const HomeHeader = () => {

    return (
        <HStack bg='gray.600' pt={16} pb={5} px={8} alignItems='center'>
            <UserPhoto
                size={16}
                source={{ uri: 'https://github.com/BrunoDias312.png' }}
                alt='img de photo do user'
                mr={4}
            />
            <VStack flex={1}>
                <Text color={'gray.100'} fontSize='md'>
                    Olá,
                </Text>
                <Heading color={'gray.100'} fontSize='md'>
                    Rodrigo
                </Heading>
            </VStack>

            <TouchableOpacity>
                <Icon
                    as={MaterialIcons}
                    name="logout"
                    color='gray.200'
                    size={7}
                />
            </TouchableOpacity>

        </HStack>
    )
}