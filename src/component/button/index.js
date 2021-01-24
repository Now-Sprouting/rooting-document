import React, { memo } from 'react'

import {ButtonContentWrapper} from './style'

export default memo(function Button() {
    return (
        <ButtonContentWrapper>
            <h1>Button</h1>
        </ButtonContentWrapper>
    );
})
