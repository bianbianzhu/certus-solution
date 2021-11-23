export const currentPageItemsGenerator = (
  allItems,
  currentPage,
  itemsPerPage
) => {
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPageItems = allItems.slice(indexOfFirstItem, indexOfLastItem);
  //currentPage = 1, itemsPerPage = 10
  //lastItem = 10, firstItem = 0
  //pageItems = 0 - 9
  //In this design, currentPage MUST start from 1
  return currentPageItems;
};
