

export function make_element(parent,type,id,classes)
{
  var a = document.createElement(type);
  a.className = classes;
  if (id != null)
  {
    a.id = id;
  }
  
  parent.appendChild(a);
  return a;
}