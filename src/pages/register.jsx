import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import PersonPinIcon from '@material-ui/icons/PersonPin';

import RegForm from '../components/landingRegForm';

import '../style/reg.css';

const styles = {
  rootRegNav: {
    flexGrow: 1,
    maxWidth: 400,
    margin: 'auto',
    marginTop: '40px',
  },
  rootRegPage: {
    margin: 'auto',
    marginTop: '40px',
    minWidth: '570px',
    width: '65%',
    minHeight: '240px', // 328px
    paddingBottom: '30px',
  },
};
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};


class IconLabelTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleSubmit = (event) => {
    alert('you are submitting');
    event.preventDefault();
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className="title">
            Register
        </div>
        <Paper className={classes.rootRegPage}>
          {this.state.value === 0 && (
            <TabContainer>
              {' '}
              <RegForm submit={this.handleSubmit} />
              {' '}
            </TabContainer>
          )}
        </Paper>

        <Paper square className={classes.rootRegNav}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="secondary"
          >
            <Tab icon={<PersonPinIcon />} label="ABOUT YOU" />
          </Tabs>
        </Paper>
        <button form="regform" className="btn" type="submit"> Let's Go </button>
      </div>
    );
  }
}

IconLabelTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconLabelTabs);
