/* RASOTECH : applique le choix jour / nuit avant le premier rendu (aucun flash). */
(function () {
  try {
    var t = localStorage.getItem("rt-theme");
    if (t === "dark" || t === "light") document.documentElement.setAttribute("data-theme", t);
  } catch (e) { /* stockage indisponible : on garde le reglage du systeme */ }
})();
