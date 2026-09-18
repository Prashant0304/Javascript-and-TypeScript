const settings = {
  theme: "dark",
};

const applySettings = ({ theme, fontSize = "16px" }) => {
  console.log(`Theme: ${theme}, Font Size: ${fontSize}`);
};

applySettings(settings);
