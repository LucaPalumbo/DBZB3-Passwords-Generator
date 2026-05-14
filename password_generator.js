const DICTIONARY = [
    'A','B','C','D','E','F','G','H','I','J','K','L','M',
    'N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
    'a','b','c','d','e','f','g','h','i','j','k','l','m',
    'n','o','p','q','r','s','t','u','v','w','x','y','z',
    '!','#','$','%','&','@','-','+','*','(',')','?'
];

function setBit(output, position, bit, value) {
    if (value) {
        output[position] |= (1 << bit);
    } else {
        output[position] &= ~(1 << bit);
    }
}

function setByte(output, position, value) {
    output[position] = value & 0xFF;
}

function generateRandomPrefix() {
    let prefix = '';
    for (let i = 0; i < 5; i++) {
        prefix += DICTIONARY[Math.floor(Math.random() * DICTIONARY.length)];
    }
    return prefix;
}

function bytesToChecksum(text) {
    let bits = '';
    for (let i = 0; i < 5; i++) {
        let index = DICTIONARY.indexOf(text[i]);
        if (index === -1) index = 0;
        bits += index.toString(2).padStart(6, '0');
    }
    bits += '00';
    return parseInt(bits, 2) >>> 0; // Ensure unsigned 32-bit integer
}

function step3Inverse(character, checksum) {
    let output = new Uint8Array(27);

    let id_byte = character.character_id + 7;
    setBit(output, 5, 5, id_byte & 1);
    setBit(output, 5, 7, (id_byte >> 1) & 1);
    setBit(output, 4, 1, (id_byte >> 2) & 1);
    setBit(output, 4, 3, (id_byte >> 3) & 1);
    setBit(output, 4, 5, (id_byte >> 4) & 1);
    setBit(output, 4, 7, (id_byte >> 5) & 1);

    let level_byte = character.level + 7;
    setBit(output, 6, 1, level_byte & 1);
    setBit(output, 6, 3, (level_byte >> 1) & 1);
    setBit(output, 6, 4, (level_byte >> 2) & 1);
    setBit(output, 6, 6, (level_byte >> 3) & 1);
    setBit(output, 6, 7, (level_byte >> 4) & 1);
    setBit(output, 5, 1, (level_byte >> 5) & 1);
    setBit(output, 5, 2, (level_byte >> 6) & 1);
    setBit(output, 5, 4, (level_byte >> 7) & 1);

    let stat_byte;

    // Stat 0
    stat_byte = character.stats[0] + 7;
    setBit(output, 7, 0, stat_byte & 1);
    setBit(output, 7, 2, (stat_byte >> 1) & 1);
    setBit(output, 7, 3, (stat_byte >> 2) & 1);
    setBit(output, 7, 5, (stat_byte >> 3) & 1);
    setBit(output, 7, 6, (stat_byte >> 4) & 1);

    // Stat 1 (Note: No + 7 in python)
    stat_byte = character.stats[1];
    setBit(output, 8, 1, stat_byte & 1);
    setBit(output, 8, 2, (stat_byte >> 1) & 1);
    setBit(output, 8, 4, (stat_byte >> 2) & 1);
    setBit(output, 8, 6, (stat_byte >> 3) & 1);
    setBit(output, 8, 7, (stat_byte >> 4) & 1);

    // Stat 2
    stat_byte = character.stats[2] + 7;
    setBit(output, 9, 0, stat_byte & 1);
    setBit(output, 9, 1, (stat_byte >> 1) & 1);
    setBit(output, 9, 3, (stat_byte >> 2) & 1);
    setBit(output, 9, 4, (stat_byte >> 3) & 1);
    setBit(output, 9, 7, (stat_byte >> 4) & 1);

    // Stat 3
    stat_byte = character.stats[3] + 7;
    setBit(output, 10, 0, stat_byte & 1);
    setBit(output, 10, 2, (stat_byte >> 1) & 1);
    setBit(output, 10, 3, (stat_byte >> 2) & 1);
    setBit(output, 10, 5, (stat_byte >> 3) & 1);
    setBit(output, 10, 6, (stat_byte >> 4) & 1);

    // Stat 4
    stat_byte = character.stats[4] + 7;
    setBit(output, 11, 1, stat_byte & 1);
    setBit(output, 11, 2, (stat_byte >> 1) & 1);
    setBit(output, 11, 4, (stat_byte >> 2) & 1);
    setBit(output, 11, 5, (stat_byte >> 3) & 1);
    setBit(output, 11, 7, (stat_byte >> 4) & 1);

    // Stat 5
    stat_byte = character.stats[5] + 7;
    setBit(output, 12, 0, stat_byte & 1);
    setBit(output, 12, 1, (stat_byte >> 1) & 1);
    setBit(output, 12, 3, (stat_byte >> 2) & 1);
    setBit(output, 12, 4, (stat_byte >> 3) & 1);
    setBit(output, 12, 6, (stat_byte >> 4) & 1);

    // Stat 6
    stat_byte = character.stats[6] + 7;
    setBit(output, 13, 0, stat_byte & 1);
    setBit(output, 13, 2, (stat_byte >> 1) & 1);
    setBit(output, 13, 3, (stat_byte >> 2) & 1);
    setBit(output, 13, 5, (stat_byte >> 3) & 1);
    setBit(output, 13, 6, (stat_byte >> 4) & 1);

    let capsule_byte;

    // Capsule 0
    capsule_byte = character.capsules[0] + 300;
    setBit(output, 15, 2, capsule_byte & 1);
    setBit(output, 15, 3, (capsule_byte >> 1) & 1);
    setBit(output, 15, 5, (capsule_byte >> 2) & 1);
    setBit(output, 15, 6, (capsule_byte >> 3) & 1);
    setBit(output, 14, 0, (capsule_byte >> 4) & 1);
    setBit(output, 14, 1, (capsule_byte >> 5) & 1);
    setBit(output, 14, 3, (capsule_byte >> 6) & 1);
    setBit(output, 14, 4, (capsule_byte >> 7) & 1);
    setBit(output, 14, 6, (capsule_byte >> 8) & 1);
    setBit(output, 14, 7, (capsule_byte >> 9) & 1);

    // Capsule 1
    capsule_byte = character.capsules[1] + 300;
    setBit(output, 17, 4, capsule_byte & 1);
    setBit(output, 17, 5, (capsule_byte >> 1) & 1);
    setBit(output, 17, 7, (capsule_byte >> 2) & 1);
    setBit(output, 16, 0, (capsule_byte >> 3) & 1);
    setBit(output, 16, 1, (capsule_byte >> 4) & 1);
    setBit(output, 16, 3, (capsule_byte >> 5) & 1);
    setBit(output, 16, 4, (capsule_byte >> 6) & 1);
    setBit(output, 16, 5, (capsule_byte >> 7) & 1);
    setBit(output, 16, 7, (capsule_byte >> 8) & 1);
    setBit(output, 15, 0, (capsule_byte >> 9) & 1);

    // Capsule 2
    capsule_byte = character.capsules[2] + 300;
    setBit(output, 19, 7, capsule_byte & 1);
    setBit(output, 18, 0, (capsule_byte >> 1) & 1);
    setBit(output, 18, 1, (capsule_byte >> 2) & 1);
    setBit(output, 18, 3, (capsule_byte >> 3) & 1);
    setBit(output, 18, 4, (capsule_byte >> 4) & 1);
    setBit(output, 18, 5, (capsule_byte >> 5) & 1);
    setBit(output, 18, 7, (capsule_byte >> 6) & 1);
    setBit(output, 17, 0, (capsule_byte >> 7) & 1);
    setBit(output, 17, 1, (capsule_byte >> 8) & 1);
    setBit(output, 17, 3, (capsule_byte >> 9) & 1);

    // Capsule 3
    capsule_byte = character.capsules[3] + 300;
    setBit(output, 20, 0, capsule_byte & 1);
    setBit(output, 20, 2, (capsule_byte >> 1) & 1);
    setBit(output, 20, 3, (capsule_byte >> 2) & 1);
    setBit(output, 20, 5, (capsule_byte >> 3) & 1);
    setBit(output, 20, 6, (capsule_byte >> 4) & 1);
    setBit(output, 19, 0, (capsule_byte >> 5) & 1);
    setBit(output, 19, 1, (capsule_byte >> 6) & 1);
    setBit(output, 19, 3, (capsule_byte >> 7) & 1);
    setBit(output, 19, 4, (capsule_byte >> 8) & 1);
    setBit(output, 19, 5, (capsule_byte >> 9) & 1);

    // Capsule 4
    capsule_byte = character.capsules[4] + 300;
    setBit(output, 22, 2, capsule_byte & 1);
    setBit(output, 22, 3, (capsule_byte >> 1) & 1);
    setBit(output, 22, 5, (capsule_byte >> 2) & 1);
    setBit(output, 22, 6, (capsule_byte >> 3) & 1);
    setBit(output, 21, 0, (capsule_byte >> 4) & 1);
    setBit(output, 21, 1, (capsule_byte >> 5) & 1);
    setBit(output, 21, 3, (capsule_byte >> 6) & 1);
    setBit(output, 21, 4, (capsule_byte >> 7) & 1);
    setBit(output, 21, 6, (capsule_byte >> 8) & 1);
    setBit(output, 21, 7, (capsule_byte >> 9) & 1);

    // Capsule 5
    capsule_byte = character.capsules[5] + 300;
    setBit(output, 24, 4, capsule_byte & 1);
    setBit(output, 24, 5, (capsule_byte >> 1) & 1);
    setBit(output, 24, 7, (capsule_byte >> 2) & 1);
    setBit(output, 23, 0, (capsule_byte >> 3) & 1);
    setBit(output, 23, 1, (capsule_byte >> 4) & 1);
    setBit(output, 23, 3, (capsule_byte >> 5) & 1);
    setBit(output, 23, 4, (capsule_byte >> 6) & 1);
    setBit(output, 23, 5, (capsule_byte >> 7) & 1);
    setBit(output, 23, 7, (capsule_byte >> 8) & 1);
    setBit(output, 22, 0, (capsule_byte >> 9) & 1);

    // Capsule 6
    capsule_byte = character.capsules[6] + 300;
    setBit(output, 26, 6, capsule_byte & 1);
    setBit(output, 26, 7, (capsule_byte >> 1) & 1);
    setBit(output, 25, 0, (capsule_byte >> 2) & 1);
    setBit(output, 25, 2, (capsule_byte >> 3) & 1);
    setBit(output, 25, 3, (capsule_byte >> 4) & 1);
    setBit(output, 25, 4, (capsule_byte >> 5) & 1);
    setBit(output, 25, 6, (capsule_byte >> 6) & 1);
    setBit(output, 25, 7, (capsule_byte >> 7) & 1);
    setBit(output, 24, 1, (capsule_byte >> 8) & 1);
    setBit(output, 24, 2, (capsule_byte >> 9) & 1);


    setByte(output, 3, checksum & 0xff);
    setByte(output, 2, (checksum >>> 8) & 0xff);
    setByte(output, 1, (checksum >>> 16) & 0xff);
    setByte(output, 0, (checksum >>> 24) & 0xff);

    setBit(output, 5, 6, ~(checksum >>> 0x1b ) & 1);
    setBit(output, 4, 0, ~(checksum >>> 0x1c ) & 1);
    setBit(output, 4, 2, ~(checksum >>> 0x1d ) & 1);
    setBit(output, 4, 6, ~(checksum >>> 0x1f ) & 1);
    setBit(output, 4, 4, ~(checksum >>> 0x1e ) & 1);
    setBit(output, 6, 0, ~(checksum >>> 0x16 ) & 1);
    setBit(output, 6, 2, ~(checksum >>> 0x17 ) & 1);
    setBit(output, 6, 5, ~(checksum >>> 0x18 ) & 1);
    setBit(output, 5, 3, ~(checksum >>> 0x1a ) & 1);
    setBit(output, 5, 0, ~(checksum >>> 0x19 ) & 1);
    setBit(output, 7, 1, ~(checksum >>> 0x13 ) & 1);
    setBit(output, 7, 7, ~(checksum >>> 0x15 ) & 1);
    setBit(output, 7, 4, ~(checksum >>> 0x14 ) & 1);
    setBit(output, 8, 0, ~(checksum >>> 0x10 ) & 1);
    setBit(output, 8, 5, ~(checksum >>> 0x12 ) & 1);
    setBit(output, 8, 3, ~(checksum >>> 0x11 ) & 1);
    setBit(output, 9, 2, ~(checksum >>> 0xd ) & 1);
    setBit(output, 9, 6, ~(checksum >>> 0xf ) & 1);
    setBit(output, 9, 5, ~(checksum >>> 0xe ) & 1);
    setBit(output, 10, 1, ~(checksum >>> 10 ) & 1);
    setBit(output, 10, 7, ~(checksum >>> 0xc) & 1);
    setBit(output, 10, 4, ~(checksum >>> 0xb) & 1);
    setBit(output, 11, 0, ~(checksum >>> 7 ) & 1);
    setBit(output, 11, 6, ~(checksum >>> 9 ) & 1);
    setBit(output, 11, 3, ~(checksum >>> 8 ) & 1);
    setBit(output, 12, 2, ~(checksum >>> 4 ) & 1);
    setBit(output, 12, 7, ~(checksum >>> 6 ) & 1);
    setBit(output, 12, 5, ~(checksum >>> 5 ) & 1);
    setBit(output, 13, 1, ~(checksum >>> 1 ) & 1);
    setBit(output, 13, 7, ~(checksum >>> 3 ) & 1);
    setBit(output, 13, 4, ~(checksum >>> 2 ) & 1);
    setBit(output, 14, 5, ~(checksum) & 1);

    setBit(output, 15, 4, ~(checksum >>> 0x1d ) & 1);
    setBit(output, 14, 2, ~(checksum >>> 0x1f ) & 1);
    setBit(output, 15, 7, ~(checksum >>> 0x1e ) & 1);
    setBit(output, 17, 6, ~(checksum >>> 0x19 ) & 1);
    setBit(output, 16, 2, ~(checksum >>> 0x1a ) & 1);
    setBit(output, 15, 1, ~(checksum >>> 0x1c ) & 1);
    setBit(output, 16, 6, ~(checksum >>> 0x1b ) & 1);
    setBit(output, 0x13, 6, ~(checksum >>> 0x15 ) & 1);
    setBit(output, 0x12, 2, ~(checksum >>> 0x16 ) & 1);
    setBit(output, 0x11, 2, ~(checksum >>> 0x18 ) & 1);
    setBit(output, 0x12, 6, ~(checksum >>> 0x17 ) & 1);
    setBit(output, 0x14, 1, ~(checksum >>> 0x11 ) & 1);
    setBit(output, 0x14, 4, ~(checksum >>> 0x12 ) & 1);
    setBit(output, 0x13, 2, ~(checksum >>> 0x14 ) & 1);
    setBit(output, 0x14, 7, ~(checksum >>> 0x13 ) & 1);
    setBit(output, 0x16, 4, ~(checksum >>> 0xd ) & 1);
    setBit(output, 0x16, 7, ~(checksum >>> 0xe ) & 1);
    setBit(output, 0x15, 5, ~(checksum >>> 0x10) & 1);
    setBit(output, 0x15, 2, ~(checksum >>> 0xf ) & 1);
    setBit(output, 0x18, 6, ~(checksum >>> 9 ) & 1);
    setBit(output, 0x17, 2, ~(checksum >>> 10 ) & 1);
    setBit(output, 0x16, 1, ~(checksum >>> 0xc ) & 1);
    setBit(output, 0x17, 6, ~(checksum >>> 0xb ) & 1);
    setBit(output, 0x1a, 1, ~(checksum ) & 1);
    setBit(output, 0x1a, 2, ~(checksum >>> 1 ) & 1 );
    setBit(output, 0x1a, 3, ~(checksum >>> 2 ) & 1 );
    setBit(output, 0x1a, 4, ~(checksum >>> 3 ) & 1 );
    setBit(output, 0x1a, 5, ~(checksum >>> 4 ) & 1 );
    setBit(output, 0x19, 1, ~(checksum >>> 5 ) & 1 );
    setBit(output, 0x19, 5, ~(checksum >>> 6 ) & 1 );
    setBit(output, 0x18, 3, ~(checksum >>> 8 ) & 1 );
    setBit(output, 0x18, 0, ~(checksum >>> 7 ) & 1 );

    // count bits = 1 in output
    let bitCount = 0;
    for (let i = 0; i < output.length; i++) {
        let byte = output[i];
        while (byte > 0) {
            bitCount += byte & 1;
            byte >>>= 1;
        }
    }

    if (bitCount % 2 === 1) {
        setBit(output, 3, 0, 1);
        setBit(output, 0x1a, 1, 0);
        setBit(output, 14, 5, 0);
    }

    return output;
}

