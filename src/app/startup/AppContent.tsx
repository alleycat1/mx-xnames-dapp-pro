import styled from "styled-components"
import { Sidebar } from "app/components/Sidebar"
import { Header } from "app/components/Header"
import { Routes } from "./Routes"
import { jmedia } from "styles/media"
import React from "react"

export const AppContent = () => {
  const [isOpenSidebar, setIsOpenSidebar] = React.useState(false)
  return (
    <Layout>
      <Header
        setIsOpenSidebar={setIsOpenSidebar}
        isOpenSidebar={isOpenSidebar}
      />

      <Section>
        <Sidebar
          isOpenSidebar={isOpenSidebar}
          setIsOpenSidebar={setIsOpenSidebar}
        />
        <Routes />
      </Section>
    </Layout>
  )
}

const Layout = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  padding: 10px 20px;
  height: 100vh;

  ${jmedia.md} {
    padding: 0;
  }
`

const Section = styled.section`
  overflow-y: auto;
  display: flex;
  gap: 10px;
  height: 88vh;
  width: 100%;

  ${jmedia.md} {
    overflow-y: auto;

    &::-webkit-scrollbar-track:vertical {
      background-color: var(--black);
    }
  }
`
