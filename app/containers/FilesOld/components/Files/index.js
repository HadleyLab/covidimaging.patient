import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles/index'
import trans from '../../../../trans'
import { FormContainer } from 'style/containers'
import Button from '@material-ui/core/Button'
import UploadImage from 'images/upload-button.png'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import AppBar from '@material-ui/core/AppBar'
import {Tabs, Tab } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'
import colors from '../../../../style/colors'
import FlexBetween from 'components/FlexBetween'
import Loading from 'components/Loading'
import { getFileUrl } from '../../api'

const FormTitle = styled.h2`
    color:${colors.brandPrimary};
    font-size:2em;
    font-weight:300;
    margin-top:0;
`
const UploaderCover = styled.div`
  
`

const DownloadCover = styled.div`
  margin:0 -24px;
`

const DownloadDiv = styled.div`
  
`

const ButtonCover = styled.div`
  width:100%;
  display:flex;
  flex-flow:row wrap;
  align-items:center;
  margin:2em 0;
  justify-content:center;
`

const UploadSpan = styled.span`
    position:absolute;
    left: 0;
    top: 50%;
    width: 100%;
    text-align: center;
`

const HashText = styled.p`
    margin: 0em 0 1em;
    font-size:1em;
`

const HashLabel = styled.p`
    margin: 2em 0 0;
    font-size:0.8em;
    color:${colors.brandPrimary};
`

function TabContainer ({children, dir}) {
  return (
    <Typography component="div" dir={dir} style={{padding: 8 * 3}}>
      {children}
    </Typography>
  )
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
}

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: 'none',
  },
  wrapper: {
    boxShadow: 'none',
  },
  bar: {
    boxShadow: 'none',
    backgroundColor: '#fff',
  },
  uploaderDiv: {
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid',
    backgroundImage: `url(${UploadImage})`,
    backgroundPositionX: 'center',
    backgroundPositionY: '25%',
    backgroundSize: '20%',
    position: 'relative',
  },
  uploadInput: {
    opacity: 0,
    width: '100%',
    cursor: 'pointer',
    height: 300,
  },
  preview: {
    width: '100%',
  },
})

class FilesStep extends PureComponent {
  state = {
    tab: 0,
    downloadFileUrl: '',
    downloadFile: '',
    maxFileSize: 20000000,
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value, downloadFileUrl: ''})
  }
  handleChangeTab = (e, tab) => {
    this.setState({tab, downloadFileUrl: ''})

  }

  handleChangeIndex = index => {
    this.setState({value: index})
  }

  loadFile (file) {
    const {maxFileSize} = this.state
    const {onSetFile, onSendFile} = this.props
    const sizeError = maxFileSize < file.size
    let imagePreviewUrl
    try {
      let reader = new FileReader()
      reader.onloadend = () => {
        imagePreviewUrl = reader.result
        this.setState({imagePreviewUrl})
      }
      reader.readAsDataURL(file)
    } catch (e) {
      this.setState({imagePreviewUrl: null})
    }
    onSetFile(file)
    onSendFile(file)
    this.setState({sizeError, imagePreviewUrl})
  }

  handleFileChange = (e) => {
    let files = e.target.files
    if (e) {
      e.preventDefault()
    }
    this.loadFile(files[0])
  }

  handleSendFile = () => {
    const {onSendFile, file} = this.props
    onSendFile(file)
  }
  handleGetFile = () => {
    const {onGetFile} = this.props
    const {downloadFile} = this.state
    onGetFile({hash: downloadFile})
  }
  handleGetFileLikeImage = () => {
    const {downloadFile} = this.state
    const downloadFileUrl = getFileUrl(downloadFile)
    this.setState({downloadFileUrl})
  }
  handleReset = () => {
    const {onSetFile} = this.props
    this.setState({imagePreviewUrl: null, downloadFileUrl: '',downloadFile:''})
    onSetFile('')
  }

  render () {
    const {classes, theme, sending, hash, file, getFileResult} = this.props
    const {imagePreviewUrl, tab, downloadFileUrl,downloadFile} = this.state
    return (
      <FormContainer>
        <FormTitle>{trans('forms.files.title')}</FormTitle>
        <div className={classes.root}>
          <AppBar className={classes.bar} position="static">
            <Tabs
              value={tab}
              onChange={this.handleChangeTab}
              indicatorColor="primary"
              textColor="primary"
              fullWidth
            >
              <Tab onClick={this.handleReset} label={trans('forms.files.upload')}/>
              <Tab onClick={this.handleReset} label={trans('forms.files.download')}/>
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={tab}
            onChangeIndex={this.handleChangeIndex}
          >
            <TabContainer dir={theme.direction}>
              <UploaderCover className={classes.uploaderDiv}>
                {!(file && imagePreviewUrl) && (<input
                  className={classes.uploadInput}
                  onChange={this.handleFileChange}
                  name="file"
                  type="file"
                />)}
                {!(file && imagePreviewUrl) && (
                  <UploadSpan>{trans('forms.files.upload.text')}</UploadSpan>
                )}
                {file && imagePreviewUrl && (
                  <div>
                    <img className={classes.preview} src={imagePreviewUrl}/>
                  </div>
                )}
              </UploaderCover>
              {file && sending && (
                <Loading/>
              )}
              {file && hash && (
                <div>
                  <HashLabel>{trans('forms.files.hash.label')}</HashLabel>
                  <HashText>{hash}</HashText>
                </div>
              )}

            </TabContainer>
            <TabContainer dir={theme.direction}>
              <DownloadCover>
                <DownloadDiv>
                  <TextField onChange={this.handleChange} value={downloadFile} name="downloadFile"
                             label={trans('forms.files.download.hash')} fullWidth/>
                </DownloadDiv>
                <ButtonCover>
                  <FlexBetween>
                  <Button variant='raised' color='primary' onClick={this.handleGetFile}>{trans(
                    'forms.files.download.btn')}</Button>

                  <Button variant='raised' color='primary' onClick={this.handleGetFileLikeImage}>{trans(
                    'forms.files.download.and.show.btn')}</Button>
                  </FlexBetween>
                  <br />
                  <br />
                  <br />
                  {getFileResult && (
                    <div>{getFileResult}</div>
                  )}
                  {downloadFileUrl && (
                    <div>
                      <img className={classes.preview} src={downloadFileUrl}/>
                    </div>
                  )}
                </ButtonCover>
              </DownloadCover>
            </TabContainer>
          </SwipeableViews>
        </div>
      </FormContainer>
    )
  }
}

FilesStep.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export default withStyles(styles, {withTheme: true})(FilesStep)
