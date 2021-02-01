import React, { memo } from 'react'
import { Button as DButton } from 'rooting-ui'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { shadesOfPurple } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import Copy from '../../../pages/copy'
import { DisplayWrapper } from '../../../pages/displayWrapper/style'

export default memo(function BtnType() {
    const codeStringBtnType = `import { Button as DButton } from 'rooting-ui'

<DButton btnType='default'>Default</DButton>
<DButton btnType='danger'>Danger</DButton>
<DButton btnType='primary'>Primary</DButton>
<DButton btnType='link' href='http://www.baidu.com'>Link</DButton>`;
    return (
        <>
            <p>使用<code>btnType</code>属性控制按钮的主题</p>
            <DisplayWrapper>
                <DButton btnType='default'>Default</DButton>
                <DButton btnType='danger'>Danger</DButton>
                <DButton btnType='primary'>Primary</DButton>
                <DButton btnType='link' href='http://www.baidu.com'>Link</DButton>
            </DisplayWrapper>
            <SyntaxHighlighter language="jsx" style={shadesOfPurple}>
                {codeStringBtnType}
            </SyntaxHighlighter>
            <Copy code={codeStringBtnType}></Copy>
        </>

    );
})