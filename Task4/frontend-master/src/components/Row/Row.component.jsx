import React from 'react'
import "./Row.styles.css"
const Row = ({id,title,framework, language}) => {
  

  
  return (
    <tr className='Row'>
      <td>{id}</td>
      <td>{title}</td>
      <td>{framework}</td>
      <td>{language}</td>
    </tr>
  );
}

export default Row