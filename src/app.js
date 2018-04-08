'use strict'

import React from 'react'
import Repos from './components/repos'
import Search from './components/search'
import Actions from './components/actions'
import UserInfo from './components/user-info'

const App = () => (
  <div className='app'>
    <Search />
    <UserInfo />
    <Actions />

    <Repos
      className='repos'
      title='Repositórios:'
      repos={[{
        name: 'Nome do Repositório',
        link: '#'
      }]}
    />

    <Repos
      className='starred'
      title='Favoritos:'
      repos={[{
        name: 'Nome do Repositório',
        link: '#'
      }]}
    />

  </div>
)

export default App
