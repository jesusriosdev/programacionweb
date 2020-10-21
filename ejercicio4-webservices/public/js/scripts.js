const readPersons = async () => {
	const response = await fetch("http://localhost:8080/persons");
	const myJson = await response.json();

	render(myJson);
};
readPersons();

function render(data) {
	let html = data
		.map((elem) => {
			return `<div>
                <strong>${elem.name} ${elem.lastname}</strong>
            </div>`;
		})
		.join(" ");

	document.getElementById("persons").innerHTML = html;
}

function addPerson(form) {

    let name = document.getElementById("name").value;
    let lastname = document.getElementById("lastname").value;

    if(name && lastname) {
        let rawText = `{
                "name": "${name}",
                "lastname": "${lastname}"
            }`;

        apiAddPerson(rawText);
    }

    return false;
}

const apiAddPerson = async (rawText) => {

    const response = await fetch("http://localhost:8080/addperson", {
        method: "POST",
        body: rawText,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(response.status === 200) {
        console.log("new person added");
        readPersons();
    }
    else {
        console.log("something went wrong!!!!");
    }
};