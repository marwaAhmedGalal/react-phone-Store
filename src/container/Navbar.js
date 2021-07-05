import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../logo.svg';
import { ButtonContainer } from '../components/style/ButtonContainer'
import { NavWrrapper } from '../components/style/NavbarStyle'


export default class Navbar extends Component {
    render() {
        return (
            <NavWrrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/">
                    <img src={'https://cdn4.iconfinder.com/data/icons/web-essential-4/64/36-web_essential-512.png'} alt="store" className="navbar-brand" width="30em" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-1">
                        <Link to="/" className="nav-link">products</Link>
                    </li>
                </ul>

                <Link to='Cart' className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus" />
                        </span>
                        my cart
                    </ButtonContainer>


                </Link>
            </NavWrrapper>
        );
    }
}


