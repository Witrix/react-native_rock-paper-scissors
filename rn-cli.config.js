const blacklist = require('metro/src/blacklist');
module.exports = {
    getBlacklistRE () {
        return blacklist([
            /react-native\/local-cli\/core\/__fixtures__.*/,
            /.*\.idea\/.*/,
            // ignore git directories
            /.*\.git\/.*/,
            // Ignore android directories
            /.*\/app\/build\/.*/,
        ])
    },
}