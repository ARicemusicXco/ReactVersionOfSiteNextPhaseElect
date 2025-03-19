/**
 * Simple Media Cleanup Script for NextPhaseElect Website
 * 
 * Removes unused media files based on filename patterns to reduce
 * deployment size for Azure Static Web Apps
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current script directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Media directory to clean up
const MEDIA_DIR = './NextPhaseElectMediaLibrary';
// Backup directory for deleted files
const BACKUP_DIR = './media-backup';

// List of important file patterns to keep (partial matches)
const IMPORTANT_PATTERNS = [
  // Branding
  'logo', 'Logo', 'favicon', 'Favicon', 'icon', 'Icon',
  'np-', 'NP-', 'next-phase', 'Next-Phase',
  'cropped', 'theme', 'Theme', 'SiteLogoInTitle',
  
  // Team images
  'TeamImage',
  
  // Important content
  'AdobeStock_', 'Solar-panels', 'commercial-electric-hero',
  
  // Service images
  'solar', 'Solar', 'electric', 'Electric',
  'commercial', 'Commercial', 'residential', 'Residential',
  
  // Partners
  'Tesla', 'partner', 'Partner',
  
  // UI elements
  'arrow', 'button', 'nav', 'menu', 'header',
  
  // File types
  '.svg'
];

console.log('Starting media cleanup...');

// Create backup directory
if (!fs.existsSync(BACKUP_DIR)) {
  try {
    fs.mkdirSync(BACKUP_DIR);
    console.log(`Created backup directory: ${BACKUP_DIR}`);
  } catch (error) {
    console.log(`Error creating backup directory: ${error.message}`);
  }
}

// Get list of files in media directory
let mediaFiles = [];
try {
  function getFilesRecursively(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        // Recursively get files from subdirectories
        getFilesRecursively(fullPath);
      } else {
        // Add file to the list
        mediaFiles.push(fullPath);
      }
    }
  }
  
  // Start the recursive file collection
  if (fs.existsSync(MEDIA_DIR)) {
    getFilesRecursively(MEDIA_DIR);
    console.log(`Found ${mediaFiles.length} total media files`);
  } else {
    console.log(`Media directory not found: ${MEDIA_DIR}`);
  }
} catch (error) {
  console.log(`Error reading media directory: ${error.message}`);
}

// Determine which files to keep and which to delete
const filesToKeep = [];
const filesToDelete = [];

for (const file of mediaFiles) {
  const fileName = path.basename(file);
  let shouldKeep = false;
  
  // Check if file matches any important pattern
  for (const pattern of IMPORTANT_PATTERNS) {
    if (fileName.includes(pattern)) {
      shouldKeep = true;
      break;
    }
  }
  
  if (shouldKeep) {
    filesToKeep.push(file);
  } else {
    filesToDelete.push(file);
  }
}

console.log(`Keeping ${filesToKeep.length} important files`);
console.log(`Deleting ${filesToDelete.length} unused files`);

// Delete unused files
let deletedCount = 0;
for (const file of filesToDelete) {
  try {
    // Backup the file
    const backupFile = path.join(BACKUP_DIR, path.basename(file));
    fs.copyFileSync(file, backupFile);
    
    // Delete the original
    fs.unlinkSync(file);
    deletedCount++;
  } catch (error) {
    console.log(`Error processing ${file}: ${error.message}`);
  }
}

console.log(`Successfully deleted ${deletedCount} of ${filesToDelete.length} files`);
console.log('Media cleanup complete!'); 
