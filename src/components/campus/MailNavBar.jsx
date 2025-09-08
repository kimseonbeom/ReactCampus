import React from 'react'
import { GrayHr } from './HomeWrapperPro'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import MailNavItem from './MailNavItem'

const Container = styled.div`
    height: 48px;
    display: flex;
    justify-content: space-evenly;
`

const StyleLink = styled(Link)`
    text-decoration: none;
    color: #aaa;
    border-bottom: 2px solid transparent; 
    &:hover{
        color: #2ec4b6;
        border-bottom: 2px solid #2ec4b6;
    }
`
function MailNavBar() {
  return (
    <>
    <Container style={{ alignItems:'center'}}>
        <StyleLink to='/'>
            <MailNavItem name='전체 메일'></MailNavItem>
        </StyleLink>
        <StyleLink to='/'>
            <MailNavItem name='받은 메일함'></MailNavItem>
        </StyleLink>
        <StyleLink to='/'>
            <MailNavItem name='보낸 메일함'></MailNavItem>
        </StyleLink>
        <StyleLink to='/'>
            <MailNavItem name='휴지통'></MailNavItem>
        </StyleLink>
    </Container>
    <GrayHr style={{margin:0}}/>
    </>
  )
}

export default MailNavBar