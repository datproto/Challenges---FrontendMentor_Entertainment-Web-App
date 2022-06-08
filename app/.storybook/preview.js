import '../src/styles/globals.css'

const customViewports = {
  mobile: {
    name: 'Mobile',
    styles: {
      width: '640px',
      height: '1136px',
    },
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  tablet_lg: {
    name: 'Tablet - Large',
    styles: {
      width: '1024px',
      height: '768px',
    },
  },
  laptop: {
    name: 'Laptop',
    styles: {
      width: '1280px',
      height: '800px',
    },
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1536px',
      height: '864px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#10141E',
      },
      {
        name: 'white',
        value: '#fff',
      },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports },
}