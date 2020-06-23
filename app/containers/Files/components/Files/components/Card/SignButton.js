import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles/index'
import Button from '@material-ui/core/Button';


const styles =({
    container:{
        height:'100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    button: {
        textTransform: 'none',
        padding: '9px 29px 10px',
        fontWeight: 100,
        margin: 0,
        borderRadius: 33,
        fontSize:'.75em',
    },
    root: {
        boxShadow: 'none',
        position:'relative'
    },
});

const SignButton = ({classes,children, name, error, ...props}) => (
    <div className={classes.container}>
        <Button variant="contained" className={classes.button} {...props}
                classes={{root: classes.root,}}>
            {children}
        </Button>
    </div>
)


SignButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignButton);