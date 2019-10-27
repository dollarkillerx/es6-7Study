function* myGenerator() {
    yield '龙🐉';
    yield '虎🐯';
    yield '生成';
    yield '一';
    yield '堆';
}

for(let val of myGenerator()) {
    console.log(val)
}