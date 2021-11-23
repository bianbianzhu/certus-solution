export const filterUniqueValue = (array) => {
  const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  };

  return [...array].filter(onlyUnique);
};
