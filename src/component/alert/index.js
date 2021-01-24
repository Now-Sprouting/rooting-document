import React, { memo } from 'react'

import {AlertContentWrapper} from './style'

export default memo(function Alert() {
    return (
        <AlertContentWrapper>
            <h1>Alert</h1>
        </AlertContentWrapper>
    );
})
