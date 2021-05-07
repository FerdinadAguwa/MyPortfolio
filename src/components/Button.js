import React from 'react'
import "./Button.css"
import { Link } from "react-router-dom"

const STYLES = ["btn--promary", "btn--outline"]

const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle : STYLES[0];

    const checkButtonSized = SIZES.includes(buttonSize)
        ? buttonSize : SIZES[0];

    return (
        <a href="tel:+1-817-298-9406" className="btn-mobile">
        {/* <Link to="/sign-up" className="btn-mobile"> */}
            <button className={`btn ${checkButtonStyle} ${checkButtonSized}`}
                onClick={onClick}
                type={type}>
                    {children}
                </button>

                </a>
         )
    }

