import React from 'react';
import { Container, ContainerFluid, media } from 'style/containers'
import FlexedBetween from 'components/FlexBetween'
import trans from "../../trans";
import Link from 'components/Link'
import styled from 'styled-components';


const FooterCover = styled.div`
    position: absolute;
    bottom: 0;
    width:100%;
    background: rgba( 98, 98, 133, .08);
`

const CopyRights = styled.p`
    margin: 0;
    color: #9497A2;
    font-size: 12px;
    font-weight: 300;
    ${media.mobile`
        display: none;
    `}
`
const NavBar = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: inline-flex;
    >li{
        margin-left: 2em;

    }
`
const Flexed = styled(FlexedBetween)`
    padding: 16px 0 16px;
    ${media.mobile`
        justify-content: center;
    `}
`
const styles = {
    link:{
        fontSize: 12,
        color: '#9497A2',
        cursor: 'pointer',
        textDecoration: 'none',
        '&:hover':{
            color: '#3690C6',
        }
    },
}
function Footer() {
  return (
        <FooterCover>
            <ContainerFluid>
                <Container>
                    <Flexed>
                        <CopyRights>{trans('footer.copyrights')}</CopyRights>
                        <NavBar>
                            <li>
                                <Link to='/' style={styles.link}>{trans('footer.about')}</Link>
                            </li>
                            <li>
                                <Link to='/' style={styles.link}>{trans('footer.privacy.terms')}</Link>
                            </li>
                            <li>
                                <Link to='/' style={styles.link}>{trans('footer.help')}</Link>
                            </li>
                        </NavBar>
                    </Flexed>
                </Container>
            </ContainerFluid>
        </FooterCover>

  );
}

export default Footer;
