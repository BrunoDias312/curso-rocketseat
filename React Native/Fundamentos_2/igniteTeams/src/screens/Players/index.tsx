import { FlatList } from "react-native";
import { useEffect, useState, useRef } from "react";

import { PlayerCard } from "@components/PlayerCard";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ButtonIcon } from '@components/ButtonIcon'
import { HighLight } from "@components/Highlight";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Filter } from "@components/Filter";
import { Input } from "@components/Input";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { Alert } from "react-native";
import { AppError } from "@utils/AppError";
import { PlayerAddByGroup } from "@storage/player/playerAddbyGroup";
import { playGetByGroupAndTeam } from "@storage/player/playGetByGroupAndTeam";
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";
import { TextInput } from "react-native";
import { playerRemoveByGroup } from "@storage/player/playerRemoveByGroup";
import { groupRemoveByname } from "@storage/group/groupRemoveByName";
import { Loading } from "@components/Loading";

type RouteParams = {
    group: string
}


export const Players = () => {
    const route = useRoute();
    const navigation = useNavigation()
    const newPlayerNameInputRef = useRef<TextInput>(null)
    const [team, setTeam] = useState('Time A')
    const [data, setData] = useState(['Time A', 'Time B'])
    const [newPlayerName, setNewPlayerName] = useState('')
    const [players, setPlayers] = useState<PlayerStorageDTO[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const { group } = route.params as RouteParams

    const renderListTeam = ({ item }: any) => <Filter title={item} isActive={item === team} onPress={() => setTeam(item)} />
    const renderListPlayers = ({ item }: any) => <PlayerCard name={item.name} onRemove={() => handleRemovePlayer(item.name)} />


    //buscar player por grupo
    const fetchPlayersByTeam = async () => {
        try {
            setIsLoading(true)

            const playersByTeam = await playGetByGroupAndTeam(group, team);
            setPlayers(playersByTeam)
            
        } catch (error) {
            Alert.alert('Pessoas',
                'Não foi possivel carregar os integrantes do time.'
            )
        }finally{
            setIsLoading(false)
        }
    }

    //add player ao grupo
    const handleAddPlayer = async () => {
        if (newPlayerName.trim().length === 0) {
            return Alert.alert('Novo integrante', 'Informe o nome para adicionar')
        }

        const newPlayer = { name: newPlayerName, team }
        newPlayerNameInputRef.current?.blur();
        setNewPlayerName('')
        fetchPlayersByTeam()
        try {
            await PlayerAddByGroup(newPlayer, group)

        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert('Nova pessoa', error.message)
            } else {
                console.log(error)
                Alert.alert('Nova pessoa', 'Não foi possivel adicionar')
            }
        }
    }

    //remove player do grupo
    const handleRemovePlayer = async (playerName: string) => {
        try {
            await playerRemoveByGroup(playerName, group)
            fetchPlayersByTeam()
        } catch (error) {
            console.log(error)
            Alert.alert('Remover player', 'Não foi possivel remover.')
        }
    }

    //Remove grupo e todos os seus integrantes
    const groupRemove = async () => {
        try {
            await groupRemoveByname(group)
            navigation.navigate('groups')

        } catch (error) {
            console.log(error)
            Alert.alert('Atenção', 'Não foi possivel remover o grupo.')
        }
    }

    //confirmação - Se realmente deseja remover o grupo
    const handlePlayerRemove = async () => {
        Alert.alert(
            'Remover Grupo',
            'Deseja remover o Grupo?',
            [
                { text: 'Não', style: 'cancel' },
                { text: 'Sim', onPress: () => groupRemove() }
            ]
        )
    }



    useEffect(() => {
        fetchPlayersByTeam()
    }, [team])

    return (
        <Container>
            <Header showBackButton />
            <HighLight
                title={group}
                subtitle="Adicione a galera e separe os times"
            />
            <Form>
                <Input placeholder="Nome da pessoa"
                    onSubmitEditing={handleAddPlayer}
                    autoCorrect={false}
                    onChangeText={setNewPlayerName}
                    value={newPlayerName}
                    inputRef={newPlayerNameInputRef}
                    returnKeyType="done"
                />
                <ButtonIcon icon="add" onPress={handleAddPlayer} />
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
            {
                isLoading ? <Loading /> :
                    <FlatList
                        data={players}
                        keyExtractor={item => item.name}
                        renderItem={renderListPlayers}
                        showsVerticalScrollIndicator={false}//Tirar a barra de rolagem
                        ListEmptyComponent={() => <ListEmpty message='Não jogadores neste time!!' />}
                        contentContainerStyle={[
                            { paddingBottom: 100 },
                            players.length === 0 && { flex: 1 }
                        ]}
                    />
            }

            <Button title="Remover Turma" type="SECONDARY" onPress={handlePlayerRemove} />
        </Container>
    )
}