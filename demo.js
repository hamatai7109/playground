let dbBuilder = {
  name: 'Taishi',
  mode: "fetch",
  table: 'User',
  cond: {Email: 'stanley@gmail.com'},
  select: ['HashedPassword', 'ID', 'Position', 'Name'],
  single: true
}

console.log(dbBuilder.table)
console.log(Object.keys(dbBuilder.cond))
console.log(dbBuilder.cond.Email)

if ('select' in dbBuilder) {
  console.log("select exists.")
}else{
  console.log("select doesn't exist.")
}

for (i = 0; i < dbBuilder.select.length; i++){
  console.log(dbBuilder.select[i])
}
