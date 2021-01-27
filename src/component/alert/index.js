import React, { memo } from 'react'
import { Alert as DAlert} from 'rooting-ui'

import { AlertContentWrapper } from './style'

export default memo(function Alert() {
    return (
        <AlertContentWrapper>
            <h1>Alert</h1>
            <DAlert title='This is an info DAlert — check it out!' type='success' onClose={(e) => { console.log(e, 1); }}></DAlert>
            <DAlert title='This is an info DAlert — check it out!' type='info' closable={true}></DAlert>
            <DAlert title='This is an info DAlert — check it out!' type='warning' closable={true}></DAlert>
            <DAlert title='This is an info DAlert — check it out!' type='error' closable={true}></DAlert>
        </AlertContentWrapper>
    );
})
