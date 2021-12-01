import React, { useState } from 'react'

import { DropDownContainer, DropDownIcon, DropDownItem, DropDownItemDesc, DropDownItemTitle, DropDownTextContainer } from './DropdownStyles'

function Dropdown() {
    const [click, setClick] = useState(false);

    const handleClick = () => setclick(!click);

    return (
        <DropDownContainer active={handleClick}>
            <DropDownItem href="/projects/music">
                <DropDownTextContainer>
                    <DropDownItemTitle>Music</DropDownItemTitle>
                </DropDownTextContainer>
            </DropDownItem>
            <DropDownItem href="/projects/coding">
                <DropDownTextContainer>
                    <DropDownItemTitle>Coding</DropDownItemTitle>
                </DropDownTextContainer>
            </DropDownItem>
            <DropDownItem href="/projects/videos">
                <DropDownTextContainer>
                    <DropDownItemTitle>Videos</DropDownItemTitle>
                </DropDownTextContainer>
            </DropDownItem>
        </DropDownContainer>
    );
}

export default Dropdown;