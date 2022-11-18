import React, { Component } from 'react';

export default function Navbar(props){
    return (
    <div>
        <nav class="navbar navbar-expand-lg getinline-navbar">
                <a class="navbar-brand text-white getinline-navbar-item" href="#">Get In Line</a>
            <div class="collapse navbar-collapse justify-content-end mr-5" id="navbarSupportedContent">
                <form class="form-inline my-2 my-lg-0">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active mr-5 getinline-navbar-item">
                            <a class="nav-link text-white font-weight-bold" href="#">My Queues <span class="sr-only"></span></a>
                        </li>
                        <li class="nav-item mr-5 getinline-navbar-item">
                            <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Log Out</button>
                        </li>
                    </ul>
                </form>
            </div>
            </nav>    
    </div>
    )
}