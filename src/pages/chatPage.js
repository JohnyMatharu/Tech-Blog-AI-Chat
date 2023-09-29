import './chatPage.css';
import React, { Link, useState, Component } from 'react';
import Icon from '../pictures/icon.jpg';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import $ from 'jquery';
import ScrollContainer from 'react-indiana-drag-scroll'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {useEffect, useRef} from 'react';




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
  const bottomRef = useRef(null);  
  const [messages, setMessages] = useState([]);

  
  const handleChange = (event) => {
    setValue(event.target.value);
  };


/*

Next:
In the same category multiple if choices will be listed in the same question, and then the answer for that will be the same, which will be some info and link. They’ll be a question which will say sorry I’m not able to understand would you like to speak to an agent instead, if choices will be you will get a callback, and then they will be a customer says yes, then customer will enter the phone number. It will be phone number regex and then he’ll get a message that somebody will call you back within few min and customers is in que

Lokk how to write a scan if statement to match a certain word, if needed write a regex to match 
 


Line 78: 
 else if (value.toLowerCase().minL('Product'.toLowerCase()){
        // here will use 0-9 regex to make sure its numeric or use min max length with isnumber and if matches criteria then fake tracking detail
        setList1(list1.concat("The account number consists of 6 digits and numbers only - " + new Date().getHours()+":"+new Date().getMinutes()));
      } 

*/

