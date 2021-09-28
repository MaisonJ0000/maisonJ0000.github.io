import { ReactNode, useState } from 'react';
import { Popover as MaterialPopover } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { css } from '@emotion/react';
import { PopoverStyle, PopoverHeadStyle } from './Popover.style';
/** @jsxImportSource @emotion/react */

type Props = {
  head: string,
  body: ReactNode,
}

const Popover = ({
  head,
  body,
}: Props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMouseEnter = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  return (
    <div css={PopoverHeadStyle}>
      <span
        onMouseEnter={handleMouseEnter}
      >
        {head}
      </span>
      <MaterialPopover
        css={PopoverStyle}
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        {body}
      </MaterialPopover>
    </div>
  );
};

export default Popover;
