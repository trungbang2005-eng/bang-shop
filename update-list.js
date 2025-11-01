// update-list.js
import fs from 'fs';
import path from 'path';
const baseDir = './images';
function updateListJson() {
  const brands = fs.readdirSync(baseDir).filter(f => fs.statSync(path.join(baseDir, f)).isDirectory());
  brands.forEach(brand => {
    const folder = path.join(baseDir, brand);
    const files = fs.readdirSync(folder).filter(f => /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(f) && f.toLowerCase() !== 'list.json' );
    const jsonPath = path.join(folder, 'list.json');
    fs.writeFileSync(jsonPath, JSON.stringify(files, null, 2), 'utf-8');
    console.log('✅ Updated ' + jsonPath + ' (' + files.length + ' files)');
  });
  console.log('🎉 All list.json updated!');
}
updateListJson();
