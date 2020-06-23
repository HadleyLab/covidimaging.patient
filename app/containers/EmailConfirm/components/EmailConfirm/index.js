import React, { PureComponent } from 'react'
import { FormContainer } from 'style/containers'
import Loading from 'components/Loading'

class EmailConfirm extends PureComponent {
  render () {
    const {isConfirmed, isError} = this.props

    return (
      <FormContainer>
        {!isConfirmed && !isError && (
          <Loading/>
        )}
        {isConfirmed && (
          <div>
            Confirmed
          </div>
        )}
        {isError && (
          <div>
            Error
          </div>
        )}
      </FormContainer>
    )
  }
}

export default EmailConfirm