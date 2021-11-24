import React from 'react'
import styled from 'styled-components'

const StyledIcon = styled.svg`
  color: var(--orange);
  margin: 0;
  padding: 0;
  width: var(--lg-icon-width);
  height: var(--lg-icon-height);
`

const IconFolder = () => {
  return (
    <StyledIcon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-folder">
        <title>Folder</title>
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
      </svg>
    </StyledIcon>
  )
}

export default IconFolder
