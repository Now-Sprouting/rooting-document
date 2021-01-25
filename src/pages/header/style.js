import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    box-sizing:border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    width: 100%;
    height: 64px;
    padding: 0 30px;
    color: ${prpos => prpos.theme === 'light' ? '#1976D2' : '#fff'};
    background-color: ${prpos => prpos.theme === 'light' ? '#fff' : '#333333'};
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`

export const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 220px;
    &:hover {
        cursor: pointer;
    }
    h1{
        user-select: none;
    }
`

export const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100px;
    &>svg:hover {
        cursor: pointer;
    }
`