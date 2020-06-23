import React, { PureComponent } from 'react'
import FlexBetween from '../../../../../../components/FlexBetween'
import colors from 'style/colors'
import { withStyles } from '@material-ui/core/styles/index'
import { Subject } from 'rxjs'
import 'rxjs/add/operator/debounceTime'
import Item from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DoneIcon from '@material-ui/icons/Done';
import trans from "../../../../../../trans";
import TextField from 'components/ReduxForm/TextField'
import FullColumn from 'components/FullColumn'
import RoundedButton from 'components/RoundedButton/index'

const styles = ({
    cssRoot:{
        padding:0,
    },
    cssAddress:{
        textAlign: 'right',
        fontSize: 14,
        paddingRight: 0,
        fontWeight: 300,
        color: '#9497A2',
    },
    cssName:{
        fontSize: 14,
        fontWeight: 300,
        color: '#626285',
        '&+.cssListItem:hover':{
            color: '#000',
        }
    },
    moreBtn:{
        bottom:0,
        position: 'absolute',
        background: colors.white,
        borderTop: '1px solid #EBEBF7',
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        '&:hover':{
            background: colors.white,
        }
    },
    cssButton:{
        padding: '.8em',
        textAlign: 'center',
    },
    cssMore:{
        fontSize: 14,
        fontWeight: 300,
        color: '#8998DF',
        textTransform: 'uppercase',
        '&:hover':{
            color: '#5366BD',
        }
    },
    cssListItem:{
        flexFlow: "column",
        padding: '22px',
        '&:hover':{
            backgroundColor: '#F4F5FA',
        },
    },
    cssFocus:{
        flexFlow: "column",
        padding: '22px',
        backgroundColor: '#F4F5FA',
        fontWeight: 'bolds'
    },
    cssDivider:{
        borderBottomColor: '#EBEBF7',
    },
    divider:{
        backgroundColor: '#EBEBF7',
    },
    icon:{
        display: 'none',
        color: "#fff",
        marginRight:16,
    },
    contentCover: {
        display: 'flex',
        textAlign: 'right',
        width: '50%',
    },
    inputMRN:{
        width: 250,
    },
    btnSave:{
        width: 150,
    }
});

class HospitalListItem extends React.Component {
    
    constructor (props) {
        super(props);
        this.state = {
            MRN: ''
        };
    }
    
    selectHoshital = () => {
        const {handleSelectHospital, hospital, activeHospital} = this.props;
        if ((activeHospital && hospital._id != activeHospital._id)) {
            this.setState({ MRN: '' });
        }
        handleSelectHospital(hospital);
    };

    doneHandler = () => {
        const {done} = this.props;
        const {MRN} = this.state;
        done(MRN.trim())
    };
    
    render() {
        const {classes, hospital, activeHospital} = this.props;
        const {MRN} = this.state;
        const rootClass = (activeHospital && hospital._id === activeHospital._id) ? classes.cssFocus : classes.cssListItem;

        return (
            <Item button
                      divider={true}
                      classes={{root: rootClass,
                          focusVisible: classes.cssFocus,
                          divider: classes.cssDivider,}}
                        onClick={this.selectHoshital}
            >
                <FlexBetween>
                    <DoneIcon className={classes.icon}/>
                    <ListItemText
                        primary={hospital.name}
                        classes={{ root: classes.cssRoot,
                            primary: classes.cssName}}/>
                    <ListItemText primary={hospital.address}
                                  secondary={hospital.phone}
                                  classes={{ root: classes.cssRoot,
                                      primary: classes.cssAddress,
                                      secondary: classes.cssAddress,}}/>
                    
                </FlexBetween>
                {(activeHospital && hospital._id === activeHospital._id) ? (
                    <div className={classes.contentCover}>
                        <FullColumn>
                            <TextField name="name" label={"Medical Record Number"} fullWidth className={classes.inputMRN}
                               input={{
                                   value: MRN,
                                   onChange: (event) => {
                                        this.setState({ MRN: event.target.value });
                                   },
                               }}
                               inputProps={{
                                   maxLength: 16
                               }}
                              />
                        </FullColumn>
                        <RoundedButton  variant='raised' color='secondary' onClick={this.doneHandler} className={classes.btnSave}>
                            {trans('dialog.add.hospital.save.btn')}
                        </RoundedButton>
                    </div>
                ): null}
                
            </Item>
                    )
                }
}
export default withStyles(styles)(HospitalListItem)