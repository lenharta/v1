import React from 'react'
import PropTypes from 'prop-types'
import {
  Css3Logo,
  DiscordLogo,
  DropdownIcon,
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
  PlusIcon,
  ReactLogo,
  ReduxLogo,
  SassLogo,
  TwitterIcon
} from '../assets'

const Icons = ({ name }) => {
  switch (name) {
    case 'Css3':
      return <Css3Logo />;
    case 'Discord':
      return <DiscordLogo />;
    case 'Figma':
      return <FigmaLogo />;
    case 'Firebase':
      return <FirebaseLogo />;
    case 'Folder':
      return <FolderIcon />;
    case 'GitHub':
      return <GithubIcon />;
    case 'GraphQL':
      return <GraphqlLogo />;
    case 'HTML5':
      return <Html5Logo />;
    case 'Instagram':
      return <InstagramIcon />;
    case 'JavaScript':
      return <JavascriptLogo />;
    case 'Linkedin':
      return <LinkedinIcon />;
    case 'React':
      return <ReactLogo />;
    case 'Redux':
      return <ReduxLogo />;
    case 'Sass':
      return <SassLogo />;
    case 'Twitter':
      return <TwitterIcon />;
    default:
      return <ExternalIcon />;
  }
}

Icons.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Icons
