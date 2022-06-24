const basicTheme = {
  fonts: {
    primary: "'Poppins', sans-serif",
    secondary: " 'Montserrat', sans-serif",
  },
  fontSizes: {
    base: "100%",
    h1: "7rem",
    h2: "6rem",
    h3: "5rem",
    h4: "4rem",
    h5: "3rem",
    h6: "2rem",
  },
};

export const light = {
  ...basicTheme,
  name: "light-theme",
  colors: {
    background: "#ECF0F3",
    white: "#ffff",
    black: "#0000",
    light: "#dce1e4",
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
    light: "#dce1e4",
    primary: "#ff014f",
    gray: "#3c3e41",
    blueDark: "#1e2125",
    textHeading: "#ffffff",
    textContent: "#878e99",
    shadow: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
    gradientBox: "linear-gradient(145deg, #1e2024, #23272b)",
  },
};

export const theme = light;
