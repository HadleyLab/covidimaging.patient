import React, {PureComponent} from 'react'
import {withStyles} from '@material-ui/core/styles/index'
import trans from '../../../../trans'
import {FormContainer} from 'style/containers'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {getFileUrl} from '../../api'
import Card from './components/Card'
import CardHeader from './components/Card/CardHeader'
import Viewer from './components/dcmViewer';
import "../../../../assets/dwv/style.css"
import {Container, ContainerFluid} from "../../../../style/containers";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';


import Loading from 'components/Loading';

const Title = styled.h2`
    color:#000;
    font-size:22px;
    font-weight:500;
    margin:1.6em 0 1.8em;
    letter-spacing: .04em;
`
const Cover = styled.div`
    background: #f2f3f4;
    margin-top: 63px;
    padding-bottom: 56px;
`

const AddHospitalBlock = styled.div`
    width: 100%;
    height: 150px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    background-color: rgba(116, 153, 225, 0.12);
    justify-content: center;
`
const ViewerContainer = styled.div`
    background: #f2f3f4;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(243, 244, 249, .9);
    z-index: 9;  
`;

const ViewerCover = styled.div`
    position:relative;
    width:100%;
    min-height: 100vh;
`
const TopToolBar = styled.div`
    width: 100%;
    text-align: right;
    padding: 30px;
    position: absolute;
    `

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: 'none',
  },
    container:{
        width: '100%',
        margin: '0 auto',
        minHeight: 'auto',
        padding: 0,
        paddingBottom: '2em',
        background: '#f2f3f4',
      },
    divider:{
        width: '95%',
        backgroundColor:'rgba(235, 235, 247, 1)'
    },
    button:{
        textTransform: 'none',
        fontSize: 18,
        fontWeight: 300,
        color: '#16A7FF',
        borderRadius: 30,
        '&:hover':{
            background: 'rgba(22, 167, 255, .1)',
        }
    },
    iconRoot:{
        background: '#fff',
        fontSize: 12,
        borderRadius:5,
        zIndex:999,
        boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.2), 0px 0px 10px 0px rgba(0, 0, 0, 0.04), 0px 0px 10px 0px rgba(0, 0, 0, 0.02)',
        '&:hover':{
            background: '#F8F8F8',
        }
    },
    buttonLabel:{
      marginLeft:8,
    }
})

class FilesStep extends PureComponent {
    canvas = null;
    state = {
        openViewer: false,
        activeDICOM: null,
        activeStady: null,
    }

    handleOpenDialog = () => {
        this.setState(
            {
                ShowDialog: true,
            }
        );
    };

    closeViewer = () => {
        this.setState(
            {
                openViewer: false,
                activeDICOM: null,
                activeStady: null
            }
        );
    }

    openViewer = (file, stady) => {
        this.setState(
            {
                openViewer: true,
                activeDICOM: file,
                activeStady : stady
            }
        );
    }

  render () {
    const {classes, ...others} = this.props;
    const {dicoms, tags, handleOpenDialog} = this.props;
    const {openViewer, activeDICOM, activeStady} = this.state;
    let body = (
      <FormContainer className={classes.container}>
        <Title>{trans('dashboard.title.hospitals')}</Title>
        <Loading/>
      </FormContainer>
    );
    if(dicoms) {
      body =(
        <FormContainer className={classes.container}>
          <Title>{trans('dashboard.title.hospitals')}</Title>
            {dicoms && dicoms.map((dicom, index) =>
              (dicom &&
                  <Card key={'card'+dicom._id}>
                        <CardHeader key={dicom._id} dicom={dicom} dicomIndex={index}  openViewer={this.openViewer}/>
                  </Card>
              )
            )}
          <AddHospitalBlock>
            <Button  className={classes.button} onClick={handleOpenDialog}>
                <div className="icon-ico-add"/>
              <span className={classes.buttonLabel}>{trans('dashboard.add.hospital.btn')}</span>
            </Button>
          </AddHospitalBlock>
        </FormContainer>
      );
    }
    let viewer = null
     if (openViewer) {
        viewer = (
        <ViewerContainer>
            <ViewerCover>

                <TopToolBar>
                    <IconButton onClick={this.closeViewer}
                          className={classes.iconRoot}><div className="icon-ico-close"/></IconButton>

                </TopToolBar>
              <Viewer {...others} tags={tags} open={openViewer} stady={dicoms[activeStady]} file={activeDICOM} handleClose={this.closeViewer}/>
            </ViewerCover>
        </ViewerContainer>
      )
    }
    return (
      <Cover>
        <ContainerFluid>
          <Container>

            {body}
            {viewer}
          </Container>
        </ContainerFluid>
      </Cover>
    )
    }
}

FilesStep.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export default withStyles(styles, {withTheme: true})(FilesStep)
