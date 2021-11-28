import React from "react";
import { Link } from "react-router-dom";

const Mailto = ({ mailto }) => {
    return (
        <Link
            to='#'
            onClick={(e) => {
                window.location = mailto;
                e.preventDefault();
            }}
        >
        Contact
        </Link>
    );
};

export default Mailto;