const e={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea"),input:document.querySelector(".feedback-form input")};e.form.addEventListener("submit",(function(e){e.preventDefault(),console.log("відправляєм форму")})),e.textarea.addEventListener("input",(function(e){const t=e.target.value;localStorage.setItem("feedback-form-state",t),console.log(t)}));
//# sourceMappingURL=03-feedback.bbd38a3a.js.map
