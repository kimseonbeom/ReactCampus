import React from 'react'
import { Container, Header, HeadText } from './HomeWrapper'
import styled from 'styled-components'
import { NoneData, NoneDataText } from './LecturePlanNoneData'
import { RegistButton } from './MailWrite'

function LecturePlanNoneDataPro() {
  return (
    <>        <Header>
            <HeadText>
                강의계획서
            </HeadText>
        </Header>
        <NoneData>
            <div>
            <NoneDataText style={{marginBottom:'16px'}}>
                등록된 강의계획서가 없습니다.
            </NoneDataText>
            <RegistButton style={{width:'48px', height:'26px'}}>
                등록
            </RegistButton>
            </div>
        </NoneData>
        </>
  )
}

export default LecturePlanNoneDataPro