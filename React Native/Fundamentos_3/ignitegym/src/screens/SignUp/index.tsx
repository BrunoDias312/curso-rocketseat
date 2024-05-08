
import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base"
import { useNavigation } from "@react-navigation/native"
import { useForm, Controller } from "react-hook-form"

import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import BackgroundImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'
import { Input } from "@components/Input"
import { Button } from "@components/Button"


type FormDataProps = {
    name: string,
    email: string,
    password: string,
    confirmPassword: string
}

const signUpSchema = yup.object({
    name: yup.string().required('informe o nome'),
    email: yup.string().required('Informe o e-mail').email('E-mail invalido'),
    password: yup.string().required('Informe a senha'),
    confirmPassword: yup.string().required('Confirme a senha')
})





export const SignUp = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
        resolver: yupResolver(signUpSchema)
    })


    const handleSignUp = (data: FormDataProps) => {
        console.log(data)
    }

    const navigation = useNavigation()
    const handleGoBack = () => { navigation.goBack() }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <VStack flex={1} px={10} pb={16}>
                <Image source={BackgroundImg} alt={'Image de fundo'} resizeMode="contain" position={'absolute'} />


                <Center my={24}>
                    <LogoSvg />

                    <Text color={'gray.100'} fontSize={'sm'}>
                        Treine  sua mente e o seu corpo
                    </Text>
                </Center>

                <Center>
                    <Heading color='gray.100' fontSize={'xl'} mb={6} fontFamily={'heading'}>
                        Crie sua conta
                    </Heading>

                    <Controller
                        control={control}
                        name="name"
                        render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder="Nome"
                                onChangeText={onChange}
                                autoFocus
                                errorMessage={errors.name?.message}

                            />

                        )}
                    />

                    <Controller
                        control={control}
                        name="email"

                        render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder="E-mail"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                onChangeText={onChange}
                                errorMessage={errors.email?.message}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="password"
                        render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder="Senha"
                                secureTextEntry
                                onChangeText={onChange}
                                errorMessage={errors.password?.message}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="confirmPassword"
                        render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder="confirma a senha"
                                secureTextEntry
                                onChangeText={onChange}
                                onSubmitEditing={handleSubmit(handleSignUp)}
                                returnKeyType="send"
                                errorMessage={errors.confirmPassword?.message}
                            />
                        )}
                    />

                    <Button
                        title='Criar e acessar'
                        onPress={handleSubmit(handleSignUp)}
                    />
                </Center>

                <Button
                    title='Voltar para o login'
                    variant='outline'
                    mt={24}
                    onPress={handleGoBack}
                />

            </VStack>
        </ScrollView>

    )
}