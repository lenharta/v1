import React from 'react'
import styled from 'styled-components'

const StyledArchiveSection = styled.section`
  max-width: 1000px;
`;

const StyledArchiveGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 500px;
`;

const Archive = () => {
  return (
    <>
      <StyledArchiveSection id="archive">
        <h2 className="section__heading-top">Archive</h2>
        <StyledArchiveGrid>

        </StyledArchiveGrid>
      </StyledArchiveSection>

    </>
  )
}

export default Archive