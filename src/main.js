const input = document.querySelector("#input")
const output = document.querySelector("#created")

output.innerHTML = '';


var created = [];
for(let o in created)
    generate(o);

function generate(data){
    const elem = document.createElement("div");
    elem.innerHTML = data
    output.appendChild(elem)
}

oninput = (event) => {
    if(event.value != '')
        generate(input.value);
}
