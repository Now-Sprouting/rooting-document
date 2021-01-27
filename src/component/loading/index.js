import React, { memo } from 'react'
import {Loading as DLoading} from 'rooting-ui'

import {LoadingContentWrapper} from './style'

export default memo(function Loading() {
    return (
        <LoadingContentWrapper>
            <h1>Loading</h1>
            <DLoading type='rectangle'></DLoading>
            <DLoading type='rectangle' color='red'></DLoading>
            <DLoading type='rectangle' size='4px 40px'></DLoading>
            <DLoading type='round' ></DLoading>
            <DLoading type='round' color='#cccccc'></DLoading>
            <DLoading type='round' size='40px' globale></DLoading>
        </LoadingContentWrapper>
    );
})
