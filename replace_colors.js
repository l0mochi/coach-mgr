const fs = require('fs');
const files = ['c:/Users/l0moc/Documents/Antigravity/index.html', 'c:/Users/l0moc/Documents/Antigravity/app.js'];
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/rgba\(255,255,255,0\.\d+\)/g, 'rgba(0,0,0,0.05)');
  content = content.replace(/rgba\(255, 255, 255, 0\.\d+\)/g, 'rgba(0, 0, 0, 0.05)');
  content = content.replace(/color:#fff;/g, 'color:#1e293b;');
  content = content.replace(/color:#94a3b8;/g, 'color:#64748b;');
  content = content.replace(/color:#cbd5e1;/g, 'color:#475569;');
  content = content.replace(/background:rgba\(0,0,0,0\.3\);/g, 'background:#ffffff;');
  content = content.replace(/background:#1e293b;/g, 'background:#f1f5f9;');
  fs.writeFileSync(file, content);
});
console.log('Colors replaced successfully.');
