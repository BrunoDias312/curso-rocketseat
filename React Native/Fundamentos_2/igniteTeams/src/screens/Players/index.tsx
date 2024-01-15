import { FlatList } from "react-native";
import { useState } from "react";

import { PlayerCard } from "@components/PlayerCard";
import { useRoute } from "@react-navigation/native";
import { ButtonIcon } from '@components/ButtonIcon'
import { HighLight } from "@components/Highlight";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Filter } from "@components/Filter";
import { Input } from "@components/Input";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

type RouteParams = {
    group: string
}


export const Players = () => {
    const route = useRoute();

    const [team, setTeam] = useState('Time A')
    const [data, setData] = useState(['Time A', 'Time B'])
    const [players, setPlayers] = useState(['Raphael', 'Jonathan', 'Dionathan'])
    const { group } = route.params as RouteParams

    const renderListTeam = ({ item }: any) => <Filter title={item} isActive={item === team} onPress={() => setTeam(item)} />
    const renderListPlayers = ({ item }: any) => <PlayerCard name={item} onRemove={() => { }} />

    

    return (
        <Container>
            <Header showBackButton />
            <HighLight
                title={group}
                subtitle="Adicione a galera e separe os times"
            />
            <Form>
                <Input placeholder="Nome da pessoa"
                    autoCorrect={false}

                />
                <ButtonIcon icon="add" />
            </Form>

            <HeaderList>
                <FlatList
                    data={data}
                    keyExtractor={item => item}
                    horizontal
                    renderItem={renderListTeam}
                />
                <NumberOfPlayers>{players.length}</NumberOfPlayers>
            </HeaderList>
            <FlatList
                data={players}
                keyExtractor={item => item}
                renderItem={renderListPlayers}
                showsVerticalScrollIndicator={false}//Tirar a barra de rolagem
                ListEmptyComponent={() => <ListEmpty message='Não jogadores neste time!!' />}
                contentContainerStyle={[
                    {paddingBottom: 100},
                    players.length === 0 && { flex: 1}
                ]}
            />
            <Button title="Remover Turma" type="SECONDARY"/>
        </Container>
    )
}