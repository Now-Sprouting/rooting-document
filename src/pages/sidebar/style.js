import styled from 'styled-components'

export const SidebarWrapper = styled.div`
    position: fixed;
    z-index: 9;
    top: 64px;
    box-sizing: border-box;
    padding: 40px 0px 104px 30px;
    width: 280px;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    user-select: none;
    border-right: 1px solid #eaecef;
    ${prpos => prpos.theme === 'light' ? '#c1c1c1' : 'rgba(51,51,51,0.8)'}
`
export const SidebarTitleWrapper = styled.div`
    margin-bottom: 30px;
    h2 {
        margin-bottom: 10px;
    }
    .linkItem {
        display: block;
        width: 100%;
        height: 36px;
        line-height: 36px;
        padding-left: 20px;
        cursor: pointer;
        text-decoration: none;
    }
    .linkItem.active {
        font-weight: 600;
        color: #1976D2;
    }
`
