import React from "react";
import {SectionTitle} from "../../components/section-title/section-title";

export const AboutMe: React.FC = () => {

    return (
        <div className="padding-content">
            <SectionTitle title="About me" sectionId="aboutMe"/>
            <div className="flex flex-col text-color text-lg">
                <div className="py-1">
                    Since I remember it, computers are an integral part of my life: first as a leisure tool, then as a
                    learning tool.
                </div>
                <div className="py-1">
                    I have been studying programming since I was 12 years old: I started as a self-taught and deepened
                    my
                    knowledge during my studies.
                </div>
                <div className="py-1">
                    I'm graduated at
                    <a href="https://www.unimi.it/"> Università degli Studi di Milano</a>, on October 2016.
                </div>
                <div className="py-1">
                    Currently I'm working for
                    <a href="https://www.gft.com/it/it/index/societa/chi-siamo/"> GFT Italia Srl</a>.
                </div>
                <div className="py-1">
                    Want to know more? Keep <a href="#contacts">in touch</a> or take a look to my
                    <a href="https://github.com/ilteoood/resume/raw/main/main.pdf"> resume</a>!
                </div>
            </div>
        </div>
    );
}
