# Task 1

<h1>JAVA Rest API</h1>



<h2>Implemented GET ,POST, PATCH and DELETE request for  list of servers as well as particular servers by name or id, deleting servers from existing list of servers by id and updating server information by id using params .<h2>
 
 
 

<h3>***Initial List only of 4 servers***</h3> 
 <p>---------------------------------------------</p>

<h5>GET : localhost:8080/servers</h5>  
 <p>To get the list of existing servers<p>

<img src="./Ss/Get the list.png"  alt=""   width="800" height="400" >

 
<h3>Adding a server to existing list</h3>
 <p>----------------------------------------------------------</p>
 
 <h5>POST : localhost:8080/servers</h5>
  <p>Adding process</p>
 <img src="./Ss/post info process.png"  alt=""   width="800" height="400" >
 
 <p>Added new server with new id=5(initially has only 4 servers)</p>
 
 <img src="./Ss/new list after add.png"  alt=""   width="800" height="400" >
 <h4>Changes after POST resquest, added new server with id =5 in last </h4>
 
 <h3>Deleting server by ID <h3>
  <p>----------------------------------------------------------</p>
  
  <h5>DELETE :localhost:8080/servers?id=1 </h5>
  
  <p>Deleting server whose id is 1<p>
  <img src="./Ss/deletinf server by id.png"  alt=""   width="800" height="200" >
  
  <p>List after deletion of server (id=1)<p>
 <img src="./Ss/list after deletion.png"  alt=""   width="800" height="400" >
  
  <h3>Updating server by ID</h3>
   <p>----------------------------------------------------------</p>
 
  <h5>PATCH :localhost:8080/servers?id=1 </h5>
  
  <p>Updating server whose id=2</p>
   <img src="./Ss/post info process.png"  alt=""   width="800" height="400" >
  
  
  <p>Updated List (changing server with id =2's framework from c++ to Python</p>
   <img src="./Ss/Updated list.png"  alt=""   width="800" height="400" >
  
  
  <h6>**** Not able to integrate mongoDB ****<h6>
  
  <p>------------------------------------------------------------------------------------------------------------------------<p>
  
  
  
  
 

  
  
  
