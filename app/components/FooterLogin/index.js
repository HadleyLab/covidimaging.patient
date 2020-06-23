import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import FlexedBetween from 'components/FlexBetween'
import trans from "../../trans";
import FooterCover from "./FooterCover"
import Link from 'components/Link'


const styles = ({
    link:{
        color: '#9497A2',
        cursor: 'pointer',
        textDecoration: 'none',
        '&:hover':{
            color: '#3690C6',
        }
    },
    copyRight:{
        margin: 0,
        fontWeight: 300,
    },
    media:{
        '@media(max-width: 360px)':{
            flexFlow: 'column',

        }
    }
})

class FooterLogin extends React.Component {
    render () {
        const {classes}= this.props
        return (
            <FooterCover>
                <FlexedBetween className={classes.media}>
                    <p className={classes.copyRight}>{trans('footer.copyrights')}</p>
                    <Link to='/' className={classes.link}>{trans('footer.privacy.policy')}</Link>


                </FlexedBetween>
            </FooterCover>
        )
    }
}

export default withStyles(styles)(FooterLogin)