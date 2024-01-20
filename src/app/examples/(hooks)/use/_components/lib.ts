export const fetchMessage = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello from mock!");
    }, 3000);
  });
};

export const fetchCannotSerializeData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(() => {
        console.log("Hello from mock!");
      });
    }, 1000);
  });
};
