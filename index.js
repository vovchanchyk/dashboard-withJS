$(".dropdown-menu .dropdown-toggle").on("click", function (event) {
  event.stopPropagation();
  let commonParent = $(this).closest(".dropdown-menu");

  $(this).next().toggleClass("show");
  if (commonParent.find(".show").length > 0) {
    console.log(commonParent.find(".show").length);
    commonParent.find(".show").removeClass("show");
    $(this).next().toggleClass("show");
  }

  $(this)
    .parents("li.dropdown.show")
    .on("hidden.bs.dropdown", function (e) {
      $(".dropdown-submenu.show").removeClass("show");
    });
});

$(".arrow").on("click", function () {
  $(this).closest(".row").find("[data-toggle]").toggleClass("rotate");
});

let inputs = document.querySelectorAll("form div input");
let email = document.querySelector('input[type="email"]');

for (let i = 0; i < inputs.length; i++) {
  let input = inputs[i];
  input.addEventListener("input", function () {
    input.nextElementSibling.innerHTML = " ";
    input.style.border = " none";
  });
}

document.querySelector("form").addEventListener("submit", function (e) {
  let isvalid = true;
  for (i = 0; i <= inputs.length - 1; i++) {
    if (!inputs[i].validity.valid) {
      inputs[i].nextElementSibling.innerHTML = "  заполните это поле коректно";
      isvalid = false;
      inputs[i].style.border = "solid red 1px";
    }
  }
  let options = document.querySelectorAll("select option");
  let selected = 0;
  for (i = 1; i < options.length; i++) {
    if (options[i].selected) {
      selected++;
    }
    if (isvalid && selected > 0) {
      alert("thank you");
    } else {
      e.preventDefault()
     
    }
  }
});

$("#viewProfile").on("hide.bs.modal", function (e) {
  let inputs = $('form div input');
  let options = $('option')
  inputs.css('border','1px solid black');
  inputs.next().html("")
  inputs.val("")
  inputs.prop('checked', false)
  options.prop('selected', false)
});

