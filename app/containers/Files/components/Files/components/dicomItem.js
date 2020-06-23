import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles/index'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import colors from '../../../../../style/colors'
import Avatar from '@material-ui/core/Avatar';
import globalConfig from 'config.js';
import Button from '@material-ui/core/Button';
import trans from '../../../../../trans'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ListItem from '@material-ui/core/ListItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HalfColumn from '../../../../../components/HalfColumn'
import FullColumn from '../../../../../components/FullColumn'
import Icon from '@material-ui/core/Icon';

const styles = ({
    button: {
        fontSize: 12,
        color: '#fff',
        background: 'transparent',
        borderRadius:0,
        padding: 0,
        margin: '5px 11px 5px 0',
    },
    iconButton:{
        right: 15,
    },
    avatar:{
        width: 65,
        height: 52,
        borderRadius: 0,
    },
    list:{
        width: '100%',
        padding: '0 30px',
    },
    dicomItem:{
        maxWidth: '100%',
        padding: '6px 0 16px',
    },
    listItem:{
        padding: '0 0 1em',
        maxWidth: '100%',
        display: 'flex',
        flexFlow: 'column',
    },
    cover:{
        width: '100%',
    },
    paper:{
        width: '100%',
        boxShadow: 'none',
        '&:before':{
            width: '94%',
            margin: '0 auto',
            backgroundColor: "#EBEBF7",
        }
    },
    heading:{
        color: '#3C3C56',
        fontWeight: '600',
        fontSize: 14,

    },
    creationDate:{
        color:'#000',
        fontSize: 12,
    },
    attached:{
        color: '#9497A2',
        fontSize: 12,
    },
    dicomsHeading:{
        marginBottom: 10,
    },
    summary:{
        padding: '0 30px',
    },
    ExpansionPanelDetails:{
        padding: 0,
        overflow: 'hidden',
    },
    dicomsRow:{
        display: 'flex',
        overflow: 'hidden',
        flexFlow: 'row',
        paddingBottom: '16px',
        borderBottom: '1px solid rgba(235, 235, 247, 1)',
    },
    iconView:{
        width:'100%',
        height: '100%',
        padding: 17,
        fontSize: 18,
        position: 'absolute',
        color: 'rgba(255, 255, 255, 0)',
        transition: '200ms',
        '&:hover':{
            color: 'rgba(255, 255, 255, .8)',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
        }
    },
    studyFiles:{
        fontWeight: 300,
        color: '#9497A2',
        marginLeft: 8,
    }
})

class DicomItem extends PureComponent {

    view = (file, stady) => () => {
        const {openViewer} = this.props
        openViewer(file, stady);
    }

    getAva = (filesPath) => {
      const {classes} = this.props
      const ava = (
           <Avatar
               alt="DICOMs Preview"
               src={filesPath.srcPrv}
               className={classes.avatar}
           />
      )
      return ava;
    }

    getListFiles = (stady) => {
      const {classes, dicomIndex} = this.props
      const files = (stady.files) ? stady.files : false;
      const listFiles =
            ( files && files.map ((file, index) =>
                ( file &&
                    <Button className={classes.button} id={index} onClick={this.view(file, dicomIndex)}>
                         {this.getAva(file)}
                         <Icon  className={classes.iconView}><span className="icon-ico-view"/></Icon>
                    </Button>
                )
            ));

      return listFiles;
    }

   render () {
    const {classes, stady} = this.props
    if (!stady) {
         return null;
    }
    return (
      <div className={classes.cover}>
      <ListItem key={'mainItems' + stady._id} className={classes.listItem}>
        <ExpansionPanel classes={{root: classes.paper}}>
          <ExpansionPanelSummary classes={{root: classes.summary,
                                           expandIcon: classes.iconButton}} expandIcon={<ExpandMoreIcon/>}>
              <HalfColumn>
                <Typography className={classes.heading}> {trans('dashboard.study.date')} 2018/10/19 <span className={classes.studyFiles}> ({stady.files.length} {trans('dashboard.dicoms.attached')})</span></Typography>
              </HalfColumn>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.ExpansionPanelDetails}>
              <div key={'items' + stady._id} className={classes.list}>
                <div className={classes.dicomItem}>
                    <FullColumn >
                        {/*<FlexBetween className={classes.dicomsHeading}>*/}
                        {/*<Typography className={classes.creationDate}>{stady.createdAt}</Typography>*/}
                        {/*/!*<Typography className={classes.attached}>{stady.files.length} {trans('dashboard.dicoms.attached')}</Typography>*!/*/}
                        {/*</FlexBetween>*/}
                        <div className={classes.dicomsRow}>
                            {this.getListFiles(stady)}
                        </div>
                    </FullColumn>
                </div>
              </div>

          </ExpansionPanelDetails>
        </ExpansionPanel>
      </ListItem>
      </div>
    );
  }
}


export default withStyles(styles)(DicomItem)
