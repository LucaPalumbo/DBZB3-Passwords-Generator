
from typing import List

DICTIONARY = [
    'A','B','C','D','E','F','G','H','I','J','K','L','M',
    'N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
    'a','b','c','d','e','f','g','h','i','j','k','l','m',
    'n','o','p','q','r','s','t','u','v','w','x','y','z',
    '!','#','$','%','&','@','-','+','*','(',')','?'
]


CHARACTERS_ID = [
    "GOKU", "KID GOKU", "KID GOHAN", "TEEN GOHAN", "ADULT GOHAN", "GREAT SAIYAMA", "GOTEN", "VEGETA", "FUTURE TRUNKS", "KID TRUNKS", "KRILLIN", "PICCOLO", "TIEN SHINHAN", "YAMCHA", "HERCULE SATAN", "VIDEL", "KAIOSHIN", "UUB", "RADITZ", "NAPPA", "GINYU", "RECOOME", "FRIEZA", "ANDROID 16", "ANDROID 17", "ANDROID 18", "DR. GERO", "CELL", "MAJIN BUU", "SUPER BUU", "KID BUU", "DABURA", "COOLER", "BARDOCK", "BROLY", "OMEGA SHENRON", "SAIBAMEN", "CELL JR."
]

def set_bit(output, position, bit, value):
    # set output[idx] at bit position to value (0 or 1)
    if value:
        output[position] |= (1 << bit)
    else:
        output[position] &= ~(1 << bit)

def set_byte(output, position, value):
    output[position] = value & 0xFF


