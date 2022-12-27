import { GlobalStyle } from "../src/utils/Global";

const withTheme = (StoryFn) => {
  return (
    <>
      <GlobalStyle />
      <StoryFn />
    </>
  );
};

export const globalDecorators = [withTheme];
