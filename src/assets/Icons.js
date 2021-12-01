import React from 'react'
import PropTypes from 'prop-types'
import {
  Css3Logo,
  DiscordLogo,
  ExternalIcon,
  FigmaLogo,
  FirebaseLogo,
  FolderIcon,
  GithubIcon,
  GraphqlLogo,
  Html5Logo,
  InstagramIcon,
  JavascriptLogo,
  LinkedinIcon,
  ReactLogo,
  ReduxLogo,
  TwitterIcon
} from '../assets'

const Icons = ({ name }) => {
  switch (name) {
    case 'Css3':
      return <Css3Logo />;
    case 'Css3':
      return <DiscordLogo />;
    case 'Css3':
      return <FigmaLogo />;
    case 'Css3':
      return <FirebaseLogo />;
    case 'Css3':
      return <FolderIcon />;
    case 'Css3':
      return <GithubIcon />;
    case 'Css3':
      return <GraphqlLogo />;
    case 'Css3':
      return <Html5Logo />;
    case 'Css3':
      return <InstagramIcon />;
    case 'Css3':
      return <JavascriptLogo />;
    case 'Css3':
      return <LinkedinIcon />;
    case 'Css3':
      return <ReactLogo />;
    case 'Css3':
      return <ReduxLogo />;
    case 'Css3':
      return <TwitterIcon />;
    default:
      return <ExternalIcon />;
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Icons
