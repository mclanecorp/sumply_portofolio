const btn_change_theme = document.getElementById("btn_change_theme");
const body = document.querySelector("body");
const dark = document.getElementById("dark");
const light = document.getElementById("light");
const dark_profile = document.getElementById("dark_profile");
const light_profile = document.getElementById("light_profile");
const download_cv = document.getElementById("download_cv");
const contact_me = document.getElementById("contact_me");
const tabs_button = document.getElementById("tabs_button");
const portfolio_tabs = document.getElementById("portfolio_tabs");
const profile_facts = document.getElementById("profile_facts");
const skills_tabs = document.getElementById("skills_tabs");

btn_change_theme.addEventListener("click", () => {
  console.log("ok");
  if (dark.style.display === "none") {
    body.style.backgroundColor = "#0c151d";
    body.style.color = "#f1f2f4";
    dark.style.display = "block";
    light.style.display = "none";
    dark_profile.style.display = "block";
    light_profile.style.display = "none";
    download_cv.style.backgroundColor = "#FFE071";
    contact_me.style.backgroundColor = "#171F26";
    contact_me.style.color = "#A3ABB2";
    tabs_button.style.backgroundColor = "#171F26";
    portfolio_tabs.style.color = "#A3ABB2";
    portfolio_tabs.style.backgroundColor = "#0C151D";
    profile_facts.style.color = "#A3ABB2";
    skills_tabs.style.color = "#A3ABB2";
  } else {
    body.style.backgroundColor = "#E5E5E5";
    body.style.color = "#3D3D3D";
    dark.style.display = "none";
    light.style.display = "block";
    dark_profile.style.display = "none";
    light_profile.style.display = "block";
    download_cv.style.backgroundColor = "#FBD144";
    contact_me.style.backgroundColor = "#fff";
    contact_me.style.color = "#3D3D3D";
    tabs_button.style.backgroundColor = "#fff";
    portfolio_tabs.style.backgroundColor = "#D7D7D7";
    portfolio_tabs.style.color = "#3D3D3D";
    skills_tabs.style.color = "#3D3D3D";
  }
});
