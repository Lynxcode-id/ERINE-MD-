const _0x5d380f = _0x21be;
(function (_0x2b4b65, _0xe4cb2e) {
    const _0x5d5fe0 = _0x21be, _0x5f4401 = _0x2b4b65();
    while (!![]) {
        try {
            const _0x5bf853 = parseInt(_0x5d5fe0(0x20e)) / (0x254c + 0x1 * -0x1dfe + -0x74d) + -parseInt(_0x5d5fe0(0x1f0)) / (-0x1150 + -0x5 * -0x6fd + -0x119f) + parseInt(_0x5d5fe0(0xdd)) / (-0xa7 * 0x16 + -0x35 + 0xe92) * (-parseInt(_0x5d5fe0(0x167)) / (-0x1 * 0x1e4d + -0x2613 + -0x5b3 * -0xc)) + parseInt(_0x5d5fe0(0x188)) / (-0x44d * -0x5 + 0x2598 + -0x3b14) * (-parseInt(_0x5d5fe0(0x18d)) / (0x1c71 + 0x12a4 + -0x2f0f)) + -parseInt(_0x5d5fe0(0xb2)) / (-0x1 * 0x11cf + -0xd * 0x50 + 0x15e6) * (parseInt(_0x5d5fe0(0xe2)) / (-0x856 * 0x4 + 0x1 * -0x88f + -0x5f * -0x71)) + -parseInt(_0x5d5fe0(0x143)) / (-0x7 * -0x1b4 + -0x254e + 0x196b) * (parseInt(_0x5d5fe0(0x23f)) / (-0x2 * 0x10ad + 0xa37 + -0x15d * -0x11)) + parseInt(_0x5d5fe0(0x1dd)) / (-0x1ad2 + 0x245d + 0x2 * -0x4c0);
            if (_0x5bf853 === _0xe4cb2e)
                break;
            else
                _0x5f4401['push'](_0x5f4401['shift']());
        } catch (_0x50f626) {
            _0x5f4401['push'](_0x5f4401['shift']());
        }
    }
}(_0x213e, 0xd582 * -0x2 + -0x3 * 0x37df + 0x3ff45), process[_0x5d380f(0x1a2)][_0x5d380f(0xb3) + _0x5d380f(0x23a) + _0x5d380f(0x225)] = '1');
import './config.js';
import _0x4db2c4, { join } from 'path';
import { platform } from 'process';
import {
    fileURLToPath,
    pathToFileURL
} from 'url';
import { createRequire } from 'module';
global[_0x5d380f(0x1b1)] = function filename(_0x1d3951 = import.meta.url, _0x4ec6df = platform !== _0x5d380f(0x1a1)) {
    const _0x550cc3 = _0x5d380f, _0x38dbed = {
            'MAQBq': function (_0x3dbf29, _0x3cda42) {
                return _0x3dbf29(_0x3cda42);
            }
        };
    return _0x4ec6df ? /file:\/\/\//[_0x550cc3(0x199)](_0x1d3951) ? _0x38dbed[_0x550cc3(0x144)](fileURLToPath, _0x1d3951) : _0x1d3951 : _0x38dbed[_0x550cc3(0x144)](pathToFileURL, _0x1d3951)[_0x550cc3(0x23b)]();
}, global[_0x5d380f(0x11e)] = function dirname(_0x419fc6) {
    const _0x3227d1 = _0x5d380f;
    return _0x4db2c4[_0x3227d1(0xd0)](global[_0x3227d1(0x1b1)](_0x419fc6, !![]));
}, global[_0x5d380f(0x208)] = function require(_0x39878c = import.meta.url) {
    const _0x58a7a0 = _0x5d380f, _0x21c9c2 = {
            'EFuvH': function (_0x72f6d7, _0x470632) {
                return _0x72f6d7(_0x470632);
            }
        };
    return _0x21c9c2[_0x58a7a0(0x7b)](createRequire, _0x39878c);
};
import {
    readdirSync,
    statSync,
    unlinkSync,
    existsSync,
    readFileSync,
    watch
} from 'fs';
import _0x4ae480 from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
const argv = _0x4ae480(hideBin(process[_0x5d380f(0x10e)]))[_0x5d380f(0x10e)];
import { spawn } from 'child_process';
import _0x454a1c from 'lodash';
import _0x522a69 from 'syntax-error';
import _0x17289e from 'chalk';
import { tmpdir } from 'os';
import _0x5a3070 from 'readline';
import { format } from 'util';
import _0x4752ab from 'pino';
import _0x2314bf from 'ws';
const {useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, makeInMemoryStore, makeCacheableSignalKeyStore} = await import(_0x5d380f(0x22a) + _0x5d380f(0xde));
import {
    Low,
    JSONFile
} from 'lowdb';
import {
    makeWASocket,
    protoType,
    serialize
} from './lib/simple.js';
import _0x1b4c57 from './lib/cloudDBAdapter.js';
import {
    mongoDB,
    mongoDBV2
} from './lib/mongoDB.js';
const {CONNECTING} = _0x2314bf, {chain} = _0x454a1c, PORT = process[_0x5d380f(0x1a2)][_0x5d380f(0xcd)] || process[_0x5d380f(0x1a2)][_0x5d380f(0xb0) + 'T'] || 0x1 * -0x19ed + 0x845 + 0x1d60;
protoType(), serialize(), global[_0x5d380f(0x18b)] = (_0x40e503, _0x307789 = '/', _0xcb1428 = {}, _0x24729e) => (_0x40e503 in global[_0x5d380f(0xab)] ? global[_0x5d380f(0xab)][_0x40e503] : _0x40e503) + _0x307789 + (_0xcb1428 || _0x24729e ? '?' + new URLSearchParams(Object[_0x5d380f(0x17d)]({
    ..._0xcb1428,
    ..._0x24729e ? { [_0x24729e]: global[_0x5d380f(0x164)][_0x40e503 in global[_0x5d380f(0xab)] ? global[_0x5d380f(0xab)][_0x40e503] : _0x40e503] } : {}
})) : ''), global[_0x5d380f(0xca)] = { 'start': new Date() };
const __dirname = global[_0x5d380f(0x11e)](import.meta.url);
global[_0x5d380f(0x1d0)] = new Object(_0x4ae480(process[_0x5d380f(0x10e)][_0x5d380f(0x77)](-0xc * 0x18f + 0x5 * 0x121 + 0xd11))[_0x5d380f(0xc6) + 's'](![])[_0x5d380f(0x101)]()), global[_0x5d380f(0x1ad)] = new RegExp('^[' + (opts[_0x5d380f(0x1ad)] || _0x5d380f(0x14b) + _0x5d380f(0x218) + _0x5d380f(0x171) + _0x5d380f(0xbc))[_0x5d380f(0x122)](/[|\\{}()[\]^$+*?.\-\^]/g, _0x5d380f(0x1ec)) + ']'), global['db'] = new Low(/https?:\/\//[_0x5d380f(0x199)](opts['db'] || '') ? new _0x1b4c57(opts['db']) : /mongodb(\+srv)?:\/\//i[_0x5d380f(0x199)](opts['db']) ? opts[_0x5d380f(0xbd)] ? new mongoDBV2(opts['db']) : new mongoDB(opts['db']) : new JSONFile((opts['_'][-0x2462 + -0x23e + 0x135 * 0x20] ? opts['_'][-0xe * 0x5f + 0xff4 + 0x66 * -0x1b] + '_' : '') + (_0x5d380f(0x80) + _0x5d380f(0x1ce)))), global[_0x5d380f(0x12c)] = global['db'], global[_0x5d380f(0x11b) + 'se'] = async function loadDatabase() {
    const _0x985b52 = _0x5d380f, _0x39de45 = {
            'HfkDt': function (_0x383228, _0x21275f) {
                return _0x383228(_0x21275f);
            },
            'aeZvQ': function (_0x3a8548, _0x22144e) {
                return _0x3a8548 == _0x22144e;
            },
            'rMHRX': function (_0x3c11ec, _0x4a66ef) {
                return _0x3c11ec !== _0x4a66ef;
            }
        };
    if (db[_0x985b52(0x161)])
        return new Promise(_0x5756b2 => setInterval(async function () {
            const _0x44d1d = _0x985b52;
            !db[_0x44d1d(0x161)] && (_0x39de45[_0x44d1d(0x108)](clearInterval, this), _0x39de45[_0x44d1d(0x108)](_0x5756b2, _0x39de45[_0x44d1d(0x1b2)](db[_0x44d1d(0x138)], null) ? global[_0x44d1d(0x11b) + 'se']() : db[_0x44d1d(0x138)]));
        }, (0x181f + -0x1 * 0x1fe + -0x1620) * (-0x1 * -0x1546 + -0x3bb + 0x1 * -0xda3)));
    if (_0x39de45[_0x985b52(0xb4)](db[_0x985b52(0x138)], null))
        return;
    db[_0x985b52(0x161)] = !![], await db[_0x985b52(0x213)]()[_0x985b52(0x183)](console[_0x985b52(0xd7)]), db[_0x985b52(0x161)] = null, db[_0x985b52(0x138)] = {
        'users': {},
        'chats': {},
        'stats': {},
        'msgs': {},
        'sticker': {},
        'settings': {},
        ...db[_0x985b52(0x138)] || {}
    }, global['db'][_0x985b52(0x12a)] = _0x39de45[_0x985b52(0x108)](chain, db[_0x985b52(0x138)]);
}, loadDatabase();
function _0x213e() {
    const _0x56053c = [
        'webp\x20di\x20ff',
        '––\x0a@desc',
        'removeAllL',
        'silent',
        'magenta',
        'keys',
        'liSuO',
        'eninggalka',
        'shksT',
        'dBxpx',
        'RYLex',
        'ons:\x20',
        'jZtOm',
        're\x20-\x20requi',
        'ScZLY',
        'child',
        'Deskripsi\x20',
        'telah\x20diub',
        'obile\x20api',
        '📌\x20Masukkan',
        'A:\x20\x0a│\x20JENI',
        'readyState',
        'statusCode',
        'nvrhC',
        'VjsrE',
        'ideo',
        'ringing',
        '12xxxxxx):',
        'essing\x20',
        'st\x20Done\x20,\x20',
        'KmJry',
        'APIs',
        '-filter_co',
        'logger',
        'ibwebp\x20di\x20',
        'GncSV',
        'SERVER_POR',
        'connecting',
        '157465quxfbq',
        'NODE_TLS_R',
        'rMHRX',
        'qavIV',
        'convert',
        'or\x20while\x20l',
        'BsFWJ',
        'pQclS',
        'close',
        'nama\x20file\x20',
        '?&.\x5c-',
        'mongodbv2',
        'status',
        '❖━━━━━━[\x20M',
        'isteners',
        'now',
        'nerate\x20pai',
        'push',
        'Icon\x20grup\x20',
        'CrcJQ',
        'exitProces',
        'new\x20plugin',
        'users',
        '\x20hanya\x20adm',
        'timestamp',
        'ler',
        '\x20pairing\x20c',
        'PORT',
        'webp\x20while',
        'rface',
        'dirname',
        'XBICP',
        'zjQaU',
        'loggedOut',
        'message',
        'safari',
        'jPEio',
        'error',
        'wDhrX',
        'red',
        'info',
        './tmp',
        '\x0a𝚂𝚊𝚢𝚘𝚗𝚊𝚛𝚊𝚊',
        '20409frDXWb',
        'ng/baileys',
        'Jhxzm',
        'psert',
        'PQdSl',
        '16HJyoiN',
        'TqFFi',
        'Wqjiq',
        'lygjj',
        'zuxAB',
        'wsRJo',
        'connection',
        'sage',
        'magick',
        '✅\x20Tersambu',
        'ffprobe',
        'sRestrictO',
        'elamat\x20Dat',
        'dIOJS',
        'sRevoke',
        'pat\x20mengir',
        'are',
        'Status\x20Mat',
        'peg\x20terleb',
        'bind',
        '\x20compiling',
        'Status\x20Akt',
        'rta\x20dapat\x20',
        'error\x20requ',
        'freeze',
        'off',
        'vhSjY',
        'handler',
        'includes',
        'azJDD',
        'loadMessag',
        'parse',
        'store',
        'oHKcI',
        '┅┅┅\x0a\x0a–––––',
        'groups.upd',
        'ugin\x20\x27',
        'ffmpeg\x20(--',
        'HfkDt',
        'groupsUpda',
        '-loglevel',
        '❌\x20Gagal\x20ge',
        'h\x20di\x20buka!',
        'ZbenT',
        'argv',
        './server.j',
        '\x0a┗––––––━━',
        'mengirim\x20p',
        'TdhxY',
        'ytuPv',
        'Czdnu',
        'spromote',
        'buttonsMes',
        'zWuLP',
        'write',
        'SgLGM',
        'ZZohC',
        'loadDataba',
        'tall\x20image',
        'r...',
        '__dirname',
        'engan\x20kode',
        'eDoQr',
        'xVgZC',
        'replace',
        'NYfCk',
        '⚡\x20Mengakti',
        'wrwfO',
        'ire\x20plugin',
        'ioUhs',
        '\x20mencoba\x20m',
        'rhDNf',
        'chain',
        'plugins',
        'DATABASE',
        '\x20Hallo\x20@us',
        'Cannot\x20use',
        'forEach',
        '–━━━━━━━━•',
        'KONHY',
        'bah\x20ke\x20\x0a@r',
        '.update',
        'MHaaa',
        'pQdBJ',
        'output',
        'NcDZA',
        'data',
        'r\x20WhatsApp',
        '\x20lagi\x20admi',
        'isFile',
        'repeat',
        'a\x20peserta!',
        'nakan:\x20',
        're\x20plugin\x20',
        'rejectCall',
        'Nomor\x20digu',
        'pdate',
        '18HMIhYK',
        'MAQBq',
        'match',
        'rQTwc',
        'zRKdh',
        '--mobile',
        'remoteJid',
        '?update=',
        '‎xzXZ/i!#$',
        'agar\x20bisa\x20',
        'ception',
        'trim',
        'hBDie',
        'RGwjF',
        'lBrge',
        'mplex',
        'er)\x0a├[\x20Int',
        '!\x0asekarang',
        'webp',
        '--version',
        'ssage',
        'oading\x20\x27',
        'cyan',
        'semua\x20pese',
        'ImuEe',
        'IdLPE',
        'ERINEPRJ',
        'requiring\x20',
        'deleted\x20pl',
        '\x0aPairing\x20C',
        'READ',
        '–┅┅\x20DESKRI',
        'JNARO',
        'APIKeys',
        'filter',
        'ode\x20with\x20m',
        '52yMlzms',
        'index',
        'sDesc',
        'blue',
        'rang\x20jadi\x20',
        'l\x20(pkg\x20ins',
        'requestPai',
        '\x20creds.jso',
        'ode...',
        'lNseO',
        '∆×÷π√✓©®:;',
        'all',
        'diterima:',
        'lldVg',
        'enyambung\x20',
        'welcome',
        'TfvUq',
        'nPbdI',
        'DSgun',
        'ah!',
        'redBright',
        'im\x20pesan.',
        'entries',
        'lete',
        'bgWhite',
        'Input\x20nomo',
        'ulang...',
        './sessions',
        'catch',
        'Error\x20in\x20C',
        'chats',
        'k\x20Beranima',
        'join',
        '1730NmBkLm',
        'to\x20Reset\x20L',
        'rang\x20bukan',
        'API',
        'erja\x20Tanpa',
        '1452msoGQL',
        'yellow',
        'ring\x20code:',
        'qDYlY',
        'tsUpdate',
        'sAnnounceO',
        'bold',
        'createInte',
        'isInit',
        '\x20telah\x20diu',
        'blueBright',
        'MA:\x20\x0a│\x20USI',
        'test',
        'Mohon\x20tung',
        'Silahkan\x20i',
        'stdout',
        'hiTMp',
        'Edit\x20Info\x20',
        'ffmpeg',
        'Grup\x20di\x20ub',
        'win32',
        'env',
        'main',
        '\x20@user\x20👋😃',
        '\x0a│☘︎\x20@subje',
        'YOyfj',
        'terputus\x20&',
        'lACbL',
        'map',
        'ZMfoC',
        '\x20Tidak\x20Bek',
        'Error\x20proc',
        'prefix',
        'conn',
        'a\x20admin!',
        'Sticker\x20Mu',
        '__filename',
        'aeZvQ',
        'wQUzg',
        'mpeg\x20belum',
        'templateMe',
        'ssion:',
        '-hide_bann',
        'ah\x20menjadi',
        '-frames:v',
        'dflPy',
        'ditolak',
        'gjfzn',
        'ontoh:\x20628',
        '\x20imagemagi',
        'mengirim\x20v',
        'h\x20di\x20tutup',
        'ro\x20]—\x0a│\x20NA',
        'bah\x20menjad',
        'then',
        'gu\x20sebenta',
        'ringCode',
        'jaVOw',
        'S\x20KELAMIN:',
        'ode:\x20',
        'session\x20~>',
        'lear\x20Sessi',
        '\x20Pairing\x20C',
        'sdemote',
        'ate',
        'son',
        'find',
        'opts',
        'jIFVc',
        'ah\x20ke\x20semu',
        'Success\x20Au',
        '❖━━━━━━[\x20S',
        'sort',
        'deleteUpda',
        'PSI\x20┅┅––––',
        'AVqZh',
        '\x20terinstal',
        'KZfLi',
        '⏱️\x20Koneksi\x20',
        'fEmlD',
        '4356176cRpEVv',
        'authState',
        'aXHtx',
        'stdin',
        'participan',
        'zaJHx',
        'evoke',
        'Fitur\x20Stik',
        './plugins/',
        'question',
        'ffmpegWebp',
        'phgSh',
        'messages.u',
        'uncaughtEx',
        'mtimeMs',
        '\x5c$&',
        'fromEntrie',
        'race',
        'call',
        '280960layNEO',
        '@user\x20Seka',
        'ailyS',
        'ih\x20dahulu\x20',
        'admin!',
        'enable-lib',
        'Deleted\x20se',
        'ngkin\x20Tida',
        'split',
        'Generating',
        'IIxhL',
        'ode\x20ini\x20ke',
        'HktIv',
        'warn',
        'er\x20Mungkin',
        'imit',
        'ah\x20ke\x20hany',
        'sIcon',
        'reloadHand',
        'esan.',
        'in\x20yang\x20da',
        'reload',
        'i\x20\x0a@subjec',
        'iMsTE',
        '__require',
        '5|4|2|1|0|',
        '5.1.10',
        '━❖\x0a\x0a┏–––––',
        'magick)',
        '\x20ffmpeg)',
        '204681cgvjIU',
        'limit',
        'support',
        '--use-pair',
        'jaMtC',
        'read',
        'Vsfhc',
        '\x20WhatsApp\x20',
        'nstall\x20ffm',
        'creds.json',
        '%+£¢€¥^°=¶',
        'bye',
        '☑️\x20Quick\x20Te',
        'sSubject',
        'syntax\x20err',
        'creds',
        'Update',
        'Mac\x20OS',
        'exit',
        'creds.upda',
        '\x20negara,\x20c',
        'module',
        'color',
        'THORIZED',
        '\x20\x0a@desc',
        'Menunggu\x20P',
        'length',
        '━━┅┅┅\x0a│(\x20👋',
        '@adiwajshi',
        'n\x20]━━━━━━❖',
        'onDelete',
        'icipants.u',
        'FlNJZ',
        'wNYFY',
        'registered',
        'Link\x20group',
        'WMbzf',
        'credsUpdat',
        'ck\x20dan\x20lib',
        'localeComp',
        'YYhyu',
        'yMSgc',
        'kegUZ',
        'default',
        'EJECT_UNAU',
        'toString',
        'sUONT',
        'JyEFR',
        'esan\x20Baru',
        '666620hTYpPl',
        'si\x20tanpa\x20l',
        'cQhJF',
        'ZaaJQ',
        '\x0asekarang\x20',
        'fkan\x20Bot,\x20',
        'open',
        'group-part',
        'listMessag',
        'slice',
        'd\x20(awali\x20d',
        'Judul\x20grup',
        'message.de',
        'EFuvH',
        'Group\x20tela',
        'Panggilan\x20',
        'js?update=',
        'kyCQT',
        'database.j',
        'Asdwq',
        'ang\x20]━━━━━',
        'jtvis',
        './handler.',
        'green',
        '\x20yang\x20vali',
        'segera!',
        'ing-code',
        'ct\x0a┣━━━━━━',
        'log',
        'wEoYU'
    ];
    _0x213e = function () {
        return _0x56053c;
    };
    return _0x213e();
}
const usePairingCode = !process[_0x5d380f(0x10e)][_0x5d380f(0xfe)](_0x5d380f(0x211) + _0x5d380f(0x88)), useMobile = process[_0x5d380f(0x10e)][_0x5d380f(0xfe)](_0x5d380f(0x148));
var question = function (_0x20e619) {
    return new Promise(function (_0x11d6b4) {
        const _0x3014b7 = _0x21be;
        rl[_0x3014b7(0x1e6)](_0x20e619, _0x11d6b4);
    });
};
const rl = _0x5a3070[_0x5d380f(0x194) + _0x5d380f(0xcf)]({
        'input': process[_0x5d380f(0x1e0)],
        'output': process[_0x5d380f(0x19c)]
    }), {version, isLatest} = await fetchLatestBaileysVersion(), {state, saveCreds} = await useMultiFileAuthState(_0x5d380f(0x182)), connectionOptions = {
        'version': version,
        'logger': _0x4752ab({ 'level': _0x5d380f(0x8f) }),
        'printQRInTerminal': !usePairingCode,
        'browser': [
            _0x5d380f(0x21f),
            _0x5d380f(0xd5),
            _0x5d380f(0x20a)
        ],
        'auth': {
            'creds': state[_0x5d380f(0x21d)],
            'keys': makeCacheableSignalKeyStore(state[_0x5d380f(0x91)], _0x4752ab()[_0x5d380f(0x9b)]({
                'level': _0x5d380f(0x8f),
                'stream': _0x5d380f(0x102)
            }))
        },
        'getMessage': async _0x444245 => {
            const _0x11cdbe = _0x5d380f, _0x23a2e3 = await store[_0x11cdbe(0x100) + 'e'](_0x444245[_0x11cdbe(0x149)], _0x444245['id']);
            return _0x23a2e3?.[_0x11cdbe(0xd4)] || undefined;
        },
        'generateHighQualityLinkPreview': !![],
        'patchMessageBeforeSending': _0x5b1723 => {
            const _0x10fe60 = _0x5d380f, _0x191967 = !!(_0x5b1723[_0x10fe60(0x116) + _0x10fe60(0xe9)] || _0x5b1723[_0x10fe60(0x1b5) + _0x10fe60(0x157)] || _0x5b1723[_0x10fe60(0x76) + 'e']);
            return _0x191967 && (_0x5b1723 = {
                'viewOnceMessage': {
                    'message': {
                        'messageContextInfo': {
                            'deviceListMetadataVersion': 0x2,
                            'deviceListMetadata': {}
                        },
                        ..._0x5b1723
                    }
                }
            }), _0x5b1723;
        },
        'connectTimeoutMs': 0xea60,
        'defaultQueryTimeoutMs': 0x0,
        'generateHighQualityLinkPreview': !![],
        'syncFullHistory': !![],
        'markOnlineOnConnect': !![]
    };
