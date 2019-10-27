let map1 = new Map();

map1.set("k1","this is ke2");
map1.set('fc',function () {
    console.log("hello")
});

map1.get('fc')();