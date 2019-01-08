import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { authActions } from '../../containers/App/auth/actions';

export class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.logout = this.logout.bind(this);
  }

  handleClick(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose() {
    this.setState({ anchorEl: null });
  }

  logout() {
    this.handleClose();
    this.props.logout();
  }

  render() {
    return (
      <div className="header">
        <AppBar position="static">
          <Toolbar>
            <Typography className="header__typo" variant="headline" color="inherit">
              <Link to="/todos" className="header__link">
                Starter
              </Link>
            </Typography>
            <IconButton
              aria-owns={this.state.anchorEl ? 'menu-appbar' : undefined}
              aria-haspopup="true"
              onClick={this.handleClick}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={this.state.anchorEl}
              open={Boolean(this.state.anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem className="header__anchor" component={Link} to="/todos">Todos</MenuItem>
              <MenuItem className="header__anchor" component={Link} to="/my-account">My account</MenuItem>
              <MenuItem className="header__anchor" onClick={this.logout}>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(authActions.logout());
  }
});

export default connect(undefined, mapDispatchToProps)(Header);
