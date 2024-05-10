async function  fr(){
    const res=await fetch("http://localhost:3000")
    console.log(await res.json());
}
 fr()