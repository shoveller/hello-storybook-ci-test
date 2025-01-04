import type { Preview } from "@storybook/react";

declare global {
  interface Window {
    __test: boolean;
  }
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

// 테스트 환경을 위한 전역 변수 설정
window.__test = true;

export default preview;