const photo = [{Icon}]

  const handleSubmit = (event) => {
    // let include = value.includes("Product")
    // console.log(include) 
    const regEx= /^[0-9]{6}$/
    if (value) {
      setList(list.concat(value + " - " + new Date().getHours()+":"+new Date().getMinutes()));
      // setList(list.concat());
      // setList1(list1.concat(<br></br>));
       // "availability" || "Availability" | "Specification" || "specification") === true);
  
      if (value.toLowerCase().includes('Product'.toLowerCase()) || value.toLowerCase().includes('Availability'.toLowerCase()) || 
      value.toLowerCase().includes('Tech'.toLowerCase()) || value.toLowerCase().includes('Support'.toLowerCase()) || 
      value.toLowerCase().includes('Use'.toLowerCase()) || value.toLowerCase().includes('Spec'.toLowerCase()) === true) {
        setList1(list1.concat( "Please check product details page for each product accessible through www.maugny.com/club - " + new Date().getHours()+":"+new Date().getMinutes()));
// The product information and details are given at the product details page for each product you
      } else if (value.toLowerCase().includes('Bill'.toLowerCase()) || value.toLowerCase().includes('Invoice'.toLowerCase()) || 
      value.toLowerCase().includes('Pay'.toLowerCase()) === true){
        setList1(list1.concat("Recent purchase order invoice information is available at www.maugny.com/account - " + new Date().getHours()+":"+new Date().getMinutes()));
      } else if (value.toLowerCase().includes('Ship'.toLowerCase()) || value.toLowerCase().includes('Deliver'.toLowerCase()) || 
      value.toLowerCase().includes('Track'.toLowerCase()) === true){
        setList1(list1.concat("Please enter your 6 digit order number from your order confirmation email - " + new Date().getHours()+":"+new Date().getMinutes()));
      } else if (value.toLowerCase().includes('Order'.toLowerCase()) || value.toLowerCase().includes('Purchase'.toLowerCase()) || 
      value.toLowerCase().includes('Return'.toLowerCase()) || value.toLowerCase().includes('Refund'.toLowerCase())|| 
      value.toLowerCase().includes('Exchange'.toLowerCase()) || value.toLowerCase().includes('Defective'.toLowerCase()) || 
      value.toLowerCase().includes('Damaged'.toLowerCase()) || value.toLowerCase().includes('Broken'.toLowerCase()) ||
      value.toLowerCase().includes('Lost'.toLowerCase()) || value.toLowerCase().includes('Stole'.toLowerCase()) === true){
        setList1(list1.concat(" For recent order/returns please visit customer accounts page at wwww.maugny.com/account - " + new Date().getHours()+":"+new Date().getMinutes()));
      } else if (value.toLowerCase().includes('Retention'.toLowerCase()) || value.toLowerCase().includes('Offer'.toLowerCase()) || 
      value.toLowerCase().includes('Promotion'.toLowerCase()) || value.toLowerCase().includes('Concern'.toLowerCase())|| 
      value.toLowerCase().includes('Accommodation'.toLowerCase()) || value.toLowerCase().includes('Request'.toLowerCase()) || 
      value.toLowerCase().includes('Issue'.toLowerCase()) || value.toLowerCase().includes('Complain'.toLowerCase()) ||
      value.toLowerCase().includes('Legal'.toLowerCase()) || value.toLowerCase().includes('Report'.toLowerCase()) ||
      value.toLowerCase().includes('Security'.toLowerCase()) || value.toLowerCase().includes('Privacy'.toLowerCase()) === true){
        setList1(list1.concat("Customer concerns can be reported through customer accounts page at www.maugny.com/account - " + new Date().getHours()+":"+new Date().getMinutes()));
      }else if (value.toLowerCase().includes('Contact'.toLowerCase()) || value.toLowerCase().includes('Address'.toLowerCase()) || 
      value.toLowerCase().includes('Phone'.toLowerCase()) || value.toLowerCase().includes('Email'.toLowerCase())|| 
      value.toLowerCase().includes('E-mail'.toLowerCase()) || value.toLowerCase().includes('Hours'.toLowerCase()) === true){
        setList1(list1.concat("Contact information can be found at the customer accounts page at www.maugny.com/account - " + new Date().getHours()+":"+new Date().getMinutes()));
      } else if (value.toLowerCase().includes('Account'.toLowerCase()) || value.toLowerCase().includes('Member'.toLowerCase()) || 
      value.toLowerCase().includes('Club'.toLowerCase()) || value.toLowerCase().includes('Personal'.toLowerCase()) === true){
        setList1(list1.concat("View personal details & membership benefits at the accounts page at www.maugny.com/account - " + new Date().getHours()+":"+new Date().getMinutes()));
      } else if (value.toLowerCase().includes('Reward'.toLowerCase()) || value.toLowerCase().includes('Point'.toLowerCase()) || 
      value.toLowerCase().includes('Redeem'.toLowerCase()) || value.toLowerCase().includes('Redemption'.toLowerCase())|| 
      value.toLowerCase().includes('New'.toLowerCase()) || value.toLowerCase().includes('Arrival'.toLowerCase()) || 
      value.toLowerCase().includes('Book'.toLowerCase()) || value.toLowerCase().includes('Company'.toLowerCase()) ||
      value.toLowerCase().includes('Subscribe'.toLowerCase()) === true){
        setList1(list1.concat("Check new arrivals at homepage, booking, subscribtion, points at www.maugny.com/account - " + new Date().getHours()+":"+new Date().getMinutes()));
      } else if (value.toLowerCase().includes('Survey'.toLowerCase()) || value.toLowerCase().includes('Review'.toLowerCase()) || 
      value.toLowerCase().includes('Opinion'.toLowerCase()) === true){
        setList1(list1.concat("You can fill up a survey or leave a review at www.maugny.com/account - " + new Date().getHours()+":"+new Date().getMinutes()));
      } else if (value.toLowerCase().includes('Yes'.toLowerCase()) === true){
        setList1(list1.concat("Your request has been recieved and you will get callback in next 15 minutes - " + new Date().getHours()+":"+new Date().getMinutes()));
      } else if ((regEx.test(value)) === true){ console.log(regEx.test(value))
        // here will use 0-9 regex to make sure its numeric or use min max length with isnumber and if matches criteria then fake tracking detail
        setList1(list1.concat("Your items is in transit, last picked at 8:24 am today, estimated delievery by 5 pm today - " + new Date().getHours()+":"+new Date().getMinutes()));
      } // else if ((regEx.test(value)) === false){ console.log(regEx.test(value))       
        //The problem here is how can we use true and false for general asked question not to specific entry as this will provide different answer for false 
        // here will use 0-9 regex to make sure its numeric or use min max length with isnumber and if matches criteria then fake tracking detail
        // setList1(list1.concat("The account number consists of 6 digits and numbers only - " + new Date().getHours()+":"+new Date().getMinutes()));
      // } 
        else {
        setList1(list1.concat("Account number is 6 digits all numbers, for callback enter yes - " + new Date().getHours()+":"+new Date().getMinutes()));
      }

    setValue('');

    event.preventDefault();
  };

  }; 
    
 
  useEffect(() => {
    // 👇️ simulate chat messages flowing in
    setInterval(
      () =>
        setMessages(current => [
          ...current,
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, quaerat eum id obcaecati, magnam voluptatum dolorem sunt, omnis sed consectetur necessitatibus blanditiis ipsa? Cumque architecto, doloribus mollitia velit non sint!',
        ]),
      600,
    );
  }, []);

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [messages]);



  return (
    

<section id ="section1">
<div className="nav">

     
    
<div id ="section">  
   
       
        
      {/* only when not active it should turn to dark grey keeping in mind with hover effect */}
        <div className="chatPage">
        Customer Service
        </div>
</div>

</div>

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
          

      <div id = "left"><div id = "roboChat"><h7>How can I help you today? Please key in your question or you can just enter a keyword - {currentDate}</h7></div>
{/* product billing shipping order retention contact account membership survey */}
    
    
      {/* {list.map(item => ( */}
        {/* <h7 style={{color : "white"}} key={item}>{item}<br></br></h7> */}
      {/* ))} */}
       
       {list1.map(item1 => (
        <div id = "roboChat"><h7 key={item1}>{item1}</h7></div>
  //  <h7 key={item1}><img src={Icon}></img>{item1}<br></br></h7>
      ))}
        <div ref={bottomRef} /> 
        </div>


      <div id = "right"><div id = "roboChatInvisible"><h7>How can I help you today? Please key in your question or you can just enter a keyword - {currentDate}</h7></div>
      {list.map(item => (
     <div id = "roboChat1"><h7 key={item}>{item}</h7></div>
      ))}
  
      </div>
  
     


      </div>
  

  </div >

    </ScrollContainer>




</div>
<div id="chatPostDiv">
<div id="section1"></div>
<div id="section2">

<form style={{fontSize : "15px"}} onSubmit={handleSubmit}>
      <input type="text" maxlength="99" value={value} placeholder= "Enter Text and Press Enter" onChange={handleChange} />
      {/*  */}
  
      {/* <button style={{backgroundColor : "#0080ff", color: "white", fontSize: "15px"}} type="submit"><FontAwesomeIcon style={{color : "white", fontSize: "18px", marginTop: "5px"}} icon={faPaperPlane} /></button> */}
    </form>
  
  
  </div>
  <div id="section3"></div>


</div>


</div>



{/* thi is end of container */} 
 </div>

 {/* this is end of backround */}
        </div>  





        <div id = "footer">
       
       
       <div class= "space">
      
      </div>
       <div class= "space">
     
     
   



           
       </div>
       <div class= "space">
       
     
      
    
       </div>
       <div class= "space">
      
     
     
       </div>
       <div class= "space">
       
     
      
    
       
       </div>
       <div class= "space">
       
     
       {/* Please note the this is lifted up in the air little bit, in order to fix this size has to be adjusted and make sure the
       the bottom is in line with icons and font size is same as other regular black text */}
       <br></br> <br></br> <br></br> 
     <h6 style={{color: 'gray', fontSize: '18px', fontWeight: 'bolder', fontFamily: 'roboto', paddingLeft: '129px'}}>All Rights Reserved © 2023</h6>
       </div>
        </div>







  </MDBContainer >  

</section> 



  )
};

export default ChatPage;