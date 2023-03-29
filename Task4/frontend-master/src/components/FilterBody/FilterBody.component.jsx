import React from 'react'

const FilterBody = ({filterType}) => {

    const renderBody = () =>{
        if (filterType === "all") {
          return null;
        } else if (filterType === "byId") {
          return (<input type="text" placeholder='Enter id'/>);
        } else if (filterType === "add") {
          return filterType;
        } else if (filterType === "delete") {
          return filterType;
        } else if (filterType === "update") {
          return filterType;
        }
    }
  return (
    <div>
        {
            renderBody()
            
        }
    </div>
  )
}

export default FilterBody