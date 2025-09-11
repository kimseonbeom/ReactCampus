import React, { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import styled from 'styled-components'
import SideMenu from './SideMenu'
import Loading from './Loading'
import TopNav from './TopNav'
import HomeWrapper from './HomeWrapper'
import HomeWrapperPro from './HomeWrapperPro'
import MailWrite from './MailWrite'
import MailNavBar from './MailNavBar'
import MailDashBoard from './MailDashBoard'
import ProjectObjectProjectList from './ProjectObjectProjectList'
import LecturePlanNoneData from './LecturePlanNoneData'
import LecturePlanNoneDataPro from './LecturePlanNoneDataPro'
import Error from './Error'
import ProjectTeamList from './ProjectTeamList'
import ProjectTeamListPro from './ProjectTeamListPro'
import Mypage from './Mypage'
import MypagePro from './MypagePro'
import LecturePlanDetail from './LecturePlanDetail'
import LecturePlanDetailPro from './LecturePlanDetailPro'
import ConfirmModal from './ConfirmModal'
import AlertModal from './AlertModal'
import LectureOnlineRegist from './LectureOnlineRegist'
import LectureOnlineModify from './LectureOnlineModify'
import ChangePasswordModal from './ChangePasswordModal'
import AttandanceModal from './AttandanceModal'
import ProjectObjectFeedback from './ProjectObjectFeedback'
import Login from './Login'
import { useAuthStore } from './modalStore'
import axios from 'axios'
import { checkSession } from './api'
const Container = styled.div`
    width: 100vw;
`
const HeadMenu = styled.div`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    font-family: 'Noto Sans KR', sans-serif;
    box-sizing: border-box;
    position: relative;
    display: flex;
    align-items: center;
    padding: .5rem .5rem;
    flex-flow: row nowrap;
    justify-content: flex-start;
    border-bottom: 1px solid #dee2e6;
    z-index: 1034;
    background-color: #fff;
    color: #1f2d3d;
    transition: margin-left .3s ease-in-out;
    margin-left: 250px;
    height: 70px;
`
const MailMenu = styled.div`
  width: 100%;
`
function CampusMain() {
  const isLoggedIn = useAuthStore(state => state.isLoggedIn)
  const login = useAuthStore(state => state.login);
  const logout = useAuthStore(state => state.logout);
  const [checkingSession, setCheckingSession] = useState(true);
useEffect(() => {
    // 세션 스토리지에 로그인 정보가 있으면 로그인 처리
    const userData = sessionStorage.getItem('user');
    if (userData) {
      login(JSON.parse(userData));
    } else {
      logout();
    }
    setCheckingSession(false);
  }, []);
if (checkingSession) return <Loading />;
  return (
   
    <BrowserRouter>
        <Container>
          {!isLoggedIn ? ( <Login />
          ) : (
 <>
          <TopNav></TopNav>

          <SideMenu></SideMenu>
          <HomeWrapper></HomeWrapper>

          <ProjectObjectFeedback />
          <ConfirmModal />
          <AlertModal />
          <ChangePasswordModal />
          <AttandanceModal />
          <Mypage />
          </>
          )}
        </Container>

    </BrowserRouter>
  )
}

export default CampusMain