import './chatPage.css';
import React, { useState, Component } from 'react';
import Icon from '../pictures/icon.jpg';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import $ from 'jquery';
import ScrollContainer from 'react-indiana-drag-scroll'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
}


const INITIAL_LIST = [
];
const INITIAL_LIST2 = [
];
const ChatPage = () => {
  const [value, setValue] = React.useState('');
  const [value1, setValue1] = React.useState('');
  const [list, setList] = React.useState(INITIAL_LIST);
  const [list1, setList1] = React.useState(INITIAL_LIST2);
  const [time, setTime] = useState({
    minutes: new Date().getMinutes(),
    hours: new Date().getHours(),
    seconds: new Date().getSeconds()})
  const [currentDate, setCurrentDate] = useState(getDate());
    
  
  
  const handleChange = (event) => {
    setValue(event.target.value);
  };


  const handleSubmit = (event) => {
    if (value) {
      setList(list.concat(value + " - " + new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()));
      // setList(list.concat());
      // setList1(list1.concat(<br></br>));
    
      if (value === "1" || value === "account")
    {
      setList1(list1.concat("Please enter account number - " + new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()));
      // setList(list.concat());
    
    }
   else if (value === "2" | value === "billing")
    {
      setList1(list1.concat("Please enter account number - " + new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()));
      // setList(list.concat());
    
    }
    else if (value === "3" | value === "Shipment" | value === "shipment" | value === "Tracking" | value === "tracking" | value === "Shipment tracking" | value === "Shipment Tracking")
    {
      setList1(list1.concat("Please enter order number - " + new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()));
      // setList(list.concat());
    
    }
    else 
    {
      setList1(list1.concat("Please try again - " + new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()));
      // setList(list.concat());
    
    }
    
    if (value === "change address")

    {
      setList1(list1.concat("Please login here https://www.maugny.com/ - " + new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()));
      // setList(list.concat());
    
    }

  
    }

    setValue('');

    event.preventDefault();
  };

 
    

  return (

<section>

<MDBContainer>
        <div className="backround">


<div id= "chatContainer">


<div id="divLeft">

<div id="divLeftOne">
<img src={Icon}></img>
</div>


<div id="divLeftTwo" style={{color: 'gray', fontWeight: 'bolder', paddingBottom: '9px', fontFamily: 'roboto'}}>
<div>Tech Blog AI Chat Bot</div> 
<div id="hide">For further assistance please call us at 1-800-639-6639</div>
</div>


</div>
<div id="divRight">

<div id="chatDiv">


    <ScrollContainer>
 

  <div>
    
      <div id = "chatDiv">
      

      <div id = "left"><div id = "roboChat"><h7>How can I help you today? Please type 1. Billing 2. Account 3. Shipment tracking - {currentDate}</h7></div>
      {/* {list.map(item => ( */}
        {/* <h7 style={{color : "white"}} key={item}>{item}<br></br></h7> */}
      {/* ))} */}
       
       {list1.map(item1 => (
        <div id = "roboChat"><h7 key={item1}>{item1}</h7></div>
  //  <h7 key={item1}><img src={Icon}></img>{item1}<br></br></h7>
      ))}
       
        </div>


      <div id = "right"><div id = "roboChatInvisible"><h7>How can I help you today? Please type 1. Billing 2. Account 3. Shipment tracking - {currentDate}</h7></div>
      {list.map(item => (
     <div id = "roboChat1"><h7 key={item}>{item}</h7></div>
      ))}

      </div>
      
     


      </div>
  

  </div>

    </ScrollContainer>




</div>
<div id="chatPostDiv">
<div id="section1"></div>
<div id="section2">

<form style={{fontSize : "15px"}} onSubmit={handleSubmit}>
      <input type="text" maxlength="77" value={value} placeholder= "Enter Text" onChange={handleChange} />
      {/*  */}
  
      <button style={{backgroundColor : "#0080ff", color: "white", fontSize: "15px"}} type="submit"><FontAwesomeIcon style={{color : "white", fontSize: "18px", marginTop: "5px"}} icon={faPaperPlane} /></button>
    </form>
  
  
  </div>
  <div id="section3"></div>


</div>


</div>



{/* thi is end of container */} 
 </div>

 {/* this is end of backround */}
        </div>  
  </MDBContainer >  

</section> 

  )
};

export default ChatPage;