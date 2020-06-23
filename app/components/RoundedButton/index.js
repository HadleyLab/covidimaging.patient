import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
    },
    button: {
        fontWeight: 'normal',
        textTransform: 'none',
        padding: '14px 26px 15px',
        margin: 0,
        borderRadius: 0,
        fontSize:'1em',
    },
    root: {
        boxShadow: 'none',
        position:'relative'
    },
    cssLabel:{
        letterSpacing: '.038em',
    }
});

const RoundedButton = ({classes,children, name, error, ...props}) => (
    <div style={styles.container}>
        <Button variant="contained" className={classes.button} {...props}
                classes={{
                            root: classes.root,
                            label: classes.cssLabel}}>
            {children}
        </Button>
    </div>
)


RoundedButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RoundedButton);