import React from "react";

export const Introduction: React.FC = () => {
    return (
        <figure className="flex place-content-center items-center pt-8 md:pt-16">
            <img className="ml-4 md:ml-0 w-32 h-32 rounded-full"
                 src="https://avatars2.githubusercontent.com/u/6383527?s=460&u=9cec6af101e42574a87753cf26788425d11db5cb&v=4"
                 alt="Me"/>
            <div className="md:p-4 xl:p-8 pl-4 text-left">
                <blockquote className="text-lg text-color italic">
                    "I'm looking for something that never makes me stop keeping up with the future."
                </blockquote>
                <figcaption className="font-medium">
                    <div className="text-color">
                        Matteo Pietro Dazzi
                    </div>
                    <a href="https://telegram.me/iLTeoooD">
                        @iLTeoooD
                    </a>
                </figcaption>
            </div>
        </figure>
    );
}
