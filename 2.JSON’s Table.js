function judge(array) {
    function jsontable(array) {
        let table = {};
        let printJson = [];
        for (const iterator of array) {
            table = JSON.parse(iterator);
            printJson.push(`<tr>`,
                `<td>${table.name}</td>`,
                `<td>${table.position}</td>`,
                `<td>${table.salary}</td>`,
                `</tr>`);
        }
        return printJson;
    }
    function print() {
        console.log(`<table>`);
        for (const iterator of jsontable(array)) {
            console.log(iterator)
        }
        console.log(`</table>`);
    }
    print();
}