var sort = 1;
var columnString = "";
console.log(sort+"-sort");
switch(sort){
  case 1: columnString = "type_perm"; break;
  case 2: columnString = "type_dye"; break;
  case 3: columnString = "type_cut"; break;
  case 4: columnString = "type_ect"; break;
  case 0: columnString = "1"; break;
}
console.log(columnString);
let select_query =
"select * from notice_list where "+columnString+" = 1 order by written_time desc";

console.log(select_query);
