import React, { Component } from 'react';
import AsideCSS from '../CSS/Aside.module.css';

class Aside extends Component {
    render() {
        return (
            <div className = {AsideCSS.top}>
                <div className = {AsideCSS.Header}>
                    <button><i class="fa fa-bank"></i></button>
                    <button><i class="fa fa-area-chart"></i></button>
                    <button><i class="fa fa-stack-overflow"></i></button>
                    <button><i class="fa fa-share-alt-square"></i></button>
                    <button><i class="fa fa-calendar"></i></button>
                    <button><i class="fa fa-github"></i></button>
                    <button href="https://github.com/prashanththallada/react" target="#"><i class="fa fa-cog"></i></button>
                </div>
            </div>
        );
    }
}

export default Aside;