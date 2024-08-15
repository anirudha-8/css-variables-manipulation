const inputs = document.querySelectorAll(".controls input");
function handleUpdate() {
    console.log(this.name);
    console.log(this.value);
    if (this.name === "base") {
        document.documentElement.style.setProperty(`--${this.name}`, this.value);
    } else {
        document.documentElement.style.setProperty(`--${this.name}`, this.value + "px");
    }
}
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));