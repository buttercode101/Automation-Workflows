/**
 * Node script to generate a local dashboard README from client inputs.
 * Run: node dashboard-bootstrap.js
 */
const fs = require('fs');

const output = `# Client Dashboard Setup Snapshot\n\nGenerated: ${new Date().toISOString()}\n\nUse google-apps-script-template.js -> bootstrapDashboard() inside the target spreadsheet.\n`;

fs.writeFileSync('client-dashboard-setup.md', output);
console.log('Generated client-dashboard-setup.md');
