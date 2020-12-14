import React from "react";
import Typewriter from "typewriter-effect";

export const TypeMyName: React.FC = () => {

    return (
        <Typewriter
            onInit={(typewriter) => {
                typewriter.typeString('iLTeoooD')
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString('Matteo Pietro Dazzi')
                    .deleteAll()
                    .start();
            }}
            options={{loop: true}}
        />
    );

}