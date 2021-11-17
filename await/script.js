const doSomethingWithData = async () => {
  const result = await getData();
  console.log("here is your data to do something:", result);
};

doSomethingWithData();