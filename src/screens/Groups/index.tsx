import { useState } from 'react'

import { Highlight } from '@components/Highlight'
import { Container } from './styles'

import { Header } from '@components/Header'
import { GroupCard } from '@components/GroupCard'
import { FlatList } from 'react-native'

export function Groups() {
  const [groups, setGroups] = useState([
    {
      title: 'CC e Eng'
    },
    {
      title: '3tentos'
    }
  ])

  return (
    <Container>
      <Header />
      <Highlight title='Turmas' subtitle='Jogue com a sua turma' />

      <FlatList
        data={groups}
        keyExtractor={item => item.title}
        renderItem={({item}) => (
          <GroupCard
            title={item.title}
          />
        )}
      />
    </Container>
  )
}
