/** @format */

import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Avatar, Box, ButtonBase } from '@material-ui/core';

// project imports
import LogoSection from '../LogoSection';
import SearchSection from './SearchSection';
import ProfileSection from './ProfileSection';
import NotificationSection from './NotificationSection';

// assets
import { IconMenu2 } from '@tabler/icons';
//import logo from '../../../assets/images/logo-full.png';
// style constant
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  headerAvatar: {
    ...theme.typography.commonAvatar,
    ...theme.typography.mediumAvatar,
    transition: 'all .2s ease-in-out',
    background: `${theme.palette.secondary.light} !important`,
    color: `${theme.palette.secondary.dark} !important`,
    '&:hover': {
      background: `${theme.palette.secondary.dark} !important`,
      color: `${theme.palette.secondary.light} !important`,
    },
  },
  boxContainer: {
    width: '268px',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      width: 'auto',
    },
  },
}));

// ===========================|| MAIN NAVBAR / HEADER ||=========================== //

const Header = ({ handleLeftDrawerToggle }) => {
  const classes = useStyles();

  return (
    <>
      {/* logo & toggler button */}
      <div className={classes.boxContainer}>
        <Box
          component="span"
          sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}
        >
          <LogoSection />
        </Box>
        <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
          <Avatar
            variant="rounded"
            className={classes.headerAvatar}
            onClick={handleLeftDrawerToggle}
            color="inherit"
          >
            <IconMenu2 stroke={1.5} size="1.3rem" />
          </Avatar>
        </ButtonBase>
      </div>
      {/* <div className={classes.grow} /> */}
      <div> {/* <img src={logo} alt="close icon" height={50} />{' '} */}</div>

      {/* header search */}
      <SearchSection theme="light" />

      <div className={classes.grow} />

      {/* notification & profile */}
      <NotificationSection />
      <ProfileSection />
    </>
  );
};

Header.propTypes = {
  handleLeftDrawerToggle: PropTypes.func,
};

export default Header;
