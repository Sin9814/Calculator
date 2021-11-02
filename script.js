function add() {
    event.preventDefault()
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    console.log(a);
    console.log(b);
    console.log(typeof(a + b))
    document.getElementById("s").value = a + b
    document.getElementById("sum").style.display = "block"
}

function sub() {
    event.preventDefault()
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    console.log(a);
    console.log(b);
    console.log(typeof(a - b))
    document.getElementById("su").value = a - b
    document.getElementById("sub").style.display = "block"
}

function mul() {
    event.preventDefault()
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    console.log(a);
    console.log(b);
    console.log(typeof(a * b))
    document.getElementById("m").value = a * b
    document.getElementById("mul").style.display = "block"
}

function div() {
    event.preventDefault()
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    console.log(a);
    console.log(b);
    console.log(typeof(a / b))
    document.getElementById("d").value = a / b
    document.getElementById("div").style.display = "block"
}

function mod() {
    event.preventDefault()
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    console.log(a);
    console.log(b);
    console.log(typeof(a % b))
    document.getElementById("mo").value = a % b
    document.getElementById("mod").style.display = "block"
}