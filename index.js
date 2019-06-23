/* global instantsearch */

const search = instantsearch({
  appId: "6II469XZG8",
  apiKey: "8edd9c2dd3f0681b51252b70e339a05b",
  indexName: "Otmane_Test_Index",
  searchParameters: {
    hitsPerPage: 8
  }
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: document.querySelector("#searchBox"),
    placeholder: "Search for movies",
    autofocus: false
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container: document.querySelector("#products"),
    templates: {
      item: "{{{_highlightResult.title.value}}}"
    }
  })
);

search.addWidget(
  instantsearch.widgets.refinementList({
    container: document.querySelector("#products"),
    attributeName: "genre"
  })
);

search.addWidget(
  instantsearch.widgets.pagination({
    container: document.querySelector("#pagination")
  })
);

search.start();
