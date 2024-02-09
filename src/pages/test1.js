//It works with moment straight on the code on AI Tech main page where there is time mention on DOM, and put format at as MM or HH as in the brackets underneath 
//


// import { addWeeks } from '@progress/kendo-date-math';
import {useState, useEffect, React}  from 'react';
import moment from 'moment';
import Timestamp from 'react-timestamp';



//let dates = new Date()


// class DateToday extends React.Component {
  // constructor(props) {
    // super(props);
    // this.state = {
      // date: moment(dates.toLocaleString()).format('MMMM Do YYYY')
    // };


  // }
  // render() {
    // return (
      // <div class="date">
        // <p> {this.state.date}</p>
      // </div>
    // );
  // }
// }


// class Time extends React.Component {
    // constructor(props) {
      // super(props);
      // this.state = {
        // time: moment(dates.toLocaleString()).format('h:mm a')
      // };
  
  
    // }
    // render() {
      // return (
        // <div>
          // <p> {this.state.time}</p>
        // </div>
      // );
    // }
  // }


export default function Counter1() 

{

    const [timeKey, setTimeKey] = useState (JSON.parse(localStorage.getItem('searchHistoryArray'))||'');
console.log(timeKey[0].timeKey)

const saveHistory = (event) => {
var searchHistoryArray = []
var searchHistory = {
 
timeKey: moment(new Date ()).format('h:mm a') 

}
searchHistoryArray.push(searchHistory)
localStorage.setItem('searchHistoryArray', JSON.stringify(searchHistoryArray))
// searchHistory.push(searchHistory)


}



// useEffect(() => {

  
 
// }, [searchHistory]);



  return (
    <div>
<div>{timeKey.timeKey}</div>



      {/* <h1><DateToday/></h1> */}
      {/* <h1><Time/></h1> */}
      {/* <Timestamp date={Date} />  */}
      {/* <Timestamp time={Time} />  */}


<button 
onSubmit = {saveHistory()} >
  </button>

  </div>

  );
  
}


