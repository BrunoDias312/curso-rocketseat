import { Center, Text, VStack, ScrollView, Skeleton, Heading, useToast } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Alert, TouchableOpacity } from "react-native";
import { useState } from "react";

import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system';


import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";


const PHOTO_SIZE = 33

export const Profile = () => {
    const navigation = useNavigation()
    const toast = useToast()

    const [photoIsLoading, setPhotoIsLoading] = useState(false)
    const [usePhoto, setUsePhoto] = useState('https://github.com/BrunoDias312.png')

    const handleUserPhotoSelect = async () => {
        setPhotoIsLoading(true)
        try {
            const photoSelected = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 1,
                aspect: [4, 4],
                allowsEditing: true,
                base64: true
            });

            if (photoSelected.canceled) {
                return;
            }

            if (photoSelected.assets[0].uri) {
                const photoInfo = await FileSystem.getInfoAsync(photoSelected.assets[0].uri)
                if (photoInfo.exists && photoInfo.size / 1024 / 1024 > 10) {
                    return toast.show({
                        title: 'Essa imagem é muito grande. Escolha uma de até 10mb',
                        bgColor: 'red.500'
                    })
                }
                setUsePhoto(photoSelected.assets[0].uri)
            }


        } catch (error) {
            console.log(error)
        } finally {
            setPhotoIsLoading(false)
        }


    }

    return (
        <VStack flex={1}>
            <ScreenHeader title="Perfil" />

            <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
                <Center mt={6} px={10}>
                    {
                        photoIsLoading ?
                            <Skeleton
                                w={PHOTO_SIZE}
                                h={PHOTO_SIZE}
                                rounded={"full"}
                                startColor={"gray.500"}
                                endColor={"gray.400"}
                            /> :

                            <UserPhoto
                                source={{ uri: usePhoto }}
                                resizeMode="center"
                                alt="photo do user"
                                size={PHOTO_SIZE}
                            />
                    }

                    <TouchableOpacity onPress={handleUserPhotoSelect}>
                        <Text color="green.500" fontWeight={"bold"} fontSize={"md"} mt={2} mb={8}>
                            Alterar foto
                        </Text>
                    </TouchableOpacity>

                    <Input
                        placeholder="Nome"
                        bg="gray.600"
                    />
                    <Input
                        placeholder="E-mail"
                        value="brunootaviodias1234@gmail.com"
                        bg="gray.600"
                        isDisabled
                    />

                    <Heading color="gray.200" fontSize="md" mb={2} mt={12} alignSelf={'flex-start'}>
                        Alterar senha
                    </Heading>
                    <Input
                        placeholder="Senha antiga"
                        bg="gray.600"
                        secureTextEntry
                    />

                    <Input
                        placeholder="Senha nova"
                        bg="gray.600"
                        secureTextEntry
                    />

                    <Input
                        placeholder="Confirme a nova senha"
                        bg="gray.600"
                        secureTextEntry
                    />

                    <Button title="Atualizar" />

                </Center>

            </ScrollView>
        </VStack>
    )
}