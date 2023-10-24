
const button = document.getElementById("button");

button.addEventListener("click", () => {
    const text = document.getElementById("text").value;
    const result = document.querySelector(".result");

    const li = document.createElement("li");

    li.appendChild(document.createTextNode(text));

    result.appendChild(li);

    document.getElementById("text").value = "";


})