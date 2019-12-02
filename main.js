let mainText = document.querySelector("#main-text");
let btnChangetext = document.querySelector("#text-btn");
let inputText = document.querySelector("#text");
let fontSizer = document.querySelector("#font-changer");
let fontValue = document.querySelector("#rangeValue");
let fontStyleChanger = document.querySelectorAll(
  "input[type=radio][name='font']"
);
let fontFaceSelect = document.querySelector("#font-face");

fontValue.innerHTML = 3;

let lightTheme = {
  primary: "#c9d1d3",
  secondary: "#465881",
  text: "#465881"
};

let darkTheme = {
  primary: "#121212",
  secondary: "#121212",
  text: "#e1e1e1"
};

function changeTheme(theme) {
  document.documentElement.style.setProperty("--primary-color", theme.primary);
  document.documentElement.style.setProperty(
    "--secondary-color",
    theme.secondary
  );
  document.documentElement.style.setProperty("--text-color", theme.text);
}

btnChangetext.addEventListener("click", function() {
  mainText.innerHTML = inputText.value;
});

fontSizer.addEventListener("input", function(event) {
  fontValue.innerHTML = fontSizer.value;
  document.documentElement.style.setProperty(
    "--text-size",
    fontSizer.value + "em"
  );
});

for (item of fontStyleChanger) {
  item.addEventListener("change", function() {
    changeFontStyle(this);
  });
}

function changeFontStyle(inputStyle) {
  document.documentElement.style.setProperty("--font-style", inputStyle.value);
}

fontFaceSelect.addEventListener("change", function() {
  document.documentElement.style.setProperty(
    "--font-face",
    fontFaceSelect.value
  );
});

let ThemeButton = document.querySelector(".mode-selector");

ThemeButton.addEventListener("click", function() {
  if (this.childNodes[1].classList.length > 1) {
    this.childNodes[1].classList.remove("left");
    document.documentElement.style.setProperty("--minus-shadow", "-0.05em");
    changeTheme(lightTheme);
    document.cookie = "light";
  } else {
    this.childNodes[1].classList.add("left");
    document.documentElement.style.setProperty("--minus-shadow", "0.05em");
    changeTheme(darkTheme);
    document.cookie = "dark";
  }
});

if (document.cookie != "dark") {
  ThemeButton.childNodes[1].classList.remove("left");
  document.documentElement.style.setProperty("--minus-shadow", "-0.05em");
  changeTheme(lightTheme);
} else {
  ThemeButton.childNodes[1].classList.add("left");
  document.documentElement.style.setProperty("--minus-shadow", "0.05em");
  changeTheme(darkTheme);
}
