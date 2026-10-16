// (function () {
//   "use strict";
//   const c = window.PORTFOLIO_CONFIG || {};
//   const $ = (id) => document.getElementById(id);
//   function set(id, v) {
//     if ($(id) && v) $(id).textContent = v;
//   }
//   set("brandName", c.nama);
//   set("footerName", c.nama);
//   set("tagline", c.tagline);
//   set("intro", c.intro);
//   set("aboutText", c.tentang);
//   set("educationInfo1", c.pendidikan1);
//   set("educationInfo", c.pendidikan);
//   set("locationTop", c.lokasi);
//   set("locationBottom", c.lokasi);
//   set("year", new Date().getFullYear());
//   document.title = (c.nama || "Portfolio") + " | Portfolio";
//   document.querySelector("h1").innerHTML =
//     (c.nama || "Ilyas Taufiqur Rahman").split(" ").slice(0, -1).join(" ") +
//     "<br><span>" +
//     (c.nama || "Ilyas Taufiqur Rahman").split(" ").slice(-1) +
//     "</span>";
//   for (const id of ["navCv", "aboutCv"])
//     if ($(id)) $(id).href = c.cvFile || "#";
//   if (c.whatsapp) {
//     const url = "https://wa.me/" + c.whatsapp.replace(/\D/g, "");
//     $("waLink").href = url;
//     $("messageButton").href = url;
//     $("waText").textContent = "+" + c.whatsapp.replace(/\D/g, "");
//   }
//   if (c.email) {
//     $("emailLink").href = "mailto:" + c.email;
//     set("emailText", c.email);
//     if (!c.whatsapp) $("messageButton").href = "mailto:" + c.email;
//   }
//   const social = $("socials");
//   const links = [
//     ["fab fa-linkedin", c.linkedin, "LinkedIn"],
//     ["◎", c.instagram, "Instagram"],
//     ["⌘", c.github, "GitHub"],
//     [
//       "◉",
//       c.whatsapp ? "https://wa.me/" + c.whatsapp.replace(/\D/g, "") : "",
//       "WhatsApp",
//     ],
//     ["✉", c.email ? "mailto:" + c.email : "", "Email"],
//   ];
//   social.innerHTML = links
//     .map(
//       ([icon, href, label]) =>
//         '<a href="' +
//         (href || "#kontak") +
//         '" aria-label="' +
//         label +
//         '" ' +
//         (href && !href.startsWith("mailto:")
//           ? 'target="_blank" rel="noopener noreferrer"'
//           : "") +
//         ">" +
//         icon +
//         "</a>",
//     )
//     .join("");
//   document.querySelectorAll(".navbar-nav .nav-link").forEach((a) =>
//     a.addEventListener("click", () => {
//       const nav = $("mainNav");
//       if (nav.classList.contains("show"))
//         bootstrap.Collapse.getOrCreateInstance(nav).hide();
//     }),
//   );
//   const sections = [...document.querySelectorAll("main section[id]")];
//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           document
//             .querySelectorAll(".navbar-nav .nav-link")
//             .forEach((a) =>
//               a.classList.toggle(
//                 "active",
//                 a.getAttribute("href") === "#" + entry.target.id,
//               ),
//             );
//         }
//       });
//     },
//     { rootMargin: "-25% 0px -60% 0px" },
//   );
//   sections.forEach((s) => observer.observe(s));
// })();

// ================================================================================ new ====================

(function () {
  "use strict";
  const c = window.PORTFOLIO_CONFIG || {};
  const $ = (id) => document.getElementById(id);
  function set(id, v) {
    if ($(id) && v) $(id).textContent = v;
  }
  set("brandName", c.nama);
  set("footerName", c.nama);
  set("tagline", c.tagline);
  set("intro", c.intro);
  set("aboutText", c.tentang);
  set("educationInfo1", c.pendidikan1);
  set("educationInfo", c.pendidikan);
  set("locationTop", c.lokasi);
  set("locationBottom", c.lokasi);
  set("year", new Date().getFullYear());
  document.title = (c.nama || "Portfolio") + " | Portfolio";
  document.querySelector("h1").innerHTML =
    (c.nama || "Ilyas Taufiqur Rahman").split(" ").slice(0, -1).join(" ") +
    "<br><span>" +
    (c.nama || "Ilyas Taufiqur Rahman").split(" ").slice(-1) +
    "</span>";
  for (const id of ["navCv", "aboutCv"])
    if ($(id)) $(id).href = c.cvFile || "#";
  if (c.whatsapp) {
    const url = "https://wa.me/" + c.whatsapp.replace(/\D/g, "");
    $("waLink").href = url;
    $("messageButton").href = url;
    $("waText").textContent = "+" + c.whatsapp.replace(/\D/g, "");
  }
  if (c.email) {
    $("emailLink").href = "mailto:" + c.email;
    set("emailText", c.email);
    if (!c.whatsapp) $("messageButton").href = "mailto:" + c.email;
  }

  // --- BAGIAN YANG DIUBAH (START) ---
  const social = $("socials");
  const links = [
    ["fab fa-linkedin", c.linkedin, "LinkedIn"],
    ["fab fa-instagram", c.instagram, "Instagram"],
    ["fab fa-github", c.github, "GitHub"],
    [
      "fab fa-whatsapp",
      c.whatsapp ? "https://wa.me/" + c.whatsapp.replace(/\D/g, "") : "",
      "WhatsApp",
    ],
    ["fas fa-envelope", c.email ? "mailto:" + c.email : "", "Email"],
  ];

  social.innerHTML = links
    .map(
      ([iconClass, href, label]) =>
        '<a href="' +
        (href || "#kontak") +
        '" aria-label="' +
        label +
        '" ' +
        (href && !href.startsWith("mailto:")
          ? 'target="_blank" rel="noopener noreferrer"'
          : "") +
        '><i class="' +
        iconClass +
        '"></i></a>', // Mengubah output teks menjadi tag elemen tag <i> Font Awesome
    )
    .join("");
  // --- BAGIAN YANG DIUBAH (END) ---

  document.querySelectorAll(".navbar-nav .nav-link").forEach((a) =>
    a.addEventListener("click", () => {
      const nav = $("mainNav");
      if (nav.classList.contains("show"))
        bootstrap.Collapse.getOrCreateInstance(nav).hide();
    }),
  );
  const sections = [...document.querySelectorAll("main section[id]")];
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document
            .querySelectorAll(".navbar-nav .nav-link")
            .forEach((a) =>
              a.classList.toggle(
                "active",
                a.getAttribute("href") === "#" + entry.target.id,
              ),
            );
        }
      });
    },
    { rootMargin: "-25% 0px -60% 0px" },
  );
  sections.forEach((s) => observer.observe(s));
})();
