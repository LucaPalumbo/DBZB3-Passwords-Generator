const CHARACTERS_ID = [
    "GOKU", "KID GOKU", "KID GOHAN", "TEEN GOHAN", "ADULT GOHAN", "GREAT SAIYAMA", "GOTEN", "VEGETA", "FUTURE TRUNKS", "KID TRUNKS", "KRILLIN", "PICCOLO", "TIEN SHINHAN", "YAMCHA", "HERCULE SATAN", "VIDEL", "KAIOSHIN", "UUB", "RADITZ", "NAPPA", "GINYU", "RECOOME", "FRIEZA", "ANDROID 16", "ANDROID 17", "ANDROID 18", "DR. GERO", "CELL", "MAJIN BUU", "SUPER BUU", "KID BUU", "DABURA", "COOLER", "BARDOCK", "BROLY", "OMEGA SHENRON", "SAIBAMEN", "CELL JR."
];

// Generiamo l'array di oggetti basato sui nomi forniti
const CHARACTER_MAP = {
    "goku": "Goku", "kid_goku": "Kid Goku", "kid_gohan": "Kid Gohan", "teen_gohan": "Teen Gohan",
    "adult_gohan": "Gohan", "great_saiyama": "Gt. Saiyaman", "goten": "Goten", "vegeta": "Vegeta",
    "future_trunks": "Trunks", "kid_trunks": "Kid Trunks", "krillin": "Krillin", "piccolo": "Piccolo",
    "tien_shinhan": "Tien", "yamcha": "Yamcha", "hercule_satan": "Hercule", "videl": "Videl",
    "kaioshin": "Supreme Kai", "uub": "Uub", "raditz": "Raditz", "nappa": "Nappa",
    "ginyu": "Captain Ginyu", "recoome": "Recoome", "frieza": "Frieza", "android_16": "Android #16",
    "android_17": "Android #17", "android_18": "Android #18", "dr_gero": "Dr. Gero", "cell": "Cell",
    "majin_buu": "Majin Buu", "super_buu": "Super Buu", "kid_buu": "Kid Buu", "dabura": "Dabura",
    "cooler": "Cooler", "bardock": "Bardock", "broly": "Broly", "omega_shenron": "Omega Shenron",
    "saibamen": "Saibamen", "cell_jr_": "Cell Jr."
};

