'use strict';

const Lab = require('lab');
const Code = require('code');

const lab = exports.lab = Lab.script();
const expect = Code.expect;
const describe = lab.describe;
const it = lab.it;

describe('lib', () => {

    const lib = require('../../');

    it('exports an empty object', (done) => {

        expect(lib).to.be.an.object();
        expect(lib).to.equal({});

        done();
    });
});
