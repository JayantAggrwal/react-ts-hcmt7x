import React=require("react");

function Fun2()
{

const list=["a","b","c","d"];

  return (<ul className="list-group">
    {list.map((x)=>
  (<li key={x}>{x}</li>)
    )}
</ul>);
}

export default Fun2;