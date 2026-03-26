const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '../../..');

function toAbsolutePath(projectRelativePath) {
  return path.join(ROOT_DIR, projectRelativePath);
}

function replaceInFile(filePath, replacements) {
  const absolutePath = toAbsolutePath(filePath);
  if (!fs.existsSync(absolutePath)) return;

  let content = fs.readFileSync(absolutePath, 'utf8');
  for (const [search, replace] of replacements) {
    if (search instanceof RegExp) {
      content = content.replace(search, replace);
    } else {
      content = content.split(search).join(replace);
    }
  }
  fs.writeFileSync(absolutePath, content, 'utf8');
}

// 1. marketplace/page.tsx
replaceInFile('src/app/marketplace/page.tsx', [
  ['💜 ', ''], ['🛍️ ', ''], ['🛒 ', ''], ['🔍 ', ''], ['📱 ', ''], ['🔊 ', ''], ['🥇 ', ''], ['🎬 ', ''], ['👤 ', ''], ['🏆 ', ''], ['🎁 ', ''], ['🌗 ', ''],
  ['<div className="text-6xl mb-4">🛒</div>', '<ShoppingCart className="w-16 h-16 mb-4 text-[var(--muted)]" />'],
  ['<div className="text-6xl mb-4">⚠️</div>', '<Warning className="w-16 h-16 mb-4 text-amber-500" />'],
  ['🎁 {t(\'marketplace.giftableProducts\')}', '<Gift className="w-6 h-6 mr-3 text-pink-500" /> {t(\'marketplace.giftableProducts\')}'],
  ['🧩 {t(\'marketplace.virtualBadge\')}', '<Cube className="w-4 h-4 mr-1" /> {t(\'marketplace.virtualBadge\')}'],
  ['🤝 {t(\'marketplace.collabBadge\')}', '<Handshake className="w-4 h-4 mr-1" /> {t(\'marketplace.collabBadge\')}'],
  ['}><span className="text-orange-400 text-4xl">🎨</span>', '}><Palette className="w-10 h-10 text-orange-400" />'],
  ['<p className="font-medium mb-1 text-yellow-800 dark:text-gray-300">🤝 Collaboration by:</p>', '<p className="font-medium mb-1 text-yellow-800 dark:text-gray-300 flex items-center"><Handshake className="w-4 h-4 mr-2" /> Collaboration by:</p>'],
  ['<span role="img" aria-label="AR" className="text-lg">📱</span>', '<DeviceMobile className="w-5 h-5" />'],
  ['}><span className="text-orange-400 text-4xl">🎨</span>', '}><Palette className="w-10 h-10 text-orange-400" />'],
  ['}><span className="text-orange-400 text-4xl">🎨</span>', '}><Palette className="w-10 h-10 text-orange-400" />']
]);

// 2. product/[id]/page.tsx
replaceInFile('src/app/product/[id]/page.tsx', [
  ['🤝 Collaborative', '<span className="flex items-center"><Handshake className="mr-2" /> Collaborative</span>'],
  ['�� Virtual Asset', '<span className="flex items-center"><Cube className="mr-2" /> Virtual Asset</span>'],
  ['<span className="text-6xl text-gray-300">🖼️</span>', '<ImageSquare className="w-16 h-16 text-gray-300" />'],
  ['<span className="text-xl">��</span>', '<DeviceMobile className="w-6 h-6" />'],
  ['<span role="img" aria-label="gift" className="text-lg group-hover:animate-bounce">🎁</span>', '<Gift className="w-5 h-5 group-hover:animate-bounce" />'],
  ['🤝 ${t(', '<Handshake className="inline w-4 h-4 mr-1" /> ${t('],
  ['<div className="text-2xl mb-1">🎁</div>', '<Gift className="w-8 h-8 mb-1 text-[var(--sapphire)]" />'],
  ['<div className="text-2xl mb-1">👥</div>', '<Users className="w-8 h-8 mb-1 text-[var(--sapphire)]" />'],
  ['<div className="text-6xl mb-4">🎉</div>', '<Confetti className="w-16 h-16 mb-4 text-[var(--saffron)]" />'],
  ['<div className="text-6xl mb-4">👥</div>', '<Users className="w-16 h-16 mb-4 text-[var(--sapphire)]" />'],
  ['<div className="flex items-center justify-center h-full text-gray-400 text-3xl">🖼️</div>', '<div className="flex items-center justify-center h-full text-gray-400"><ImageSquare className="w-8 h-8" /></div>'],
  ['✅', 'Success'],
  ['❌', 'Failed']
]);

