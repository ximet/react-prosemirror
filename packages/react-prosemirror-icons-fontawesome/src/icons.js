import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import {
  faBold,
  faItalic,
  faCode,
  faSuperscript,
  faSubscript,
  faLink,
  faParagraph,
  faHeading,
  faQuoteLeft,
  faListOl,
  faListUl,
  faImage,
  faTable,
  faUndo,
  faRedo,
  faOutdent,
  faAngleUp
} from '@fortawesome/fontawesome-free-solid'

export default {
  em: <FontAwesomeIcon icon={faItalic} />,
  bold: <FontAwesomeIcon icon={faBold} />,
  code: <FontAwesomeIcon icon={faCode} />,
  subscript: <FontAwesomeIcon icon={faSubscript} />,
  superscript: <FontAwesomeIcon icon={faSuperscript} />,
  link: <FontAwesomeIcon icon={faLink} />,
  paragraph: <FontAwesomeIcon icon={faParagraph} />,
  heading: <FontAwesomeIcon icon={faHeading} />,
  blockquote: <FontAwesomeIcon icon={faQuoteLeft} />,
  code_block: <FontAwesomeIcon icon={faCode} />,
  ordered_list: <FontAwesomeIcon icon={faListOl} />,
  bullet_list: <FontAwesomeIcon icon={faListUl} />,
  image: <FontAwesomeIcon icon={faImage} />,
  table: <FontAwesomeIcon icon={faTable} />,
  undo: <FontAwesomeIcon icon={faUndo} />,
  redo: <FontAwesomeIcon icon={faRedo} />,
  lift: <FontAwesomeIcon icon={faOutdent} />,
  join_up: <FontAwesomeIcon icon={faAngleUp} />
}
