function showCheckboxes(checkboxes) {
  var checkboxes = document.getElementById(checkboxes);
  if (checkboxes.classList.contains("hide")) {
    checkboxes.classList.remove("hide");
  } else {
    checkboxes.classList.add("hide");
  }
}

document.getElementById("body").addEventListener("click", (ev) => {
  remove = 0;

  ev.path.forEach((el) => {
    if (el.id === "option1") remove = 1;
    if (el.id === "option2") remove = 1;
    if (el.id === "option3") remove = 1;
  });

  if (remove === 0) {
    var checkboxes = [
      document.getElementById("checkboxes0"),
      document.getElementById("checkboxes1"),
      document.getElementById("checkboxes2"),
    ];

    checkboxes.forEach((el) => {
      if (!el.classList.contains("hide")) {
        el.classList.add("hide");
      }
    });
  }
});

document.querySelectorAll(".cb_n").forEach((el) => {
  el.addEventListener("click", (ev) => {
    console.log(ev);
    if (el.classList.contains("active")) {
      el.classList.remove("active");
    } else {
      el.classList.add("active");
    }
  });
});
