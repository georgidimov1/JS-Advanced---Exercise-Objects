function judge(array) {
    function heroes(array) {
        let arrayNew = [];
        for (let value of array) {
            let obj = {
                "name": value.split(" / ")[0],
                "level": Number(value.split(" / ")[1]),
                "items": (value.split(" / ")[2]) ? (value.split(" / ")[2].split(", ")) : []
            };
            arrayNew.push(obj);
        }
        return JSON.stringify(arrayNew);
    }
    return console.log(heroes(array))
}