const characters = CHARACTERS_ID.map(name => {
    // Genera un ID formattato (es. "KID GOKU" -> "kid_goku")
    const id = name.toLowerCase().replace(/[^a-z0-9]+/g, '_');
    // Genera un'iniziale o un'abbreviazione (prime 3 lettere)
    const initial = name.substring(0, 3).toUpperCase();
    
    // Per ora assegniamo colori casuali o predefiniti finché non avrai le immagini
    const colors = ['#ff9800', '#2196f3', '#4caf50', '#ffb300', '#9c27b0', '#673ab7', '#e91e63', '#8bc34a', '#f48fb1', '#cddc39', '#795548', '#ff5722'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    return {
        id: id,
        name: name,
        color: randomColor,
        initial: initial,
        csvName: CHARACTER_MAP[id] || name // Mappa al nome CSV
    };
});

const wheel = document.getElementById('character-wheel');
const nameDisplay = document.getElementById('selected-character-name');
let selectedIndex = 0;
const radius = 600; // Half of wheel width/height (1200 / 2)

// --- Customization State ---
let currentMode = 'selection';
const customizationPanel = document.getElementById('customization-panel');
const customCharName = document.getElementById('custom-char-name');
const statsList = document.getElementById('stats-list');
const btnBack = document.getElementById('btn-back');

const STATS = ['Health', 'Ki', 'Attack', 'Guard', 'Arts', 'Ability', 'COM'];
let currentStats = {};

// In DBZ Budokai 3, the active character for Player 1 is on the right side of the left wheel (3 o'clock)
const ACTIVE_ANGLE_DEG = 0;

function createWheel() {
    wheel.innerHTML = '';
    const totalChars = characters.length;
    const angleStep = 360 / totalChars;

    characters.forEach((char, index) => {
        const slot = document.createElement('div');
        slot.classList.add('character-slot');
        
        slot.style.backgroundColor = char.color;
        slot.innerText = char.initial;
        
        slot.dataset.index = index;
        slot.dataset.angle = angleStep * index;
        
        slot.addEventListener('click', () => {
            selectCharacter(index);
        });

        wheel.appendChild(slot);
    });
    
    updateWheelPositions(0);
}

let currentWheelRotation = 0;

function updateWheelPositions(targetIndex) {
    const totalChars = characters.length;
    const angleStep = 360 / totalChars;
    
    // We want the targetIndex character to be at the ACTIVE_ANGLE_DEG.
    // Native angle of the character is (targetIndex * angleStep).
    let targetRotation = ACTIVE_ANGLE_DEG - (targetIndex * angleStep);
    
    // Normalize target rotation to spin in the shortest direction
    while (targetRotation - currentWheelRotation > 180) {
        targetRotation -= 360;
    }
    while (currentWheelRotation - targetRotation > 180) {
        targetRotation += 360;
    }
    
    currentWheelRotation = targetRotation;
    wheel.style.transform = `rotate(${currentWheelRotation}deg)`;

    const slots = document.querySelectorAll('.character-slot');
    slots.forEach((slot, idx) => {
        const elementAngle = parseFloat(slot.dataset.angle);
        
        // Counter rotate so the portraits always stay upright
        const counterRotation = -(elementAngle + currentWheelRotation);
        
        if (idx === targetIndex) {
            slot.classList.add('active');
            slot.style.transform = `rotate(${elementAngle}deg) translate(${radius}px) rotate(${counterRotation}deg) scale(1.3)`;
        } else {
            slot.classList.remove('active');
            slot.style.transform = `rotate(${elementAngle}deg) translate(${radius}px) rotate(${counterRotation}deg) scale(1)`;
        }
    });

    nameDisplay.innerText = characters[targetIndex].name;
    selectedIndex = targetIndex;
}

function selectCharacter(index) {
    updateWheelPositions(index);
}

function rotateNext() {
    let newIndex = (selectedIndex + 1) % characters.length;
    selectCharacter(newIndex);
}

function rotatePrev() {
    let newIndex = (selectedIndex - 1 + characters.length) % characters.length;
    selectCharacter(newIndex);
}

// Event Listeners for arrows
document.querySelector('.up-arrow').addEventListener('click', () => {
    if (currentMode === 'selection') rotatePrev();
});
document.querySelector('.down-arrow').addEventListener('click', () => {
    if (currentMode === 'selection') rotateNext();
});

// Keyboard support
window.addEventListener('keydown', (e) => {
    if (currentMode === 'selection') {
        if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') {
            rotatePrev();
        } else if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') {
            rotateNext();
        } else if (e.key === 'Enter') {
            enterCustomization();
        }
    } else if (currentMode === 'customization') {
        if (e.key === 'Escape') {
            exitCustomization();
        }
    }
});

// --- Customization Logic ---
function enterCustomization() {
    if (currentMode === 'customization') return;
    currentMode = 'customization';
    
    customCharName.innerText = characters[selectedIndex].name;
    
    // Fade in panel
    customizationPanel.classList.remove('hidden');
    
    // Reset stats for the current character
    STATS.forEach(stat => currentStats[stat] = 0);
    renderStats();
    updateTotalLevel();
}

function exitCustomization() {
    if (currentMode === 'selection') return;
    currentMode = 'selection';
    
    // Hide panel
    customizationPanel.classList.add('hidden');
}

btnBack.addEventListener('click', exitCustomization);

