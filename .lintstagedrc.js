/* eslint-env node */
const path = require('path');

const eslintCommand = (filenames) =>
    `next lint --file ${filenames
        .map((f) => path.relative(process.cwd(), f))
        .join(' --file ')}`;

const formatCommand = 'prettier --write';

module.exports = {
    //  Type check TypeScript files
    'src/**/*.(ts|tsx)': () => 'tsc --noEmit',

    // Lint & Prettify TS and JS files
    'src/**/*.{js,jsx,ts,tsx}': [formatCommand, eslintCommand],
    'src/**/!*.{js,jsx,ts,tsx,css,scss}': [formatCommand],

    // Prettify only Markdown and JSON files
    '**/*.(md|json)': (filenames) =>
        `yarn prettier --write ${path.relative(
            process.cwd(),
            filenames.join(' ')
        )}`
};

// module.exports = {
//     // Type check TypeScript files
//     '**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

//     // Lint & Prettify TS and JS files
//     '**/*.(ts|tsx|js)': (filenames) => [
//         `yarn eslint ${filenames.join(' ')}`,
//         `yarn prettier --write ${filenames.join(' ')}`
//     ],

//     // Prettify only Markdown and JSON files
//     '**/*.(md|json)': (filenames) =>
//         `yarn prettier --write ${filenames.join(' ')}`
// };
