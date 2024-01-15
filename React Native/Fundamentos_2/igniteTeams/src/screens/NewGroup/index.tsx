import { Header } from "@components/Header";
import { Container, Content } from "./styles";
import UserTwoIcon from "@assets/icons/userTwo";
import { HighLight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";


export const NewGroup = () => {
    const { COLORS } = useTheme()
    const navigation = useNavigation()
    const [ group, setGroup ] = useState('')

    const handleNew = () => {
        navigation.navigate('players', { group: group })
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