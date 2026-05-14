const fs = require('fs');

function parseCSVRow(str) {
    let result = [];
    let cur = '';
    let inQuotes = false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '"') {
            inQuotes = !inQuotes;
        } else if (str[i] === ',' && !inQuotes) {
            result.push(cur.trim());
            cur = '';
        } else {
            cur += str[i];
        }
    }
    result.push(cur.trim());
    return result;
}

const text = fs.readFileSync('DragonBallZBudokai3CollectorEditionPALPlatinumCapsuleList.csv', 'utf8');
const lines = text.split('\n');
let allSkills = [];

for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue;
    const cols = parseCSVRow(lines[i]);
    if (cols.length < 10) continue;
    
    // Filter out system or unused skills
    if (cols[8] !== 'Used') continue;
    if (cols[6] === 'System') continue; // We don't equip system capsules
    
    let slotsStr = cols[2];
    let slots = parseInt(slotsStr.charAt(0)) || 0;
    if (slots === 0) continue; // Don't allow equipping 0-slot direct transformations here for now
    
    allSkills.push({
        id: cols[0],
        name: cols[1],
        slots: slots,
        type: cols[6],
        user: cols[9]
    });
}

const gokuSkills = allSkills.filter(skill => {
    if (skill.user === "Everyone can use") return true;
    const users = skill.user.split(',').map(u => u.trim());
    return users.includes('Goku');
});

console.log("Total skills parsed:", allSkills.length);
console.log("Goku skills:", gokuSkills.length);
if (gokuSkills.length > 0) {
    console.log("First few Goku skills:", gokuSkills.slice(0, 3));
}
