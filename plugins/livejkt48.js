Success
const _0x3f2e23 = _0x2267;
(function (_0x455968, _0x2f7e4e) {
    const _0x5c961a = _0x2267, _0x58e964 = _0x455968();
    while (!![]) {
        try {
            const _0x49233c = parseInt(_0x5c961a(0x1e4)) / (-0x3c * 0x41 + -0x61e + 0x7 * 0x30d) * (-parseInt(_0x5c961a(0x196)) / (-0x1 * -0x1d + 0xc55 + -0xc70)) + -parseInt(_0x5c961a(0x1b1)) / (0xfab * 0x1 + 0x1c2d + -0x2bd5) * (-parseInt(_0x5c961a(0x216)) / (-0x3d * 0x59 + 0x6b * 0x3b + -0x370)) + -parseInt(_0x5c961a(0x198)) / (0x1e81 + 0x14e * 0x5 + -0x2502) + -parseInt(_0x5c961a(0x1c6)) / (-0x734 * 0x2 + 0x2025 + 0x38b * -0x5) + parseInt(_0x5c961a(0x20b)) / (-0x1b12 + 0x249f + 0x986 * -0x1) + -parseInt(_0x5c961a(0x19e)) / (0x2702 + 0x1 * -0x727 + -0x1fd3) * (parseInt(_0x5c961a(0x1f7)) / (-0xf1d + -0x21f6 + 0x311c)) + -parseInt(_0x5c961a(0x1ec)) / (-0x10a2 + 0x25c0 + -0x1514) * (-parseInt(_0x5c961a(0x1fa)) / (-0x8e1 * -0x3 + 0x250 * -0xb + 0x128 * -0x1));
            if (_0x49233c === _0x2f7e4e)
                break;
            else
                _0x58e964['push'](_0x58e964['shift']());
        } catch (_0x1daa71) {
            _0x58e964['push'](_0x58e964['shift']());
        }
    }
}(_0x1e11, -0x15 * -0x10690 + -0x5f069 * -0x4 + -0x1fb561));
import _0x29eea7 from 'axios';
import _0x187565 from 'nodemailer';
import {
    GROUP_IDS,
    CHANNEL_IDS
} from '../config.js';
const debugLog = (_0x1453c8, _0x2bf80b = null, _0x39483f = ![]) => {
    const _0xfe0f9c = _0x2267, _0x20370a = {
            'tCoTD': _0xfe0f9c(0x1ac),
            'pmljn': _0xfe0f9c(0x220) + 'd',
            'ozhVh': _0xfe0f9c(0x1de),
            'LNPLm': _0xfe0f9c(0x1d3),
            'bhgah': function (_0x2b1847, _0x34c3de) {
                return _0x2b1847 && _0x34c3de;
            }
        };
    if (_0x39483f || _0x1453c8[_0xfe0f9c(0x19b)](_0x20370a[_0xfe0f9c(0x1e9)]) || _0x1453c8[_0xfe0f9c(0x19b)](_0x20370a[_0xfe0f9c(0x1a3)])) {
        console[_0xfe0f9c(0x206)]('[' + (_0x39483f ? _0x20370a[_0xfe0f9c(0x1f8)] : _0x20370a[_0xfe0f9c(0x199)]) + ']\x20' + _0x1453c8);
        if (_0x20370a[_0xfe0f9c(0x205)](_0x2bf80b, _0x39483f))
            console[_0xfe0f9c(0x221)](_0x2bf80b);
    }
};
let isCheckingLive = ![], checkInterval;
const sentEvents = new Set(), EMAIL_COOLDOWN = 0x5 * 0x5df7 + -0x2cd14 * 0x3 + 0x2b * 0x425b, lastEmailSent = new Map();
function _0x2267(_0xec5a6, _0x2bac42) {
    _0xec5a6 = _0xec5a6 - (-0x22a0 + 0x9de + -0x1a53 * -0x1);
    const _0x4fd8f3 = _0x1e11();
    let _0x5e3bc4 = _0x4fd8f3[_0xec5a6];
    return _0x5e3bc4;
}
let lastErrorTime = -0x1 * -0x313 + 0x1f0d * -0x1 + 0x2 * 0xdfd;
const ERROR_COOLDOWN = -0x39a6 * 0x5 + -0x1408b + 0x34b29, CHAT_IDS = [
        ...GROUP_IDS,
        ...CHANNEL_IDS
    ], getStreamingUrl = _0x5b5f9e => {
        const _0x28c9e8 = _0x2267, _0x140ea9 = {
                'hZnRr': function (_0x509697, _0x2a0e69) {
                    return _0x509697 === _0x2a0e69;
                },
                'vqMaQ': _0x28c9e8(0x1c9),
                'pRyQq': function (_0x51f839, _0x5d6ff6) {
                    return _0x51f839 > _0x5d6ff6;
                },
                'MjPkG': function (_0x4a0604, _0x2fbbd7) {
                    return _0x4a0604 - _0x2fbbd7;
                },
                'MHlvU': function (_0x5b9106, _0xf38bb, _0x4db63b, _0x1eda67) {
                    return _0x5b9106(_0xf38bb, _0x4db63b, _0x1eda67);
                },
                'GxiUm': _0x28c9e8(0x1a9) + _0x28c9e8(0x1a5) + 'l:'
            };
        try {
            const {
                type: _0x1d8fba,
                streaming_url_list: _0x3717ea
            } = _0x5b5f9e;
            if (!_0x3717ea?.[_0x28c9e8(0x19c)])
                return null;
            if (_0x140ea9[_0x28c9e8(0x1b0)](_0x1d8fba, _0x140ea9[_0x28c9e8(0x21b)]))
                return _0x3717ea[_0x28c9e8(0x1ae)]((_0x43502e, _0x21fdb7) => (_0x21fdb7[_0x28c9e8(0x1fd)] || -0x626 + -0x17 + 0x1 * 0x63d) - (_0x43502e[_0x28c9e8(0x1fd)] || -0x1 * 0x1c81 + 0x218c + 0x1 * -0x50b))[0x106d * -0x1 + -0x1 * 0x1dba + -0x11 * -0x2b7][_0x28c9e8(0x1c7)];
            return _0x3717ea[-0x1 * 0x1e71 + 0x2298 + -0x427][_0x28c9e8(0x1c7)];
        } catch (_0x1fe657) {
            const _0x1a05fc = Date[_0x28c9e8(0x1ea)]();
            return _0x140ea9[_0x28c9e8(0x1cf)](_0x140ea9[_0x28c9e8(0x219)](_0x1a05fc, lastErrorTime), ERROR_COOLDOWN) && (_0x140ea9[_0x28c9e8(0x1b6)](debugLog, _0x140ea9[_0x28c9e8(0x21e)], _0x1fe657, !![]), lastErrorTime = _0x1a05fc), null;
        }
    }, transporter = _0x187565[_0x3f2e23(0x1c4) + _0x3f2e23(0x1dd)]({
        'service': _0x3f2e23(0x1b8),
        'auth': {
            'user': _0x3f2e23(0x1e3) + _0x3f2e23(0x21c) + 'om',
            'pass': _0x3f2e23(0x1bc) + _0x3f2e23(0x1e7)
        }
    }), sendEmailNotification = async (_0x337ae2, _0x23d2b5, _0x4a0db0) => {
        const _0x3c04fa = _0x3f2e23, _0x585fb8 = {
                'xrzth': function (_0x439d57, _0x41fd83) {
                    return _0x439d57 < _0x41fd83;
                },
                'SzOhq': function (_0x1fcf20, _0x185af5) {
                    return _0x1fcf20 - _0x185af5;
                },
                'mbAKD': _0x3c04fa(0x1e3) + _0x3c04fa(0x21c) + 'om',
                'udGvw': _0x3c04fa(0x1ba) + _0x3c04fa(0x1a7) + 'om',
                'cIaxM': function (_0x52bd79, _0x558012, _0x2373a6, _0x32783c) {
                    return _0x52bd79(_0x558012, _0x2373a6, _0x32783c);
                },
                'XJfpo': _0x3c04fa(0x192) + 'r:'
            }, _0x10dfbe = Date[_0x3c04fa(0x1ea)](), _0x2b3c0b = lastEmailSent[_0x3c04fa(0x19f)](_0x337ae2) || -0x2314 + 0x5b9 + 0x1d5b;
        if (_0x585fb8[_0x3c04fa(0x1b5)](_0x585fb8[_0x3c04fa(0x200)](_0x10dfbe, _0x2b3c0b), EMAIL_COOLDOWN))
            return;
        try {
            await transporter[_0x3c04fa(0x1fe)]({
                'from': _0x585fb8[_0x3c04fa(0x1d4)],
                'to': _0x585fb8[_0x3c04fa(0x197)],
                'subject': _0x3c04fa(0x1fb) + _0x337ae2,
                'text': _0x337ae2 + _0x3c04fa(0x1d8) + _0x23d2b5 + '\x0a' + _0x4a0db0
            }), lastEmailSent[_0x3c04fa(0x1f1)](_0x337ae2, _0x10dfbe);
        } catch (_0x501eae) {
            _0x585fb8[_0x3c04fa(0x214)](debugLog, _0x585fb8[_0x3c04fa(0x1b2)], _0x501eae, !![]);
        }
    }, getFormattedDateTimeWIB = _0x3a4dc7 => {
        const _0x76d314 = _0x3f2e23, _0x101e52 = {
                'aWLrM': function (_0x525f02, _0x3ff7ec) {
                    return _0x525f02 + _0x3ff7ec;
                },
                'octRL': function (_0x44ddc5, _0x5ab44c) {
                    return _0x44ddc5 * _0x5ab44c;
                },
                'TJUVf': _0x76d314(0x224),
                'jrkwi': _0x76d314(0x210)
            }, _0x509950 = new Date(_0x3a4dc7), _0x83ff39 = _0x101e52[_0x76d314(0x1f4)](_0x509950[_0x76d314(0x1c5)](), _0x101e52[_0x76d314(0x1e6)](_0x509950[_0x76d314(0x21f) + _0x76d314(0x223)](), 0x274c + 0x1ca0 + 0xa674)), _0x5ef9a8 = new Date(_0x101e52[_0x76d314(0x1f4)](_0x83ff39, _0x101e52[_0x76d314(0x1e6)](0x264e + 0x97 * -0x17 + -0xc5b * 0x2, -0x304447 * -0x2 + -0xde758 + -0x3e33 * 0x72)));
        return {
            'date': _0x5ef9a8[_0x76d314(0x1dc) + _0x76d314(0x1cd)](_0x101e52[_0x76d314(0x20a)]),
            'time': _0x101e52[_0x76d314(0x1f4)](_0x5ef9a8[_0x76d314(0x1ad) + _0x76d314(0x1b4)](_0x101e52[_0x76d314(0x20a)]), _0x101e52[_0x76d314(0x1df)])
        };
    }, formatMessage = (_0x2042f5, _0x596bea) => {
        const _0x262cd3 = _0x3f2e23, _0x4e800d = {
                'YvAaB': function (_0x5e7442, _0x1bf68d) {
                    return _0x5e7442 === _0x1bf68d;
                },
                'jOsbG': _0x262cd3(0x1c9),
                'SShou': _0x262cd3(0x1ff),
                'GjWjs': _0x262cd3(0x1e5),
                'KoOvf': function (_0x32844c, _0x56285f) {
                    return _0x32844c + _0x56285f;
                },
                'ctdFF': function (_0x9e12f4, _0x2264b7) {
                    return _0x9e12f4 + _0x2264b7;
                }
            }, _0x1c26da = _0x4e800d[_0x262cd3(0x21a)](_0x2042f5[_0x262cd3(0x1ee)], _0x4e800d[_0x262cd3(0x209)]) ? _0x4e800d[_0x262cd3(0x1ab)] : _0x4e800d[_0x262cd3(0x1eb)];
        return _0x4e800d[_0x262cd3(0x1a0)](_0x4e800d[_0x262cd3(0x1a0)](_0x4e800d[_0x262cd3(0x20f)](_0x262cd3(0x1d6) + _0x2042f5[_0x262cd3(0x1d0)] + _0x262cd3(0x1d2) + _0x1c26da + _0x262cd3(0x208), _0x262cd3(0x1c2) + _0x596bea[_0x262cd3(0x1f0)] + '\x0a'), _0x262cd3(0x1b7) + _0x596bea[_0x262cd3(0x1a2)] + '\x0a\x0a'), _0x262cd3(0x211));
    }, checkAndSendMessage = async _0x2ad0aa => {
        const _0x5706bf = _0x3f2e23, _0x408434 = {
                'HLuhP': _0x5706bf(0x217) + _0x5706bf(0x1f5) + _0x5706bf(0x194) + _0x5706bf(0x1e0) + _0x5706bf(0x201),
                'ZpkAK': function (_0x134a56, _0x22c047) {
                    return _0x134a56(_0x22c047);
                },
                'YIzZw': function (_0x4ae970, _0x4b64b2) {
                    return _0x4ae970 + _0x4b64b2;
                },
                'xtmMj': function (_0x2c91af, _0x405d4f, _0x247733) {
                    return _0x2c91af(_0x405d4f, _0x247733);
                },
                'Tkfbc': _0x5706bf(0x19d) + _0x5706bf(0x1da),
                'BDvkH': function (_0x521807, _0x210d4c, _0x2a13f5, _0x52fb23) {
                    return _0x521807(_0x210d4c, _0x2a13f5, _0x52fb23);
                },
                'wbFXK': _0x5706bf(0x1d7)
            };
        if (!isCheckingLive)
            return;
        try {
            const {data: _0x26f948} = await _0x29eea7[_0x5706bf(0x19f)](_0x408434[_0x5706bf(0x1bd)]), _0x475490 = new Set();
            for (const _0x4b49c1 of _0x26f948 || []) {
                if (!_0x4b49c1[_0x5706bf(0x1d0)] || !_0x4b49c1[_0x5706bf(0x1c0)])
                    continue;
                _0x475490[_0x5706bf(0x1cb)](_0x4b49c1[_0x5706bf(0x1d0)]);
                if (sentEvents[_0x5706bf(0x1f9)](_0x4b49c1[_0x5706bf(0x1d0)]))
                    continue;
                const _0x354d95 = _0x408434[_0x5706bf(0x1f2)](getStreamingUrl, _0x4b49c1);
                if (!_0x354d95)
                    continue;
                const _0x52b11a = _0x408434[_0x5706bf(0x1f2)](getFormattedDateTimeWIB, _0x4b49c1[_0x5706bf(0x1c0)]), _0x5c450f = _0x408434[_0x5706bf(0x1c1)](_0x408434[_0x5706bf(0x1b9)](formatMessage, _0x4b49c1, _0x52b11a), _0x354d95), _0x2914d4 = {
                        'text': _0x5c450f,
                        'contextInfo': {
                            'externalAdReply': {
                                'title': _0x4b49c1[_0x5706bf(0x1d0)] + _0x5706bf(0x1bb),
                                'body': _0x408434[_0x5706bf(0x1c8)],
                                'thumbnailUrl': _0x4b49c1[_0x5706bf(0x1db)],
                                'mediaUrl': _0x354d95,
                                'sourceUrl': _0x354d95
                            }
                        }
                    };
                for (const _0x30dd05 of CHAT_IDS) {
                    await _0x2ad0aa[_0x5706bf(0x207) + 'e'](_0x30dd05, _0x2914d4)[_0x5706bf(0x1ef)](() => {
                    });
                }
                sentEvents[_0x5706bf(0x1cb)](_0x4b49c1[_0x5706bf(0x1d0)]), await _0x408434[_0x5706bf(0x20c)](sendEmailNotification, _0x4b49c1[_0x5706bf(0x1d0)], _0x4b49c1[_0x5706bf(0x1ee)], _0x354d95);
            }
            for (const _0x18b743 of sentEvents) {
                if (!_0x475490[_0x5706bf(0x1f9)](_0x18b743))
                    sentEvents[_0x5706bf(0x191)](_0x18b743);
            }
        } catch (_0x381358) {
            _0x408434[_0x5706bf(0x20c)](debugLog, _0x408434[_0x5706bf(0x1d5)], _0x381358, !![]);
        }
    }, handler = async (_0x3cf28d, {
        conn: _0x2362c3,
        command: _0x587f0f,
        isOwner: _0x41be2b
    }) => {
        const _0x55f3d5 = _0x3f2e23, _0x323c06 = {
                'Kdjnn': _0x55f3d5(0x1bf) + _0x55f3d5(0x202),
                'jBYik': function (_0x1ca1ec, _0x24e1f9) {
                    return _0x1ca1ec === _0x24e1f9;
                },
                'ldKDZ': _0x55f3d5(0x1af),
                'tDbMs': _0x55f3d5(0x1be),
                'ebAhO': _0x55f3d5(0x1a6) + _0x55f3d5(0x1c3),
                'gDXQU': function (_0x33a1c8, _0x35f32c) {
                    return _0x33a1c8(_0x35f32c);
                },
                'KbYdW': _0x55f3d5(0x1a6) + _0x55f3d5(0x195),
                'vChPw': _0x55f3d5(0x1a4) + 'f.',
                'eQQTT': function (_0x30fa4f, _0x2483f2, _0x5c0902) {
                    return _0x30fa4f(_0x2483f2, _0x5c0902);
                },
                'ndTTY': function (_0x3b9d7e, _0x480c3d) {
                    return _0x3b9d7e === _0x480c3d;
                },
                'CSemw': _0x55f3d5(0x1d1),
                'cUZgk': _0x55f3d5(0x1ed),
                'zOVQn': _0x55f3d5(0x1a6) + _0x55f3d5(0x203) + _0x55f3d5(0x1cc),
                'urIPV': _0x55f3d5(0x204) + 'f.',
                'ILRFO': _0x55f3d5(0x1a6) + _0x55f3d5(0x1f3) + 'ed',
                'uYRaa': function (_0x5cb72f, _0x37772f) {
                    return _0x5cb72f(_0x37772f);
                }
            };
        if (!_0x41be2b)
            return _0x3cf28d[_0x55f3d5(0x222)](_0x323c06[_0x55f3d5(0x1aa)]);
        if (_0x323c06[_0x55f3d5(0x1e2)](_0x587f0f, _0x323c06[_0x55f3d5(0x213)])) {
            const _0x594f86 = _0x323c06[_0x55f3d5(0x1a8)][_0x55f3d5(0x1d9)]('|');
            let _0xc9e199 = 0x1b70 + 0x23ab * 0x1 + 0x3f1b * -0x1;
            while (!![]) {
                switch (_0x594f86[_0xc9e199++]) {
                case '0':
                    return _0x3cf28d[_0x55f3d5(0x222)](_0x323c06[_0x55f3d5(0x20e)]);
                case '1':
                    isCheckingLive = !![];
                    continue;
                case '2':
                    _0x323c06[_0x55f3d5(0x1ce)](debugLog, _0x323c06[_0x55f3d5(0x1ca)]);
                    continue;
                case '3':
                    if (isCheckingLive)
                        return _0x3cf28d[_0x55f3d5(0x222)](_0x323c06[_0x55f3d5(0x20d)]);
                    continue;
                case '4':
                    checkInterval = _0x323c06[_0x55f3d5(0x1e1)](setInterval, () => checkAndSendMessage(_0x2362c3), 0x1011 + -0x1bde + 0x80fd);
                    continue;
                }
                break;
            }
        }
        if (_0x323c06[_0x55f3d5(0x19a)](_0x587f0f, _0x323c06[_0x55f3d5(0x21d)])) {
            const _0x257c0f = _0x323c06[_0x55f3d5(0x212)][_0x55f3d5(0x1d9)]('|');
            let _0x4a7910 = -0x113 + 0x189 * 0x16 + -0x20b3;
            while (!![]) {
                switch (_0x257c0f[_0x4a7910++]) {
                case '0':
                    return _0x3cf28d[_0x55f3d5(0x222)](_0x323c06[_0x55f3d5(0x1e8)]);
                case '1':
                    if (!isCheckingLive)
                        return _0x3cf28d[_0x55f3d5(0x222)](_0x323c06[_0x55f3d5(0x215)]);
                    continue;
                case '2':
                    isCheckingLive = ![];
                    continue;
                case '3':
                    _0x323c06[_0x55f3d5(0x1ce)](debugLog, _0x323c06[_0x55f3d5(0x193)]);
                    continue;
                case '4':
                    _0x323c06[_0x55f3d5(0x1fc)](clearInterval, checkInterval);
                    continue;
                }
                break;
            }
        }
    };
