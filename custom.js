let values = document.getElementsByName("select");
let div = document.getElementById("modify");

function set()
{
    for(let i=0;i<values.length;i++)
    {
        let select = values[i].getAttribute('id');
        
        let cssValue = values[i].value;
        
        div.style[ select ] = cssValue;
    }
}
document.getElementById('button').addEventListener('click',set);