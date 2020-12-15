import React from "react";

export const AboutMe: React.FC = () => {
    return (
        <div className="flex pl-10 md:pl-15 xl:pl-20 text-color flex-col">
            <div className="text-lg">I'm a developer graduated at
                <a href="https://www.unimi.it/"> Università degli Studi di Milano</a>, on October 2016.
            </div>
            <div className="text-lg">
                Currently I'm working for
                <a href="https://www.gft.com/it/it/index/societa/chi-siamo/"> GFT Italia Srl</a>
            </div>

        </div>
    );
}
