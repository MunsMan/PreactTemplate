module.exports = {
    setupFiles: [
        "<rootDir>/test/mock/matchMedia.ts",
        "<rootDir>/test/mock/setupTest.ts",
    ],
    testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
    moduleFileExtensions: [
      "ts",
      "tsx",
      "js"
    ],
    transform: {
      "^.+\\.(j|t)sx?$": "ts-jest"
    },
    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "identity-obj-proxy",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|md)$": "<rootDir>/test/mock/fileMocks.ts",
    }
}