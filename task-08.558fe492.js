document.querySelector(".login-form").addEventListener("submit",(function(e){e.preventDefault();var l=e.currentTarget.elements,a=l.email,r=l.password;""!==a.value&&""!==r.value||alert("Please fill in all the fields!");var t={email:a.value,password:r.value};console.log(t),e.currentTarget.reset()}));
//# sourceMappingURL=task-08.558fe492.js.map
