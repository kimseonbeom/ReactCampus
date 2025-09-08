import React from 'react'
import { Content, Contents, HeadText } from './campus/HomeWrapper'
import styled from 'styled-components'


const Header = styled.div`
    width: 100%;
    height: 145px;
    padding: 20px 14px 16px 14px;
`
const SearchBar = styled.div`
    width: 172px;
    height: 36px;
    border: 1px solid #aaa;
    border-top: 2px solid #2ec4b6;
`
function ProjectObjectProjectList() {
  return (
    <Header>
        <HeadText style={{marginLeft:'10px'}}>결과물</HeadText>
        <SearchBar></SearchBar>
    </Header>
  )
}

export default ProjectObjectProjectList