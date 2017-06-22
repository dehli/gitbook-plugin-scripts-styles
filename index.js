var _ = require('lodash');
var path = require('path');
var tmp = require('tmp');
var fs = require('fs');
var crypto = require('crypto');

// Small hack for gitbook < 3.0.0
// where the function is called multiple times
var result;

function copyFiles(files) {
    var copiedFiles = []

    files.forEach(function(file) {
        
        var origin = book.resolve(file);

        var filename = hash(origin) + '-' + path.basename(origin);
        var output = path.resolve(tmpobj.name, filename);

        var content = fs.readFileSync(origin);
        fs.writeFileSync(output, content);

        copiedFiles.push(filename);
    });
}

function getAssets() {
    if (!result) {
        var book = this;
        var tmpobj = tmp.dirSync();
        var js = this.config.get('pluginsConfig.scripts-styles.js', []);
        var css = this.config.get('pluginsConfig.scripts-styles.css', []);
        var jsfiles = copyFiles(js);
        var cssFiles = copyFiles(css);

        result = {
            assets: tmpobj.name,
            js: jsfiles,
            css: cssFiles
        };
    }

    return  _.cloneDeep(result);
}

function hash(str) {
    return crypto
        .createHash('md5')
        .update(str, 'utf8')
        .digest('hex');
}

module.exports = {
    website: getAssets
};
