var lunrIndex, results, documents, loaded_documents;

var base_url = "";

function initLunr() {
    if ( ! lunrIndex ) {
        search_index = "/index.json";
        search_index = base_url.concat(search_index);
        $.getJSON(search_index).done(function(index) {
            documents = index;
            lunrIndex = lunr(function () {
                this.field('id');
                this.field('title', { boost: 10 });
                this.field('path');
                this.field('content', { boost: 10 });
                documents.forEach(function(doc) {
                    this.add(doc);
                }, this
                )
            });
        });
    };
}

function display_search_results(query, results) {
    var $search_results = $("#search-results");

    // Are there any results?
    if (results.length) {
        $search_results.empty(); // Clear any old results

        // Iterate over the results
        results.forEach(function(result) {
            res = documents[result.ref];
            
            res.path = base_url.concat(res.path);
            stridx = res.content.indexOf(query);
            preview = res.content.substring(stridx-30, stridx+query.length+30)
            preview = preview.replace(query, '<span class="search-word-found">'+query+'</span>');

            // Build a snippet of HTML for this result
            var appendString = '<tr><td><a href="' + res.path + '">' + res.title + '</a></td><td>...' + preview + '...</td></tr>';

            // Add the snippet to the collection of results.
            $search_results.append(appendString);
        });
    } else {
        // If there are no results, let the user know.
        $search_results.html('<li>>No results found.</li>');
    };
}

$(document).ready(function(){
    initLunr();
    // Event when the search form is submitted
    $("#site-search").submit(function(event){
        event.preventDefault();
        var query = $("#search-term").val(); // Get the value for the text field
        if ( query ) {
            results = lunrIndex.search(query); // Get lunr to perform a search
            display_search_results(query, results); // Hand the results off to be displayed
        };
    });
});
