import React from "react";
import {TypeContent, TypeWriter} from "../typewriter/type-writer";

export const DescribeMe: React.FC = () => {

    const typeContent: TypeContent[] = [{
        content: 'Software engineer',
        delay: 1000
    }, {
        content: 'Technology enthusiast',
        delay: 1000
    }, {
        content: 'Courageous',
        delay: 1000
    }];

    return (
        <div className="flex place-content-center">
            <TypeWriter loop={true} content={typeContent}/>
        </div>
    );

}
