import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    width:'100%',
    height:'10px',
    marginTop:3,
    marginBottom: 7,
  },
})

const FormHelperTextSpace = (props) => (<div className={props.classes.root}/>)

FormHelperTextSpace.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FormHelperTextSpace)