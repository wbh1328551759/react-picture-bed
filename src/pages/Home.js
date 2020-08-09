import React from 'react'
import { observer } from 'mobx-react'
import {useStores} from '../stores'

const Home = observer(() => {
  const { UserStore } = useStores()

  return(
    <>
      <h1>
        { UserStore.currentUser?
          <>
            Hello
            <p>
              {UserStore.currentUser.attributes.username}
            </p>
          </>:
          '用户没有登陆'
        }</h1>
    </>
  )
})

export default Home