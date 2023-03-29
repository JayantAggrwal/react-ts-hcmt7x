import React=require("react");

function Fun3()
{

  const [state,setstate]=React.useState({count:0,theme:'blue'})
  const count=state.count;
  const theme=state.theme;

  // function dec()
  // {
  //   setcount( count=>count-1);
  // }

  // function inc()
  // {
  //   setcount( count=>count+1);
  // }
  return<p>
    <button onClick={dec}>-</button>
    <span>{count}</span>
    <button onClick={inc}>+</button>
  </p>
  
}

export default Fun3;