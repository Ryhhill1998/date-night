const randomNumber = (inclStart, exclEnd) => {
  return Math.floor(Math.random() * (exclEnd - inclStart)) + inclStart;
};

export default randomNumber;
