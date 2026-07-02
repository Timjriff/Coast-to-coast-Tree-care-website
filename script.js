const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");
const form = document.querySelector("#estimate-request");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const subject = encodeURIComponent("Coast to Coast Tree Care estimate request");
    const body = encodeURIComponent(
      [
        `Name: ${data.get("name") || ""}`,
        `Phone: ${data.get("phone") || ""}`,
        `Service: ${data.get("service") || ""}`,
        "",
        "Project notes:",
        data.get("message") || ""
      ].join("\n")
    );

    window.location.href = `mailto:c2ctree@gmail.com?subject=${subject}&body=${body}`;
  });
}
