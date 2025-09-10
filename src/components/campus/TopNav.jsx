import React from 'react'
import styled from 'styled-components';
import menuBar from './img/menuBar.png';
import logoRow from './img/logoRow.png';
import mail from './img/mail.png';
import { Nonebutton } from './SideMenu';
import { useSideMenuStore } from './modalStore';

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap:95px;
  padding: 22px 26px 18px 26px;
  box-sizing: border-box;
`
export const Menu = styled.div`
    width: 20px;
    height: 20px;
`

function TopNav() {
  const toggleMenu = useSideMenuStore((state) => state.toggleMenu);

  return (
    <Container>
      <Nonebutton style={{width:"27px", height: "18px"}}  onClick={toggleMenu}>
      <img src={menuBar} style={{width:"27px", height: "18px", marginTop:"5px"}}/>
      </Nonebutton>
      <img src={logoRow} style={{width:"116px", height: "27px"}}/>
      <img src={mail} style={{width:"27px", height: "18px", marginTop:"5px"}}/>
    </Container>
  )
}

export default TopNav