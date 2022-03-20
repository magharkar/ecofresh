import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import EmojiEvents from '@mui/icons-material/EmojiEvents';
import LocalOffer from '@mui/icons-material/LocalOffer';
import SentimentVeryDissatisfied from '@mui/icons-material/SentimentVeryDissatisfied';
import Visibility from '@mui/icons-material/Visibility';
import ShoppingBag from '@mui/icons-material/ShoppingBag';

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const menuOptions = [
      {
        icon: <ShoppingBag fontSize='small' />,
        text: "Orders",
      },
      {
        icon: <LocalOffer fontSize='small' />,
        text: "Offers",
      },
      {
        icon: <EmojiEvents fontSize='small' />,
        text: "Rewards",
      },
      {
        icon: <Visibility fontSize='small' />,
        text: "View Complaints",
      },
      {
        icon: <SentimentVeryDissatisfied fontSize='small' />,
        text: "Raise Complaint",
      },
      {
        icon: <Logout fontSize='small' />,
        text: "Logout",
      }
  ];
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
          {/* <MenuItem>
        <ListItemIcon>
            <ShoppingBag fontSize="small" />
          </ListItemIcon>
          Orders
        </MenuItem>
        <Divider />
          <MenuItem>
        <ListItemIcon>
            <LocalOffer fontSize="small" />
          </ListItemIcon>
          Offers
        </MenuItem>
          <MenuItem>
          <ListItemIcon>
            <EmojiEvents fontSize="small" />
          </ListItemIcon>
          Rewards
        </MenuItem>
        <Divider />
        <MenuItem>
        <ListItemIcon>
            <Visibility fontSize="small" />
          </ListItemIcon>
          View Complaints
        </MenuItem>
        <MenuItem>
        <ListItemIcon>
            <SentimentVeryDissatisfied fontSize="small" />
          </ListItemIcon>
          Raise Complaint
        </MenuItem>
        <Divider />
        
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu> */}
      {
          menuOptions.map(option => (
              <MenuItem>
                <ListItemIcon>
                    {option.icon}
                </ListItemIcon>
                {option.text}
              </MenuItem>
          ))
      }
      </Menu>
    </React.Fragment>
  );
}