const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {
    images: {
        domains: ["cdn.sanity.io"],
        deviceSizes: [640, 768, 1080, 1920, 2560]
    }
});
