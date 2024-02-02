document.querySelector(".login-form").addEventListener("submit",(function(e){e.preventDefault();const{elements:{email:l,password:t}}=e.currentTarget;""!==l.value&&""!==t.value||alert("Please fill in all the fields!");const a={email:l.value,password:t.value};console.log(a),e.currentTarget.reset()}));
//# sourceMappingURL=task-08.b9787c9e.js.map
