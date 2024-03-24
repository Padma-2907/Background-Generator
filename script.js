document.addEventListener("DOMContentLoaded", function() {
    const colorPicker = document.getElementById("colorPicker");
    const imagePicker = document.getElementById("imagePicker");

    colorPicker.addEventListener("input", function() {
        document.body.style.backgroundColor = colorPicker.value;
    });

    imagePicker.addEventListener("change", function() {
        const file = this.files[0];
        const reader = new FileReader();

        reader.onload = function(event) {
            document.body.style.backgroundImage = `url(${event.target.result})`;
        };

        reader.readAsDataURL(file);
    });
});
