const { red } = require("chalk");

const withTM = require("next-transpile-modules")([
  "@adobe/react-spectrum",
  "@react-spectrum/actiongroup",
  "@react-spectrum/breadcrumbs",
  "@react-spectrum/button",
  "@react-spectrum/buttongroup",
  "@react-spectrum/checkbox",
  "@react-spectrum/combobox",
  "@react-spectrum/dialog",
  "@react-spectrum/divider",
  "@react-spectrum/form",
  "@react-spectrum/icon",
  "@react-spectrum/illustratedmessage",
  "@react-spectrum/image",
  "@react-spectrum/label",
  "@react-spectrum/layout",
  "@react-spectrum/link",
  "@react-spectrum/listbox",
  "@react-spectrum/menu",
  "@react-spectrum/meter",
  "@react-spectrum/numberfield",
  "@react-spectrum/overlays",
  "@react-spectrum/picker",
  "@react-spectrum/progress",
  "@react-spectrum/provider",
  "@react-spectrum/radio",
  "@react-spectrum/slider",
  "@react-spectrum/searchfield",
  "@react-spectrum/statuslight",
  "@react-spectrum/switch",
  "@react-spectrum/tabs",
  "@react-spectrum/table",
  "@react-spectrum/text",
  "@react-spectrum/textfield",
  "@react-spectrum/theme-dark",
  "@react-spectrum/theme-default",
  "@react-spectrum/theme-light",
  "@react-spectrum/tooltip",
  "@react-spectrum/view",
  "@react-spectrum/well",
  "@spectrum-icons/ui",
  "@spectrum-icons/workflow",
]);

const {
  default: MiniCssExtractPlugin,
} = require("next/dist/build/webpack/plugins/mini-css-extract-plugin");

(() => {
  function checkEnvironmentVariables() {
    const requiredVariables = [
      "NEXT_PUBLIC_DOMAIN",
      "SANITY_PROJECT_ID",
      "SANITY_DATASET_ID",
      "SANITY_CLIENT_TOKEN",
      "SANITY_GRAPHQL_ENDPOINT",
    ];

    let isOkFlag = true;

    requiredVariables.forEach((variable) => {
      if (!process.env[variable]) {
        console.log(
          red(
            `'${variable}' is a required environment variable and it's not set.`
          )
        );
        isOkFlag = false;
      }
    });

    if (!isOkFlag && process.env.NODE_ENV === "production") {
      process.exit(1);
    }
  }

  checkEnvironmentVariables();
})();

/**
 * @type {import("next").NextConfig}
 */
const nextConfig = withTM({
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
    deviceSizes: [640, 768, 1080, 1440, 1920, 3840],
  },
  cleanDistDir: true,
  webpack: (config, { isServer }) => {
    if (!isServer && !!Number(process.env.REMOVE_HASH)) {
      config.plugins.forEach((plugin) => {
        if (plugin instanceof MiniCssExtractPlugin) {
          plugin.options.filename = "static/css/[name].css";
        }
      });

      config.output.filename = "static/chunks/[name].js";
    }

    return config;
  },
});

module.exports = nextConfig;
