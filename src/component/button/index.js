import React, { memo } from 'react'

import BtnType from './attributes/btnType'
import Size from './attributes/size'
import Disable from './attributes/disable'
import { ButtonContentWrapper } from './style'
import { useH1Title, useH2Title } from '../../hooks/useTitle'


export default memo(function Button(props) {
    return (
        <ButtonContentWrapper>
            {useH1Title('Button', '页面中最常用的的按钮元素，适合于完成特定的交互，支持 HTML button 和 a 链接 的所有属性')}
            {useH2Title(`基本使用`, ``)}
            <BtnType/>
            <Size/>
            <Disable/>
        </ButtonContentWrapper>
    );
})

