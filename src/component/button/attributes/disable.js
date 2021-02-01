import React, { memo } from 'react'
import { Button as DButton } from 'rooting-ui'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { shadesOfPurple } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import Copy from '../../../pages/copy'
import { DisplayWrapper } from '../../../pages/displayWrapper/style'

export default memo(function Disable() {
    const codeString = `import { Button as DButton } from 'rooting-ui'

<DButton btnType='default' disabled>Default</DButton>
<DButton btnType='danger' disabled>Danger</DButton>
<DButton btnType='primary' disabled>Primary</DButton>
<DButton btnType='link' href='http://www.baidu.com' disabled>Link</DButton>`
    return (
        <>
            <p>使用<code>disable</code>属性控制按钮的禁用状态</p>
            <DisplayWrapper>
                <DButton btnType='default' disabled>Default</DButton>
                <DButton btnType='danger' disabled>Danger</DButton>
                <DButton btnType='primary' disabled>Primary</DButton>
                <DButton btnType='link' href='http://www.baidu.com' disabled>Link</DButton>
            </DisplayWrapper>
            <SyntaxHighlighter language="jsx" style={shadesOfPurple}>
                {codeString}
            </SyntaxHighlighter>
            <Copy code={codeString}></Copy>
        </>

    );
})
