const basicTheme = {
  fonts: {
    primary: "'Poppins', sans-serif",
    secondary: " 'Montserrat', sans-serif",
  },
  fontSizes: {
    h1: "70px",
    h2: "60px",
    h3: "50px",
    h4: "40px",
    h5: "30px",
    h6: "20px",
  },
};

export const light = {
  ...basicTheme,
  name: "light-theme",
  colors: {
    background: "#ECF0F3",
    white: "#ffff",
    black: "#0000",
    primary: "#ff014f",
    gray: "#3c3e41",
    blueDark: "#1e2125",
    textHeading: "#1e2125",
    textContent: "#3c3e41",
    shadow: "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff",
    gradientBox: "linear-gradient(145deg, #e2e8ec, #ffffff)",
  },
};

export const dark = {
  ...basicTheme,
  name: "dark-theme",
  colors: {
    background: "#212428",
    white: "#ffff",
    black: "#0000",
    primary: "#ff014f",
    gray: "#3c3e41",
    blueDark: "#1e2125",
    textHeading: "#ffffff",
    textContent: "#c4cfde",
  },
};
