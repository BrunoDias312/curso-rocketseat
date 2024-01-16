import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { FlatList } from 'react-native';
import { Container } from './styles';
import { useEffect, useState, useCallback } from 'react';

import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { HighLight } from '@components/Highlight';
import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { groupsGetAll } from '@storage/group/grupsGetAll';
import { Loading } from '@components/Loading';


export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true)
  const navigation = useNavigation()

  const keyExtractor = (item: string) => item
  const renderCards = ({ item }: any) => <GroupCard title={item} onPress={() => handleOpenGroup(item)} />

  const handleNewGroup = () => {
    navigation.navigate('new')
  }

  const fetchGroups = async () => {
    try {
      setIsLoading(true)

      const data = await groupsGetAll()
      setGroups(data)

    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleOpenGroup = (group: string) => {
    navigation.navigate('players', { group })
  }


  useFocusEffect(useCallback(() => {
    fetchGroups()
  }, []))

  return (
    <Container>
      <Header />
      <HighLight title='Turmas' subtitle='Jogue com a sua turma' />

      {
        isLoading ? <Loading /> :
          <FlatList
            data={groups}
            keyExtractor={keyExtractor}
            renderItem={renderCards}
            contentContainerStyle={groups.length === 0 && { flex: 1 }}

            ListEmptyComponent={() => <ListEmpty message='Que tal cadastrar a primeira turma?' />}
          />
      }

      <Button title='Criar nova Turma' onPress={handleNewGroup} />

    </Container>
  );
}