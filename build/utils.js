const path = require('path');
function setFilepath(filepath){
    let rootPath = path.resolve(__dirname, '../');
    return path.resolve(rootPath, filepath);
}

module.exports= {
    setFilepath
};
