import React, { memo } from 'react'

import {WelcomeContentWrapper} from './style'

export default memo(function Welocme() {
    return (
        <WelcomeContentWrapper>
            <h1>Welocme</h1>
        </WelcomeContentWrapper>
    );
})
