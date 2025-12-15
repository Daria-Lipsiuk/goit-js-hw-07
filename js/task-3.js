const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const handleBring = () => {
    const value = input.value;
    const trimmed = value.trim();
if (trimmed === "") {
    output.textContent = "Anonymous";
} else {
    output.textContent = trimmed;
    };
    
}
input.addEventListener("input", handleBring);