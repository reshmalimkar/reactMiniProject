import React from "react";

function App(){
    const cssStyle={};

let currDate=new Date(2024,2,17,13);
currDate=currDate.getHours();
let greeting='';
if(currDate>=1 && currDate<12){
    greeting="Good Morning"
    cssStyle.color='green';
}
else if(currDate>=12 && currDate<19){
    greeting="Good Afternoon"
    cssStyle.color='orange';
}
else{
    greeting="Good Night"
    cssStyle.color='black';
}
return(
    <>
        <div>
<h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
</div>
    </>
);
}
export default App;