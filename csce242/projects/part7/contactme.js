document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
    
    form.addEventListener("submit", async function (event) {
        event.preventDefault();
        
        // Construct the form data
        const formData = new FormData(form);
        formData.append("_api", "dd4441a0-cf80-4184-a816-a40499c58480");
        
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });
            
            if (response.ok) {
                const result = await response.json();
                alert(result.message);  // Success message
                form.reset();  // Clear the form after successful submission
            } else {
                throw new Error("Failed to submit form. Please try again later.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("There was an error submitting the form. Please try again later.");
        }
    });
});
