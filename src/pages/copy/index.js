import React, { memo } from 'react'
import copy from 'copy-to-clipboard';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';

import { CopyWrapper } from './style'

export default memo(function Copy(props) {
    const { code } = props
    const [state, setState] = React.useState({
        open: false,
        vertical: 'bottom',
        horizontal: 'right',
    });
    const { vertical, horizontal, open } = state;
    const copyContent = (content) => {
        copy(content)
        setState({
            open: true,
            vertical: 'bottom',
            horizontal: 'right',
        })
    }
    const handleClose = () => {
        setState({
            open: false,
            vertical: 'bottom',
            horizontal: 'right',
        })
    }
    return (
        <CopyWrapper>
            <div className="copy">
                <svg
                    className="icon"
                    aria-hidden="true"
                    fontSize='25px'
                    color='#757575'
                    onClick={() => { copyContent(code) }}>
                    <use xlinkHref="#icon-fuzhi"></use>
                </svg>
            </div>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                message="复制成功"
                TransitionComponent={Slide}
                autoHideDuration={1000}
                onClose={handleClose}
                // style={{backgroundColor: 'red'}}
            />
        </CopyWrapper>
    );
})
