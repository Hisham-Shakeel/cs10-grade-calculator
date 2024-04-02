document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
    // INPUT
    let c1 = +document.getElementById("cilent1-in").value;
    let s1 = +document.getElementById("structure1-in").value;
    let s2 = +document.getElementById("structure2-in").value;
    let c2 = +document.getElementById("cilent2-in").value;
    let project = +document.getElementById("project-in").value;
    
    // PROCESS
    let total = (c1 + s1 + c2 + s2 + project) / 5;
      let msg = `Final CS10 Grade: ${total}%`;

    // OUTPUT
    document.getElementById("output").innerHTML = msg;
}