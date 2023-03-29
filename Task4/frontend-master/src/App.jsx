import React, { useState, useEffect } from "react";

import Filter from "./components/Filter/Filter.component";
import Row from "./components/Row/Row.component";


import {
  fetchAllServer,
  fetchServerById,
  addServer,
  deleteServer,
  updateServer,
} from "./helperFunctions";

import "./App.styles.css";
import Input from "./components/Input.component";
const App = () => {
  const [data, setData] = useState([
    { title: "Server", id: 28, framework: "some where", language: "1" },
    { title: "Jacsdfefeffefeffk", id: 28, framework: "some where", language: "1" },
    { title: "Jack", id: 28, framework: "some where", language: "1" },
    { title: "Jack", id: 28, framework: "some where", language: "1" },
    { title: "Jack", id: 28, framework: "some where", language: "1" },
    { title: "Jack", id: 28, framework: "some where", language: "1" },
    { title: "Jack", id: 28, framework: "some where", language: "1" },
    { title: "Jack", id: 28, framework: "some where", language: "1" },
    
  ]);
  const [errorMsg, setErrorMsg] = useState("");
  const [activeFilter, setActiveFilter] = useState("update");
  const [id, setId] = useState();
  const [title, setTitle] = useState();
  const [framework, setFramework] = useState();
  const [language, setLanguage] = useState();
  //   useEffect(() => {
  //     const res = fetchAllServer();
  //     if (res.status !== 200 || res.status !== 201) setErrorMsg(res.msg);
  //     else {
  //       setData(res.data);
  //     }
  //   }, []);

  const monitorFilterActivity = (data, type) => {
    console.log(type);
    console.log(data);
    let res;
    if (type === "all") {
      //   res = fetchAllServer();
    } else if (type === "byId") {
      console.log(data);

      // res =fetchServerById(id);
    } else if (type === "add") {
      //   res = addServer();
    } else if (type === "delete") {
      //   res = deleteServer();
    } else if (type === "update") {
      //   res = updateServer();
    }
    //   if (res.status !== 200 || res.status !== 201) setErrorMsg(res.msg);
    //   else {
    //     setData(res.data);
    //   }
    setId("");
    if (type === "update" || type === "add") {
      setFramework("");
      setLanguage("");
      setTitle("");
    }
   
  };

  const idInput = () => {
    return (
      <div className="filterForm">
        <Input value={id} setFunction={setId} placeholder="Id" />

        <button onClick={() => monitorFilterActivity({ id }, activeFilter)}>
          Submit
        </button>
      </div>
    );
  };

  const completeForm = () => {
    return (
      <div className="filterForm">
        
      
            <Input value={id} setFunction={setId} placeholder="Id" />
            <Input value={title} setFunction={setTitle} placeholder="Title" />
            <Input
              value={framework}
              setFunction={setFramework}
              placeholder="Framework"
            />
            <Input
              value={language}
              setFunction={setLanguage}
              placeholder="Language"
            />
            <button
              onClick={() =>
                monitorFilterActivity(
                  { id, title, language, framework },
                  activeFilter
                )
              }
            >
              Submit
            </button>
          
   
      </div>
    );
  };

  return (
    <div className="appContainer">
      <Filter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      {activeFilter === "all"
        ? null
        : activeFilter === "byId" || activeFilter === "delete"
        ? idInput()
        : completeForm()}
      <span className="errorSpan">{errorMsg}</span>
      <table className="tableContainer">
        <tr style={{paddingLeft:"15px"}} className="Row">
          <td>Id</td>
          <td>Title</td>
          <td>Framework</td>
          <td>Language</td>
        </tr>
        {data
          ? data.map((obj) => (
              <Row
                id={obj.id}
                title={obj.title}
                framework={obj.framework}
                language={obj.language}
              />
            ))
          : null}
      </table>
    </div>
  );
};

export default App;
