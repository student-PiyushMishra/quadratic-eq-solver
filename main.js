const logs = document.querySelector(".log")

document.querySelector('button').addEventListener('click',function(e){
  e.preventDefault()
  logs.innerHTML = ""
  const a = document.querySelector('input.a').value.trim()
  let b = document.querySelector('input.b').value.trim()
  let c = document.querySelector('input.c').value.trim()
  if(b=="") b = "0"
  if(c=="") c = "0"
  app(a,b,c)
})

function app(a,b,c){
  genLog(logs,`We are given with the equation: ${generateEq(a,b,c)}<br>&nbsp;&nbsp;a is: ${a}<br>&nbsp;&nbsp;b is: ${b}<br>&nbsp;&nbsp;c is: ${c}`)
  const roots = getRoots(a,b,c)
  if(roots == "a is zero"){
    genLog(logs,"Since, a is provided as 0, the given is equation is not a valid quadratic equation.")}
  genLog(logs,`Roots are:- ${roots[0]} and ${roots[1]}`)
}

function getRoots (a,b,c){ 
  if(a == 0){return "a is zero"}
  const discriminant = (b * b) - (4 * a * c)
    if(discriminant>0){
      genLog(logs,`The value of discriminant (b<sup>2</sup> - 4ac) is ${discriminant} which is >0. Hence, there exists two distinct roots for this equation.`)
    }
    else if(discriminant == 0){
      genLog(logs, `The value of discriminant (b<sup>2</sup> -4ac) is ${discriminant}. Hence, there exists two equal roots (i.e., coincident roots) for this equation.`)
    }else{
      genLog(logs, `The value of discriminant (b<sup>2</sup> -4ac) is ${discriminant} which is <0. Hence, there exists no real roots for this equation.`)
      return;
    }
  const roots = []
  roots.push(((0- b) + Math.sqrt((b*b)-4*a*c))/(2*a))
  roots.push(((0- b) - Math.sqrt((b*b)-4*a*c))/(2*a))
  return roots
}

function generateEq (a,b,c){
  let eq = []
  eq.push(a)
  if(b.startsWith("-")){eq.push("- "+b.split("-")[1])}
  else{eq.push("+ "+b)}
  if(c.startsWith("-")){eq.push("- "+c.split("-")[1])}
  else{eq.push("+ "+c)}
  return `${eq[0]}x<sup>2</sup> ${eq[1]}x ${eq[2]} = 0`
}

function genLog(logsDiv,newLog){
  const existingLogs = logsDiv.innerHTML
  const p = document.createElement('p')
  p.innerHTML = newLog
  return logsDiv.appendChild(p)
}
