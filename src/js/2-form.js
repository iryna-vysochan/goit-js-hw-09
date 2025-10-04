const formData = {
    email: "",
    message:"",
};

const localStorageKey = "feedback-form-state";
const localStorageData = localStorage.getItem(localStorageKey);

if (localStorageData) {
    formData.email = JSON.parse(localStorageData).email;
    formData.message = JSON.parse(localStorageData).message;
}

const feedbackForm = document.querySelector(".feedback-form");

const email = feedbackForm.elements.email;
email.value = formData.email;

const message = feedbackForm.elements.message;
message.value = formData.message;


const feedbackFormChanges = evt => {
    formData[evt.target.name] = evt.target.value.trim();    
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
};

const feedbackFormSubmit = evt => {
    evt.preventDefault();

    const hasEmptyField = Object.values(formData).some(value => value === "");
    if (hasEmptyField) { 
        alert("Fill please all fields");
        return;
    };

    console.log(formData);
    localStorage.removeItem(localStorageKey);
    for (let key in formData) {
        formData[key] = "";
    };    
    feedbackForm.reset();
};

feedbackForm.addEventListener("input", feedbackFormChanges);
feedbackForm.addEventListener("submit", feedbackFormSubmit);