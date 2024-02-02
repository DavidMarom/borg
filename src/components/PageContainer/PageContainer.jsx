"use client";

import React from 'react'
import PropTypes from "prop-types"
import { Container } from "./PageContainer.style"

export default function PageContainer({
    children
}) {

    return (
        <Container>
            {children}
        </Container>
    )
}

PageContainer.propTypes = {
    children: PropTypes.node.isRequired
}
