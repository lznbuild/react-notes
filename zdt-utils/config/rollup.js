var typescript = require('rollup-plugin-typescript2');

var pkg = require('../package.json');

var version = pkg.version;

var banner = 
`/*!
 * ${pkg.name} ${version} (https://github.com/luzongnan/zdt-utils)
 * API https://github.com/luzongnan/zdt-utils/blob/master/doc/api.md
 * Copyright 2017-${(new Date).getFullYear()} luzongnan. All Rights Reserved
 * Licensed under MIT (https://github.com/luzongnan/zdt-utils/blob/master/LICENSE)
 */
`;

function getCompiler(opt) {
    opt = opt || {
        tsconfigOverride: { compilerOptions : { module: 'ES2015' } }
    }

    return typescript(opt);
}

exports.name = '@conan/zdt-utils';
exports.banner = banner;
exports.getCompiler = getCompiler;
