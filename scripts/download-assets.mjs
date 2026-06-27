import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public', 'images');

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

const images = [
  'https://framerusercontent.com/images/CQolT7pNbKjqpl7iVfUegyYCSEE.jpg',
  'https://framerusercontent.com/images/WHoMq8xXXy3ogXpDpTqBo3Wth0A.png',
  'https://framerusercontent.com/images/XJFnEl7vAfaE6X8jKg1Z1PeitIc.png',
  'https://framerusercontent.com/images/oxAs3awJ7m9V4sHOKzuHAiL0b0.jpg',
  'https://framerusercontent.com/images/CMSqKS7ljFjUX1ul6BIQXpe0Pc.jpg',
  'https://framerusercontent.com/images/S4ZTmItkEi1cWGNHDbJEN0O1zY.jpg',
  'https://framerusercontent.com/images/catBe2oDLW9NxJc1PzHxZSn6xY.jpg',
  'https://framerusercontent.com/images/CTYQjTOJGK5FVvbAkfOYUFmkVNQ.jpg',
  'https://framerusercontent.com/images/uy1XcmmT2qiaTBk18eoukQqlPk.jpg',
  'https://framerusercontent.com/images/imeUcyMMbKYRMNhUDuVvx4Ns6mg.jpg',
  'https://framerusercontent.com/images/WRCbmp2tgPvD2rZF622bBKVrbt0.jpg',
  'https://framerusercontent.com/images/xkarbZrnCBVYbD2kRRdam9aKt0.jpg',
  'https://framerusercontent.com/images/5qnNbBZBmCAAJDt4Jo1UUDzZyRk.jpg',
  'https://framerusercontent.com/images/z821vNPNUJeKcWr76E0f3cymNo.jpg',
  'https://framerusercontent.com/images/mKRu7f0u4HUSaV8Zd395eBgOE.jpg',
  'https://framerusercontent.com/images/IHsObMetV7AEeyjOW0zgKhm5o9U.jpg',
  'https://framerusercontent.com/images/AWlL1H4QLEme1sD4dGqa7dvnr8.jpg',
  'https://framerusercontent.com/images/1v28XS77BccorWaMJ7suXwVaKMo.jpg',
  'https://framerusercontent.com/images/rurWZkxRma3VIOLcSkpiVf8YaL0.jpg',
  'https://framerusercontent.com/images/Ns2lwideopI3LuOCH5Oythwj2U.jpg',
  'https://framerusercontent.com/images/VdvQOfJqXkm5iAiVXPlg5cBzdQ.jpg',
  'https://framerusercontent.com/images/YoOdBvIm6cyatNpumE2HZD5YB2I.jpg',
  'https://framerusercontent.com/images/kdn9lH05Uzi5oqeiBS5oKBY6Q.jpg',
  'https://framerusercontent.com/images/PQG2GwhLLy7cIzpYItvStfLPNgQ.jpg',
  'https://framerusercontent.com/images/jUruyIReP2hMt6XoadJ6BFLSk5E.jpg',
  'https://framerusercontent.com/images/hYOHLXabWyjdEekAjazyOqWm8Y.jpg',
  'https://framerusercontent.com/images/wXeQRFjGVqNnDdqh4kbOSklmvWY.jpg',
  'https://framerusercontent.com/images/3iC1MXJJcUe9OZi5KP7RvyfbzXE.jpg',
  'https://framerusercontent.com/images/qi31jTCjPGBFLq2Bsxyr7jMEt3U.jpg',
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(dest)) { console.log(`  skip (exists): ${path.basename(dest)}`); return resolve(); }
    const file = fs.createWriteStream(dest);
    const protocol = url.startsWith('https') ? https : http;
    protocol.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        file.close();
        fs.unlinkSync(dest);
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      response.pipe(file);
      file.on('finish', () => { file.close(); console.log(`  ✓ ${path.basename(dest)}`); resolve(); });
    }).on('error', (err) => { fs.unlinkSync(dest); reject(err); });
  });
}

async function downloadBatch(urls, batchSize = 4) {
  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    await Promise.all(batch.map(url => {
      const filename = url.split('/images/')[1];
      const dest = path.join(publicDir, filename);
      return download(url, dest).catch(e => console.error(`  ✗ ${filename}: ${e.message}`));
    }));
  }
}

console.log(`Downloading ${images.length} images to public/images/...`);
await downloadBatch(images);
console.log('Done!');
