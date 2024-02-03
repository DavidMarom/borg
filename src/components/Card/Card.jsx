"use client";

import React from 'react'
import PropTypes from "prop-types"
import { CardContainer } from "./Card.style"
import { StyleSheetManager } from 'styled-components';

export default function Card({
    children,
    margintop = "0px",
}) {

    return (
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'margintop'}>
            <CardContainer
                margintop={margintop}
                
            >
                {children}
            </CardContainer>
        </StyleSheetManager >
    )
}

Card.propTypes = {
    children: PropTypes.node,
    margintop: PropTypes.string || PropTypes.number,
}
