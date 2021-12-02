declare global {
  interface Window {
    __STATE__: {
      count: number;
      version: number;
    };
  }
}

// Adding this exports the declaration file which Typescript/CRA can now pickup:
export {}