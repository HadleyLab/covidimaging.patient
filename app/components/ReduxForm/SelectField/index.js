import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { InputLabel } from '@material-ui/core'
import { FormControl } from '@material-ui/core'
import Select from '@material-ui/core/Select';
import { Field } from 'redux-form/immutable'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    height: '68px',
  },
})

class ComposedSelectField extends React.Component {
    render() {
        const { classes, children, label, name, input} = this.props;
        return (
            <FormControl  className={classes.formControl} aria-describedby={`${name}-date`}>
                <InputLabel htmlFor={`id-${name}`}>{label}</InputLabel>
                <Select
                    {...input}
                    inputProps={{
                        name: name,
                        id: `id-${name}`,
                    }}
                >
                    {children}
                </Select>
            </FormControl>
        );
    }
}

const SelectField = (props) => {
    return (
        <Field component={ComposedSelectField} {...props}/>
    )
}

SelectField.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectField);