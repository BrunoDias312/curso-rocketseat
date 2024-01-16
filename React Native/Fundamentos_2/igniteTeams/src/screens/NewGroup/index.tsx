import { useTheme } from "styled-components/native";
import { Alert } from "react-native";
import { useState } from "react";


import { Header } from "@components/Header";
import UserTwoIcon from "@assets/icons/userTwo";
import { HighLight } from "@components/Highlight";
import { Input } from "@components/Input";


import { Container, Content } from "./styles";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AppError } from "@utils/AppError";
import { groupCreate } from "../../storage/group/groupCreate";


export const NewGroup = () => {
    const { COLORS } = useTheme()
    const navigation = useNavigation()
    const [group, setGroup] = useState('')

    const handleNew = async () => {
        try {
            if (group.trim().length === 0 ) {
                return Alert.alert('Novo Grupo', "Informe o nome da turma")
            }
            await groupCreate(group)
            navigation.navigate('players', { group: group })
        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert('Novo Grupo', error.message)
            } else {
                Alert.alert('Novo Grupo', 'Não foi possivel criar o grupo.')
            }
        }
    }

    return (
        <Container>
            <Header showBackButton />
            <Content>
                <UserTwoIcon color={COLORS.GREEN_700} width={76} height={76} />

                <HighLight title={"Nova Turma"} subtitle="Crie a Turmar para adicionar as pessoas" />
                <Input
                    placeholder='Nome da turma'
                    onChangeText={setGroup}
                />
                <Button title="Criar" style={{ marginTop: 20 }} onPress={handleNew} />
            </Content>
        </Container>
    )
}