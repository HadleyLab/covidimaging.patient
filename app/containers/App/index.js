/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react'
import {Helmet} from 'react-helmet'
import styled from 'styled-components'
import {Route, Switch} from 'react-router-dom'

import DocuSignComplete from 'containers/DocuSignComplete/Loadable'
import DocuSignFail from 'containers/DocuSignFail/Loadable'
import DocuSign from 'containers/DocuSign/Loadable'
import Login from 'containers/Login/Loadable'
import FindHospital from 'containers/FindHospital/Loadable'
import Resetpwd from 'containers/Resetpwd/Loadable'
import Transfer from 'containers/Transfer/Loadable'
import Registration from 'containers/Registration/Loadable'
import EmailConfirm from 'containers/EmailConfirm/Loadable'
import EmailNotConfirm from 'containers/EmailNotConfirm/Loadable'
import Files from 'containers/Files/Loadable'
import NotFoundPage from 'containers/NotFoundPage/Loadable'
import Header from 'components/Header'
import Footer from 'components/Footer'
import trans from '../../trans'
import isGuest from 'utils/isGuest'
import getUser from 'utils/getUser'
import isConfirm from 'utils/isConfirm'
import getUserStepRegistartion from 'utils/getUserStepRegistartion'
import '../../app.global.css'


const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background: #f2f3f4;
  position:relative;
  background-size: cover;
  background-repeat: no-repeat;
`

export default function App(props) {
    const mainPage = (isGuest()) ? Login : Files
    const stepRegistration = getUserStepRegistartion();
    const {history} = props;
    const currentUrl = history.location.pathname
    const ulrsOnlyAuth = [
        "/sign", "/transfer", "/files"
    ];
    const ulrsNotAuth = [
        "/login", "/resetpwd", "/register"
    ];
    
    const header = (isGuest()) ? (null) : (<Header/>)
    const footer = (isGuest()) ? (null) : (<Footer/>)
    
    let user = null;
    
    let mainSign = false;
    
    if (isGuest()) {
        for (let key in ulrsOnlyAuth) {
            let url = ulrsOnlyAuth[key];
            if (currentUrl.indexOf(url) >= 0) {
                history.push('/');
            }
        }
    }
    
    if (!isGuest()) {
        for (let key in ulrsNotAuth) {
            let url = ulrsNotAuth[key];
            if (currentUrl.indexOf(url) >= 0) {
                history.push('/');
            }
        }
        user = getUser()
        console.log(user);
    }

    if (
        stepRegistration === 1
        && !user.sign
        && currentUrl !== '/sign'
        && currentUrl.indexOf('/confirm') < 0
        && currentUrl.indexOf('/complete') < 0
    ) {
        history.push('/sign');
    } else if (
        stepRegistration === 1
        && user.sign
        && currentUrl !== '/transfer'
        && currentUrl.indexOf('/confirm') < 0
        && currentUrl.indexOf('/complete') < 0
    ) {
        history.push('/transfer');
    } else if (
        stepRegistration === 2
        && currentUrl.indexOf('/sign') < 0
        && currentUrl.indexOf('/confirm') < 0
        && currentUrl.indexOf('/complete') < 0
    ) {
        history.push('/sign');
    }
    
    return (
        <AppWrapper>
            <Helmet
                titleTemplate={trans('app.title')}
                defaultTitle={trans('app.description')}
            >
                <meta name="description" content={trans('app.description')}/>
            </Helmet>
            {header}
            <Switch>
                <Route exact path="/" component={mainPage}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Registration} other={'step1'}/>
                <Route path="/confirm/:id/:data" component={EmailConfirm}/>
                <Route path="/sign/complete/:id/:params" component={DocuSignComplete}/>
                <Route path="/sign/fail" component={DocuSignFail}/>
                <Route path="/sign" component={DocuSign}/>
                <Route path="/findhospital" component={FindHospital}/>
                <Route path="/transfer" component={FindHospital}/>
                <Route path="/resetpwd/:action/:hash" component={Resetpwd}/>
                <Route path="/resetpwd" component={Resetpwd}/>
                <Route path="/files" component={Files}/>
                <Route path="" component={NotFoundPage}/>
            </Switch>
            {footer}
        </AppWrapper>
    )
}