global[_0x5d380f(0x1ae)] = makeWASocket(connectionOptions), conn[_0x5d380f(0x195)] = ![];
if (usePairingCode && !conn[_0x5d380f(0x1de)][_0x5d380f(0x21d)][_0x5d380f(0x230)]) {
    if (useMobile)
        throw new Error(_0x5d380f(0x12e) + _0x5d380f(0xcc) + _0x5d380f(0x166) + _0x5d380f(0x9e));
    let phoneNumber = (argv['_'][-0xa6 * -0x29 + -0xf * -0xd5 + -0x2711 * 0x1] || '')[_0x5d380f(0x14e)]()[_0x5d380f(0x122)](/[^0-9]/g, '');
    while (!phoneNumber) {
        phoneNumber = (await question(_0x17289e[_0x5d380f(0x197)](_0x5d380f(0x180) + _0x5d380f(0x139) + _0x5d380f(0x86) + _0x5d380f(0x78) + _0x5d380f(0x11f) + _0x5d380f(0x222) + _0x5d380f(0x1bd) + _0x5d380f(0xa7) + '\x0a')))[_0x5d380f(0x14e)]()[_0x5d380f(0x122)](/[^0-9]/g, '');
    }
    rl[_0x5d380f(0xba)](), console[_0x5d380f(0x8a)](_0x17289e[_0x5d380f(0x85)](_0x5d380f(0x141) + _0x5d380f(0x13e) + phoneNumber)), console[_0x5d380f(0x8a)](_0x17289e[_0x5d380f(0x17f)](_0x17289e[_0x5d380f(0x16a)](_0x5d380f(0x1f9) + _0x5d380f(0x1cb) + _0x5d380f(0x16f)))), setTimeout(async () => {
        const _0x3549ca = _0x5d380f, _0x25dd04 = {
                'FlNJZ': _0x3549ca(0x15d),
                'KONHY': function (_0x13c194, _0x2c8891) {
                    return _0x13c194 + _0x2c8891;
                },
                'azJDD': _0x3549ca(0x9f) + _0x3549ca(0xcc) + _0x3549ca(0x1fb) + _0x3549ca(0x215) + _0x3549ca(0x87),
                'AVqZh': _0x3549ca(0x10b) + _0x3549ca(0xc2) + _0x3549ca(0x18f)
            };
        try {
            const _0x1d322f = await conn[_0x3549ca(0x16d) + _0x3549ca(0x1c5)](phoneNumber, _0x25dd04[_0x3549ca(0x22e)]), _0x4753ac = _0x1d322f?.[_0x3549ca(0x145)](/.{1,4}/g)?.[_0x3549ca(0x187)]('-') || _0x1d322f, _0x4117c3 = '─'[_0x3549ca(0x13c)](_0x25dd04[_0x3549ca(0x131)](_0x4753ac[_0x3549ca(0x228)], -0x26b1 + 0x133 * -0x1 + -0x9fa * -0x4));
            console[_0x3549ca(0x8a)](_0x17289e[_0x3549ca(0x85)]('\x0a┌' + _0x4117c3 + '┐')), console[_0x3549ca(0x8a)](_0x17289e[_0x3549ca(0x85)]('│\x20' + _0x17289e[_0x3549ca(0x18e)][_0x3549ca(0x193)](_0x4753ac) + '\x20│')), console[_0x3549ca(0x8a)](_0x17289e[_0x3549ca(0x85)]('└' + _0x4117c3 + '┘')), console[_0x3549ca(0x8a)](_0x17289e[_0x3549ca(0x159)](_0x3549ca(0x160) + _0x3549ca(0x1c8) + _0x17289e[_0x3549ca(0x193)](_0x25dd04[_0x3549ca(0x22e)]))), console[_0x3549ca(0x8a)](_0x17289e[_0x3549ca(0x90)](_0x25dd04[_0x3549ca(0xff)]));
        } catch (_0x21ca63) {
            console[_0x3549ca(0xd7)](_0x17289e[_0x3549ca(0xd9)](_0x25dd04[_0x3549ca(0x1d8)]), _0x21ca63), process[_0x3549ca(0x220)](0x2 * -0x733 + 0x26aa + -0x1843);
        }
    }, 0x7cc + 0xa * -0x11f + 0xb3a * 0x1);
}
async function resetLimit() {
    const _0x5f2b0f = _0x5d380f, _0x2f1a6e = {
            'JyEFR': function (_0xfdaedb, _0x451a19) {
                return _0xfdaedb <= _0x451a19;
            },
            'CrcJQ': function (_0x5a8f09, _0xa61ca0, _0xc2d839) {
                return _0x5a8f09(_0xa61ca0, _0xc2d839);
            },
            'vhSjY': function (_0x41e9a4, _0x4f6ffe) {
                return _0x41e9a4 * _0x4f6ffe;
            }
        };
    try {
        let _0x6ce25a = Object[_0x5f2b0f(0x17d)](global['db'][_0x5f2b0f(0x138)][_0x5f2b0f(0xc8)]), _0x4c6169 = 0x1ec2 + 0x264c + -0x44f5;
        _0x6ce25a[_0x5f2b0f(0x1a9)](([_0x4af97f, _0x519505], _0x5c900b) => {
            const _0x37fdbc = _0x5f2b0f;
            _0x2f1a6e[_0x37fdbc(0x23d)](_0x519505[_0x37fdbc(0x20f)], _0x4c6169) && (_0x519505[_0x37fdbc(0x20f)] = _0x4c6169);
        }), console[_0x5f2b0f(0x8a)](_0x5f2b0f(0x1d3) + _0x5f2b0f(0x189) + _0x5f2b0f(0x1ff));
    } finally {
        _0x2f1a6e[_0x5f2b0f(0xc5)](setInterval, () => resetLimit(), _0x2f1a6e[_0x5f2b0f(0xfc)](0x1967 + 0x1f3 * 0xd + -0x32bd, 0x98a6707 * -0x1 + -0x151 * -0x2973b + 0x26 * 0x4bfdda));
    }
}
!opts[_0x5d380f(0x199)] && ((await import(_0x5d380f(0x10f) + 's'))[_0x5d380f(0x239)](PORT), setInterval(async () => {
    const _0x47ab46 = _0x5d380f, _0x58fd8d = {
            'Vsfhc': function (_0x50d593) {
                return _0x50d593();
            }
        };
    if (global['db'][_0x47ab46(0x138)])
        await global['db'][_0x47ab46(0x118)]()[_0x47ab46(0x183)](console[_0x47ab46(0xd7)]);
    _0x58fd8d[_0x47ab46(0x214)](clearTmp);
}, (0x21ef + 0x329 + -0x24dc) * (-0x2267 * 0x1 + 0x173a + 0x507 * 0x3)));
function clearTmp() {
    const _0x45392 = _0x5d380f, _0x130127 = {
            'hiTMp': function (_0x38825b, _0x15268d) {
                return _0x38825b(_0x15268d);
            },
            'IdLPE': function (_0x46b50d, _0x5ea26d) {
                return _0x46b50d >= _0x5ea26d;
            },
            'iMsTE': function (_0xfb5e5f, _0x5b7c51) {
                return _0xfb5e5f - _0x5b7c51;
            },
            'jtvis': function (_0x58f03e, _0x2a6bdd) {
                return _0x58f03e * _0x2a6bdd;
            },
            'NcDZA': function (_0x18395d, _0x21134e) {
                return _0x18395d * _0x21134e;
            },
            'qavIV': function (_0x29e7f6, _0x183682) {
                return _0x29e7f6(_0x183682);
            },
            'rhDNf': function (_0x4c45e6) {
                return _0x4c45e6();
            },
            'PQdSl': function (_0x213faf, _0x1d8bed, _0x1a2ee4) {
                return _0x213faf(_0x1d8bed, _0x1a2ee4);
            },
            'qDYlY': _0x45392(0xdb)
        }, _0x5d8618 = [
            _0x130127[_0x45392(0x129)](tmpdir),
            _0x130127[_0x45392(0xe1)](join, __dirname, _0x130127[_0x45392(0x190)])
        ], _0x412681 = [];
    return _0x5d8618[_0x45392(0x12f)](_0x31fa59 => readdirSync(_0x31fa59)[_0x45392(0x12f)](_0x1ef787 => _0x412681[_0x45392(0xc3)](join(_0x31fa59, _0x1ef787)))), _0x412681[_0x45392(0x1a9)](_0x585730 => {
        const _0x268e77 = _0x45392, _0x4eda9f = _0x130127[_0x268e77(0x19d)](statSync, _0x585730);
        if (_0x4eda9f[_0x268e77(0x13b)]() && _0x130127[_0x268e77(0x15c)](_0x130127[_0x268e77(0x207)](Date[_0x268e77(0xc1)](), _0x4eda9f[_0x268e77(0x1eb)]), _0x130127[_0x268e77(0x83)](_0x130127[_0x268e77(0x137)](-0x3 * 0x8e4 + 0xccf * -0x1 + 0x17f * 0x1d, 0x9d3 + 0x53 * -0x11 + -0x414), 0x50 * -0x6f + 0x1 * -0x1b6 + 0x2469)))
            return _0x130127[_0x268e77(0xb5)](unlinkSync, _0x585730);
        return ![];
    });
}
async function clearSessions(_0x1d5d52 = _0x5d380f(0x182)) {
    const _0x38b463 = _0x5d380f, _0x3f9fc4 = {
            'Asdwq': function (_0x491fe2, _0xafdb03) {
                return _0x491fe2(_0xafdb03);
            },
            'jaVOw': function (_0x16d252, _0xd99d3) {
                return _0x16d252 !== _0xd99d3;
            },
            'pQdBJ': _0x38b463(0x217),
            'fEmlD': function (_0x28031c, _0x4dcaba) {
                return _0x28031c(_0x4dcaba);
            },
            'kyCQT': _0x38b463(0x1f6) + _0x38b463(0x1b6),
            'ScZLY': function (_0x5c3093, _0x293bec, _0x54f8e4) {
                return _0x5c3093(_0x293bec, _0x54f8e4);
            },
            'Jhxzm': function (_0x5c18a2, _0x5f1216) {
                return _0x5c18a2 * _0x5f1216;
            }
        };
    try {
        const _0x1f602a = await _0x3f9fc4[_0x38b463(0x1dc)](readdirSync, _0x1d5d52), _0x42fde5 = await Promise[_0x38b463(0x172)](_0x1f602a[_0x38b463(0x1a9)](async _0x377015 => {
                const _0x464b39 = _0x38b463;
                try {
                    const _0x114ddf = _0x4db2c4[_0x464b39(0x187)](_0x1d5d52, _0x377015), _0x406b8f = await _0x3f9fc4[_0x464b39(0x81)](statSync, _0x114ddf);
                    if (_0x406b8f[_0x464b39(0x13b)]() && _0x3f9fc4[_0x464b39(0x1c6)](_0x377015, _0x3f9fc4[_0x464b39(0x135)]))
                        return await _0x3f9fc4[_0x464b39(0x1dc)](unlinkSync, _0x114ddf), console[_0x464b39(0x8a)](_0x3f9fc4[_0x464b39(0x7f)][_0x464b39(0x1a3)], _0x114ddf[_0x464b39(0xda)]), _0x114ddf;
                } catch (_0x31d39f) {
                    console[_0x464b39(0xd7)](_0x464b39(0x1ac) + _0x464b39(0xa8) + _0x377015 + ':\x20' + _0x31d39f[_0x464b39(0xd4)]);
                }
            }));
        return _0x42fde5[_0x38b463(0x165)](_0x3cbcd5 => _0x3cbcd5 !== null);
    } catch (_0x4974e2) {
        return console[_0x38b463(0xd7)](_0x38b463(0x184) + _0x38b463(0x1ca) + _0x38b463(0x97) + _0x4974e2[_0x38b463(0xd4)]), [];
    } finally {
        _0x3f9fc4[_0x38b463(0x9a)](setTimeout, () => clearSessions(_0x1d5d52), _0x3f9fc4[_0x38b463(0xdf)](-0x2085 + 0xb2 * -0x33 + 0x43fc, -0x1 * 0xdf5e5 + -0x1d660 * -0x6 + 0x39de25));
    }
}
async function connectionUpdate(_0x44fb4a) {
    const _0x389571 = _0x5d380f, _0x3d2da6 = {
            'jaMtC': function (_0x56b695, _0x1d45fe) {
                return _0x56b695 === _0x1d45fe;
            },
            'RGwjF': _0x389571(0xb1),
            'ZMfoC': _0x389571(0x124) + _0x389571(0x73) + _0x389571(0x19a) + _0x389571(0x1c4) + _0x389571(0x11d),
            'TdhxY': function (_0x591a75, _0x5e4c61) {
                return _0x591a75 === _0x5e4c61;
            },
            'JNARO': _0x389571(0x74),
            'IIxhL': _0x389571(0xeb) + 'ng',
            'dIOJS': _0x389571(0xf7) + 'if',
            'eDoQr': function (_0x582dca, _0x1dc215) {
                return _0x582dca === _0x1dc215;
            },
            'lNseO': _0x389571(0xf3) + 'i',
            'jZtOm': _0x389571(0x227) + _0x389571(0x23e),
            'ailyS': _0x389571(0xba),
            'shksT': _0x389571(0x1db) + _0x389571(0x1a7) + _0x389571(0x128) + _0x389571(0x175) + _0x389571(0x181),
            'aXHtx': function (_0x4948a5, _0x5d0aa9) {
                return _0x4948a5 !== _0x5d0aa9;
            },
            'wDhrX': function (_0x51e678, _0x243fdc) {
                return _0x51e678 !== _0x243fdc;
            },
            'VjsrE': function (_0xd8baa8, _0x3ee6ce) {
                return _0xd8baa8 == _0x3ee6ce;
            }
        }, {
            connection: _0x118ab7,
            lastDisconnect: _0x47d450,
            isOnline: _0x1d734a,
            receivedPendingNotifications: _0x1ed1ae
        } = _0x44fb4a;
    _0x3d2da6[_0x389571(0x212)](_0x118ab7, _0x3d2da6[_0x389571(0x150)]) && console[_0x389571(0x8a)](_0x17289e[_0x389571(0x17b)](_0x3d2da6[_0x389571(0x1aa)]));
    _0x3d2da6[_0x389571(0x112)](_0x118ab7, _0x3d2da6[_0x389571(0x163)]) && console[_0x389571(0x8a)](_0x17289e[_0x389571(0x85)](_0x3d2da6[_0x389571(0x1fa)]));
    if (_0x3d2da6[_0x389571(0x212)](_0x1d734a, !![]))
        console[_0x389571(0x8a)](_0x17289e[_0x389571(0x85)](_0x3d2da6[_0x389571(0xef)]));
    else
        _0x3d2da6[_0x389571(0x120)](_0x1d734a, ![]) && console[_0x389571(0x8a)](_0x17289e[_0x389571(0xd9)](_0x3d2da6[_0x389571(0x170)]));
    _0x1ed1ae && console[_0x389571(0x8a)](_0x17289e[_0x389571(0x18e)](_0x3d2da6[_0x389571(0x98)])), _0x3d2da6[_0x389571(0x212)](_0x118ab7, _0x3d2da6[_0x389571(0x1f2)]) && console[_0x389571(0x8a)](_0x17289e[_0x389571(0xd9)](_0x3d2da6[_0x389571(0x94)])), _0x47d450 && _0x47d450[_0x389571(0xd7)] && _0x47d450[_0x389571(0xd7)][_0x389571(0x136)] && _0x3d2da6[_0x389571(0x1df)](_0x47d450[_0x389571(0xd7)][_0x389571(0x136)][_0x389571(0xa2)], DisconnectReason[_0x389571(0xd3)]) && _0x3d2da6[_0x389571(0xd8)](conn['ws'][_0x389571(0xa1)], CONNECTING) && console[_0x389571(0x8a)](await global[_0x389571(0x202) + _0x389571(0xcb)](!![])), _0x3d2da6[_0x389571(0xa4)](global['db'][_0x389571(0x138)], null) && await global[_0x389571(0x11b) + 'se']();
}
process['on'](_0x5d380f(0x1ea) + _0x5d380f(0x14d), console[_0x5d380f(0xd7)]);
let isInit = !![], handler = await import(_0x5d380f(0x84) + 'js');
global[_0x5d380f(0x202) + _0x5d380f(0xcb)] = async function (_0x8f4bb4) {
    const _0x9ab8c7 = _0x5d380f, _0x4787bd = {
            'ImuEe': _0x9ab8c7(0x7d) + _0x9ab8c7(0x173),
            'MHaaa': function (_0x35dc00, _0x337b5e) {
                return _0x35dc00 === _0x337b5e;
            },
            'YYhyu': _0x9ab8c7(0xa6),
            'ZZohC': _0x9ab8c7(0x7d) + _0x9ab8c7(0x1bb),
            'zaJHx': function (_0x2fb5dc, _0x40888e) {
                return _0x2fb5dc || _0x40888e;
            },
            'zuxAB': function (_0x52d9c6, _0x1e8cf9, _0x1ef2e9) {
                return _0x52d9c6(_0x1e8cf9, _0x1ef2e9);
            },
            'wNYFY': _0x9ab8c7(0x209) + '3',
            'hBDie': _0x9ab8c7(0xe8) + _0x9ab8c7(0x133),
            'ZbenT': _0x9ab8c7(0x7a) + _0x9ab8c7(0x17e),
            'phgSh': _0x9ab8c7(0x105) + _0x9ab8c7(0x1cd),
            'jIFVc': _0x9ab8c7(0x221) + 'te',
            'XBICP': _0x9ab8c7(0x75) + _0x9ab8c7(0x22d) + _0x9ab8c7(0x142),
            'nvrhC': _0x9ab8c7(0x1e9) + _0x9ab8c7(0xe0),
            'wEoYU': _0x9ab8c7(0x1d4) + _0x9ab8c7(0xee) + _0x9ab8c7(0x82) + _0x9ab8c7(0x20b) + _0x9ab8c7(0x130) + _0x9ab8c7(0x1a5) + _0x9ab8c7(0x89) + _0x9ab8c7(0x229) + _0x9ab8c7(0x12d) + _0x9ab8c7(0x153) + _0x9ab8c7(0x1c1) + _0x9ab8c7(0x198) + _0x9ab8c7(0xa0) + _0x9ab8c7(0x1c7) + _0x9ab8c7(0x110) + _0x9ab8c7(0x104) + _0x9ab8c7(0x162) + _0x9ab8c7(0x1d7) + _0x9ab8c7(0x8d),
            'HktIv': _0x9ab8c7(0xbf) + _0x9ab8c7(0x93) + _0x9ab8c7(0x22b) + _0x9ab8c7(0xdc) + _0x9ab8c7(0x1a4),
            'Wqjiq': _0x9ab8c7(0x1f1) + _0x9ab8c7(0x16b) + _0x9ab8c7(0x1f4),
            'GncSV': _0x9ab8c7(0x1f1) + _0x9ab8c7(0x18a) + _0x9ab8c7(0x13a) + 'n!',
            'dBxpx': _0x9ab8c7(0x9c) + _0x9ab8c7(0x9d) + _0x9ab8c7(0x1b8) + _0x9ab8c7(0x226),
            'jPEio': _0x9ab8c7(0x79) + _0x9ab8c7(0x196) + _0x9ab8c7(0x1c2) + _0x9ab8c7(0x206) + 't',
            'wQUzg': _0x9ab8c7(0xc4) + _0x9ab8c7(0x9d) + _0x9ab8c7(0x17a),
            'RYLex': _0x9ab8c7(0x231) + _0x9ab8c7(0x196) + _0x9ab8c7(0x132) + _0x9ab8c7(0x1e3),
            'WMbzf': _0x9ab8c7(0x7c) + _0x9ab8c7(0x1c0) + _0x9ab8c7(0x154) + _0x9ab8c7(0xc9) + _0x9ab8c7(0x204) + _0x9ab8c7(0xf1) + _0x9ab8c7(0x17c),
            'pQclS': _0x9ab8c7(0x7c) + _0x9ab8c7(0x10c) + _0x9ab8c7(0x72) + _0x9ab8c7(0x15a) + _0x9ab8c7(0xf8) + _0x9ab8c7(0x111) + _0x9ab8c7(0x203),
            'lBrge': _0x9ab8c7(0x19e) + _0x9ab8c7(0x1a0) + _0x9ab8c7(0x200) + _0x9ab8c7(0x1af),
            'ZaaJQ': _0x9ab8c7(0x19e) + _0x9ab8c7(0x1a0) + _0x9ab8c7(0x1d2) + _0x9ab8c7(0x13d),
            'YOyfj': _0x9ab8c7(0x1ef)
        };
    try {
        const _0x4cc8a7 = await import(_0x9ab8c7(0x84) + _0x9ab8c7(0x7e) + Date[_0x9ab8c7(0xc1)]())[_0x9ab8c7(0x183)](console[_0x9ab8c7(0xd7)]);
        if (Object[_0x9ab8c7(0x91)](_0x4787bd[_0x9ab8c7(0x1e2)](_0x4cc8a7, {}))[_0x9ab8c7(0x228)])
            handler = _0x4cc8a7;
    } catch (_0x2b0e13) {
        console[_0x9ab8c7(0xd7)](_0x2b0e13);
    }
    if (_0x8f4bb4) {
        const _0x448c92 = global[_0x9ab8c7(0x1ae)][_0x9ab8c7(0x185)];
        try {
            global[_0x9ab8c7(0x1ae)]['ws'][_0x9ab8c7(0xba)]();
        } catch {
        }
        conn['ev'][_0x9ab8c7(0x8e) + _0x9ab8c7(0xc0)](), global[_0x9ab8c7(0x1ae)] = _0x4787bd[_0x9ab8c7(0xe6)](makeWASocket, connectionOptions, { 'chats': _0x448c92 }), isInit = !![];
    }
    if (!isInit) {
        const _0x5cd6af = _0x4787bd[_0x9ab8c7(0x22f)][_0x9ab8c7(0x1f8)]('|');
        let _0x2478c9 = -0x184d + -0x63 * 0x11 + 0x1ee0;
        while (!![]) {
            switch (_0x5cd6af[_0x2478c9++]) {
            case '0':
                conn['ev'][_0x9ab8c7(0xfb)](_0x4787bd[_0x9ab8c7(0x14f)], conn[_0x9ab8c7(0xe8) + _0x9ab8c7(0x21e)]);
                continue;
            case '1':
                conn['ev'][_0x9ab8c7(0xfb)](_0x4787bd[_0x9ab8c7(0x10d)], conn[_0x9ab8c7(0x22c)]);
                continue;
            case '2':
                conn['ev'][_0x9ab8c7(0xfb)](_0x4787bd[_0x9ab8c7(0x1e8)], conn[_0x9ab8c7(0x109) + 'te']);
                continue;
            case '3':
                conn['ev'][_0x9ab8c7(0xfb)](_0x4787bd[_0x9ab8c7(0x1d1)], conn[_0x9ab8c7(0x233) + 'e']);
                continue;
            case '4':
                conn['ev'][_0x9ab8c7(0xfb)](_0x4787bd[_0x9ab8c7(0xd1)], conn[_0x9ab8c7(0x1e1) + _0x9ab8c7(0x191)]);
                continue;
            case '5':
                conn['ev'][_0x9ab8c7(0xfb)](_0x4787bd[_0x9ab8c7(0xa3)], conn[_0x9ab8c7(0xfd)]);
                continue;
            }
            break;
        }
    }
    return conn[_0x9ab8c7(0x176)] = _0x4787bd[_0x9ab8c7(0x8b)], conn[_0x9ab8c7(0x219)] = _0x4787bd[_0x9ab8c7(0x1fc)], conn[_0x9ab8c7(0x115)] = _0x4787bd[_0x9ab8c7(0xe4)], conn[_0x9ab8c7(0x1cc)] = _0x4787bd[_0x9ab8c7(0xaf)], conn[_0x9ab8c7(0x169)] = _0x4787bd[_0x9ab8c7(0x95)], conn[_0x9ab8c7(0x21b)] = _0x4787bd[_0x9ab8c7(0xd6)], conn[_0x9ab8c7(0x201)] = _0x4787bd[_0x9ab8c7(0x1b3)], conn[_0x9ab8c7(0xf0)] = _0x4787bd[_0x9ab8c7(0x96)], conn[_0x9ab8c7(0x192) + 'n'] = _0x4787bd[_0x9ab8c7(0x232)], conn[_0x9ab8c7(0x192) + 'ff'] = _0x4787bd[_0x9ab8c7(0xb9)], conn[_0x9ab8c7(0xed) + 'n'] = _0x4787bd[_0x9ab8c7(0x151)], conn[_0x9ab8c7(0xed) + 'ff'] = _0x4787bd[_0x9ab8c7(0x71)], conn[_0x9ab8c7(0xfd)] = handler[_0x9ab8c7(0xfd)][_0x9ab8c7(0xf5)](global[_0x9ab8c7(0x1ae)]), conn[_0x9ab8c7(0x1e1) + _0x9ab8c7(0x191)] = handler[_0x9ab8c7(0x1e1) + _0x9ab8c7(0x191)][_0x9ab8c7(0xf5)](global[_0x9ab8c7(0x1ae)]), conn[_0x9ab8c7(0x109) + 'te'] = handler[_0x9ab8c7(0x109) + 'te'][_0x9ab8c7(0xf5)](global[_0x9ab8c7(0x1ae)]), conn[_0x9ab8c7(0x22c)] = handler[_0x9ab8c7(0x1d6) + 'te'][_0x9ab8c7(0xf5)](global[_0x9ab8c7(0x1ae)]), conn[_0x9ab8c7(0xe8) + _0x9ab8c7(0x21e)] = connectionUpdate[_0x9ab8c7(0xf5)](global[_0x9ab8c7(0x1ae)]), conn[_0x9ab8c7(0x233) + 'e'] = saveCreds[_0x9ab8c7(0xf5)](global[_0x9ab8c7(0x1ae)]), conn['ev']['on'](_0x4787bd[_0x9ab8c7(0x1a6)], async _0x11ef76 => {
        const _0x4a1f4c = _0x9ab8c7;
        console[_0x4a1f4c(0x8a)](_0x4787bd[_0x4a1f4c(0x15b)], _0x11ef76), _0x4787bd[_0x4a1f4c(0x134)](_0x11ef76[_0x4a1f4c(0xbe)], _0x4787bd[_0x4a1f4c(0x236)]) && (await conn[_0x4a1f4c(0x140)](_0x11ef76['id']), console[_0x4a1f4c(0x8a)](_0x4787bd[_0x4a1f4c(0x11a)]));
    }), conn['ev']['on'](_0x4787bd[_0x9ab8c7(0xa3)], conn[_0x9ab8c7(0xfd)]), conn['ev']['on'](_0x4787bd[_0x9ab8c7(0xd1)], conn[_0x9ab8c7(0x1e1) + _0x9ab8c7(0x191)]), conn['ev']['on'](_0x4787bd[_0x9ab8c7(0x1e8)], conn[_0x9ab8c7(0x109) + 'te']), conn['ev']['on'](_0x4787bd[_0x9ab8c7(0x10d)], conn[_0x9ab8c7(0x22c)]), conn['ev']['on'](_0x4787bd[_0x9ab8c7(0x14f)], conn[_0x9ab8c7(0xe8) + _0x9ab8c7(0x21e)]), conn['ev']['on'](_0x4787bd[_0x9ab8c7(0x1d1)], conn[_0x9ab8c7(0x233) + 'e']), isInit = ![], !![];
};
const pluginFolder = global[_0x5d380f(0x11e)](join(__dirname, _0x5d380f(0x1e5) + _0x5d380f(0x168))), pluginFilter = _0x119b4e => /\.js$/[_0x5d380f(0x199)](_0x119b4e);
function _0x21be(_0x37333e, _0x4c0839) {
    _0x37333e = _0x37333e - (0x1952 + -0x52b + -0x13b8);
    const _0x370004 = _0x213e();
    let _0x563543 = _0x370004[_0x37333e];
    return _0x563543;
}
global[_0x5d380f(0x12b)] = {};
async function filesInit() {
    const _0xbfbc1e = _0x5d380f, _0x2fa6c2 = {
            'oHKcI': function (_0x2bb4db, _0x54f80b) {
                return _0x2bb4db(_0x54f80b);
            },
            'wrwfO': function (_0x58513f, _0x3eb13a, _0x3e07c0) {
                return _0x58513f(_0x3eb13a, _0x3e07c0);
            }
        };
    for (let _0x53af27 of _0x2fa6c2[_0xbfbc1e(0x103)](readdirSync, pluginFolder)[_0xbfbc1e(0x165)](pluginFilter)) {
        try {
            let _0x23a6b5 = global[_0xbfbc1e(0x1b1)](_0x2fa6c2[_0xbfbc1e(0x125)](join, pluginFolder, _0x53af27));
            const _0x2fea4c = await import(_0x23a6b5);
            global[_0xbfbc1e(0x12b)][_0x53af27] = _0x2fea4c[_0xbfbc1e(0x239)] || _0x2fea4c;
        } catch (_0x49df96) {
            conn[_0xbfbc1e(0xad)][_0xbfbc1e(0xd7)](_0x49df96), delete global[_0xbfbc1e(0x12b)][_0x53af27];
        }
    }
}
filesInit()[_0x5d380f(0x1c3)](_0x36335c => console[_0x5d380f(0x8a)](Object[_0x5d380f(0x91)](global[_0x5d380f(0x12b)])))[_0x5d380f(0x183)](console[_0x5d380f(0xd7)]), global[_0x5d380f(0x205)] = async (_0x592137, _0x297d69) => {
    const _0x3e067e = _0x5d380f, _0x14715b = {
            'Czdnu': function (_0x456361, _0x174edf) {
                return _0x456361(_0x174edf);
            },
            'zWuLP': function (_0x458cb1, _0x39b507, _0x574b0d) {
                return _0x458cb1(_0x39b507, _0x574b0d);
            },
            'liSuO': function (_0x518423, _0x1e6779) {
                return _0x518423 in _0x1e6779;
            },
            'xVgZC': function (_0x2b951c, _0x1bb3b9, _0x413d9e, _0x3760cf) {
                return _0x2b951c(_0x1bb3b9, _0x413d9e, _0x3760cf);
            },
            'dflPy': function (_0x4c707c, _0x2fd235) {
                return _0x4c707c(_0x2fd235);
            },
            'ioUhs': _0x3e067e(0x223)
        };
    if (_0x14715b[_0x3e067e(0x114)](pluginFilter, _0x297d69)) {
        let _0xa2514e = global[_0x3e067e(0x1b1)](_0x14715b[_0x3e067e(0x117)](join, pluginFolder, _0x297d69), !![]);
        if (_0x14715b[_0x3e067e(0x92)](_0x297d69, global[_0x3e067e(0x12b)])) {
            if (_0x14715b[_0x3e067e(0x114)](existsSync, _0xa2514e))
                conn[_0x3e067e(0xad)][_0x3e067e(0xda)](_0x3e067e(0x99) + _0x3e067e(0x13f) + '\x27' + _0x297d69 + '\x27');
            else
                return conn[_0x3e067e(0xad)][_0x3e067e(0x1fd)](_0x3e067e(0x15f) + _0x3e067e(0x106) + _0x297d69 + '\x27'), delete global[_0x3e067e(0x12b)][_0x297d69];
        } else
            conn[_0x3e067e(0xad)][_0x3e067e(0xda)](_0x3e067e(0x15e) + _0x3e067e(0xc7) + '\x20\x27' + _0x297d69 + '\x27');
        let _0x552e48 = _0x14715b[_0x3e067e(0x121)](_0x522a69, _0x14715b[_0x3e067e(0x1ba)](readFileSync, _0xa2514e), _0x297d69, {
            'sourceType': _0x14715b[_0x3e067e(0x127)],
            'allowAwaitOutsideFunction': !![]
        });
        if (_0x552e48)
            conn[_0x3e067e(0xad)][_0x3e067e(0xd7)](_0x3e067e(0x21c) + _0x3e067e(0xb7) + _0x3e067e(0x158) + _0x297d69 + '\x27\x0a' + _0x14715b[_0x3e067e(0x1ba)](format, _0x552e48));
        else
            try {
                const _0x20f1da = await import(global[_0x3e067e(0x1b1)](_0xa2514e) + _0x3e067e(0x14a) + Date[_0x3e067e(0xc1)]());
                global[_0x3e067e(0x12b)][_0x297d69] = _0x20f1da[_0x3e067e(0x239)] || _0x20f1da;
            } catch (_0xeb26d1) {
                conn[_0x3e067e(0xad)][_0x3e067e(0xd7)](_0x3e067e(0xf9) + _0x3e067e(0x126) + '\x20\x27' + _0x297d69 + '\x0a' + _0x14715b[_0x3e067e(0x114)](format, _0xeb26d1) + '\x27');
            } finally {
                global[_0x3e067e(0x12b)] = Object[_0x3e067e(0x1ed) + 's'](Object[_0x3e067e(0x17d)](global[_0x3e067e(0x12b)])[_0x3e067e(0x1d5)](([_0x5ee1ae], [_0x2e2601]) => _0x5ee1ae[_0x3e067e(0x235) + _0x3e067e(0xf2)](_0x2e2601)));
            }
    }
}, Object[_0x5d380f(0xfa)](global[_0x5d380f(0x205)]), watch(pluginFolder, global[_0x5d380f(0x205)]), await global[_0x5d380f(0x202) + _0x5d380f(0xcb)]();
async function _quickTest() {
    const _0x6f8e18 = _0x5d380f, _0x240624 = {
            'nPbdI': function (_0x56be89, _0x29a580) {
                return _0x56be89(_0x29a580);
            },
            'SgLGM': function (_0x43993e, _0xe3e2f6) {
                return _0x43993e !== _0xe3e2f6;
            },
            'wsRJo': _0x6f8e18(0xba),
            'cQhJF': _0x6f8e18(0xd7),
            'KZfLi': _0x6f8e18(0x19f),
            'NYfCk': function (_0x58c338, _0x23d753) {
                return _0x58c338(_0x23d753);
            },
            'yMSgc': _0x6f8e18(0xec),
            'ytuPv': function (_0x155b73, _0x45ca62, _0x52c908) {
                return _0x155b73(_0x45ca62, _0x52c908);
            },
            'DSgun': _0x6f8e18(0x1b7) + 'er',
            'lldVg': _0x6f8e18(0x10a),
            'BsFWJ': _0x6f8e18(0xac) + _0x6f8e18(0x152),
            'TqFFi': _0x6f8e18(0x224),
            'gjfzn': _0x6f8e18(0x1b9),
            'kegUZ': _0x6f8e18(0x155),
            'rQTwc': _0x6f8e18(0xb6),
            'lACbL': _0x6f8e18(0xea),
            'sUONT': _0x6f8e18(0x1cf),
            'TfvUq': _0x6f8e18(0x156),
            'zRKdh': _0x6f8e18(0x1b0) + _0x6f8e18(0x1f7) + _0x6f8e18(0x186) + _0x6f8e18(0x6f) + _0x6f8e18(0xae) + _0x6f8e18(0x107) + _0x6f8e18(0x1f5) + _0x6f8e18(0xce) + _0x6f8e18(0xf6) + _0x6f8e18(0x20d),
            'zjQaU': _0x6f8e18(0x1e4) + _0x6f8e18(0x1fe) + _0x6f8e18(0x1ab) + _0x6f8e18(0x18c) + _0x6f8e18(0x1be) + _0x6f8e18(0x234) + _0x6f8e18(0x8c) + _0x6f8e18(0x1b4) + _0x6f8e18(0x1d9) + _0x6f8e18(0x16c) + _0x6f8e18(0x11c) + _0x6f8e18(0x20c)
        };
    let _0x3e481f = await Promise[_0x6f8e18(0x172)]([
            _0x240624[_0x6f8e18(0x178)](spawn, _0x240624[_0x6f8e18(0x1da)]),
            _0x240624[_0x6f8e18(0x123)](spawn, _0x240624[_0x6f8e18(0x237)]),
            _0x240624[_0x6f8e18(0x113)](spawn, _0x240624[_0x6f8e18(0x1da)], [
                _0x240624[_0x6f8e18(0x179)],
                _0x240624[_0x6f8e18(0x174)],
                _0x240624[_0x6f8e18(0x70)],
                _0x240624[_0x6f8e18(0xb8)],
                _0x240624[_0x6f8e18(0xe3)],
                _0x240624[_0x6f8e18(0x1bc)],
                '1',
                '-f',
                _0x240624[_0x6f8e18(0x238)],
                '-'
            ]),
            _0x240624[_0x6f8e18(0x123)](spawn, _0x240624[_0x6f8e18(0x146)]),
            _0x240624[_0x6f8e18(0x123)](spawn, _0x240624[_0x6f8e18(0x1a8)]),
            _0x240624[_0x6f8e18(0x123)](spawn, 'gm'),
            _0x240624[_0x6f8e18(0x113)](spawn, _0x240624[_0x6f8e18(0x23c)], [_0x240624[_0x6f8e18(0x177)]])
        ][_0x6f8e18(0x1a9)](_0x50b04f => {
            const _0x1dbc60 = _0x6f8e18;
            return Promise[_0x1dbc60(0x1ee)]([
                new Promise(_0x4ffba6 => {
                    const _0x3d4048 = _0x1dbc60, _0x22bf55 = {
                            'lygjj': function (_0x27d1e5, _0x12a0eb) {
                                const _0x108078 = _0x21be;
                                return _0x240624[_0x108078(0x178)](_0x27d1e5, _0x12a0eb);
                            },
                            'KmJry': function (_0x541719, _0x3f5ee9) {
                                const _0x5bf60a = _0x21be;
                                return _0x240624[_0x5bf60a(0x119)](_0x541719, _0x3f5ee9);
                            }
                        };
                    _0x50b04f['on'](_0x240624[_0x3d4048(0xe7)], _0x230ee6 => {
                        const _0x226000 = _0x3d4048;
                        _0x22bf55[_0x226000(0xe5)](_0x4ffba6, _0x22bf55[_0x226000(0xaa)](_0x230ee6, 0x6e1 * -0x5 + 0x1c1f * 0x1 + -0x6c5 * -0x1));
                    });
                }),
                new Promise(_0x1a99d1 => {
                    const _0xff8062 = _0x1dbc60;
                    _0x50b04f['on'](_0x240624[_0xff8062(0x70)], _0x4f557f => _0x1a99d1(![]));
                })
            ]);
        })), [_0x2db125, _0xa96dc5, _0x40831d, _0xb483f9, _0x13b00b, _0x2324bc, _0x4baea1] = _0x3e481f;
    console[_0x6f8e18(0x8a)](_0x3e481f);
    let _0x5c9626 = global[_0x6f8e18(0x210)] = {
        'ffmpeg': _0x2db125,
        'ffprobe': _0xa96dc5,
        'ffmpegWebp': _0x40831d,
        'convert': _0xb483f9,
        'magick': _0x13b00b,
        'gm': _0x2324bc,
        'find': _0x4baea1
    };
    Object[_0x6f8e18(0xfa)](global[_0x6f8e18(0x210)]), !_0x5c9626[_0x6f8e18(0x19f)] && conn[_0x6f8e18(0xad)][_0x6f8e18(0x1fd)](_0x6f8e18(0x19b) + _0x6f8e18(0x216) + _0x6f8e18(0xf4) + _0x6f8e18(0x1f3) + _0x6f8e18(0x14c) + _0x6f8e18(0x1bf) + _0x6f8e18(0xa5)), _0x5c9626[_0x6f8e18(0x19f)] && !_0x5c9626[_0x6f8e18(0x1e7)] && conn[_0x6f8e18(0xad)][_0x6f8e18(0x1fd)](_0x240624[_0x6f8e18(0x147)]), !_0x5c9626[_0x6f8e18(0xb6)] && !_0x5c9626[_0x6f8e18(0xea)] && !_0x5c9626['gm'] && conn[_0x6f8e18(0xad)][_0x6f8e18(0x1fd)](_0x240624[_0x6f8e18(0xd2)]);
}
_quickTest()[_0x5d380f(0x1c3)](() => conn[_0x5d380f(0xad)][_0x5d380f(0xda)](_0x5d380f(0x21a) + _0x5d380f(0xa9) + _0x5d380f(0xbb) + _0x5d380f(0x1c9) + _0x5d380f(0x16e) + 'n'))[_0x5d380f(0x183)](console[_0x5d380f(0xd7)]);