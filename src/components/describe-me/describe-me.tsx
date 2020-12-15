import React from "react";
import {TypeContent, TypeWriter} from "../typewriter/type-writer";
import './describe-me.scss';

export const DescribeMe: React.FC = () => {

    const typeContent: TypeContent[] = [
        'Software engineer',
        'Technology enthusiast',
        'Music lover'
    ].map(content => ({content, delay: 1000}));

    return (
        <div className="flex place-content-center">
            <TypeWriter loop={true} content={typeContent}/>
        </div>
    );

}
