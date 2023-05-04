import { useEffect, useRef } from "react";
import styled from "styled-components";
import { Icons } from "../assets";
import { srConfig } from "../config";
import { usePrefersReducedMotion } from "../hooks";
import sr from "../utils/sr";

const StyledStackContainer = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  max-width: 1000px;
  padding-bottom: 0;
`;

const StyledStackInner = styled.div`
  padding: 50px 0;
  width: 100%;

  @media (max-width: 480px) {
    padding: 25px 0;
  }

  .title {
    overflow-wrap: break-word;
    width: 50%;
    font-size: clamp(var(--fs-xs), 5vw, var(--fs-md));
    color: var(--text);
    font-family: var(--font-link);

    @media (max-width: 480px) {
      width: 100%;
    }
    .divider {
      width: 75px;
      height: 3px;
      background: var(--gradient-text);
      margin-bottom: 15px;
    }
  }

  ul {
    background: var(--bg-navy);
    border-radius: 15px;
  }
`;

const ProgrammingLangs = styled.div`
  ${({ theme }) => theme.mixins.flexBetween};
  align-items: flex-start;
  flex-direction: column;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
  }

  ul {
    width: 100%;
    ${({ theme }) => theme.mixins.flexCenter};
    flex-direction: column;
    padding: 30px;
    margin-top: 50px;

    @media (max-width: 600px) {
      margin-top: 25px;
      width: 100%;
    }

    li {
      ${({ theme }) => theme.mixins.flexBetween};
      width: 100%;
      margin-bottom: 20px;
      font-size: var(--fs-sm);
      color: var(--text);
      font-family: var(--font-text);
      text-align: left;
      &:last-of-type {
        margin: 0;
      }
      svg {
        height: 50px;
        width: 50px;
      }
    }
  }
`;

const StyledStackInnerSub = styled.div`
  ${({ theme }) => theme.mixins.flexBetween};
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 75px;
  @media (max-width: 480px) {
    margin-top: 50px;
  }

  ul {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    margin: 50px 0;
    padding: 30px;

    @media (max-width: 768px) {
      margin-top: 20px;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10px;
      padding: 30px;
    }

    @media (max-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
    }

    @media (max-width: 350px) {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 5px;
    }

    li {
      ${({ theme }) => theme.mixins.flexBetween};
      width: 100%;
      font-size: clamp(var(--fs-xs), 5vw, var(--fs-sm));
      color: var(--text);
      font-family: var(--font-text);
      text-align: left;
    }
  }
`;

const Libraries = styled.div`
  width: 100%;
  display: grid;
`;

const Tools = styled.div`
  width: 100%;
  display: grid;
`;

const Stack = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const revealContainer = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const program1 = (
    <>
      <p>HTML5</p>
      <Icons name="HTML5" />
    </>
  );

  const program2 = (
    <>
      <p>CSS3</p>
      <Icons name="Css3" />
    </>
  );

  const program3 = (
    <>
      <p>JavaScript</p>
      <Icons name="JavaScript" />
    </>
  );

  const program4 = (
    <>
      <p>React.js</p>
      <Icons name="React" />
    </>
  );

  const program5 = (
    <>
      <p>Sass</p>
      <Icons name="Sass" />
    </>
  );

  const progLangItems = [program1, program2, program3, program4, program5];
  const libraryItems = [
    "Gatsby",
    "Axios",
    "Node.js",
    "Anime.js",
    "ScrollReveal",
    "MaterialUI",
    "Framer Motion",
    "React Router",
  ];
  const toolItems = [
    "Git",
    "Github",
    "Webpack",
    "Netlify",
    "Firebase",
    "Figma",
  ];

  return (
    <>
      <StyledStackContainer id="stack" ref={revealContainer}>
        <h2 className="section__heading-top">Stack</h2>
        <StyledStackInner>
          <ProgrammingLangs>
            <div className="title">
              <div className="divider"></div>
              <h2>Tech</h2>
            </div>
            <ul>
              {progLangItems.map((item, i) => (
                <li key={i} className="list-item">
                  {item}
                </li>
              ))}
            </ul>
          </ProgrammingLangs>

          <StyledStackInnerSub>
            <Libraries>
              <div className="title">
                <div className="divider"></div>
                <h2>Libraries</h2>
              </div>
              <ul>
                {libraryItems.map((item, i) => (
                  <li key={i} className="list-item">
                    {item}
                  </li>
                ))}
              </ul>
            </Libraries>

            <Tools>
              <div className="title">
                <div className="divider"></div>
                <h2>Tools</h2>
              </div>
              <ul>
                {toolItems.map((item, i) => (
                  <li key={i} className="list-item">
                    {item}
                  </li>
                ))}
              </ul>
            </Tools>
          </StyledStackInnerSub>
        </StyledStackInner>
      </StyledStackContainer>
    </>
  );
};

export default Stack;
