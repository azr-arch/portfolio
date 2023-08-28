emailjs.init("j7m3SGNMgcNgxqPpF");
function sendMessage() {
  var serviceID = "service_hefddr8";
  var templateID = "contact-form";

  var params = {
    sendername: document.getElementById("name").value,
    senderemail: document.getElementById("email").value,
    sendermessage: document.getElementById("message").value,
  };

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      alert("form submitted successfully");
    })
    .catch((e) => alert("something went wrong, try again later"));
}

const submitBtn = document.getElementById("submit-form");
submitBtn.onclick = (e) => {
  submitBtn.setAttribute("aria-disabled", "true");
  e.preventDefault();
  if (!validateForm()) {
    return;
  }
  sendMessage();
  setTimeout(() => {
    submitBtn.setAttribute("aria-disabled", "false");
  }, 2000);
};

function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name == "" || email == "" || message == "") {
    alert("Name, email, and message must be filled out");
    return false;
  }
  return true;
}

const projectCardEl = document.querySelectorAll(".project-card");
const projectSourceEl = document.querySelectorAll(".project-source");

projectCardEl.forEach((element, idx) => {
  element.addEventListener("mouseover", function (e) {
    handleMouseOver(e, idx);
  });
  element.addEventListener("mouseout", function (e) {
    handleMouseOut(e, idx);
  });
});

function handleMouseOver(e, idx) {
  projectSourceEl[idx].setAttribute("aria-hidden", "false");
}

function handleMouseOut(e, idx) {
  projectSourceEl[idx].setAttribute("aria-hidden", "true");
}
