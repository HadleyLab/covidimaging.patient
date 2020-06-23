import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import DatePicker from 'components/material-ui-pickers/DatePicker'
import { FormControl, FormHelperText } from '@material-ui/core'
import { Field } from 'redux-form/immutable'
import moment from 'moment'
import FormHelperTextSpace from 'components/ReduxForm/FormHelperTextSpace'
import "./style.css"
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        width: '100%',
    },
    bootstrapRoot:{
        padding: 0,
        'label + &': {
            marginTop: 0,
            height: 55,
            background: '#fff',
            borderRadius: 4,
        },
    },
    bootstrapInput: {
      marginTop: 0,
      width:'100%',
      fontSize: 15,
      borderRadius: 4,
      height: 40,
      padding: '15px 25px 0',
      backgroundColor: 'rgba(0, 0, 0, 0.06)',
      transition: theme.transitions.create(['border-color']),
      fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
          borderColor: '#9497A2',

      }
    },
    bootstrapFormLabel:{
        position: 'absolute',
        top: -4,
        fontSize: 15,
        zIndex: 2,
        fontWeight: 100,
        marginLeft: 25,
        color: '#9497A2',
    },
    shrink:{
        transform: 'translate(0, 17px) scale(0.75)',
        color: '#9497A2',
    },
    helperText:{
        marginBottom: 8,
        marginTop: 4,
        height: 16,

    },
    iconRoot:{
        top: 17,
        right: 16,
        fontSize: '20px !important',
        color: '#8C96C5',
        position: 'absolute',
    }
})

const ComposedTextField = ({input, classes, meta: {touched, error}, label, disableFuture, ...props}) => {
  const onChange=(date)=>{
    input.onChange(moment(date).format('YYYY-MM-DD'))
  }
  const value = moment(input.value)
  return (
    <FormControl className={classes.formControl} error aria-describedby={`${input.name}-date`}
    >
      <DatePicker
        id={`id-${input.name}`} error={!!touched && !!error} {...input} onChange={onChange} value={value}
        InputProps={{
                disableUnderline: true,
                classes: {
                            root: classes.bootstrapRoot,
                            input: classes.bootstrapInput,
                        },
            }}
        InputLabelProps={{
            className: classes.bootstrapFormLabel,
            classes: {
                shrink: classes.shrink,
                    },
            }}
        label={label}
        autoOk
        format="MM/DD/YYYY"
        invalidDateMessage=""
        invalidLabel=""
        disableFuture={disableFuture}
        {...props}
      />
      {touched && error ? (
        <FormHelperText error={!!touched && !!error} id={`${input.name}-date`} className={classes.helperText}>{error}</FormHelperText>
      ):(
        <FormHelperTextSpace />
      )}
      <Icon classes={{root: classes.iconRoot}}><span className="icon-ico-calendar"/></Icon>
    </FormControl>
  )
}
const FormField = (props) => {
  return (
    <Field component={ComposedTextField} {...props}/>
  )
}

ComposedTextField.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FormField)