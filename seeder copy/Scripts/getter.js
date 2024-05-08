import data from "./storage/phones.json" with { type: "json" };
export async function starter() {
  const phones = [];
    //const ur=new URL("")
 
    fetch("/Scripts/storage/phones.json")
      .then((res) => res.json())
      .then((json) => {
        phones.push(json);
      });
  
  console.log(phones);
}

console.log(data);