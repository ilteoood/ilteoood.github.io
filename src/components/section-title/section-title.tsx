import React from "react";
import {TypeContent, TypeWriter} from "../typewriter/type-writer";
import './section-title.scss';

export interface SectionTitleProp {
    title: string;
    sectionId: string;
}

export const SectionTitle: React.FC<SectionTitleProp> = ({title, sectionId}) => {

    const typeContent: TypeContent[] = [{content: title}];

    return (
        <div className="py-5 md:py-10 xl:py-15">
            <a id={"#" + sectionId}/>
            <TypeWriter content={typeContent} cssClass="section-title-typewriter"/>
        </div>
    );
}