function renderStats() {
    statsList.innerHTML = '';
    STATS.forEach(stat => {
        const row = document.createElement('div');
        row.classList.add('stat-row');
        
        row.innerHTML = `
            <div class="stat-label">${stat}</div>
            <div class="stat-controls">
                <button class="stat-btn" onclick="updateStat('${stat}', -1)">-</button>
                <div class="stat-value" id="val-${stat}">${currentStats[stat]}</div>
                <button class="stat-btn" onclick="updateStat('${stat}', 1)">+</button>
            </div>
        `;
        statsList.appendChild(row);
    });
}

window.updateStat = function(stat, change) {
    let newVal = currentStats[stat] + change;
    if (newVal >= 0 && newVal <= 99) {
        currentStats[stat] = newVal;
        document.getElementById(`val-${stat}`).innerText = newVal;
        updateTotalLevel();
    }
};

function updateTotalLevel() {
    let total = Object.values(currentStats).reduce((sum, val) => sum + val, 0);
    // Base level starts at 0 or 1 based on allocated points
    let level = total;
    document.getElementById('custom-level').innerText = level;
}

// --- CSV Loading and Skills Logic ---
let allSkills = [];
let equippedSkills = [];

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

function loadSkills() {
    try {
        const lines = CSV_CONTENT.split('\n');
        
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
    } catch (e) {
        console.error("Error loading CSV:", e);
    }
}

function getValidSkills(characterCsvName) {
    return allSkills.filter(skill => {
        // "Everyone can use" or contains the character name
        if (skill.user === "Everyone can use") return true;
        // Split users by comma in case there are multiple (e.g. "Goku, Gohan")
        const users = skill.user.split(',').map(u => u.trim());
        return users.includes(characterCsvName);
    });
}

function calculateUsedSlots() {
    return equippedSkills.reduce((sum, skill) => sum + (skill ? skill.slots : 0), 0);
}

// --- UI Interaction for Skills ---
const skillModal = document.getElementById('skill-modal');
const modalSkillsList = document.getElementById('modal-skills-list');
const slotsAvailableLabel = document.getElementById('slots-available');
let currentFilterType = 'All';
let editingSkillIndex = -1;

function renderEquippedSkills() {
    const skillsList = document.getElementById('skills-list');
    skillsList.innerHTML = '';
    
    let slotsUsed = calculateUsedSlots();
    
    equippedSkills.forEach((skill, index) => {
        const slot = document.createElement('div');
        slot.classList.add('skill-slot');
        slot.innerHTML = `<strong>${skill.name}</strong><br><small>${skill.slots} Slot(s)</small>`;
        
        const n = skill.slots;
        slot.style.height = `calc(50px * ${n} + 8px * ${n - 1})`;
        slot.style.display = 'flex';
        slot.style.flexDirection = 'column';
        slot.style.justifyContent = 'center';
        
        slot.onclick = () => openSkillModal(index);
        skillsList.appendChild(slot);
    });
    
    const emptySlots = 7 - slotsUsed;
    for (let i = 0; i < emptySlots; i++) {
        const slot = document.createElement('div');
        slot.classList.add('skill-slot', 'empty');
        slot.innerHTML = `Empty Slot`;
        slot.style.height = `50px`;
        slot.style.display = 'flex';
        slot.style.flexDirection = 'column';
        slot.style.justifyContent = 'center';
        slot.onclick = () => openSkillModal(-1);
        skillsList.appendChild(slot);
    }
}

function openSkillModal(editIndex) {
    if (currentMode !== 'customization') return;
    editingSkillIndex = editIndex;
    skillModal.classList.remove('hidden');
    
    const btnUnequip = document.getElementById('btn-unequip');
    if (editIndex !== -1) {
        btnUnequip.style.display = 'block';
    } else {
        btnUnequip.style.display = 'none';
    }
    
    renderSkillModalList();
}

function closeSkillModal() {
    skillModal.classList.add('hidden');
}

document.getElementById('close-modal').addEventListener('click', closeSkillModal);
document.getElementById('btn-unequip').addEventListener('click', () => {
    if (editingSkillIndex !== -1) {
        equippedSkills.splice(editingSkillIndex, 1);
        renderEquippedSkills();
    }
    closeSkillModal();
});

