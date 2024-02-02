"use client";

import React from 'react'
import PropTypes from "prop-types"
import { Container } from "./PageContainer.style"
// import { StyleSheetManager } from 'styled-components';

export default function PageContainer({
    children
}) {

    return (
        // <StyleSheetManager shouldForwardProp={(prop) => prop !== 'margintop' || prop !== 'marginright'}>
        <Container>
            {children}
        </Container>
        // </StyleSheetManager >
    )
}

PageContainer.propTypes = {
    children: PropTypes.node.isRequired
}
