var button = document.getElementById("Skill");
var skill = document.getElementById("skills");
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    if (skill) {
        skill.style.display = skill.style.display === "none" ? "block" : "none";
    }
});