function _0x1e11() {
    const _0x170877 = [
        'er\x20aktif\x20✅',
        'createTran',
        'getTime',
        '1176240YlCqxo',
        'url',
        'Tkfbc',
        'showroom',
        'KbYdW',
        'add',
        'an\x20❌',
        'teString',
        'gDXQU',
        'pRyQq',
        'name',
        'stoplive',
        '*\x20Live\x20di\x20',
        'INFO',
        'mbAKD',
        'wbFXK',
        '🎉\x20*',
        'API\x20error:',
        '\x20live\x20di\x20',
        'split',
        'atkan!',
        'img',
        'toLocaleDa',
        'sport',
        'ERROR',
        'jrkwi',
        'now_live?g',
        'eQQTT',
        'jBYik',
        'jkt48conne',
        '1128233mRkOWE',
        'IDN\x20Live',
        'octRL',
        'poigvb',
        'zOVQn',
        'tCoTD',
        'now',
        'GjWjs',
        '22004270BhKpLW',
        '1|2|4|3|0',
        'type',
        'catch',
        'date',
        'set',
        'ZpkAK',
        '\x20deactivat',
        'aWLrM',
        'i.crstlnz.',
        'help',
        '4745151mvUgxY',
        'ozhVh',
        'has',
        '11rjkubY',
        'Live:\x20',
        'uYRaa',
        'quality',
        'sendMail',
        'SHOWROOM',
        'SzOhq',
        'roup=jkt48',
        'er.',
        'er\x20dimatik',
        'Belum\x20akti',
        'bhgah',
        'log',
        'sendMessag',
        '!\x0a\x0a',
        'jOsbG',
        'TJUVf',
        '10512173AJlRlf',
        'BDvkH',
        'vChPw',
        'ebAhO',
        'ctdFF',
        '\x20WIB',
        '🔗\x20',
        'cUZgk',
        'ldKDZ',
        'cIaxM',
        'urIPV',
        '8DDVFep',
        'https://ap',
        'tags',
        'MjPkG',
        'YvAaB',
        'vqMaQ',
        'ct@gmail.c',
        'CSemw',
        'GxiUm',
        'getTimezon',
        'deactivate',
        'error',
        'reply',
        'eOffset',
        'id-ID',
        'delete',
        'Email\x20erro',
        'ILRFO',
        'my.id/api/',
        '\x20activated',
        '2TfSYii',
        'udGvw',
        '7378910bMAIwv',
        'LNPLm',
        'ndTTY',
        'includes',
        'length',
        'Jangan\x20lew',
        '16dXZaRP',
        'get',
        'KoOvf',
        'command',
        'time',
        'pmljn',
        'Sudah\x20akti',
        'treamingUr',
        'Live\x20check',
        '89@gmail.c',
        'tDbMs',
        'Error\x20getS',
        'Kdjnn',
        'SShou',
        'activated',
        'toLocaleTi',
        'sort',
        'startlive',
        'hZnRr',
        '1564131PMlvKv',
        'XJfpo',
        'jkt48',
        'meString',
        'xrzth',
        'MHlvU',
        '🕒\x20',
        'gmail',
        'xtmMj',
        'omahjamuku',
        '\x20Live',
        'yffkdsunrx',
        'HLuhP',
        '3|1|4|2|0',
        'Khusus\x20own',
        'started_at',
        'YIzZw',
        '🗓️\x20'
    ];
    _0x1e11 = function () {
        return _0x170877;
    };
    return _0x1e11();
}
handler[_0x3f2e23(0x1a1)] = /^(startlive|stoplive)$/i, handler[_0x3f2e23(0x1f6)] = [
    _0x3f2e23(0x1af),
    _0x3f2e23(0x1d1)
], handler[_0x3f2e23(0x218)] = [_0x3f2e23(0x1b3)];
export default handler;