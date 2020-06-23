import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import trans from "../../trans";
import logOut from "../../utils/logOut";
import AvatarIcon from './AvatarIcon';
import colors from '../../style/colors'

const styles = theme =>( {
    menuItem: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& $primary, & $icon': {
                color: theme.palette.common.white,
            },
        },
    },
    root:{
        padding: '0 10px',
    },
    primary: {
        textAlign: 'right',
        fontSize: 13,
        color:colors.fontDark,
    },
    secondary: {
        fontSize: 13,
        color: '#9393A4',
       '&:first-child':{
           paddingLeft: 10,
       },
    },
    icon: {
        color: colors.fontUserMenu,
        margin: '0 0 0 10px ',
    },
    button:{
        padding: 0,
        borderRadius: 18,
        minWidth: 'auto',
    },
    primaryBtn:{
        fontSize: 13,
        fontWeight:100,
        color: colors.fontUserMenu,
    },
    logout:{
        fontSize: 13,
        paddingLeft: 25,
    },
    paper:{
        top: '59px !important',
        borderRadius:10,
        boxShadow:'0px 0px 5px 1px rgba(0, 0, 0, 0.15)',
    },
    divider:{
        margin:'18px 0',
        backgroundColor:'#EBEBF7',
    },
    cssRoot:{
        paddingLeft: 12,
    },
    menuButton:{
        padding: '7px 10px',
        margin: ' 2px 10px',
        borderRadius: 5,
        '&:hover':{
            backgroundColor: '#F3F5FF',
        }
    },
    listRoot:{
        paddingTop: 18,
    },
    itemRoot:{
        padding: '6px 16px',
    },
    dividerTop:{
        margin:'17px 0 10px',
        backgroundColor:'#EBEBF7',
    }
});

class UserMenu extends React.Component {
    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render () {
        const { anchorEl } = this.state;
        const { classes, user } = this.props;
        return (
        <div>
            <Button
                aria-owns={anchorEl ? 'simple-menu' : null}
                aria-haspopup="true"
                onClick={this.handleClick}
                className={classes.button}
            >
                <AvatarIcon><p>{user.firstName.substr(0,1)}</p></AvatarIcon>
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
                classes={{paper: classes.paper}}
                    MenuListProps={{
                        classes:{
                            root: classes.listRoot,
                        }}
                }
            >
                <MenuItem
                    disabled={true}
                    classes={{root: classes.itemRoot,}}>
                    <ListItemText
                                  classes={{
                                      root: classes.secondary}}
                                  secondary={trans('header.nav.email')}/>
                    <ListItemText inset
                                  classes={{
                                      root: classes.root,
                                  primary: classes.primary}}
                                  primary={user.email}/>

                </MenuItem>
                <MenuItem disabled={true}
                          classes={{root: classes.itemRoot,}}>
                    <ListItemText
                                  classes={{
                                      root: classes.secondary}}
                                  secondary={trans('header.nav.birthday')}/>
                    <ListItemText
                                  classes={{
                                      root: classes.root,
                                      primary: classes.primary}}
                                  primary={user.dob}/>

                </MenuItem>
                <MenuItem
                    disabled={true}
                    classes={{root: classes.itemRoot,}}>
                    <ListItemText inset
                                  classes={{
                                      root: classes.secondary}}
                                  secondary={trans('header.nav.phone')}/>
                    <ListItemText inset
                                  classes={{
                                      root: classes.root,
                                      primary: classes.primary}}
                                  primary={user.phone}/>
                </MenuItem>
                { (user.sign)
                    ? (                <MenuItem
                            classes={{root: classes.itemRoot,}}>
                            <a href={user.envelopeId} target="_blank">
                                <ListItemText inset
                                              classes={{
                                                  root: classes.secondary}}
                                              secondary={trans('header.nav.ddocument')}/>
                            </a>
                        </MenuItem>
                    )
                    : ''
                }
                <Divider className={classes.dividerTop}/>
                {/*<MenuItem onClick={this.handleClose}*/}
                            {/*className={classes.menuButton}>*/}
                    {/*<ListItemIcon*/}
                        {/*classes={{*/}
                            {/*root: classes.icon}}>*/}
                        {/*<div className="icon-ico-password"/>*/}
                    {/*</ListItemIcon>*/}
                    {/*<ListItemText inset*/}
                                  {/*classes={{*/}
                                      {/*root: classes.cssRoot,*/}
                                      {/*primary: classes.primaryBtn}}*/}
                                  {/*primary={trans('header.nav.change.password')}/>*/}
                {/*</MenuItem>*/}
                {/*<MenuItem onClick={this.handleClose}*/}

                          {/*className={classes.menuButton}>*/}
                    {/*<ListItemIcon*/}
                        {/*classes={{*/}
                            {/*root: classes.icon}}>*/}
                        {/*<div className="icon-ico-edit"/>*/}
                    {/*</ListItemIcon>*/}
                    {/*<ListItemText inset*/}
                                  {/*classes={{*/}
                                      {/*root: classes.cssRoot,*/}
                                      {/*primary: classes.primaryBtn}}*/}
                                  {/*primary={trans('header.nav.edit')}/>*/}
                {/*</MenuItem>*/}
                {/*<Divider className={classes.divider}/>*/}
                <MenuItem to="/" onClick={logOut}
                          className={classes.menuButton}>
                    <ListItemIcon
                        classes={{
                            root: classes.icon}}>
                        <div className="icon-ico-logout"/>
                    </ListItemIcon>
                    <ListItemText inset
                                  classes={{
                                      root: classes.cssRoot,
                                      primary: classes.primaryBtn}}
                                  primary={trans('header.nav.logout')}/>

                </MenuItem>
            </Menu>
        </div>
    );
    }
}

UserMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserMenu);