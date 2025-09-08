import React from 'react'
import styled from 'styled-components'
import Avatar from './Avatar'

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
`

const persons = [
    {name: "Steve", job: "Programmer", country:"대한민국"},
    {name: "Tom", job: "Student", country:"USA"},
    {name: "Adrian", job: "Engineer", country:"France"},
    {name: "Max", job: "Painter", country:"Germany"},
]

function AvatarWrapper() {
  return (
    <Container>
        {
            persons.map((p, index) => <Avatar key={index} person={p}/>)
        }
    </Container>
  )
}

export default AvatarWrapper