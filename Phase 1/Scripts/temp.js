
function searchAlgo(){
    let result=[];
 

    const searchRequest = "galaxy s21"
    let keywords = searchRequest.split(" ");
    const len=keywords.length
    console.log(len);
    keywords.reverse();
    const clearSpace=(li)=>( i.filter((e)=>e!=""))
    ////methods////
    const splits = (a) => a.toLowerCase().split(" ").filter((x)=>x!='');
    const searchInt = (keys, int) => keys.reduce((a, v) => v == int ? true : a, false);
    const searchString = (keys, value) => keys.reduce((a, v) => splits(value).reduce((x, s) => s.startsWith(v)||s.endsWith(v) ? true : x, false) ? true : a, false)
    const searchString2 = (keys, value) => keys.reverse().reduce((a, v) => {
        let r;
        r= splits(value).reverse().reduce((x, s) =>s.endsWith(v) ? true : x, false)

        if(r){
            return true
        }
        r= splits(value).reverse().reduce((x, s) =>s.endsWith(v)? true : x, false);

        
        if(r){
            return true
        }
    })
    


    //////very specific search e.g()///////////1st/////////////
   result= phones.filter((e) =>
    
    (( searchString(keywords, e.brand) && searchInt(keywords, e.storage) ||
        searchString(keywords, e.brand) && searchInt(keywords, e.year) || searchString(keywords, e.name) && searchInt(keywords, e.year) ||
        searchString(keywords, e.name) && searchInt(keywords, e.storage) || searchInt(keywords, e.storage) && searchInt(keywords, e.year) )
                    &&


        (searchString(keywords, e.brand) || searchString(keywords, e.name) ||    searchInt(keywords, e.year) || searchInt(keywords, e.storage)))

    )
    if(notEmpty(result)){
        console.log("1st")
        return result;
    }
///////////2nd search////////////
   if(len==2){
    console.log(len)
    result= phones.filter((e) =>
    
    (

        searchString2(keywords, e.name) )
    )

    if(notEmpty(result)){
        console.log("2nd")
        return result;
    }}
    ///////////3rd search////////////
   if(len==3){
    console.log(len);
    result= phones.filter((e) =>
    
    (

        searchString2(keywords, e.name) )
    )

    if(notEmpty(result)){
        console.log("3rd")
        return result;
    }}
///////////4th search////////////
    result= phones.filter((e) =>
    
    (
        searchString(keywords, e.brand) && searchString(keywords, e.name) )
    )
    if(notEmpty(result)){
        console.log("4th")
        return result;
    }
///////////5th search////////////

    result= phones.filter((e) =>
    
    ((searchString(keywords, e.brand) && searchString(keywords, e.name) || searchString(keywords, e.brand) && searchInt(keywords, e.storage) ||
        searchString(keywords, e.brand) && searchInt(keywords, e.year) || searchString(keywords, e.name) && searchInt(keywords, e.year) ||
        searchString(keywords, e.name) && searchInt(keywords, e.storage) || searchInt(keywords, e.storage) && searchInt(keywords, e.year) )
                    ||


        (searchString(keywords, e.brand) || searchString(keywords, e.name) ||    searchInt(keywords, e.year) || searchInt(keywords, e.storage)))

    )
    if(notEmpty(result)){
        console.log("5th")
        return result;
    }
    

}