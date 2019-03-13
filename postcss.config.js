/* eslint-disable object-shorthand */
/* eslint-disable func-names */
module.exports = {
    plugins: {
        "postcss-import": {
            resolve: function(id, basedir, importOptions) {
                if (id === "variables.css") {
                    return `${importOptions.root}/src/assets/css/variables.css`;
                }
                return id;
            },
        },
        "postcss-units": {},
        "postcss-property-lookup": {},
        "postcss-each": {},
        "postcss-mixins": {},
        "postcss-preset-env": {
            stage: 4,
            features: {
                "custom-properties": {
                    preserve: false,
                    strict: false, // don't output fallback values for variables
                },
                "image-set-function": {},
                "media-query-ranges": {},
                "custom-media-queries": {
                    importFrom: [
                        {
                            customMedia: {
                                "--tiny": "(width >= 320px)",
                                "--xsmall": "(width >= 420px)",
                                "--small": "(width >= 544px)",
                                "--medium": "(width >= 769px)",
                                "--large": "(width >= 920px)",
                                "--xlarge": "(width >= 1024px)",
                                "--xxlarge": "(width >= 1200px)",
                            },
                        },
                    ],
                },
                "rebeccapurple-color": {},
                "all-property": {},
                "not-pseudo-class": {},
                "overflow-wrap-property": {},
            },
        },
        "postcss-inline-svg": {},
        "postcss-svgo": {},
        "postcss-nesting": {},
        "postcss-color-function": {},
        "postcss-calc": {},
        autoprefixer: {
            grid: "autoplace",
        },
    },
};
