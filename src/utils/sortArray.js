//======================Amount===========================
export const sortAmountAscending = (array, key) => {
  const result = [...array].sort((a, b) => {
    return a[key] - b[key];
  });

  return result;
};

export const sortAmountDescending = (array, key) => {
  const result = [...array].sort((a, b) => {
    return a[key] - b[key];
  });

  return result.reverse();
};

//=====================Dates============================
//===IMPORTANT! new Date reads 08/05/2021 as Aug 05 2021 (I didn't even notice this before)
//better to covert all date string to yyyy-mm-dd before any processing

export const sortDateAscending = (array, key) => {
  const result = [...array].sort((a, b) => {
    return new Date(a[key]) - new Date(b[key]);
  });

  return result;
};

export const sortDateDescending = (array, key) => {
  const result = [...array].sort((a, b) => {
    console.log("a is " + new Date(a[key]));
    console.log("b is " + new Date(b[key]));
    return new Date(a[key]) - new Date(b[key]);
  });

  return result.reverse();
};

//=====================text=================================

export const sortTextA2V = (array, key) => {
  const result = [...array].sort((a, b) =>
    a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0
  );

  return result;
};

export const sortTextV2A = (array, key) => {
  const result = [...array].sort((a, b) =>
    a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0
  );

  return result.reverse();
};
