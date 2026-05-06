import React from "react";
import {TypeContent, TypeWriter} from "../typewriter/type-writer";
import styles from './section-title.module.css';

export interface SectionTitleProp {
    title: string;
    sectionId: string;
}

export const SectionTitle: React.FC<SectionTitleProp> = ({title, sectionId}) => {

    const typeContent: TypeContent[] = [{content: title}];

    return (
        <div className={styles.sectionTitlePadding} id={sectionId}>
            <TypeWriter content={typeContent} cssClass={styles.sectionTitleTypewriter}/>
        </div>
    );
}