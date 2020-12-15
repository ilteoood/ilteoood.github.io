import React from "react";

export const NavBar: React.FC = () => {
    return (
        <div className="flex flex-row-reverse md:p-10 p-5">
            <a className="navigator pr-4">Contacts</a>
            <a className="navigator pr-4">Projects</a>
            <a className="navigator pr-4">About me</a>
        </div>
    );
}
