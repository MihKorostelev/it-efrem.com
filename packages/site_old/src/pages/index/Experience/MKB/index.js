'use strict';

import React from 'react';
import {List} from "../List";
import CSS from '../../../style.scss';

import {iHaveDone, tasks, aboutProject} from "./data.";

export function MKB() {
    return (
        <div>
            <p>
                <span className={CSS.shadow_block_text_label}>I have done this:</span>
            </p>
            <List data={iHaveDone}/>

            <p>
                <span className={CSS.shadow_block_text_label}>My tasks:</span>
            </p>
            <List data={tasks}/>

            <p>
                <span className={CSS.shadow_block_text_label}>About the project:</span>
            </p>
            <List data={aboutProject}/>
        </div>
    )
}
