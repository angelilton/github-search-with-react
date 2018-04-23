'use strict'

import React, { PropTypes } from 'react'
import Repos from './repos'
import Search from './search'
import Actions from './actions'
import UserInfo from './user-info'

const AppContent = ({
  userinfo,
  repos,
  starred,
  isRequesting,
  handleSearch,
  getRepos,
  getStarred
}) => (
  <div className='app'>
    <Search isDisabled={isRequesting} handleSearch={handleSearch} />
    {isRequesting && <div>Carregando ...</div>}
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

    {!!repos.length &&
      <Repos
        className='repos'
        title='Repositórios:'
        repos={repos}
      />
    }

    {!!starred.length &&
      <Repos
        className='starred'
        title='Favoritos:'
        repos={starred}
      />
    }
  </div>
)

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired
}

export default AppContent
