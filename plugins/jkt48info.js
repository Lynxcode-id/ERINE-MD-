import cheerio from 'cheerio';

let handler = async (m, { text, conn, command }) => {
  const prefix = '.'; 
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Referer': 'https://jkt48.com/',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
    'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7'
  };

  const query = text?.toLowerCase().trim();

  try {
    if (query === 'berita') {
      const res = await fetch('https://jkt48.com/news/list?lang=id', { headers });
      const html = await res.text();
      const $ = cheerio.load(html);
      let newsList = [];

      $('.entry-news__list--item').each((_, el) => {
        const title = $(el).find('h3 a').text().trim();
        const link = 'https://jkt48.com' + $(el).find('h3 a').attr('href');
        const date = $(el).find('time').text().trim();
        if (title) newsList.push(`📢 *${title}*\n📅 ${date}\n🔗 ${link}`);
      });

      if (newsList.length === 0) return m.reply('❌ Tidak ada berita terbaru saat ini.');
      return m.reply('*📢 Berita JKT48 Terbaru :*\n\n' + newsList.slice(0, 5).join('\n\n'));

    } else if (query === 'jadwal') {
      const res = await fetch('https://jkt48.com/schedule/list?lang=id', { headers });
      const html = await res.text();
      const $ = cheerio.load(html);
      let schedule = [];

      // Perbaikan Selector Jadwal agar tidak kosong
      $('table.table tbody tr').each((_, el) => {
        const date = $(el).find('td').first().text().trim();
        const event = $(el).find('.contents a').text().trim();
        if (date && event) schedule.push(`📅 *${date}*\n- ${event}`);
      });

      if (schedule.length === 0) return m.reply('❌ Jadwal tidak ditemukan atau sedang kosong.');
      return m.reply('*📅 Jadwal JKT48 Terdekat :*\n\n' + schedule.slice(0, 7).join('\n\n'));

    } else if (query === 'member') {
      const res = await fetch('https://jkt48.com/member/list?lang=id', { headers });
      const html = await res.text();
      const $ = cheerio.load(html);
      let members = [];

      $('.entry-member').each((_, el) => {
        const name = $(el).find('.entry-member__name a').text().trim();
        const img = 'https://jkt48.com' + $(el).find('img').attr('src');
        if (name) members.push({ name, img });
      });

      if (members.length === 0) return m.reply('❌ Gagal mengambil data member.');
      
      const rand = members[Math.floor(Math.random() * members.length)];
      let list = members.sort(() => 0.5 - Math.random()).slice(0, 10).map((v, i) => `${i + 1}. ${v.name}`).join('\n');
      
      return conn.sendMessage(m.chat, { 
        image: { url: rand.img }, 
        caption: `*✨ Member JKT48 ✨*\n\n${list}\n\n*Featured:* ${rand.name}` 
      }, { quoted: m });

    } else {
      return m.reply(`Format salah! Gunakan:\n*${prefix + command} berita*\n*${prefix + command} jadwal*\n*${prefix + command} member*`);
    }
  } catch (e) {
    console.error(e);
    m.reply('⚠️ Server JKT48 sedang sibuk atau IP Bot kamu diblokir sementara. Coba lagi nanti ya!');
  }
};

handler.help = ['jkt48info'];
handler.tags = ['jkt48'];
handler.command = /^(jkt48info)$/i;

export default handler;
