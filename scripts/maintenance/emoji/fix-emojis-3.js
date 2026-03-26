const fs = require('fs');

function replaceInFile(filePath, replacements) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  for (const [search, replace] of replacements) {
    if (search instanceof RegExp) {
      content = content.replace(search, replace);
    } else {
      content = content.split(search).join(replace);
    }
  }
  fs.writeFileSync(filePath, content, 'utf8');
}

// marketplace/page.tsx
replaceInFile('src/app/marketplace/page.tsx', [
  ['doneLabel: \'✨ Done\'', 'doneLabel: \'Done\''],
  ['}><span className="text-orange-400 text-4xl">🎨</span>', '}><Palette className="w-10 h-10 text-orange-400" />'],
  ['<span className="text-orange-400 text-4xl">🎨</span>', '<Palette className="w-10 h-10 text-orange-400" />']
]);

// product/[id]/page.tsx
replaceInFile('src/app/product/[id]/page.tsx', [
  ['🧩 Virtual Asset', '<span className="flex items-center"><Cube className="mr-2" /> Virtual Asset</span>'],
  ['<span className="text-xl">📱</span>', '<DeviceMobile className="w-6 h-6" />']
]);

// successstories/page.tsx
replaceInFile('src/app/successstories/page.tsx', [
  ['<span className="text-6xl animate-pulse">✨</span>', '<Sparkle weight="fill" className="w-16 h-16 text-yellow-500 animate-pulse mx-auto mb-4" />']
]);

// AIShoppingChat.tsx
replaceInFile('src/components/AIShoppingChat.tsx', [
  ['\'🗑️ ', '\'']
]);

// Navbar.tsx
replaceInFile('src/components/Navbar.tsx', [
  ['doneLabel: \'✨ Done\'', 'doneLabel: \'Done\''],
  [', flag: \'🇮🇳\'', ''], [', flag: \'🇳🇵\'', '']
]);

// ShareModal.tsx
replaceInFile('src/components/ShareModal.tsx', [
  ['✕', '<X className="w-5 h-5" />']
]);

// VirtualProductForm.tsx
replaceInFile('src/components/VirtualProductForm.tsx', [
  ['✕', '<X className="w-4 h-4" />']
]);

// Add necessary imports
function addImports(filePath, imports) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  const phosphorImportMatch = content.match(/import\s+{([^}]*)}\s+from\s+['"]@phosphor-icons\/react['"]/);
  if (phosphorImportMatch) {
    let existingImports = phosphorImportMatch[1].split(',').map(s => s.trim()).filter(Boolean);
    imports.forEach(imp => {
      if (!existingImports.includes(imp)) existingImports.push(imp);
    });
    content = content.replace(phosphorImportMatch[0], `import { ${existingImports.join(', ')} } from '@phosphor-icons/react'`);
  } else {
    const lines = content.split('\n');
    let lastImportIndex = -1;
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith('import ')) {
            lastImportIndex = i;
        }
    }
    const importStr = `import { ${imports.join(', ')} } from '@phosphor-icons/react'`;
    if (lastImportIndex !== -1) {
        lines.splice(lastImportIndex + 1, 0, importStr);
    } else {
        lines.unshift(importStr);
    }
    content = lines.join('\n');
  }
  fs.writeFileSync(filePath, content, 'utf8');
}

addImports('src/app/successstories/page.tsx', ['Sparkle']);
addImports('src/components/ShareModal.tsx', ['X']);
addImports('src/components/VirtualProductForm.tsx', ['X']);
addImports('src/app/marketplace/page.tsx', ['Palette']);
addImports('src/app/product/[id]/page.tsx', ['Cube', 'DeviceMobile']);

console.log('Final batch of emojis replaced.');
