# Media Cleanup Script for Deployment

This repository includes `cleanup-media-for-deployment.js`, a script that helps reduce the size of your deployment by removing unused media files.

## What it does

1. Scans the `NextPhaseElectMediaLibrary` directory for all media files
2. Identifies important files based on naming patterns (logos, icons, team images, etc.)
3. Removes files that don't match these patterns
4. Creates backups of all deleted files in a `media-backup` directory

## How to use

Simply run:

```bash
node cleanup-media-for-deployment.js
```

## Integration with GitHub Actions

The script is automatically run during the GitHub Actions workflow for deployment to Azure Static Web Apps, helping to reduce the overall size of the deployment and prevent the "too many static files" error.

## File patterns that are preserved

The script keeps files that contain any of these patterns:

- Branding: logo, favicon, icon, np-, next-phase, cropped, theme, SiteLogoInTitle
- Team images: TeamImage
- Content: AdobeStock_, Solar-panels, commercial-electric-hero
- Service images: solar, electric, commercial, residential
- Partners: Tesla, partner
- UI elements: arrow, button, nav, menu, header
- File types: .svg

If you need to add more patterns to preserve additional files, edit the `IMPORTANT_PATTERNS` array in the script. 