import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'
import LogOutIcon from '../Icons/LogOutIcon/LogOutIcon'
import { useDispatch } from "react-redux";
import { authActions } from "../../store/ducks/auth/auth";


const HeaderBlock = styled.header`
  background: transparent;
  color: ${props => props.theme.primaryColor};
  padding: 26px 145px 15px 145px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const HeaderLinkWrapper = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`

const HeaderLink = styled.a`
  text-decoration: none;
    //color: ${props => props.theme.primaryColor};
  font-size: 20px;
  line-height: 22px;
  letter-spacing: -0.408px;
  margin-right: 20px;
`


const Header: FC = (): ReactElement => {

    const dispatch = useDispatch()

    const handleLogoutClick = () => {
        dispatch(authActions.fetchLogOut())
    }

    return (
        <HeaderBlock>
            <HeaderLinkWrapper onClick={handleLogoutClick}>
                <HeaderLink>Выйти</HeaderLink>
                <LogOutIcon/>
            </HeaderLinkWrapper>
        </HeaderBlock>
    )
}

export default Header