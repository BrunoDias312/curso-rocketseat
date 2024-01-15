import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
import { Container } from './styles';
import { useState } from 'react';

import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { HighLight } from '@components/Highlight';
import { Button } from '@components/Button';
import { Header } from '@components/Header';


export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const navigation = useNavigation()

  const keyExtractor = (item: string) => item
  const renderCards = ({ item }: any) => <GroupCard title={item} />

  const handleNewGroup = () => {
    navigation.navigate('new')
  }

  return (
    <Container>
      <Header />
      <HighLight title='Turmas' subtitle='Jogue com a sua turma' />

      <FlatList
        data={groups}
        keyExtractor={keyExtractor}
        renderItem={renderCards}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}

        ListEmptyComponent={() => <ListEmpty message='Que tal cadastrar a primeira turma?' />}
      />
      <Button title='Criar nova Turma' onPress={handleNewGroup}/>

    </Container>
  );
}