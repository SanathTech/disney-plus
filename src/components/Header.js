import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { auth, provider } from './firebase';
import { signInWithPopup } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails } from '../features/user/userSlice';

const Header = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user) {
                setUser(user);
                history.push("/disney-plus/home");
            }
        });
    }, [userName]);

    const handleAuth = () => {
        if (!userName) {
            signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result);
                setUser(result.user);
            }).catch((error) => {
                alert(error.message);
            });
        } else {
            auth.signOut().then(() => {
                dispatch(setSignOutState());
                history.push('/disney-plus');
            })
            .catch((err) => alert(err.message));
        }
        
    };

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        );
    };

    return (
        <Nav>
            <Logo>
                <img src="/disney-plus/images/logo.svg" />
            </Logo>
            {!userName ? 
                <Login onClick={handleAuth}>Log in</Login> :
                <>
                    <NavMenu>
                        <a href="/disney-plus/home">
                            <img src="/disney-plus/images/home-icon.svg" />
                            <span>HOME</span>
                        </a>
                        <a href="/disney-plus/home">
                            <img src="/disney-plus/images/search-icon.svg" />
                            <span>SEARCH</span>
                        </a>
                        <a href="/disney-plus/home">
                            <img src="/disney-plus/images/watchlist-icon.svg" />
                            <span>WATCHLIST</span>
                        </a>
                        <a href="/disney-plus/home">
                            <img src="/disney-plus/images/original-icon.svg" />
                            <span>ORIGINALS</span>
                        </a>
                        <a href="/disney-plus/home">
                            <img src="/disney-plus/images/movie-icon.svg" />
                            <span>MOVIES</span>
                        </a>
                        <a href="/disney-plus/home">
                            <img src="/disney-plus/images/series-icon.svg" />
                            <span>SERIES</span>
                        </a>
                    </NavMenu>
                    <SignOut>
                        <UserImg src={userPhoto} alt={userName} />
                        <DropDown>
                            <span onClick={handleAuth}>Sign out</span>
                        </DropDown>
                    </SignOut>
                </>
            }
            
        </Nav>
    )
}

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
`;

const Logo = styled.a`
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;

    img {
        display: block;
        width: 100%;
    }
`;

const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;

        img {
            height: 20px;
            min-width: 20px;
            width: 20px;
            z-index: auto;
        }

        span {
            color: rgb(249, 249, 249);
            font-size: 15px;
            letter-spacing: 1.42px;
            line-height: 1.08;
            padding: 2px 0 2px 5px;
            white-space: nowrap;
            position: relative;

            &:before {
                background-color: rgb(249, 249, 249);
                border-radius: 0 0 4px 4px;
                bottom: -6px;
                content: "";
                height: 2px;
                opacity: 0;
                position: absolute;
                right: 0;
                left: 0;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                visibility: hidden;
                width: auto;
            }
        }

        &:hover {
            span:before {
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
            }
        }
    }

    @media (max-width: 1000px) {
        display: none;
    }
`;

const Login = styled.div`
    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all 0.2s ease 0s;
    cursor: pointer;

    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`

const UserImg = styled.img`
    height: 100%;
    border-radius: 50%;
`

const DropDown = styled.div`
    position: absolute;
    top: 48px;
    right: 0;
    background: rgb(19,19,19);
    border: 1px solid rgba(151, 151, 151, 0.34);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
    padding: 10px;
    font-size: 12px;
    letter-spacing: 3px;
    width: 100px;
    opacity: 0;
`;

const SignOut = styled.div`
    position: relative;
    height: 48px;
    width: 48px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    &:hover {
        ${DropDown} {
            opacity: 1;
            transition-duration: 1s;
        }
    }
`;

export default Header
