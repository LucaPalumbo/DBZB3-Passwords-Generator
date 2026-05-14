const fs = require('fs');

const code = fs.readFileSync('password_generator.js', 'utf8');
eval(code);

let character = {
    character_id: 34,
    level: 130,
    stats: [31, 31, 20, 20, 20, 20, 20],
    capsules: [140, 141, 141, 142, 142, 143, 143],
    prefix: 'DAJE!'
};

console.log("Expected: DAJE!NfeMWee-#p-V)+!(Xzd!qvdd%eec?f%");
console.log("Actual:   " + generatePassword(character));
