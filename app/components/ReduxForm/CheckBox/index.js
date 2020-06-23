import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Checkbox from '@material-ui/core/Checkbox'
import { FormControl, FormControlLabel, FormHelperText } from '@material-ui/core'
import { Field } from 'redux-form/immutable'
import FormHelperTextSpace from '../FormHelperTextSpace'
import CheckBoxIcon from '../../../images/check-box.svg'
import DoneIcon from '@material-ui/icons/Done';
import colors from "../../../style/colors";


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: '.5em auto',
  },
  checkbox:{
    width:22,
      height:22,
      border: '1px solid #E0E0E0',
      borderRadius: 5,
      backgroundColor: 'rgba(255,255,255, .8)',
    },
  checkIcon:{
    fontSize: 18,
    margin: '-15px 0 0 0',
  }
})

const ComposedCheckBox = ({input, color, classes, meta: {touched, error}, label, ...props}) => {
  color = color || 'primary'
  return (
    <FormControl className={classes.formControl} error aria-describedby={`${input.name}-checkbox`}>
      <FormControlLabel
        control={
          <Checkbox
            checked={input.value}
            onChange={input.onChange}
            value={input.name}
            color={color}
            icon={<div className={classes.checkbox}/>}
            checkedIcon={<div className={classes.checkbox}><DoneIcon  className={classes.checkIcon}/></div>}
          />
        }
        label={label}
      />
      {touched && error ? (
        <FormHelperText error={!!touched && !!error} id={`${input.name}-checkbox`}>{error}</FormHelperText>
      ) : (
        <FormHelperTextSpace/>
      )}
    </FormControl>
  )
}
const FormField = (props) => {
  return (
    <Field component={ComposedCheckBox} {...props}/>
  )
}

ComposedCheckBox.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FormField)