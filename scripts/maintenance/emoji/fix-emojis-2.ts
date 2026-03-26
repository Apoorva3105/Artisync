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

// SellerAnalytics.tsx
replaceInFile('src/app/dashboard/seller/SellerAnalytics.tsx', [
  ['<span>👁️</span>', '<Eye className="w-5 h-5" />'],
  ['<span>🧑‍🤝‍🧑</span>', '<Users className="w-5 h-5" />'],
  ['<span>🏆</span>', '<Trophy className="w-5 h-5" />'],
  ['<span className="text-3xl sm:text-4xl">🤝</span>', '<Handshake className="w-10 h-10 text-emerald-500" />'],
  ['<div className="text-2xl sm:text-3xl text-orange-600 dark:text-orange-400">💡</div>', '<Lightbulb className="w-8 h-8 text-orange-600 dark:text-orange-400" />']
]);

// SellerAuctionsList.tsx
replaceInFile('src/app/dashboard/seller/SellerAuctionsList.tsx', [
  ['<div className="text-6xl mb-4">📦</div>', '<Package className="w-16 h-16 mb-4 text-[var(--muted)]" />'],
  ["a.status === 'running' ? '🟢 Active' : a.status === 'scheduled' ? '🔵 Scheduled' : a.status === 'cancelled' ? '🔴 Cancelled' : '⚫ Completed'", 
   "a.status === 'running' ? 'Active' : a.status === 'scheduled' ? 'Scheduled' : a.status === 'cancelled' ? 'Cancelled' : 'Completed'"],
  ['<span className="text-lg">💰</span>', '<CurrencyInr className="w-5 h-5" />'],
  ['<span className="text-lg">🕐</span>', '<Clock className="w-5 h-5" />'],
  ['<span>🏁</span>', '<Flag className="w-4 h-4" />'],
  ['<span>🗑️</span>', '<Trash className="w-4 h-4" />']
]);

// seller/page.tsx
replaceInFile('src/app/dashboard/seller/page.tsx', [
  ['<span style="font-size:1.2em">👋 <b>Welcome Seller!</b></span>', '<span style="font-size:1.2em"><b>Welcome Seller!</b></span>'],
  ['doneLabel: \'✨ Done\'', 'doneLabel: \'Done\''],
  ['<span>📊</span>', '<ChartBar className="w-5 h-5" />'],
  ['<span>🤝</span>', '<Handshake className="w-5 h-5" />'],
  ['<span>🏛️</span>', '<Bank className="w-5 h-5" />'],
  ['<span className="text-green-500 dark:text-blue-400 text-3xl">🏛️</span>', '<Bank className="w-8 h-8 text-green-500 flex-shrink-0" />'],
  ['<span>🎁</span>', '<Gift className="w-5 h-5 inline mr-2" />'],
  ['📞 ', '<Phone className="w-4 h-4 inline mr-1" />'],
  ['❌ ', '<X className="w-4 h-4 inline mr-1" />'],
  ['✅ ', '<Check className="w-4 h-4 inline mr-1" />'],
  ['<span className="text-2xl">🧩</span>', '<Cube className="w-6 h-6 mr-2" />'],
  ['<span className="text-xl mr-2 animate-pulse">🧩</span>', '<Cube className="w-5 h-5 mr-2 animate-pulse" />'],
  ['<span className="text-2xl sm:text-3xl">🔨</span>', '<Hammer className="w-6 h-6 mr-2 text-rose-500" />'],
  ['🎨 ', '<Palette className="w-4 h-4 inline mr-1" />'],
  ['💰 ', '<CurrencyInr className="w-4 h-4 inline mr-1" />'],
  ['📅 ', '<Calendar className="w-4 h-4 inline mr-1" />'],
  ['<span>🚀</span>', '<RocketLaunch className="w-4 h-4 inline" />'],
  ['<span className="text-2xl sm:text-3xl">⚡</span>', '<Lightning className="w-6 h-6 mr-2 text-yellow-500 animate-pulse" />']
]);

