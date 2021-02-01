import React, { memo } from 'react'
import { Button as DButton } from 'rooting-ui'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { shadesOfPurple } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import Copy from '../../../pages/copy'
import { DisplayWrapper } from '../../../pages/displayWrapper/style'

export default memo(function Size() {
    const codeStringSize = `import { Button as DButton } from 'rooting-ui'

<DButton btnType='primary'>Primary</DButton>
<DButton btnType='primary' size='lg'>Primary</DButton>
<DButton btnType='primary' size='sm'>Primary</DButton>`;
    return (
        <>
            <p>使用<code>size</code>属性控制按钮的大小</p>
            <DisplayWrapper>
                <DButton btnType='primary'>Primary</DButton>
                <DButton btnType='primary' size='lg'>Primary</DButton>
                <DButton btnType='primary' size='sm'>Primary</DButton>
            </DisplayWrapper>
            <SyntaxHighlighter language="jsx" style={shadesOfPurple}>
                {codeStringSize}
            </SyntaxHighlighter>
            <Copy code={codeStringSize}></Copy>
        </>

    );
})

