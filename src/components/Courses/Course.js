import React from 'react';
import courseCss from './Course.module.css';

const Course = (props) => {

    return(
        <div className = {courseCss.Course} onClick={() => props.click(props.count)}>
            <button>
                <i class="material-icons">bookmark</i>
                Module {props.count}
            </button>
        </div>
    );
};

export default Course;
