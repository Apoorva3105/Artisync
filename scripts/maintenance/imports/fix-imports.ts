const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '../../..');

function toAbsolutePath(projectRelativePath) {
  return path.join(ROOT_DIR, projectRelativePath);
}

function addImports(filePath, imports) {
  const absolutePath = toAbsolutePath(filePath);
  if (!fs.existsSync(absolutePath)) return;

  let content = fs.readFileSync(absolutePath, 'utf8');
  
  // Find where to add imports
  const phosphorImportMatch = content.match(/import\s+{([^}]*)}\s+from\s+['"]@phosphor-icons\/react['"]/);
  
  if (phosphorImportMatch) {
    let existingImports = phosphorImportMatch[1].split(',').map(s => s.trim()).filter(Boolean);
    imports.forEach(imp => {
      if (!existingImports.includes(imp)) {
        existingImports.push(imp);
      }
    });
    content = content.replace(phosphorImportMatch[0], `import { ${existingImports.join(', ')} } from '@phosphor-icons/react'`);
  } else {
    // Add new import statement at the top after other imports
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
  
  fs.writeFileSync(absolutePath, content, 'utf8');
}

addImports('src/app/about/page.tsx', ['Check']);
addImports('src/app/contact/page.tsx', ['Envelope', 'Phone']);
addImports('src/app/howitworks/page.tsx', ['Sparkle', 'Shield']);
addImports('src/app/marketplace/page.tsx', ['Warning', 'Cube', 'Handshake', 'DeviceMobile']);
addImports('src/app/product/[id]/page.tsx', ['Handshake', 'ImageSquare', 'Gift', 'Users', 'Confetti']);
addImports('src/app/stall/[id]/page.tsx', ['Handshake', 'Cube']);
addImports('src/components/AIShoppingChat.tsx', ['Warning']);
addImports('src/components/ARViewer.tsx', ['ArrowsClockwise', 'CheckCircle']);

console.log('Imports added successfully.');
