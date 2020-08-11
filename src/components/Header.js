import React from 'react'
import LogoUrl from '../logo.svg'
import {NavLink, useHistory} from 'react-router-dom'
import styled from 'styled-components'
import {Button} from 'antd'
import { useStores} from '../stores'
import { observer } from 'mobx-react'

const Header = styled.header`
  background-color: #02101f;
  padding: 10px 100px;
  display: flex;
  align-items: center;
  color: #fff;
`
const Logo = styled.img`
  height: 30px;
`
const StyledLink = styled(NavLink)`
  color: #fff;
  margin-left: 30px;
  &.active{
    border-bottom: 1px solid #fff;
  }
`
const Login = styled.div`
  margin-left: auto;
`
const StyledButton = styled(Button)`
  margin-left: 10px;
`

const Component = observer(() => {

  const history = useHistory()
  const { UserStore, AuthStore } = useStores()

  const handleLogout = () => {
    AuthStore.logout()
  }
  const handleLogin = () => {
    console.log('跳转到登陆')
    history.push('/login')
  }
  const handleRegister = () => {
    console.log('跳转到注册')
    history.push('/register')
  }

  return (
    <Header>
      <Logo src={LogoUrl} alt=""/>
      <nav>
        <StyledLink to="/" activeClassName="active" exact>首页</StyledLink>
        <StyledLink to="/history" activeClassName="active">上传历史</StyledLink>
        <StyledLink to="/about" activeClassName="active">关于我</StyledLink>
      </nav>
      <Login>
        {
          UserStore.currentUser ? <>
            {UserStore.currentUser.attributes.username}
            <StyledButton type="primary" onClick={handleLogout}> 注销 </StyledButton>
          </> : <>
            <StyledButton type="primary" onClick={handleLogin}> 登陆 </StyledButton>
            <StyledButton type="primary" onClick={handleRegister}> 注册 </StyledButton>
          </>
        }
      </Login>
    </Header>
  )
})

export default Component