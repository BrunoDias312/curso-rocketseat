import { HStack, Heading, Text, VStack } from "native-base"




export const HistoryCard = () => {


    return (
        <HStack w={'full'} px={4} mb={3} py={4} bg='gray.600' alignItems='center' justifyContent='space-between' rounded={10}>
            <VStack flex={1} mr={5}  flexShrink={1}>
                <Heading color='white' fontSize={'md'} textTransform={'capitalize'} numberOfLines={1}>Costas</Heading>

                <Text color='gray.100' fontSize={'lg'} numberOfLines={1}>Puxada lateral</Text>
            </VStack>
            <Text color={'gray.300'} fontSize={'md'}>12:30</Text>
        </HStack>

    )
}