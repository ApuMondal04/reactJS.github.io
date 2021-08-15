import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const fName="Apu";
const lName="Mondal";
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();

const image="https://picsum.photos/200/300";
const image2="https://picsum.photos/255/300";
const image3="https://picsum.photos/300/300";
const image4="https://picsum.photos/360/300";

const webLink="https://theuselessweb.com/";

//inline 
const heading={
    color: '#ad4464',
    textTransform: 'capitalize',
    textAlign: 'center',
    fontWeight: 'bold',
    textShadow: '0px 2px 4px #352020',
  
    margin: '30px 0',
    fontFamily: '"Prompt",sans-serif'
};

const heading2={
    textAlign: 'center'
};

let curDate = new Date();
curDate = curDate.getHours();
let greeting ="";

const cssStyle={ };

if(curDate>=1 && curDate<12){
    greeting='Good Morning';
    cssStyle.color='green';
}
else if(curDate>=12 && curDate<16)
{
    greeting='Good Afternoon';
    cssStyle.color='orange';
}
else if(curDate>=17 && curDate<19)
{
    greeting='Good Evening';
    cssStyle.color='blue';
}
else{
    greeting='Good Night';
    cssStyle.color='black';
}


ReactDOM.render(
<>
<h1 style={heading}>{`${fName} ${lName}`} </h1>
<p className="datetime">Current Date & Time is : {date} {"Time-"} {time}</p>

<div className="head2">
<h2 style={heading2}>Hello Apu <span style={cssStyle}> {greeting} </span></h2>
</div>
<div className="images">
<img src={image} alt="Random Images" />
<img src={image2} alt="Random Images"/>
<img src={image3} alt="Rand om Images"/>

<a href={webLink} target="_demo">
<img src={image4} alt="Random Images"/>
</a>

</div>
</>,
document.getElementById('root')
);