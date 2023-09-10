import React from 'react';
import Icon from '../pictures/icon.jpg';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import $ from 'jquery';
import './chatPage.css';
import ScrollContainer from 'react-indiana-drag-scroll'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function chatPage() {

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
  
  this is chat div


      <ScrollContainer>
   

      I am currently building a card section which shows a horizontal list of cards. This list overflows, which makes the user have to scroll horizontally to view the offscreen cards.

To make this process easier for the user, I want to create buttons which scroll the horizontal list to the left or right.

I tried solving this by creating a reference to the horizontal list and apply a scrollX when I click on the previously mentioned button. This however, results in the following error:

Cannot add property scrollX, object is not extensible
M
javascriptreactjsreact-hooks
Share
Improve this question
Follow
edited Mar 17, 2020 at 21:58
skyboyer's user avatar
skyboyer
22.2k77 gold badges5757 silver badges6464 bronze badges
asked Mar 17, 2020 at 20:41
Jonathan Lauwers's user avatar
Jonathan Lauwers
25522 gold badges33 silver badges88 bronze badges
Add a comment
1 Answer
Sorted by:

Highest score (default)
41

In order to access a DOM Node with a Ref, you need to use ref.current; useRef is a container for a DOM node and you access that node with the current property.

Additionally, scrollX is a read-only property; you need to call scrollLeft to change the scroll position. For scrollLeft to work, you need to add an overflow-x: scroll; rule to the style.projects for it to work. (If style.projects is an object than change to overflowX: 'scroll'.)

To be able to scroll left or right, your can add a parameter to the function for the scroll offset, so it doesn't always scroll right:

Share
Improve this answer
Follow
edited Mar 18, 2020 at 3:22
answered Mar 17, 2020 at 22:45
litel's user avatar
litel
3,79033 gold badges2020 silver badges2929 bronze badges
Is it also possible to make this scroll behaviour smooth? – 
Jonathan Lauwers
 Mar 18, 2020 at 16:37
4
@JonathanLauwers You can add scroll-behavior: smooth; to the CSS for the style.projects but that isn't natively supported in Safari so you'd need some sort of polyfill like github.com/iamdustan/smoothscroll – 
litel
 Mar 18, 2020 at 16:52
Is this working? I tried it but not working as ittended – 
Prieyudha Akadita S
 Mar 25 at 17:00


      </ScrollContainer>
  



</div>
<div id="chatPostDiv">
<div id="section1"></div>
<div id="section2">

<Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="message" placeholder="Enter Message" />
        <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form.Group>

      {/* <Form.Group className="mb-3" controlId="formBasicPassword"> */}
        {/* <Form.Control type="password" placeholder="Password" /> */}
      {/* </Form.Group> */}

      
    </Form>
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
}
