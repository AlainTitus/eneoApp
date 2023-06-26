import React, { useState } from 'react'
import {
    AppBar, Toolbar, IconButton, Typography, Stack,
    Tooltip,
    Avatar,
    Menu,
    MenuItem,
    Divider,
    ListItemIcon
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Header = ({ profile, setProfile, setToken }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const navigate = useNavigate();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleInscription = () => {
        setAnchorEl(null);
        navigate('/inscription')
    }
    const handleConnexion = () => {
        setAnchorEl(null);
        navigate('/oldconnexion')
    }

    const handleDeconnexion = () => {
        setProfile(null)
        setToken(null)
        navigate('/oldconnexion')
    }


    return (
        <header>
            <AppBar
                position='static'
            >
                <Toolbar>
                    <IconButton
                        size='large'
                        color='inherit'
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' component='p' sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                        MyApp
                    </Typography>
                    <Stack direction={'row'} spacing={8}>
                        {profile ?
                            <Typography className='p-lien' component='p' variant='h6'>{profile}</Typography>
                            :
                            <>
                                <Typography className='p-lien' component='p' variant='h6'>
                                    <Link to="/oldconnexion" className='lien-nav'>Connexion</Link>
                                </Typography>
                                <Typography className='p-lien' component='p' variant='h6' style={{ textDecoration: 'none' }}>
                                    <Link to='/inscription' className='lien-nav' >Inscription</Link>
                                </Typography>
                            </>
                        }

                        <Tooltip title="Account settings">
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <Avatar sx={{ width: 40, height: 40, bgcolor: 'green' }}>C</Avatar>
                            </IconButton>
                        </Tooltip>
                    </Stack>
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
                        {profile ?
                            <div>
                                <MenuItem style={{ fontWeight: 'bold' }}>
                                    {profile}
                                </MenuItem>
                                <MenuItem onClick={handleDeconnexion}>
                                    Deconnectez-vous
                                </MenuItem>
                            </div>
                            :
                            <div>
                                <MenuItem onClick={handleInscription}>
                                    <ListItemIcon>
                                        <PersonAdd fontSize="small" />
                                    </ListItemIcon>
                                    Inscrivez-vous
                                </MenuItem>
                                <MenuItem onClick={handleConnexion}>
                                    <ListItemIcon>
                                        <Logout fontSize="small" />
                                    </ListItemIcon>
                                    Connecter-vous
                                </MenuItem>
                            </div>
                        }
                    </Menu>
                </Toolbar>
            </AppBar>
        </header>
    )
}

export default Header;