// 3. Navbar.tsx
replaceInFile('src/components/Navbar.tsx', [
  ['💜 ', ''], ['🛍️ ', ''], ['🛒 ', ''], ['🔍 ', ''], ['📱 ', ''], ['🔊 ', ''], ['🥇 ', ''], ['🎬 ', ''], ['👤 ', ''], ['🏆 ', ''], ['🎁 ', ''], ['🌗 ', ''], ['☰ ', ''],
  [', flag: \'🇬🇧\'', ''],
  [', flag: \'🇮��\'', ''],
  [', flag: \'🇳🇵\'', '']
]);

// 4. howitworks/page.tsx
replaceInFile('src/app/howitworks/page.tsx', [
  ['<span className="text-[var(--heritage-gold)] mr-2">✦</span>', '<Sparkle weight="fill" className="text-[var(--heritage-gold)] mr-2" />'],
  ['<span className="text-[var(--success)] mr-2">🛡️</span>', '<Shield weight="fill" className="text-[var(--success)] mr-2" />']
]);

// 5. stall/[id]/page.tsx
replaceInFile('src/app/stall/[id]/page.tsx', [
  ['<span className="text-orange-400 text-4xl">🎨</span>', '<Palette className="w-10 h-10 text-orange-400" />'],
  ['🤝 {t(\'collaboration.title\')}', '<Handshake className="w-6 h-6 mr-2" /> {t(\'collaboration.title\')}'],
  ['🤝 Collab', '<span className="flex items-center"><Handshake className="w-4 h-4 mr-1" /> Collab</span>'],
  ['<span className="text-yellow-500 text-4xl">🎨</span>', '<Palette className="w-10 h-10 text-yellow-500" />'],
  ['🧩 {t(\'product.virtualBadge\')}', '<Cube className="w-4 h-4 mr-1" /> {t(\'product.virtualBadge\')}'],
  ['<span className="text-cyan-500 text-4xl">🧩</span>', '<Cube className="w-10 h-10 text-cyan-500" />']
]);

// 6. contact/page.tsx
replaceInFile('src/app/contact/page.tsx', [
  ['✉️', '<Envelope className="w-6 h-6" />'],
  ['📞', '<Phone className="w-6 h-6" />']
]);

// 7. ARViewer.tsx
replaceInFile('src/components/ARViewer.tsx', [
  ['<div style={{ fontSize: 38, marginBottom: 18 }}>🔄</div>', '<ArrowsClockwise size={38} className="mb-4 animate-spin text-white" />'],
  ['<div style={{ fontSize: 32, marginBottom: 16 }}>✅</div>', '<CheckCircle size={32} className="mb-4 text-green-400" />'],
  ['<div style={{ marginBottom: 10 }}>🔄</div>', '<ArrowsClockwise size={24} className="mb-2 text-white animate-spin" />']
]);

// 8. MarketplaceNavigator3D.tsx
replaceInFile('src/components/MarketplaceNavigator3D.tsx', [
  ['🖱️', ''], ['⌨️', '']
]);

// 9. AIShoppingChat.tsx
replaceInFile('src/components/AIShoppingChat.tsx', [
  ['��️ ', ''],
  ['<span>⚠️</span>', '<Warning className="w-5 h-5 text-amber-500" />']
]);

// 10. about/page.tsx
replaceInFile('src/app/about/page.tsx', [
  ['<span className="mr-2 text-[var(--heritage-gold)]">✓</span>', '<Check weight="bold" className="mr-2 text-[var(--heritage-gold)]" />']
]);

console.log("Replacements done for first batch");