def step3_inverse(character, checksum = 0xffffffff):
    output = [0]*27

    id_byte = character['character_id'] + 7 
    set_bit(output, 5, 5, id_byte & 1)
    set_bit(output, 5, 7, (id_byte >> 1) & 1)
    set_bit(output, 4, 1, (id_byte >> 2) & 1)
    set_bit(output, 4, 3, (id_byte >> 3) & 1)
    set_bit(output, 4, 5, (id_byte >> 4) & 1)
    set_bit(output, 4, 7, (id_byte >> 5) & 1)


    # # Level (8 bits, composite)
    # level = (
    #     ((b[6] >> 1) & 1) << 0 |
    #     ((b[6] >> 3) & 1) << 1 |
    #     ((b[6] >> 4) & 1) << 2 |
    #     ((b[6] >> 6) & 1) << 3 |
    #     ((b[6] >> 7) & 1) << 4 |
    #     ((b[5] >> 1) & 1) << 5 |
    #     ((b[5] >> 4) & 1) << 7 |
    #     ((b[5] >> 2) & 1) << 6
    # ) - 7
    level_byte = character['level'] + 7
    set_bit(output, 6, 1, level_byte & 1)
    set_bit(output, 6, 3, (level_byte >> 1) & 1)
    set_bit(output, 6, 4, (level_byte >> 2) & 1)
    set_bit(output, 6, 6, (level_byte >> 3) & 1)
    set_bit(output, 6, 7, (level_byte >> 4) & 1)
    set_bit(output, 5, 1, (level_byte >> 5) & 1)
    set_bit(output, 5, 2, (level_byte >> 6) & 1)
    set_bit(output, 5, 4, (level_byte >> 7) & 1)


    # stat0 = (
    #     ((b[7] >> 0) & 1) << 0 |
    #     ((b[7] >> 2) & 1) << 1 |
    #     ((b[7] >> 3) & 1) << 2 |
    #     ((b[7] >> 6) & 1) << 4 |
    #     ((b[7] >> 5) & 1) << 3
    # ) - 7
    stat_byte = character['stats'][0] + 7
    set_bit(output, 7, 0, stat_byte & 1)
    set_bit(output, 7, 2, (stat_byte >> 1) & 1)
    set_bit(output, 7, 3, (stat_byte >> 2) & 1)
    set_bit(output, 7, 5, (stat_byte >> 3) & 1)
    set_bit(output, 7, 6, (stat_byte >> 4) & 1)


    # stat1 = (
    #     ((b[8] >> 1) & 1) << 0 |
    #     ((b[8] >> 2) & 1) << 1 |
    #     ((b[8] >> 4) & 1) << 2 |
    #     ((b[8] >> 7) & 1) << 4 |
    #     ((b[8] >> 6) & 1) << 3
    # ) 
    stat_byte = character['stats'][1]
    set_bit(output, 8, 1, stat_byte & 1)
    set_bit(output, 8, 2, (stat_byte >> 1) & 1)
    set_bit(output, 8, 4, (stat_byte >> 2) & 1)
    set_bit(output, 8, 6, (stat_byte >> 3) & 1)
    set_bit(output, 8, 7, (stat_byte >> 4) & 1)


    # stat2 = (
    #     ((b[9] >> 0) & 1) << 0 |
    #     ((b[9] >> 1) & 1) << 1 |
    #     ((b[9] >> 3) & 1) << 2 |
    #     ((b[9] >> 7) & 1) << 4 |
    #     ((b[9] >> 4) & 1) << 3
    # ) - 7
    stat_byte = character['stats'][2] + 7
    set_bit(output, 9, 0, stat_byte & 1)
    set_bit(output, 9, 1, (stat_byte >> 1) & 1)
    set_bit(output, 9, 3, (stat_byte >> 2) & 1)
    set_bit(output, 9, 4, (stat_byte >> 3) & 1)
    set_bit(output, 9, 7, (stat_byte >> 4) & 1)

    # stat3 = (
    #     ((b[10] >> 0) & 1) << 0 |
    #     ((b[10] >> 2) & 1) << 1 |
    #     ((b[10] >> 3) & 1) << 2 |
    #     ((b[10] >> 6) & 1) << 4 |
    #     ((b[10] >> 5) & 1) << 3
    # ) - 7
    stat_byte = character['stats'][3] + 7
    set_bit(output, 10, 0, stat_byte & 1)
    set_bit(output, 10, 2, (stat_byte >> 1) & 1)
    set_bit(output, 10, 3, (stat_byte >> 2) & 1)
    set_bit(output, 10, 5, (stat_byte >> 3) & 1)
    set_bit(output, 10, 6, (stat_byte >> 4) & 1)

    # stat4 = (
    #     ((b[11] >> 1) & 1) << 0 |
    #     ((b[11] >> 2) & 1) << 1 |
    #     ((b[11] >> 4) & 1) << 2 |
    #     ((b[11] >> 7) & 1) << 4 |
    #     ((b[11] >> 5) & 1) << 3
    # ) - 7
    stat_byte = character['stats'][4] + 7
    set_bit(output, 11, 1, stat_byte & 1)
    set_bit(output, 11, 2, (stat_byte >> 1) & 1)
    set_bit(output, 11, 4, (stat_byte >> 2) & 1)
    set_bit(output, 11, 5, (stat_byte >> 3) & 1)
    set_bit(output, 11, 7, (stat_byte >> 4) & 1)

    # stat5 = (
    #     ((b[0xc] >> 0) & 1) << 0 |
    #     ((b[0xc] >> 1) & 1) << 1 |
    #     ((b[0xc] >> 3) & 1) << 2 |
    #     ((b[0xc] >> 6) & 1) << 4 |
    #     ((b[0xc] >> 4) & 1) << 3
    # ) - 7
    stat_byte = character['stats'][5] + 7
    set_bit(output, 12, 0, stat_byte & 1)
    set_bit(output, 12, 1, (stat_byte >> 1) & 1)
    set_bit(output, 12, 3, (stat_byte >> 2) & 1)
    set_bit(output, 12, 4, (stat_byte >> 3) & 1)
    set_bit(output, 12, 6, (stat_byte >> 4) & 1)

    # stat6 = (
    #     ((b[0xd] >> 0) & 1) << 0 |
    #     ((b[0xd] >> 2) & 1) << 1 |
    #     ((b[0xd] >> 3) & 1) << 2 |
    #     ((b[0xd] >> 6) & 1) << 4 |
    #     ((b[0xd] >> 5) & 1) << 3
    # ) - 7
    stat_byte = character['stats'][6] + 7
    set_bit(output, 13, 0, stat_byte & 1)
    set_bit(output, 13, 2, (stat_byte >> 1) & 1)
    set_bit(output, 13, 3, (stat_byte >> 2) & 1)
    set_bit(output, 13, 5, (stat_byte >> 3) & 1)
    set_bit(output, 13, 6, (stat_byte >> 4) & 1)

    # capsule0 = (
    #     ((b[15] >> 2) & 1) << 0 |
    #     ((b[15] >> 3) & 1) << 1 |
    #     ((b[15] >> 5) & 1) << 2 |
    #     ((b[15] >> 6) & 1) << 3 |
    #     ((b[14] >> 0) & 1) << 4 |   
    #     ((b[14] >> 1) & 1) << 5 |
    #     ((b[14] >> 3) & 1) << 6 |
    #     ((b[14] >> 4) & 1) << 7 |
    #     ((b[14] >> 7) & 1) << 9 |
    #     ((b[14] >> 6) & 1) << 8
    # ) - 300
    capsule_byte = character['capsules'][0] + 300
    set_bit(output, 15, 2, capsule_byte & 1)
    set_bit(output, 15, 3, (capsule_byte >> 1) & 1)
    set_bit(output, 15, 5, (capsule_byte >> 2) & 1)
    set_bit(output, 15, 6, (capsule_byte >> 3) & 1)
    set_bit(output, 14, 0, (capsule_byte >> 4) & 1)
    set_bit(output, 14, 1, (capsule_byte >> 5) & 1)
    set_bit(output, 14, 3, (capsule_byte >> 6) & 1)
    set_bit(output, 14, 4, (capsule_byte >> 7) & 1)
    set_bit(output, 14, 6, (capsule_byte >> 8) & 1)
    set_bit(output, 14, 7, (capsule_byte >> 9) & 1)

    # capsule1 = (
    #     ((b[17] >> 4) & 1) << 0 |
    #     ((b[17] >> 5) & 1) << 1 |
    #     ((b[17] >> 7) & 1) << 2 |
    #     ((b[16] >> 0) & 1) << 3 |
    #     ((b[16] >> 1) & 1) << 4 |
    #     ((b[16] >> 3) & 1) << 5 |
    #     ((b[16] >> 4) & 1) << 6 |
    #     ((b[16] >> 5) & 1) << 7 |
    #     ((b[15] >> 0) & 1) << 9 |
    #     ((b[16] >> 7) & 1) << 8
    # ) - 300
    capsule_byte = character['capsules'][1] + 300
    set_bit(output, 17, 4, capsule_byte & 1)
    set_bit(output, 17, 5, (capsule_byte >> 1) & 1)
    set_bit(output, 17, 7, (capsule_byte >> 2) & 1)
    set_bit(output, 16, 0, (capsule_byte >> 3) & 1)
    set_bit(output, 16, 1, (capsule_byte >> 4) & 1)
    set_bit(output, 16, 3, (capsule_byte >> 5) & 1)
    set_bit(output, 16, 4, (capsule_byte >> 6) & 1)
    set_bit(output, 16, 5, (capsule_byte >> 7) & 1)
    set_bit(output, 16, 7, (capsule_byte >> 8) & 1)
    set_bit(output, 15, 0, (capsule_byte >> 9) & 1)


    # capsule2 = (
    #     ((b[19] >> 7) & 1) << 0 |
    #     ((b[18] >> 0) & 1) << 1 |
    #     ((b[18] >> 1) & 1) << 2 |
    #     ((b[18] >> 3) & 1) << 3 |
    #     ((b[18] >> 4) & 1) << 4 |
    #     ((b[18] >> 5) & 1) << 5 |
    #     ((b[18] >> 7) & 1) << 6 |
    #     ((b[17] >> 0) & 1) << 7 |
    #     ((b[17] >> 3) & 1) << 9 |
    #     ((b[17] >> 1) & 1) << 8
    # ) - 300
    capsule_byte = character['capsules'][2] + 300
    set_bit(output, 19, 7, capsule_byte & 1)
    set_bit(output, 18, 0, (capsule_byte >> 1) & 1)
    set_bit(output, 18, 1, (capsule_byte >> 2) & 1)
    set_bit(output, 18, 3, (capsule_byte >> 3) & 1)
    set_bit(output, 18, 4, (capsule_byte >> 4) & 1)
    set_bit(output, 18, 5, (capsule_byte >> 5) & 1)
    set_bit(output, 18, 7, (capsule_byte >> 6) & 1)
    set_bit(output, 17, 0, (capsule_byte >> 7) & 1)
    set_bit(output, 17, 1, (capsule_byte >> 8) & 1)
    set_bit(output, 17, 3, (capsule_byte >> 9) & 1)


    # capsule3 = (
    #     ((b[20] >> 0) & 1) << 0 |
    #     ((b[20] >> 2) & 1) << 1 |
    #     ((b[20] >> 3) & 1) << 2 |
    #     ((b[20] >> 5) & 1) << 3 |
    #     ((b[20] >> 6) & 1) << 4 |
    #     ((b[19] >> 0) & 1) << 5 |
    #     ((b[19] >> 1) & 1) << 6 |
    #     ((b[19] >> 3) & 1) << 7 |
    #     ((b[19] >> 5) & 1) << 9 |
    #     ((b[19] >> 4) & 1) << 8
    # ) - 300
    capsule_byte = character['capsules'][3] + 300
    set_bit(output, 20, 0, capsule_byte & 1)
    set_bit(output, 20, 2, (capsule_byte >> 1) & 1)
    set_bit(output, 20, 3, (capsule_byte >> 2) & 1)
    set_bit(output, 20, 5, (capsule_byte >> 3) & 1)
    set_bit(output, 20, 6, (capsule_byte >> 4) & 1)
    set_bit(output, 19, 0, (capsule_byte >> 5) & 1)
    set_bit(output, 19, 1, (capsule_byte >> 6) & 1)
    set_bit(output, 19, 3, (capsule_byte >> 7) & 1)
    set_bit(output, 19, 4, (capsule_byte >> 8) & 1)
    set_bit(output, 19, 5, (capsule_byte >> 9) & 1)

    # capsule4 = (
    #     ((b[22] >> 2) & 1) << 0 |
    #     ((b[22] >> 3) & 1) << 1 |
    #     ((b[22] >> 5) & 1) << 2 |
    #     ((b[22] >> 6) & 1) << 3 |
    #     ((b[21] >> 0) & 1) << 4 |
    #     ((b[21] >> 1) & 1) << 5 |
    #     ((b[21] >> 3) & 1) << 6 |
    #     ((b[21] >> 4) & 1) << 7 |
    #     ((b[21] >> 7) & 1) << 9 |
    #     ((b[21] >> 6) & 1) << 8
    # ) - 300
    capsule_byte = character['capsules'][4] + 300
    set_bit(output, 22, 2, capsule_byte & 1)
    set_bit(output, 22, 3, (capsule_byte >> 1) & 1)
    set_bit(output, 22, 5, (capsule_byte >> 2) & 1)
    set_bit(output, 22, 6, (capsule_byte >> 3) & 1)
    set_bit(output, 21, 0, (capsule_byte >> 4) & 1)
    set_bit(output, 21, 1, (capsule_byte >> 5) & 1)
    set_bit(output, 21, 3, (capsule_byte >> 6) & 1)
    set_bit(output, 21, 4, (capsule_byte >> 7) & 1)
    set_bit(output, 21, 6, (capsule_byte >> 8) & 1)
    set_bit(output, 21, 7, (capsule_byte >> 9) & 1)

    # capsule5 = (
    #     ((b[24] >> 4) & 1) << 0 |
    #     ((b[24] >> 5) & 1) << 1 |
    #     ((b[24] >> 7) & 1) << 2 |
    #     ((b[23] >> 0) & 1) << 3 |
    #     ((b[23] >> 1) & 1) << 4 |
    #     ((b[23] >> 3) & 1) << 5 |
    #     ((b[23] >> 4) & 1) << 6 |
    #     ((b[23] >> 5) & 1) << 7 |
    #     ((b[22] >> 0) & 1) << 9 |
    #     ((b[23] >> 7) & 1) << 8
    # ) - 300
    capsule_byte = character['capsules'][5] + 300
    set_bit(output, 24, 4, capsule_byte & 1)
    set_bit(output, 24, 5, (capsule_byte >> 1) & 1)
    set_bit(output, 24, 7, (capsule_byte >> 2) & 1)
    set_bit(output, 23, 0, (capsule_byte >> 3) & 1)
    set_bit(output, 23, 1, (capsule_byte >> 4) & 1)
    set_bit(output, 23, 3, (capsule_byte >> 5) & 1)
    set_bit(output, 23, 4, (capsule_byte >> 6) & 1)
    set_bit(output, 23, 5, (capsule_byte >> 7) & 1)
    set_bit(output, 23, 7, (capsule_byte >> 8) & 1)
    set_bit(output, 22, 0, (capsule_byte >> 9) & 1)

    # capsule6 = (
    #     ((b[26] >> 6) & 1) << 0 |
    #     ((b[26] >> 7) & 1) << 1 |
    #     ((b[25] >> 0) & 1) << 2 |
    #     ((b[25] >> 2) & 1) << 3 |
    #     ((b[25] >> 3) & 1) << 4 |
    #     ((b[25] >> 4) & 1) << 5 |
    #     ((b[25] >> 6) & 1) << 6 |
    #     ((b[25] >> 7) & 1) << 7 |
    #     ((b[24] >> 2) & 1) << 9 |
    #     ((b[24] >> 1) & 1) << 8
    # ) - 300
    capsule_byte = character['capsules'][6] + 300
    set_bit(output, 26, 6, capsule_byte & 1)
    set_bit(output, 26, 7, (capsule_byte >> 1) & 1)
    set_bit(output, 25, 0, (capsule_byte >> 2) & 1)
    set_bit(output, 25, 2, (capsule_byte >> 3) & 1)
    set_bit(output, 25, 3, (capsule_byte >> 4) & 1)
    set_bit(output, 25, 4, (capsule_byte >> 5) & 1)
    set_bit(output, 25, 6, (capsule_byte >> 6) & 1)
    set_bit(output, 25, 7, (capsule_byte >> 7) & 1)
    set_bit(output, 24, 1, (capsule_byte >> 8) & 1)
    set_bit(output, 24, 2, (capsule_byte >> 9) & 1)

    

    

    set_byte(output, 3, checksum & 0xff)
    set_byte(output, 2, (checksum >> 8) & 0xff)
    set_byte(output, 1, (checksum >> 16) & 0xff)
    set_byte(output, 0, (checksum >> 24) & 0xff)

    #   if (checksum ==
    #   ~((code_5 >> 6 & 1) << 0x1b |
    #     (code_4 & 1) << 0x1c |
    #     (code_4 >> 2 & 1) << 0x1d | (uint)(code_4 >> 6) << 0x1f | (code_4 >> 4 & 1) << 0x1e |
    #     (code_6 & 1) << 0x16 |
    #     (code_6 >> 2 & 1) << 0x17 |
    #     (code_6 >> 5 & 1) << 0x18 | (code_5 >> 3 & 1) << 0x1a | (code_5 & 1) << 0x19 |
    #     (code_7 >> 1 & 1) << 0x13 | (uint)(code_7 >> 7) << 0x15 | (code_7 >> 4 & 1) << 0x14 |
    #     (code_8 & 1) << 0x10 | (code_8 >> 5 & 1) << 0x12 | (code_8 >> 3 & 1) << 0x11 |
    #     (code_9 >> 2 & 1) << 0xd | (code_9 >> 6 & 1) << 0xf | (code_9 >> 5 & 1) << 0xe |
    #     (code_10 >> 1 & 1) << 10 | (uint)(code_10 >> 7) << 0xc | (code_10 >> 4 & 1) << 0xb |
    #     (code_11 & 1) << 7 | (code_11 >> 6 & 1) << 9 | (code_11 >> 3 & 1) << 8 |
    #     (code_0xc >> 2 & 1) << 4 | (uint)(code_0xc >> 7) << 6 | (code_0xc >> 5 & 1) << 5 |
    #     (code_0xd >> 1 & 1) << 1 | (uint)(code_0xd >> 7) << 3 | (code_0xd >> 4 & 1) << 2 |
    #    code_0xe >> 5 & 1)) {
    set_bit(output, 5, 6, ~(checksum >> 0x1b ) & 1)
    set_bit(output, 4, 0, ~(checksum >> 0x1c ) & 1)
    set_bit(output, 4, 2, ~(checksum >> 0x1d ) & 1)
    set_bit(output, 4, 6, ~(checksum >> 0x1f ) & 1)
    set_bit(output, 4, 4, ~(checksum >> 0x1e ) & 1)
    set_bit(output, 6, 0, ~(checksum >> 0x16 ) & 1)
    set_bit(output, 6, 2, ~(checksum >> 0x17 ) & 1)
    set_bit(output, 6, 5, ~(checksum >> 0x18 ) & 1)
    set_bit(output, 5, 3, ~(checksum >> 0x1a ) & 1)
    set_bit(output, 5, 0, ~(checksum >> 0x19 ) & 1)
    set_bit(output, 7, 1, ~(checksum >> 0x13 ) & 1)
    set_bit(output, 7, 7, ~(checksum >> 0x15 ) & 1)
    set_bit(output, 7, 4, ~(checksum >> 0x14 ) & 1)
    set_bit(output, 8, 0, ~(checksum >> 0x10 ) & 1)
    set_bit(output, 8, 5, ~(checksum >> 0x12 ) & 1)
    set_bit(output, 8, 3, ~(checksum >> 0x11 ) & 1)
    set_bit(output, 9, 2, ~(checksum >> 0xd ) & 1)
    set_bit(output, 9, 6, ~(checksum >> 0xf ) & 1)
    set_bit(output, 9, 5, ~(checksum >> 0xe ) & 1)
    set_bit(output, 10, 1, ~(checksum >> 10 ) & 1)
    set_bit(output, 10, 7, ~(checksum >> 0xc) & 1)
    set_bit(output, 10, 4, ~(checksum >> 0xb) & 1)
    set_bit(output, 11, 0, ~(checksum >> 7 ) & 1)
    set_bit(output, 11, 6, ~(checksum >> 9 ) & 1)
    set_bit(output, 11, 3, ~(checksum >> 8 ) & 1)
    set_bit(output, 12, 2, ~(checksum >> 4 ) & 1)
    set_bit(output, 12, 7, ~(checksum >> 6 ) & 1)
    set_bit(output, 12, 5, ~(checksum >> 5 ) & 1)
    set_bit(output, 13, 1, ~(checksum >> 1 ) & 1)
    set_bit(output, 13, 7, ~(checksum >> 3 ) & 1)
    set_bit(output, 13, 4, ~(checksum >> 2 ) & 1)
    set_bit(output, 14, 5, ~(checksum) & 1)

    # if (checksum ==
    # ~((code_0xf >> 4 & 1) << 0x1d |
    #   (uint)(code_0xe >> 2) << 0x1f | (uint)(code_0xf >> 7) << 0x1e |
    #   (code_0x11 >> 6 & 1) << 0x19 |
    #   (code_0x10 >> 2 & 1) << 0x1a | (code_0xf >> 1 & 1) << 0x1c | (code_0x10 >> 6 & 1) << 0x1b
    #   | (code_0x13 >> 6 & 1) << 0x15 |
    #     (code_0x12 >> 2 & 1) << 0x16 |
    #     (code_0x11 >> 2 & 1) << 0x18 | (code_0x12 >> 6 & 1) << 0x17 |
    #   (code_0x14 >> 1 & 1) << 0x11 |
    #   (code_0x14 >> 4 & 1) << 0x12 |
    #   (code_0x13 >> 2 & 1) << 0x14 | (uint)(code_0x14 >> 7) << 0x13 |
    #   (code_0x16 >> 4 & 1) << 0xd |
    #   (uint)(code_0x16 >> 7) << 0xe | (code_0x15 >> 5 & 1) << 0x10 | (code_0x15 >> 2 & 1) << 0xf
    #   | (code_0x18 >> 6 & 1) << 9 |
    #     (code_0x17 >> 2 & 1) << 10 | (code_0x16 >> 1 & 1) << 0xc | (code_0x17 >> 6 & 1) << 0xb |
    #  code_0x1a >> 1 & 1 |
    #  (code_0x1a >> 2 & 1) << 1 |
    #  (code_0x1a >> 3 & 1) << 2 |
    #  (code_0x1a >> 4 & 1) << 3 |
    #  (code_0x1a >> 5 & 1) << 4 |
    #  (code_0x19 >> 1 & 1) << 5 |
    #  (code_0x19 >> 5 & 1) << 6 | (code_0x18 >> 3 & 1) << 8 | (code_0x18 & 1) << 7)) {

    set_bit(output, 15, 4, ~(checksum >> 0x1d ) & 1)
    set_bit(output, 14, 2, ~(checksum >> 0x1f ) & 1)
    set_bit(output, 15, 7, ~(checksum >> 0x1e ) & 1)
    set_bit(output, 17, 6, ~(checksum >> 0x19 ) & 1)
    set_bit(output, 16, 2, ~(checksum >> 0x1a ) & 1)
    set_bit(output, 15, 1, ~(checksum >> 0x1c ) & 1)
    set_bit(output, 16, 6, ~(checksum >> 0x1b ) & 1)
    set_bit(output, 0x13, 6, ~(checksum >> 0x15 ) & 1)
    set_bit(output, 0x12, 2, ~(checksum >> 0x16 ) & 1)
    set_bit(output, 0x11, 2, ~(checksum >> 0x18 ) & 1)
    set_bit(output, 0x12, 6, ~(checksum >> 0x17 ) & 1)
    set_bit(output, 0x14, 1, ~(checksum >> 0x11 ) & 1)
    set_bit(output, 0x14, 4, ~(checksum >> 0x12 ) & 1)
    set_bit(output, 0x13, 2, ~(checksum >> 0x14 ) & 1)
    set_bit(output, 0x14, 7, ~(checksum >> 0x13 ) & 1)
    set_bit(output, 0x16, 4, ~(checksum >> 0xd ) & 1)
    set_bit(output, 0x16, 7, ~(checksum >> 0xe ) & 1)
    set_bit(output, 0x15, 5, ~(checksum >> 0x10) & 1)
    set_bit(output, 0x15, 2, ~(checksum >> 0xf ) & 1)
    set_bit(output, 0x18, 6, ~(checksum >> 9 ) & 1)
    set_bit(output, 0x17, 2, ~(checksum >> 10 ) & 1)
    set_bit(output, 0x16, 1, ~(checksum >> 0xc ) & 1)
    set_bit(output, 0x17, 6, ~(checksum >> 0xb ) & 1)
    set_bit(output, 0x1a, 1, ~(checksum ) & 1)
    set_bit(output, 0x1a, 2, ~(checksum >> 1 ) & 1 )
    set_bit(output, 0x1a, 3, ~(checksum >> 2 ) & 1 )
    set_bit(output, 0x1a, 4, ~(checksum >> 3 ) & 1 )
    set_bit(output, 0x1a, 5, ~(checksum >> 4 ) & 1 )
    set_bit(output, 0x19, 1, ~(checksum >> 5 ) & 1 )
    set_bit(output, 0x19, 5, ~(checksum >> 6 ) & 1 )
    set_bit(output, 0x18, 3, ~(checksum >> 8 ) & 1 )
    set_bit(output, 0x18, 0, ~(checksum >> 7 ) & 1 )

    # count bits = 1 in output
    bit_count = sum(bin(byte).count('1') for byte in output)
    if bit_count % 2 == 1:
        print("diocane")
        set_bit(output, 3, 0, 1)
        set_bit(output, 0x1a, 1, 0)
        set_bit(output, 14, 5, 0)


        # set_bit(output, 3, 1, 1)
    bit_count = sum(bin(byte).count('1') for byte in output)
    # print("bit count:", bit_count)


    return output


