!function(){var e={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea"),input:document.querySelector(".feedback-form input")};e.form.addEventListener("submit",(function(e){e.preventDefault(),console.log("відправляєм форму")})),e.textarea.addEventListener("input",(function(e){var t=e.target.value;localStorage.setItem("feedback-form-state",t),console.log(t)}))}();
//# sourceMappingURL=03-feedback.32215356.js.map