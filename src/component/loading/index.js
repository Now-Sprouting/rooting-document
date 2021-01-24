import React, { memo } from 'react'

import {LoadingContentWrapper} from './style'

export default memo(function Loading() {
    return (
        <LoadingContentWrapper>
            <h1>Loading</h1>
        </LoadingContentWrapper>
    );
})
