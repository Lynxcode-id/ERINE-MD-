import axios from 'axios';
import * as cheerio from 'cheerio';

const base = 'https://jkt48.com';

const JKT48 = {
  async schedule(month, year) {
    try {
      const now = new Date();
      if (!month) month = now.getMonth() + 1;
      if (!year) year = now.getFullYear();
      const res = await axios.get(`${base}/calendar/list/y/${year}/m/${month}`);
      const $ = cheerio.load(res.data);
      const bulan = $('.entry-schedule__header--center').text().trim();
      const schedule = [];
      $('tr').each((index, element) => {
        let day = {};
        day.hari = $(element).find('h3').text().trim();
        day.events = [];
        $(element).find('.contents').each((index, element) => {
          let event = {};
          event.icon = base + $(element).find('img').attr('src');
          event.name = $(element).find('a').text().trim();
          event.link = base + $(element).find('a').attr('href');
          day.events.push(event);
        });
        if (day.hari) schedule.push(day);
      });
      return { bulan, schedule };
    } catch (error) {
      console.error('Schedule Error:', error.message);
      throw new Error('Gagal mengambil jadwal. Pastikan format input benar atau coba lagi nanti.');
    }
  },

  async member(q = '') {
    try {
      const res = await axios.get(`${base}/member/list?lang=id`);
      const $ = cheerio.load(res.data);
      const member = {};
      $('.row-all-10').each((index, element) => {
        let list = [];
        $(element).find('div').each((index2, element) => {
          let orang = {};
          if (index2 % 2 === 1) return;
          orang.image = base + $(element).find('img').attr('src');
          orang.nama = ("" + $(element).find('p a').html()).replace(/<br>(<\/br>)?/g, ' ');
          orang.link = base + $(element).find('a').attr('href');
          orang.tipe = index === 0 ? 'anggota' : 'trainee';
          list.push(orang);
        });
        if (index === 0) member.anggota = list.filter(_ => _.nama.toLowerCase().includes(q.toLowerCase()));
        else member.trainee = list.filter(_ => _.nama.toLowerCase().includes(q.toLowerCase()));
      });
      if (q) member.search = [...member.anggota, ...member.trainee];
      return member;
    } catch (error) {
      console.error('Member Error:', error.message);
      throw new Error('Gagal mengambil daftar anggota. Pastikan koneksi Anda stabil atau coba lagi nanti.');
    }
  }
};

const handler = async (m, { conn, command, args }) => {
  try {
    if (command === 'jkt48schedule') {
      let month = args[0] ? parseInt(args[0]) : undefined;
      let year = args[1] ? parseInt(args[1]) : undefined;
      const result = await JKT48.schedule(month, year);
      let message = `📅 Jadwal JKT48 (${result.bulan}):\n\n`;
      result.schedule.forEach(day => {
        message += `📆 *${day.hari}*\n`;
        day.events.forEach(event => {
          message += `- ${event.name}\n  ${event.link}\n`;
        });
        message += '\n';
      });
      if (result.schedule.length === 0) {
        message += 'Tidak ada jadwal untuk bulan ini.';
      }
      conn.sendMessage(m.chat, { text: message }, { quoted: m });
    } else if (command === 'jkt48member') {
      const query = args.join(' ');
      const result = await JKT48.member(query);
      let message = `👤 Daftar Member JKT48:\n\n`;
      if (query) {
        message += `Hasil pencarian untuk *${query}*:\n`;
        result.search.forEach(member => {
          message += `- *${member.nama}*\n  ${member.link}\n`;
        });
        if (result.search.length === 0) {
          message += 'Tidak ada hasil pencarian.';
        }
      } else {
        message += '\n📌 Anggota:\n';
        result.anggota.forEach(member => {
          message += `- ${member.nama}\n  ${member.link}\n`;
        });
        message += '\n📌 Trainee:\n';
        result.trainee.forEach(member => {
          message += `- ${member.nama}\n  ${member.link}\n`;
        });
      }
      conn.sendMessage(m.chat, { text: message }, { quoted: m });
    }
  } catch (error) {
    console.error('Handler Error:', error.message);
    conn.sendMessage(m.chat, { text: `Terjadi kesalahan: ${error.message}` }, { quoted: m });
  }
};

handler.help = ['jkt48schedule', 'jkt48member'].map(v => v + ' [opsional]');
handler.tags = ['jkt48'];
handler.command = /^(jkt48schedule|jkt48member)$/i;

export default handler;