import React, { Fragment, useState, useRef } from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import './index.scss'
import { styled } from '@mui/material/styles'
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import Drawer from '@mui/material/Drawer';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MessageIcon from '@mui/icons-material/Message';

export default function Header() {
    const ListButton = styled(Button)(({ theme }) => ({
        color: 'black',
        width: '100%',
        height: '100%',
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
    const [notificationStatus, setNotificationStatus] = useState(false);
    const ClientListopen = Boolean(anchorEl);
    const changeListShown = (event) => {
        setAnchorEl(headerWelcomeListRef.current);
    };
    const changeListClose = () => {
        setAnchorEl(null);
    };
    const notificationDrawerList = (
    <Fragment>
        <div className="notifcationHeader">
            <NotificationsIcon color="primary" style={{ marginLeft: '15px' }} />
            <div className="notifcationTitle">
                Notifications
            </div>
        </div>
        <div className="notifcationContext">
         <Card sx={{ minWidth: 250 }}>
             <CardContent>
                 <Typography sx={{ fontSize: 14}} color="text.secondary" gutterBottom>
                    <div className="notificationSubTitle">
                    <span className="notificationSubTitleContext">
                        <MessageIcon color="primary" style={{marginRight:'10px',fontSize: '16px',position:'relative',bottom:'-5px'}}/> 
                        Message
                    </span>
                    <span className="notificationSubTitleTime">4.8 yago</span>
                    </div> 
                 </Typography>
                 <Typography variant="subtitle2" component="div">
                    New Message From orjujeng
                 </Typography>
                 <Typography variant="caption" color="text.secondary">
                     Hello this is testing data.
                 </Typography>
             </CardContent>
             <CardActions>
                 <Button size="small">See Detail</Button>
             </CardActions>
         </Card>
        </div>
     </Fragment>
    );
    return (
        <Fragment>
            <div className="headerBox">
                <div className="headerNotificateBox">
                    <Badge badgeContent={notificateCount} color="primary" onClick={() => { setNotificationStatus(true) }}>
                        <NotificationsIcon />
                    </Badge>
                    <Drawer open={notificationStatus} onClose={() => { setNotificationStatus(false) }} anchor={'right'}>
                        {notificationDrawerList}
                    </Drawer>
                </div>
                <div className="headerWelcomeList" ref={headerWelcomeListRef} >
                    <ListButton id="welcomeList-button" aria-controls={ClientListopen ? 'welcomeList-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={ClientListopen ? 'true' : undefined}
                        onClick={changeListShown}
                    >
                        <div className="headerUsername">{username}</div>
                        <div className="headerAvatar">
                            <Avatar sx={{ backgroundColor: 'rgba(color: #bdbdbd, alpha: 0.2)' }}>O</Avatar>
                        </div>
                    </ListButton>
                    <Menu
                        id="welcomeList-menu"
                        anchorEl={anchorEl}
                        open={ClientListopen}
                        onClose={changeListClose}
                        PaperProps={{
                            style: {
                                width: '25ch',
                            }
                        }}
                    >
                        <MenuItem >
                            <ListItemIcon>
                                <HomeIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Home</ListItemText>
                        </MenuItem>
                        <MenuItem >
                            <ListItemIcon>
                                <PersonIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Profile</ListItemText>
                        </MenuItem>
                        <MenuItem >
                            <ListItemIcon>
                                <SettingsIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Setting</ListItemText>
                        </MenuItem>
                        <MenuItem >
                            <ListItemIcon>
                                <PowerSettingsNewIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Logout</ListItemText>
                        </MenuItem>
                    </Menu>
                </div>
            </div>
        </Fragment>
    )
}
