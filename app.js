const btn_change_theme = document.getElementById("btn_change_theme");
const body = document.querySelector("body");
const dark = document.getElementById("dark");
const light = document.getElementById("light");
const dark_profile = document.getElementById("dark_profile");
const light_profile = document.getElementById("light_profile");
const download_cv = document.getElementById("download_cv");
const contact_me = document.getElementById("contact_me");

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
  }
});
