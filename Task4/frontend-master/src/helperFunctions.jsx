import axios from "axios";

export const fetchAllServer = async () => {
  const options = {
    method: "GET",
    url: "http://localhost:8080/server",
  };
  const val = await axios.request(options);
  return val;
};

export const fetchServerById = async (id) =>{
    const options = {
      method: "GET",
      url: `http://localhost:3000/server?id=${id}`,
    };
    const val = await axios.request(options);
    return val;
}

export const addServer = async (data) => {
  const options = {
    method: "POST",
    url: `http://localhost:3000/server`,
    data:data
  };
  const val = await axios.request(options);
  return val;
};

export const deleteServer = async (id) => {
  const options = {
    method: "DELETE",
    url: `http://localhost:3000/server?id=${id}`,
  };
  const val = await axios.request(options);
  return val;
};

export const updateServer = async (data,id) => {
    let newData = {}
    if(data.title!=="")
        newData["title"] = data.title
    if(data.framework!=="")
        newData["framework"]=data.framework
    if(data.language!== "")
        newData["language"] = data.language
  const options = {
    method: "PATCH",
    url: `http://localhost:3000/server?id=${id}`,
    data:newData
  };
  const val = await axios.request(options);
  return val;
};

export default fetchAllServer
