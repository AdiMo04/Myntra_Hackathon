const _0x5a5979 = _0x300c;
(function (_0x4a9ddb, _0x2c6455) {
    const _0x34a17e = _0x300c,
        _0x5d12f6 = _0x4a9ddb();
    while (!![]) {
        try {
            const _0x3b030b = -parseInt(_0x34a17e(0x10f)) / 0x1 * (-parseInt(_0x34a17e(0x112)) / 0x2) + -parseInt(_0x34a17e(0xf0)) / 0x3 + parseInt(_0x34a17e(0xfe)) / 0x4 + -parseInt(_0x34a17e(0xf9)) / 0x5 + parseInt(_0x34a17e(0x100)) / 0x6 * (parseInt(_0x34a17e(0xef)) / 0x7) + parseInt(_0x34a17e(0x10b)) / 0x8 * (-parseInt(_0x34a17e(0x103)) / 0x9) + parseInt(_0x34a17e(0x10a)) / 0xa;
            if (_0x3b030b === _0x2c6455) break;
            else _0x5d12f6['push'](_0x5d12f6['shift']());
        } catch (_0x348ffd) {
            _0x5d12f6['push'](_0x5d12f6['shift']());
        }
    }
}(_0xb1ce, 0xcfdf1));

function _0x300c(_0xade57f, _0x3d5260) {
    const _0xb1ce5 = _0xb1ce();
    return _0x300c = function (_0x300c65, _0x16a49e) {
        _0x300c65 = _0x300c65 - 0xee;
        let _0x2beecd = _0xb1ce5[_0x300c65];
        return _0x2beecd;
    }, _0x300c(_0xade57f, _0x3d5260);
}

const apiKey = _0x5a5979(0x10d),
    maxImages = 0x3;

function _0xb1ce() {
    const _0x4c9134 = ['createObjectURL', 'random', 'application/json', '9780530ayEiKB', '8txlHSo', 'image-grid', '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', 'remove', '11243jnBPLr', 'alt', 'POST', '26poHRpj', 'add', 'src', 'click', 'value', 'generate-btn', 'push', '126yFauVm', '1768371hrUZah', 'disabled', 'onclick', 'floor', 'appendChild', 'artwork-', 'hidden', 'blob', 'loading', '1306845mASIls', 'img', 'innerHTML', 'user-prompt', 'href', '661640ylnZei', 'Failed\x20to\x20generate\x20image!\x20Please\x20try\x20again\x20in\x20a\x20few\x20minutes.', '429618GoaaIC', 'getElementById', 'Bearer\x20', '7885881agsihZ', '.png', 'createElement', 'https://api-inference.huggingface.co/models/segmind/SSD-1B'];
    _0xb1ce = function () {
        return _0x4c9134;
    };
    return _0xb1ce();
}

function getRandomNumber(_0x5a9793, _0x3450a4) {
    const _0x2237a1 = _0x5a5979;
    return Math[_0x2237a1(0xf3)](Math[_0x2237a1(0x108)]() * (_0x3450a4 - _0x5a9793 + 0x1)) + _0x5a9793;
}

function disableGenerateButton() {
    const _0x10cff2 = _0x5a5979;
    document[_0x10cff2(0x101)](_0x10cff2(0x117))['disabled'] = !![];
}

function enableGenerateButton() {
    const _0x51a54b = _0x5a5979;
    document[_0x51a54b(0x101)](_0x51a54b(0x117))[_0x51a54b(0xf1)] = ![];
}

function clearImageGrid() {
    const _0x11c9f9 = _0x5a5979,
        _0x43f63f = document[_0x11c9f9(0x101)](_0x11c9f9(0x10c));
    _0x43f63f[_0x11c9f9(0xfb)] = '';
}

async function generateImages(_0x42704b) {
    const _0x482362 = _0x5a5979;
    disableGenerateButton(), clearImageGrid();
    const _0x100bdb = document[_0x482362(0x101)](_0x482362(0xf8));
    _0x100bdb['classList'][_0x482362(0x10e)](_0x482362(0xf6));
    const _0x3c1e3d = [];
    for (let _0x58b02e = 0x0; _0x58b02e < maxImages; _0x58b02e++) {
        const _0x1fdd07 = getRandomNumber(0x1, 0x2710),
            _0x323ea5 = '{' + _0x42704b + '}\x20' + _0x1fdd07;
        await delay(0x3e8);
        const _0x3754a0 = await fetch(_0x482362(0x106), {
            'method': _0x482362(0x111),
            'headers': {
                'Authorization': _0x482362(0x102) + apiKey,
                'Content-Type': _0x482362(0x109)
            },
            'body': JSON['stringify']({
                'inputs': _0x323ea5
            })
        });
        !_0x3754a0['ok'] && alert(_0x482362(0xff));
        const _0x3f5190 = await _0x3754a0[_0x482362(0xf7)](),
            _0x12b4d5 = URL[_0x482362(0x107)](_0x3f5190);
        _0x3c1e3d[_0x482362(0xee)](_0x12b4d5);
        const _0x4e74d1 = document[_0x482362(0x105)](_0x482362(0xfa));
        _0x4e74d1[_0x482362(0x114)] = _0x12b4d5, _0x4e74d1[_0x482362(0x110)] = _0x482362(0xf5) + (_0x58b02e + 0x1), _0x4e74d1[_0x482362(0xf2)] = () => downloadImage(_0x12b4d5, _0x58b02e), document['getElementById'](_0x482362(0x10c))[_0x482362(0xf4)](_0x4e74d1);
    }
    _0x100bdb['classList'][_0x482362(0x113)](_0x482362(0xf6)), enableGenerateButton();
}

function delay(_0x52dea1) {
    return new Promise(_0x3e25c6 => setTimeout(_0x3e25c6, _0x52dea1));
}

document['getElementById']('generate-btn')[_0x5a5979(0xf2)] = () => {
    const _0x5db801 = _0x5a5979,
        _0x217689 = document[_0x5db801(0x101)](_0x5db801(0xfc))[_0x5db801(0x116)];
    generateImages(_0x217689);
};

function downloadImage(_0x3804b1, _0xc829dd) {
    const _0x4371bd = _0x5a5979,
        _0x42c756 = document[_0x4371bd(0x105)]('a');
    _0x42c756[_0x4371bd(0xfd)] = _0x3804b1, _0x42c756['download'] = _0x4371bd(0xf5) + (_0xc829dd + 0x1) + _0x4371bd(0x104), _0x42c756[_0x4371bd(0x115)]();
}
