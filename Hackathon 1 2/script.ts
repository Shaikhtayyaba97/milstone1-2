const button = document.getElementById("Skill") as HTMLButtonElement | null;
const skill = document.getElementById("skills") as HTMLElement | null;

button?.addEventListener("click", () => {
    if (skill) {
        skill.style.display = skill.style.display === "none" ? "block" : "none";
    }
});
