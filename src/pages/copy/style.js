import styled from 'styled-components'

export const CopyWrapper = styled.div`
    position: relative;
    &:hover {
        cursor: pointer
    }
    .copy {
        svg {
        position: absolute;
        right: 0px;
        top: -32px;
        }
    }
`