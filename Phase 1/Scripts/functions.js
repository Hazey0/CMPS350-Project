///////check if user exists and password is correct//////
const checkUser= (use,pass) =>( users.reduce((a,v)=>
use===v.username && pass===v.password ? v : a
));
//////
function searchPhone(keywords){
const searchResult=phones.filter((e)=>
e.brand.toLowerCase()==keywords.reduce((a,v)=> v.toLowerCase()==e.brand.toLowerCase() ? v:a) || 
e.name.toLowerCase().split(" ").includes(keywords.map((d)=> d.toLowerCase()))||
e.year==keywords.reduce((a,v)=> v==e.year ? v:a) ||
e.storage==keywords.reduce((a,v)=> v==e.storage ? v:a)
)};