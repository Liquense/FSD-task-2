let html2bemjson = require("html2bemjson");
let bemjson2decl = require("bemjson-to-decl");

module.exports = function (content) {
    //отрезаем лишнее, чтоб выполнить функцию
    var functionString = content.toString().replace('module.exports = template;', '');
    var functionPos = functionString.indexOf('function');
    functionString = functionString.replace(functionString.slice(0, functionPos), '');
    functionString += "\n template('')";
    //выполняем функцию, чтоб получить хтмл-код
    var result = eval(functionString);

    if (result == null && result == "") callback("html2bemdecl requires a valid HTML.");

    let callback = this.async();
    let bemjson = html2bemjson.convert(result);
    let decl = bemjson2decl.convert(bemjson);

    console.log(decl);  // Проверим корректность формирования декларации
    callback(null, decl);
};