// seller/reels/page.tsx
replaceInFile('src/app/dashboard/seller/reels/page.tsx', [
  ['✏️ Edit', '<Pencil className="w-4 h-4 inline mr-1" /> Edit']
]);

// gifts/page.tsx
replaceInFile('src/app/gifts/page.tsx', [
  ['<span className="text-xl">👥</span>', '<Users className="w-5 h-5" />'],
  ['<span className="text-4xl animate-bounce">🎉🎊🎁</span>', '<Gift className="w-10 h-10 text-pink-500 animate-bounce" />']
]);

// GroupGiftContribution.tsx
replaceInFile('src/components/GroupGiftContribution.tsx', [
  ['alert(\'Thank you for your contribution! 🎉\')', 'alert(\'Thank you for your contribution!\')'],
  ['<div className="text-4xl mb-2">🎉</div>', '<Gift className="w-10 h-10 mb-2 text-purple-500 mx-auto" />']
]);

// VirtualProductForm.tsx
replaceInFile('src/components/VirtualProductForm.tsx', [
  ['✖', '✕'],
  ['<span className="text-3xl mb-2">🎨</span>', '<Palette className="w-8 h-8 mb-2 mx-auto text-orange-500" />'],
  ['<span className="text-3xl mb-2">📖</span>', '<BookOpen className="w-8 h-8 mb-2 mx-auto text-blue-500" />'],
  ['<span className="text-3xl mb-2">⬆️</span>', '<UploadSimple className="w-8 h-8 mb-2 mx-auto text-emerald-500" />'],
  ['<h4 className="text-sm font-medium text-amber-800 mb-2">💡 ', '<h4 className="text-sm font-medium text-amber-800 mb-2 flex items-center"><Lightbulb className="w-4 h-4 mr-2" /> ']
]);

// Add necessary imports
function addImports(filePath, imports) {
  const absolutePath = toAbsolutePath(filePath);
  if (!fs.existsSync(absolutePath)) return;

  let content = fs.readFileSync(absolutePath, 'utf8');
  const phosphorImportMatch = content.match(/import\s+{([^}]*)}\s+from\s+['"]@phosphor-icons\/react['"]/);
  if (phosphorImportMatch) {
    let existingImports = phosphorImportMatch[1].split(',').map(s => s.trim()).filter(Boolean);
    imports.forEach(imp => {
      if (!existingImports.includes(imp)) existingImports.push(imp);
    });
    content = content.replace(phosphorImportMatch[0], `import { ${existingImports.join(', ')} } from '@phosphor-icons/react'`);
  } else {
    // Basic import fallback
    const lines = content.split('\n');
    const importStr = `import { ${imports.join(', ')} } from '@phosphor-icons/react'`;
    lines.unshift(importStr);
    content = lines.join('\n');
  }
  fs.writeFileSync(absolutePath, content, 'utf8');
}

addImports('src/app/dashboard/seller/SellerAnalytics.tsx', ['Eye', 'Users', 'Trophy', 'Handshake', 'Lightbulb']);
addImports('src/app/dashboard/seller/SellerAuctionsList.tsx', ['Package', 'CurrencyInr', 'Clock', 'Flag', 'Trash']);
addImports('src/app/dashboard/seller/page.tsx', ['ChartBar', 'Handshake', 'Bank', 'Gift', 'Phone', 'X', 'Check', 'Cube', 'Hammer', 'Palette', 'CurrencyInr', 'Calendar', 'RocketLaunch', 'Lightning']);
addImports('src/app/dashboard/seller/reels/page.tsx', ['Pencil']);
addImports('src/app/gifts/page.tsx', ['Users', 'Gift']);
addImports('src/components/GroupGiftContribution.tsx', ['Gift']);
addImports('src/components/VirtualProductForm.tsx', ['Palette', 'BookOpen', 'UploadSimple', 'Lightbulb']);

console.log('Second batch of emojis replaced.');
