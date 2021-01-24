import React, { memo, useContext } from 'react'
import { ThemeContext } from '../../App'
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'
import { toggleTheme } from '../../utils/index'

export default memo(function Header(props) {
    const { theme } = props
    const mode = useContext(ThemeContext);
    return (
        <div>
            <HeaderWrapper theme={theme}>
                <HeaderLeft>
                    <svg
                        className="icon"
                        aria-hidden="true"
                        color={mode.theme === 'light' ? '#1976D2' : 'white'}
                        font-size='50px'>
                        <use xlinkHref="#icon-maotouying1"></use>
                    </svg>
                    <h1>Rooting-UI</h1>
                </HeaderLeft>
                <HeaderRight>
                    {mode.theme === 'light' &&
                        <svg
                            className="icon"
                            aria-hidden="true"
                            font-size='30px'
                            onClick={() => { toggleTheme(mode) }}>
                            <use xlinkHref="#icon-taiyang1"></use>
                        </svg>}
                    {mode.theme === 'dark' &&
                        <svg
                            className="icon"
                            aria-hidden="true"
                            font-size='30px'
                            color='#F7DDAD
                    ' onClick={() => { toggleTheme(mode) }}>
                            <use xlinkHref="#icon-yueliang1"></use>
                        </svg>}
                    <svg
                        className="icon"
                        aria-hidden="true"
                        font-size='30px'
                        color={mode.theme === 'light' ? 'black' : 'white'}>
                        <use xlinkHref="#icon-git"></use>
                    </svg>

                </HeaderRight>
            </HeaderWrapper >
        </div>

    );
})
