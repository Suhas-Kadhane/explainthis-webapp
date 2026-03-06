document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("simplifyBtn");
        
        button.addEventListener("click", simplifyText);
    });
        
    function simplifyText() {
        const inputText = document.getElementById("inputText").value;
        const outputDiv = document.getElementById("output");

        if (inputText.trim() === "") {
             outputDiv.innerHTML = "Please enter some text first.";
            return;
            }

        // Fake simplication logic
        let simplified = inputText.split(".")[0].trim(); // Take this first sentence only

        if (!simplified.endsWith(".")) {
            simplified += ".";
         }

         outputDiv.style.display = "block";
         outputDiv.innerHTML = `
             <strong>Simplified Version:</strong><br><br>
            👉 In simple terms: <br><br>
            ${simplified}
         `;
        }
