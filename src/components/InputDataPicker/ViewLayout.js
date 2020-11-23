import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import { neutral, spacing } from '../../utils'

const ViewLayoutContainer = styled.div`
    display:flex;
    flex-direction:column;
`

const ViewLayoutHeader = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:${spacing.padding.small};
`

const ViewLayoutBody = styled.div`
    flex:1
`

const ViewLayoutFooter = styled.div`
    &:before {
        content:"";
        border-bottom:solid 0.1rem ${neutral[300]};
        display:block;
        margin-bottom: ${spacing.padding.small}
    }

`

function ViewLayout(props) {
    const { header, bodyElement, footerElement} = props;
    const { leftElement, middleElement, rightElement} = header;
    return (
        <ViewLayoutContainer>
            <ViewLayoutHeader>
                <div>{leftElement}</div>
                <div>{middleElement}</div>
                <div>{rightElement}</div>
            </ViewLayoutHeader>
            <ViewLayoutBody>
                {bodyElement}
            </ViewLayoutBody>
            <ViewLayoutFooter>
                {footerElement}
            </ViewLayoutFooter>
        </ViewLayoutContainer>
    )
}
 
ViewLayout.propTypes = {
    header:propTypes.shape({
        leftElement:propTypes.node,
        middleElement:propTypes.node,
        rightElement:propTypes.node
    }),
    bodyElement:propTypes.node,
    footerElement:propTypes.node
}

export default ViewLayout

