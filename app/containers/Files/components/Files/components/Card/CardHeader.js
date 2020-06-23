import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { media } from 'style/containers'
import colors from 'style/colors'
import trans from '../../../../../../trans'
import HalfColumn from '../../../../../../components/HalfColumn/index'
import CardHeaderComponent from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles/index'
import SignButton from './SignButton';
import Divider from '@material-ui/core/Divider';
import DicomItem from '../dicomItem'
import {signStory} from '../../../../../FindHospital/story'
import Loading from 'components/Loading';

const CurrentStatus = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: flex-end;
    align-items: center;
    padding: 5px 0;
    >p{
        margin: 0;
        margin-right: 10px;        
        font-size: 12px;
    }
`
const ReceivedIcon = styled.div`
    height: 14px;
    width: 14px;
    border: 2px solid #08D796; 
    border-radius: 7px;
`
const PendingIcon = styled.div`
    height: 14px;
    width: 14px;
    border: 2px solid #FAA900;
    border-radius: 7px;
 
`
const DocumentLink = styled.a`
    display: flex;
    flex-flow: row;
    justify-content: flex-end;
    align-items: center;
    color: ${colors.fontUserMenu};
    font-size: 12px;
    font-weight: 300;
    text-decoration: none;
    &:hover {
        color: #1D84C1;
    }
    >span{
        margin-right: 10px; 
    }
    >div{
      font-size: 13px;
    }
`
const CustomCardHeader = withStyles(theme => ({
    root:{
        paddingTop: 18,
        paddingBottom: 22,
        width: '100%',
        alignItems: 'unset',
        '&:after':{
            display:'block',
            content: ' ',
            width: '80%',
            height: 1,
            backgroundColor: 'red',

        },
        '@media(max-width: 768px)':{
            flexFlow: 'column',
        }
    },
    action:{
        margin: 0,
        alignSelf: 'unset',
        '@media(max-width: 768px)':{
            alignSelf: 'center',
            margin:'1em 0 .5em',
        }
    },
}))(CardHeaderComponent)

const styles = theme => ({
    title:{
        fontSize:18,
        color: '#000',
        fontWeight: 'normal',
        margin: 0,
        marginBottom: 5,
        '@media(max-width: 768px)':{
            textAlign: 'center',
        }
    },
    detailsBlock:{
        color: '#9497A2',
        fontWeight: 200,
        fontSize:14,
        margin: 0,
        display: 'flex',
        '@media(max-width: 768px)':{
            justifyContent: 'center',
        },
        '@media(max-width: 600px)':{
            flexFlow: 'column',
        }
    },
    divider:{
      width: '94%',
      margin:'0 auto',
      backgroundColor:'rgba(235, 235, 247, 1)'
    },
    headerCover:{
      width: '100%',
    },
    hDetails:{
        display: 'flex',
        flexFlow:'row',
        alignItems:'center',
        marginRight: 13,
        '@media(max-width: 600px)':{
            justifyContent: 'center',
        }
    },
    hDetailsText:{
        fontSize:12,
        marginLeft:5,
    },
    styledColumn:{
        height: '100%',
        paddingRight: '0.5em',
        justifyContent: 'space-between',
        '@media(max-width: 768px)':{
            justifyContent: 'center',
            alignItems:'center',
        }
    },
    button:{
        fontSize:12,
        padding: '5px 26px 7px',
    }
})


class CardHeader extends React.Component { // eslint-disable-line react/prefer-stateless-function


    state = {
        signing: false
    };

    sign = () => {
        const {signing} = this.state;
        if (!signing) {
            const {dicom} = this.props;
            console.log(dicom);
            signStory({data:dicom});
            this.setState({signing: true})
        }
    };

    render () {

      const {dicom, openViewer, dicomIndex, classes, ...others} = this.props;
      const {signing} = this.state;

      if (!dicom || !dicom.hospital) {
        return null;
      }
      let filesItems = null;
      let action = null;
      let status = (
        <CurrentStatus>
          <p>{trans('dashboard.status.received')}</p>
          <ReceivedIcon/>
        </CurrentStatus>
       );


      if (dicom.package && dicom.package.dicom){
        filesItems = (
          <DicomItem key={'DicomItem'+dicomIndex} dicomIndex={dicomIndex} stady={dicom.package.dicom} openViewer={openViewer} {...others}/>
        );
      } else {
        status = (
          <CurrentStatus>
            <p>{trans('dashboard.status.pending')}</p>
            <PendingIcon/>
          </CurrentStatus>
        );
      }

      if (dicom.hospital && dicom.hospital.active) {
          action = (<HalfColumn className={classes.styledColumn}>
              {status}
              {(dicom.sign) ? (
                      <DocumentLink target="_blank" href={dicom.envelopeId}>
                          <span>{trans('dashboard.view.agreement.btn')}</span>
                          <div className="icon-ico-file"/>
                      </DocumentLink>
                  )
                  : (!signing)
                      ? ( <DocumentLink>
                                  <SignButton variant='raised' onClick={this.sign} color="primary" classes={{button: classes.button}}>{trans('dashboard.status.sign.btn')}</SignButton>
                              </DocumentLink>
                            )
                      : (<Loading/>)

              }
          </HalfColumn>);
      } else {
          action = (<span>{trans('dashboard.title.hospital.w.moderation')}</span>)
      }

        return (
          <div className={classes.headerCover}>
              <CustomCardHeader
                  title={
                      <HalfColumn>
                          <Typography className={classes.title}>{dicom.hospital.name}</Typography>
                          <Typography className={classes.detailsBlock}>
                              <span className={classes.hDetails}><span className="icon-ico-Location"/><span className={classes.hDetailsText}>{dicom.hospital.address}</span></span>
                              <span className={classes.hDetails}><span className="icon-ico-phone"/><span className={classes.hDetailsText}>{dicom.hospital.phone}</span></span>
                          </Typography>
                      </HalfColumn>
                  }
                  action={action}
              />
              <Divider className={classes.divider}/>
          {filesItems && filesItems}
          </div>

      )
    }
}

export default withStyles(styles) (CardHeader)