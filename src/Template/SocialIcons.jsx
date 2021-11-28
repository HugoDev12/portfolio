import React from "react";
import { Link } from "react-router-dom";

const SocialIcons = ({link, icon}) => {
    return (
        <Link
            to="#"
            onClick={(e) => {
                window.location = link
                e.preventDefault()
            }}
        >
        {icon}    
        </Link>
    );
};

export default SocialIcons;
