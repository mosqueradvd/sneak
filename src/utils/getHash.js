const getHash = () =>
  location.hash.slice(1).toLocaleLowerCase().split("/")[1] || "/";
// user location -> hash user the has ->
// we pass values to the hash, but we need to parse them : /#/1 -> '1'
// w/ slice we delete the first elements of the hash '#'
// toLocaleLowerCase to lowerCase the content
// w/ split, we convert that text to an array. Deleting the "/"'s -> ['', 'id', '']
// finally, we access the number of the element we want ['id'] with the number [1] posi titon
export default getHash;
