import React from "react";
import me from '../../resources/me.png';

export const AboutMe: React.FC = () => {
    return (
        <figure className="flex place-content-center">
            <img className="w-32 h-auto rounded-full" src={me} alt="Me"/>
            <div className="p-8 text-left my-auto">
                <figcaption className="font-medium">
                    <div className="text-cyan-600">
                        Matteo Pietro Dazzi
                    </div>
                    <a className="text-gray-500" href="https://telegram.me/iLTeoooD">
                        @iLTeoooD
                    </a>
                </figcaption>
            </div>
        </figure>
    )
}
