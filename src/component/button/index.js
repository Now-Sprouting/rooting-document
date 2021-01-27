import React, { memo } from 'react'
import { Button as DButton } from 'rooting-ui'

import { ButtonContentWrapper } from './style'

export default memo(function Button() {
    return (
        <ButtonContentWrapper>
            <h1>Button</h1>
            <DButton>Default</DButton>
            <DButton btnType='default' size='large' onClick={(e) => { console.log(e.target, 1) }}>Default</DButton>
            <DButton btnType='danger'>Danger</DButton>
            <DButton btnType='primary' size='small'>Primary</DButton>
            <DButton btnType='primary' size='small' disabled={true}>Disable</DButton>
            <DButton btnType='link' href='http://www.baidu.com'>Link</DButton>
            <DButton btnType='link' href='http://www.baidu.com' disabled={true}>Link</DButton>
        </ButtonContentWrapper>
    );
})
