function search(nameList, searchTerm) {
    

    //an array to hold the results
    let results = [];

    for (let i = 0; i < nameList.length; i++) {

        const name = nameList[i];
        
        //make the searchTerm lowercase
        searchTerm = searchTerm.toLowerCase();

        //search term as it was input
        let reg = name.includes(searchTerm);

        //search term capitalized
        const str = searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1);
        let cap = name.includes(str);
        
        //if the current name contains the search term
        if(reg || cap){
            //add it to the results array
            results[results.length] = name;
        }
    }

    return results;
}