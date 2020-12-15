import React from "react";

import Typewriter, {TypewriterClass} from "typewriter-effect";

export interface TypeProps {
    loop?: boolean;
    content: TypeContent[]
}

export interface TypeContent {
    content: string;
    delay?: number;
}

export const TypeWriter: React.FC<TypeProps> = ({loop, content}) => {

    const typeWriterInit = (typewriter: TypewriterClass) => {
        content.forEach(content => {
            typewriter.typeString(content.content);
            content.delay && typewriter.pauseFor(content.delay);
            typewriter.deleteAll();
        });
        typewriter.start();
    }

    return (
        <Typewriter
            onInit={typeWriterInit}
            options={{loop}}
        />
    );

}
