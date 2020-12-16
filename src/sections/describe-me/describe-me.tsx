import React from "react";
import {TypeContent, TypeWriter} from "../../components/typewriter/type-writer";
import './describe-me.scss';

export const DescribeMe: React.FC = () => {

    const typeContent: TypeContent[] = [
        'Software engineer',
        'Tech enthusiast',
        'Music addicted'
    ].map(content => ({content, delay: 1500, deleteAll: true}));

    return (
        <div className="flex place-content-center pt-20 md:pt-40 xl:pt-60">
            <TypeWriter loop={true} content={typeContent} cssClass="describe-me-typewriter"/>
        </div>
    );

}
