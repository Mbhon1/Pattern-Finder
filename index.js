document.getElementById("searchSubmit").onclick = () => {
  // user input
  const pattern = document.getElementById("pattern").value;
  const regex = new RegExp(pattern, "g");

  // getting the text to search on textarea
  const searchText = document.getElementById("incoming-text").value;

  let result = "<pre>";
  let startPos = 0;
  let endPos = 0;

  // finding each match and building the results
  const maches = searchText.matchAll(regex);
  for (const match of maches) {
    endPos = match.index();

    // getting all of the string up to the match and then concatenate
    result += searchText.slice(startPos, endPos);

    // adding matched text
    result += `<span class='found'> ${match[0]} </span>`;
    startPos = endPos + match[0].length;
  }
  result += searchText.slice(startPos);
  result += "</pre>";

  // rednering highlighted text after search is complete
  document.getElementById("searchResult").innerHTML = result;
};
