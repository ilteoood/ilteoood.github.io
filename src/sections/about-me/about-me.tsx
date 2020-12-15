import React from "react";
import {TypeContent, TypeWriter} from "../../components/typewriter/type-writer";
import './about-me.scss';

export const AboutMe: React.FC = () => {

    const typeContent: TypeContent[] = [{content: 'About me'}];

    return (
        <div className="padding-content-left pb-5">
            <TypeWriter content={typeContent} cssClass="about-me-typewriter"/>
            <div className="flex flex-col text-color text-lg">
                <div>
                    Since I remember it, computers are an integral part of my life: first as a leisure tool, then as a
                    learning tool.
                </div>
                <div>
                    I have been studying programming since I was 12 years old: I started as a self-taught and deepened
                    my
                    knowledge during my studies.
                </div>
                <div>I'm graduated at
                    <a href="https://www.unimi.it/"> Università degli Studi di Milano</a>, on October 2016.
                </div>
                <div>
                    Currently I'm working for
                    <a href="https://www.gft.com/it/it/index/societa/chi-siamo/"> GFT Italia Srl</a>.
                </div>
            </div>
        </div>
    );
}
