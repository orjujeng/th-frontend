import React, { Fragment, useState,useRef } from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import './index.scss'
import { styled } from '@mui/material/styles'
export default function Header() {
    const ListButton = styled(Button)(({ theme }) => ({
        color: 'black',
        width:'100%',
        height:'100%',
        position: 'relative',
        textTransform: 'none',
          '&:hover': {
            backgroundColor: 'rgba($color: #bdbdbd, $alpha: 0.2)'
        }
        }));
    const headerWelcomeListRef = useRef(null);
    const [notificateCount, SetnotificateCount] = useState(2000);
    const [username, setUsername] = useState('orjujeng@hotmail.com');
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const changeListShown = (event) => {
        // console.log(headerWelcomeListRef.current);
        // console.log(event.currentTarget);
        setAnchorEl(headerWelcomeListRef.current);
    };
    const changeListClose = () => {
        setAnchorEl(null);
    };
    return (
        <Fragment>
            <div className="headerBox">
                <div className="headerNotificateBox">
                    <Badge badgeContent={notificateCount} color="primary">
                        <NotificationsIcon />
                    </Badge>
                </div>
                <div className="headerWelcomeList" ref={headerWelcomeListRef} >

                    <ListButton id="welcomeList-button" aria-controls={open ? 'welcomeList-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={changeListShown}
                    >
                        <div className="headerUsername">{username}</div>
                    </ListButton>
                    <Menu
                        id="welcomeList-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={changeListClose}
                    >
                        <MenuItem >Home</MenuItem>
                        <MenuItem >Profile</MenuItem>
                        <MenuItem >Setting</MenuItem>
                        <MenuItem>Logout</MenuItem>
                    </Menu>
                </div>
            </div>
        </Fragment>
    )
}
