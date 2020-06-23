import React, { PureComponent } from 'react'
import trans from 'trans'
import FullColumn from 'components/FullColumn'
import FlexBetween from 'components/FlexBetween'
import FlexCover from 'components/FlexCover'
import RoundedButton from 'components/RoundedButton'
import colors from 'style/colors'
import { withStyles } from '@material-ui/core/styles/index'
import AutocompleteMulti from "./components/AutocompleteMulti";
import { Subject } from 'rxjs'
import 'rxjs/add/operator/debounceTime'
import Loading from 'components/Loading';
import FormTitle from 'components/FormTitle'
import FormDescription from 'components/FormDescriprion'
import BgImg from 'images/BG-welcome.jpg'
import {media} from "../../../../style/containers";
import styled from 'styled-components';
import getUser from '../../../../utils/getUser';

const Container = styled.div`
    position:relative;
    width:100%;
    height: 100vh;
    padding: 3em;
    display:flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    background: url(${BgImg}) center;
    background-size: cover;
    >form {
        max-width:660px;
    }
    ${media.desktop`
        flex: 1;
        padding: 2em;
        justify-content: center;
    `}
`

const Title = styled.h2`
    color:#000;
    font-size:22px;
    font-weight:300;
    margin:2em 0 0;
    text-align: center;
`

const styles = theme => ({
  btnDone: {
      alignItems: 'center',
  },
  cover:{
    width: 900,
      '@media (max-width: 1024px)':{
        width: '100%',
      },
  },
  mobile:{
    '@media (max-width: 768px)':{
        width: '100%',
        flexFlow: 'column',
    },
  },
  inputColumn:{
    width: '100%',
    margin:'2em 0 0',
    flex: '0 .3 32%',
      '@media (max-width: 768px)':{
      marginTop: '1em',
      }
  },
    button:{
    },
    cssInput:{
        padding: '8px 12px 0',
    },
    cssShrink:{
      opacity: 0,
    },
    hospitals:{
        width: '100%',
        boxShadow: 'none',
    },
});


const UPDATE_LIST_DELAY_TIME = 500 //ms

class Transfer extends PureComponent {

  constructor (props) {
    super(props);
    this.state = {
      selectHospital: null,
      sendTransfers: false,
    };
  }

    componentWillMount () {
      this.onUpdateListHospitals = new Subject()
      this.onUpdateListHospitals.debounceTime(UPDATE_LIST_DELAY_TIME).subscribe(this.UpdateListHospitals)

      const { onGetHospitalsList } = this.props;
      onGetHospitalsList({noCalcCount: true});
    }

    handleInputChange = (value) => {
      this.onUpdateListHospitals.next(value)
    }

    handleChange = (value) => {
      const { onGetHospitalsList } = this.props;
      this.setState({selectHospital:(value) ? value: null})
      onGetHospitalsList({noCalcCount: true});
    }

    UpdateListHospitals = (value) => {
        if (value) {
            const { onGetHospitalsList } = this.props;
            onGetHospitalsList({q:value, noCalcCount: true});
        }
    }

    done = () => {
      const {selectHospital} = this.state;
      if (selectHospital) {
        const {onTransfer} = this.props;
        const dataSelectHospitalId = {
          id: selectHospital.value,
        };
        this.setState({sendTransfers:true})
        onTransfer({hospitalIds: dataSelectHospitalId});
      }
    }

    render () {
      const {onTransfer, handleSubmit, hospitals, classes} = this.props
      const {selectHospital, sendTransfers} = this.state;
      const user = getUser();
      const listHospitals = (hospitals && hospitals.map(hospital => ({
          value: hospital._id,
          label: hospital.name
      })))
      return (
        <Container>
            <FormTitle>{trans('dialog.add.hospital.title')} {user.firstName} {user.lastName} {'!'}</FormTitle>
            <FormDescription>{trans('dialog.add.hospital.desc')}</FormDescription>

          {(!sendTransfers) ? (
              <div>
                <FlexCover>
                    <FullColumn className={classes.btnDone}>
                      <RoundedButton
                        variant='raised'
                        color='primary'
                        disabled={(selectHospital) ? false : true}
                        onClick={this.done} >{trans('dialog.go.to.hospitals.list.btn')}
                      </RoundedButton>
                    </FullColumn>
                  </FlexCover>
              </div>
            ): (<Loading/>)}
        </Container>
      )
    }
}
export default withStyles(styles)(Transfer)