document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentFilterType = e.target.dataset.type;
        renderSkillModalList();
    });
});

function renderSkillModalList() {
    modalSkillsList.innerHTML = '';
    const char = characters[selectedIndex];
    const validSkills = getValidSkills(char.csvName);
    
    const currentSkill = editingSkillIndex !== -1 ? equippedSkills[editingSkillIndex] : null;
    const currentUsed = calculateUsedSlots();
    const availableSlots = 7 - currentUsed + (currentSkill ? currentSkill.slots : 0);
    
    slotsAvailableLabel.innerText = availableSlots;
    
    validSkills.forEach(skill => {
        if (currentFilterType !== 'All' && skill.type !== currentFilterType) return;
        
        const isEquipped = equippedSkills.some((s, idx) => s.id === skill.id && idx !== editingSkillIndex);
        
        const div = document.createElement('div');
        div.className = 'skill-item';
        
        const disable = isEquipped || skill.slots > availableSlots;
        if (disable) div.classList.add('disabled');
        
        let slotsHtml = '';
        for(let i=0; i<skill.slots; i++) {
            slotsHtml += `<div class="slot-indicator"></div>`;
        }
        
        div.innerHTML = `
            <div class="skill-info">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-type">${skill.type} ${isEquipped ? '(Equipped)' : ''}</span>
            </div>
            <div class="skill-slots-cost">
                ${slotsHtml}
            </div>
        `;
        
        if (!disable) {
            div.addEventListener('click', () => {
                if (editingSkillIndex !== -1) {
                    equippedSkills[editingSkillIndex] = skill;
                } else {
                    equippedSkills.push(skill);
                }
                renderEquippedSkills();
                closeSkillModal();
            });
        }
        
        modalSkillsList.appendChild(div);
    });
}

// Override enterCustomization to reset equipped skills
const originalEnterCustomization = enterCustomization;
enterCustomization = function() {
    originalEnterCustomization();
    equippedSkills = [];
    renderEquippedSkills();
    document.getElementById('password-output-section').classList.add('hidden');
    document.getElementById('pw-prefix').value = '';
};

// Generate Password Logic
document.getElementById('btn-generate').addEventListener('click', () => {
    let capsuleIds = [];
    for (let i = 0; i < equippedSkills.length; i++) {
        let skill = equippedSkills[i];
        capsuleIds.push(parseInt(skill.id, 10));
        for (let j = 1; j < skill.slots; j++) {
            capsuleIds.push(0xffff);
        }
    }
    while (capsuleIds.length < 7) {
        capsuleIds.push(0xffff);
    }
    
    let statsArr = STATS.map(stat => currentStats[stat]);
    let level = Object.values(currentStats).reduce((sum, val) => sum + val, 0);
    
    let prefix = document.getElementById('pw-prefix').value;
    while (prefix.length < 5) {
        prefix += DICTIONARY[Math.floor(Math.random() * DICTIONARY.length)];
    }
    document.getElementById('pw-prefix').value = prefix; // Update UI to show what was used
    
    let characterObj = {
        character_id: selectedIndex,
        level: level,
        stats: statsArr,
        capsules: capsuleIds,
        prefix: prefix
    };
    
    try {
        let pw = generatePassword(characterObj);
        
        // Format password to look nice (e.g. groups of 6)
        let formattedPw = '';
        for (let i = 0; i < pw.length; i += 6) {
            formattedPw += pw.substring(i, i + 6) + ' ';
        }
        
        document.getElementById('password-display').innerText = formattedPw.trim();
        document.getElementById('password-output-section').classList.remove('hidden');
        
        // Scroll the inner container down
        const customBody = document.querySelector('.custom-body');
        customBody.scrollTop = customBody.scrollHeight;
    } catch (e) {
        console.error("Error generating password:", e);
        alert("An error occurred while generating the password.");
    }
});

// Initialize
loadSkills();
createWheel();