def step2_inverse(byte_array):
    key = (byte_array[0] << 24) | (byte_array[1] << 16) | (byte_array[2] << 8) | byte_array[3]
    size = 23
    while size > 1:
        offset = 27 - size
        temp = byte_array[offset:offset+size]
        orig = [0] * size
        rotation = key % size
        for i in range(size):
            orig[(rotation + i) % size] = temp[i]
        byte_array[offset:offset+size] = orig
        size -= 1
    return byte_array


def step1_inverse(b: List[int], length=36) -> str:
    bits = ''.join(f'{x:08b}' for x in b)
    return ''.join(DICTIONARY[int(bits[i:i+6],2)] for i in range(0, length*6, 6))




def bytes_to_checksum(text = 'DAJE!'):
    bits = ''
    for i in range(5):
        index = DICTIONARY.index(text[i])
        bits += f'{index:06b}'
    bits+= '00'

    # print(hex(int(bits, 2)))
    return int(bits, 2)

def hex_print(byte_array):
    print(' '.join(f'{b:02x}' for b in byte_array))


if __name__ == "__main__":
    character = {
        'character_id': CHARACTERS_ID.index('BROLY'),
        'level': 140,
        'stats': [20, 20, 20, 20, 20, 20, 20],
        'capsules': [140, 141, 141, 142, 142, 143, 143]
    }

    print('Character data:')
    print(f"Character ID: {character['character_id']}")
    print(f"Level: {character['level']}")
    print(f"Stats: {character['stats']}")
    print(f"Capsules: {character['capsules']}")
    print(f"Key/checksum: {hex(bytes_to_checksum())}")
    print()


    a = step3_inverse(character, checksum = bytes_to_checksum())
    print('step3 inverse:')
    hex_print(a)

    b = step2_inverse(a)
    print('step2 inverse:')
    hex_print(b)

    password = step1_inverse(b)
    print('step1 inverse:')
    print(password)


    print('Password 6x6:')
    for i in range(0, len(password), 6):
        print(password[i:i+6], end=' ')
    print()



