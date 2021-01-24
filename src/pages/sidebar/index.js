import React, { memo, useContext } from 'react'

import { NavLink } from 'react-router-dom'

import { ThemeContext } from '../../App'
import { SidebarWrapper, SidebarTitleWrapper } from './style'

export default memo(function Sidebar(props) {
    const context = useContext(ThemeContext)
    const { theme } = context
    const copmonentList = [
        {
            title: 'Button 按钮',
            link: '/button'
        },
        {
            title: 'Alert 提示',
            link: '/alert'
        },
        {
            title: 'Loading 加载动画',
            link: '/loading'
        },
        {
            title: 'Input 输入框',
            link: '/input'
        },
        {
            title: 'AutoComplete 自动补全',
            link: '/autoComplete'
        },
        {
            title: 'Icon 图标',
            link: '/icon'
        },
    ]
    return (
        <SidebarWrapper className='sideContent' theme={theme}>
            <SidebarTitleWrapper>
                <h2>欢迎使用</h2>
                <ul>
                    <NavLink to='/welocme' className="linkItem">
                        介绍与安装
                    </NavLink>

                </ul>
            </SidebarTitleWrapper>
            <SidebarTitleWrapper>
                <h2>组件列表</h2>
                <ul>
                    {copmonentList.map((item) => {
                        return (
                            <NavLink to={item.link} key={item.title} className="linkItem">
                                {item.title}
                            </NavLink>
                        )
                    })}
                </ul>
            </SidebarTitleWrapper>

        </SidebarWrapper>
    );
})