function step2Inverse(byteArray) {
    let key = (byteArray[0] << 24) | (byteArray[1] << 16) | (byteArray[2] << 8) | byteArray[3];
    key >>>= 0; // unsigned 32-bit

    let size = 23;
    while (size > 1) {
        let offset = 27 - size;
        let temp = byteArray.slice(offset, offset + size);
        let orig = new Uint8Array(size);
        let rotation = key % size;
        for (let i = 0; i < size; i++) {
            orig[(rotation + i) % size] = temp[i];
        }
        for (let i = 0; i < size; i++) {
            byteArray[offset + i] = orig[i];
        }
        size -= 1;
    }
    return byteArray;
}

function step1Inverse(byteArray) {
    let bits = '';
    for (let i = 0; i < byteArray.length; i++) {
        bits += byteArray[i].toString(2).padStart(8, '0');
    }
    
    let password = '';
    for (let i = 0; i < 36 * 6; i += 6) {
        let chunk = bits.substring(i, i + 6);
        let index = parseInt(chunk, 2);
        password += DICTIONARY[index];
    }
    return password;
}

function generatePassword(characterObj) {
    let checksum = bytesToChecksum(characterObj.prefix);
    let step3 = step3Inverse(characterObj, checksum);
    let step2 = step2Inverse(step3);
    let step1 = step1Inverse(step2);
    return step1;
}
