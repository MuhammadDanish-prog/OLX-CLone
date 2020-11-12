import React from 'react';


var number =0;
function Increase(){
  var counter=document.getElementById("count")
  number++;
  counter.innerHTML=number;

}


function Decreament(){
  var counter=document.getElementById("count")
  number--;
  counter.innerHTML=number;

}



class Count extends React.Component{
    render(){
        return(
<div>
<button className="btn btn-outline-success" onClick={Decreament}>-</button><h3 style={{
display: 'inline'
}} id="count">0</h3><button className="btn btn-outline-success my-2 my-sm-0" onClick={Increase}>+</button>
</div>

        );
    }
}


export default Count