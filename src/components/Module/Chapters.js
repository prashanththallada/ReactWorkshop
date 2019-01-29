import React from 'react';
import moduleCss from './ModuleConcepts.module.css';

const Chapter = (props) => {
    return(
        <div>
            {props.concept.map((key, index) => {
                return <li className={moduleCss.Module} key={index}>
                            <i class="fa fa-bookmark-o"></i>
                            Concept {props.module}.{index}: {key}
                       </li>
                })
            }
        </div>
    );
}



export default Chapter;