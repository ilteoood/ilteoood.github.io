import React from "react";

import Typewriter, {TypewriterClass} from "typewriter-effect";

export interface TypeProps {
    loop?: boolean;
    content: TypeContent[];
    cssClass?: string;
}

export interface TypeContent {
    content: string;
    delay?: number;
    deleteAll?: boolean;
}

export const TypeWriter: React.FC<TypeProps> = ({loop, content, cssClass = 'Typewriter__wrapper'}) => {

    const typeWriterInit = (typewriter: TypewriterClass) => {
        content.forEach(content => {
            typewriter.typeString(content.content);
            content.delay && typewriter.pauseFor(content.delay);
            content.deleteAll && typewriter.deleteAll();
        });
        typewriter.start();
    };

    return (
        <Typewriter
            onInit={typeWriterInit}
            options={{
                loop,
                wrapperClassName: cssClass,
                cursorClassName: cssClass
            }}
        />
    );

}
