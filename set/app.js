const set1 = new Set();

set1.add("1000");
set1.add(100);
set1.add({name:"Henry"});
set1.add(true);

for(let c of set1) {
    console.log(c)
}
