const CSV_CONTENT = `ID,NAME,SLOTS,POWER-UP,TRADE,RARITY,TYPE,PRICE,STATE,USER,CONDITION,NOTES
0,None,0,Yes,Yes,Common,Ability,"1,500 Zenie",Unused,Everyone can use,,Technically is used. Is the slot when no Capsules are equipped
1,Kaioken,1,No,Yes,Uncommon,Ability,"3,000 Zenie",Used,Goku,,
2,Super Saiyan (Goku),1,No,Yes,Rare,Ability,"6,000 Zenie",Used,Goku,Kaioken must be equipped,
3,Super Saiyan 2 (Goku),1,No,Yes,Rare,Ability,"6,000 Zenie",Used,Goku,Super Saiyan must be equipped,
4,Super Saiyan 3,1,No,Yes,Special,Ability,"10,000 Zenie",Used,Goku,Super Saiyan 2 must be equipped,
5,Super Saiyan 4 (Goku),1,No,Yes,Special,Ability,"30,000 Zenie",Used,Goku,Super Saiyan 3 must be equipped,
6,Kamehameha (Goku),1 (2),Yes,Yes,Common,Ability,"1,500 Zenie",Used,Goku,Base to Super Saiyan 3,
7,Dragon Fist,1 (2),Yes,Yes,Special,Ability,"10,000 Zenie",Used,Goku,Kaioken or higher,
8,X10 Kamehameha,0 (1/2),Yes,Yes,Rare,Ability,"6,000 Zenie",Unused,Goku,Super Saiyan 4 only,"When ""Super Saiyan 4 (Goku)"" Capsule is equipped, and Goku is in this state, the ""Kamehameha"" Capsule will turn into the “X10 Kamehameha"" Capsule, but with normal means isn't possible to obtain into the Skill List"
9,Warp Kamehameha (Goku),1 (2),Yes,Yes,Rare,Ability,"6,000 Zenie",Used,Goku,,
10,Spirit Bomb (Goku),1 (2),Yes,Yes,Special,Ability,"10,000 Zenie",Used,Goku,Base and Kaioken only,
11,Super Spirit Bomb (Goku),0 (1/2),Yes,No,Special,Ability,"10,000 Zenie",Unused,Goku,Super Saiyan must be equipped,"When ""Super Saiyan (Goku)"" Capsule is equipped, the ""Spirit Bomb (Goku)"" Capsule will turn into the ""Super Spirit Bomb (Goku)"" Capsule, but with normal means isn't possible to obtain into the Skill List"
12,Super Dragon Fist,0 (1/2),Yes,No,Special,Ability,"10,000 Zenie",Unused,Goku,Super Saiyan or higher,"When Goku is in any Super Saiyan state, the ""Super Spirit Bomb (Goku)"" Capsule will turn into the ""Super Dragon Fist"" Capsule, but with normal means isn't possible to obtain into the Skill List"
13,Kamehameha (Kid Goku),1 (2),Yes,Yes,Common,Ability,"1,500 Zenie",Used,Kid Goku,,
14,Rock-Scissors-Paper,1 (2),Yes,Yes,Uncommon,Ability,"3,000 Zenie",Used,Kid Goku,,
15,Super Dragon Fist,1 (2),Yes,Yes,Special,Ability,"50,000 Zenie",Used,Kid Goku,,
16,Unlock Potential (Kid Gohan),1,No,Yes,Rare,Ability,"6,000 Zenie",Used,Kid Gohan,,
17,Masenko,1,Yes,Yes,Common,Ability,"1,500 Zenie",Used,Kid Gohan,,
18,Super Saiyan (Teen Gohan),1,No,Yes,Rare,Ability,"6,000 Zenie",Used,Teen Gohan,,
19,Super Saiyan 2 (Teen Gohan),1,No,Yes,Special,Ability,"10,000 Zenie",Used,Teen Gohan,Super Saiyan must be equipped,
20,Kamehameha (Teen Gohan),1 (2),Yes,Yes,Common,Ability,"1,500 Zenie",Used,Teen Gohan,,
21,Soaring Dragon Strike (Teen Gohan),1 (2),Yes,Yes,Uncommon,Ability,"3,000 Zenie",Used,Teen Gohan,Super Saiyan 2 only,
22,Father-Son Kamehameha,1 (2),Yes,Yes,Special,Ability,"10,000 Zenie",Used,Teen Gohan,Super Saiyan 2 only,
23,Super Saiyan (Gohan),1,No,Yes,Rare,Ability,"6,000 Zenie",Used,Gohan,,
24,Super Saiyan 2 (Gohan),1,No,Yes,Rare,Ability,"6,000 Zenie",Used,Gohan,Super Saiyan must be equipped,
25,Elder Kai Unlock Ability,1,No,No,Special,Ability,"10,000 Zenie",Used,Gohan,Super Saiyan 2 must be equipped,
26,Kamehameha (Gohan),1 (2),Yes,Yes,Common,Ability,"1,500 Zenie",Used,Gohan,,
27,Soaring Dragon Strike (Gohan),1 (2),Yes,Yes,Uncommon,Ability,"3,000 Zenie",Used,Gohan,,
28,Super Kamehameha,1 (2),Yes,Yes,Special,Ability,"10,000 Zenie",Used,Gohan,Super Saiyan or higher,
29,Justice Punch,1 (2),Yes,Yes,Uncommon,Ability,"3,000 Zenie",Used,Gt. Saiyaman,,
30,Justice Kick,1 (2),Yes,Yes,Uncommon,Ability,"3,000 Zenie",Used,Gt. Saiyaman,,
31,Justice Pose,1,No,Yes,Special,Ability,"50,000 Zenie",Used,Gt. Saiyaman,,
32,Super Saiyan (Goten),1,No,Yes,Rare,Ability,"6,000 Zenie",Used,Goten,,
33,Kamehameha (Goten),1 (2),Yes,Yes,Common,Ability,"1,500 Zenie",Used,Goten,,
34,Charge,1 (2),Yes,Yes,Uncommon,Ability,"3,000 Zenie",Used,Goten,,
35,Super Saiyan (Vegeta),1,No,Yes,Rare,Ability,"6,000 Zenie",Used,Vegeta,,
36,Super Saiyan 2 (Vegeta),1,No,Yes,Rare,Ability,"6,000 Zenie",Used,Vegeta,Super Saiyan must be equipped,
37,Super Saiyan 4 (Vegeta),1,No,Yes,Special,Ability,"30,000 Zenie",Used,Vegeta,Super Saiyan 2 must be equipped,
38,Galick Gun,1 (2),Yes,Yes,Common,Ability,"1,500 Zenie",Used,Vegeta,Base to Super Saiyan 2,
39,Atomic Blast,0 (1/2),No,No,Common,Ability,"1,500 Zenie",Unused,Vegeta,Majin Vegeta only,"When ""Babidi's Mind Control"" Capsule is equipped, and Vegeta is hit when having one lifebar, transforming into Majin Vegeta, the ""Galick Gun"" Capsule will turn into the ""Atomic Blast"" Capsule, but with normal means isn't possible to obtain into the Skill List"
40,Final Impact,1 (2),Yes,Yes,Special,Ability,"10,000 Zenie",Used,Vegeta,,
41,Final Shine Attack,0 (1/2),Yes,Yes,Uncommon,Ability,"3,000 Zenie",Unused,Vegeta,Super Saiyan 4 only,"When ""Super Saiyan 4 (Vegeta)"" Capsule is equipped, and Vegeta is in this state, the ""Galick Gun"" Capsule will turn into the ""Final Shine Attack"" Capsule, but with normal means isn't possible to obtain into the Skill List"
42,Final Flash,1 (2),Yes,Yes,Rare,Ability,"6,000 Zenie",Used,Vegeta,,
43,Big Bang Attack,1 (2),Yes,Yes,Special,Ability,"10,000 Zenie",Used,Vegeta,Super Saiyan or higher,
44,Final Explosion,0 (1/2),No,No,Common,Ability,"1,500 Zenie",Unused,Vegeta,Majin Vegeta only,"When ""Babidi's Mind Control"" Capsule is equipped, and Vegeta is hit when having one lifebar, transforming into Majin Vegeta, the ""Big Bang Attack"" Capsule will turn into the ""Final Explosion"" Capsule, but with normal means isn't possible to obtain into the Skill List"
45,Super Saiyan (Trunks),1,No,Yes,Rare,Ability,"6,000 Zenie",Used,Trunks,,
46,Super Saiyan 2 (Trunks),1,No,Yes,Rare,Ability,"6,000 Zenie",Used,Trunks,Super Saiyan must be equipped,
47,Buster Cannon,1 (2),Yes,Yes,Common,Ability,"1,500 Zenie",Used,Trunks,,
48,Finish Buster,1 (2),Yes,Yes,Uncommon,Ability,"3,000 Zenie",Used,Trunks,,
49,Burning Slash,1 (2),Yes,Yes,Special,Ability,"50,000 Zenie",Used,Trunks,Super Saiyan or higher,
50,Super Saiyan (Kid Trunks),1,No,Yes,Rare,Ability,"6,000 Zenie",Used,Kid Trunks,,
51,Double Buster,1 (2),Yes,Yes,Common,Ability,"1,500 Zenie",Used,Kid Trunks,,
52,Final Cannon,1 (2),Yes,Yes,Uncommon,Ability,"3,000 Zenie",Used,Kid Trunks,,
53,Unlock Potential (Krillin),1,No,Yes,Rare,Ability,"6,000 Zenie",Used,Krillin,,
54,Kamehameha (Krillin),1 (2),Yes,Yes,Common,Ability,"1,500 Zenie",Used,Krillin,,
55,Destructo Disc (Krillin),1 (2),Yes,Yes,Uncommon,Ability,"3,000 Zenie",Used,Krillin,,
56,Fierce Destructo Disc,1 (2),Yes,Yes,Special,Ability,"10,000 Zenie",Used,Krillin,Unlock Potential only,
57,Sync With Nail,1,No,Yes,Rare,Ability,"6,000 Zenie",Used,Piccolo,,
58,Fuse With Kami,1,No,Yes,Rare,Ability,"6,000 Zenie",Used,Piccolo,Sync With Nail must be equipped,
59,Destructive Wave,1 (2),Yes,Yes,Common,Ability,"1,500 Zenie",Used,Piccolo,,
60,Light Grenade,1 (2),Yes,Yes,Uncommon,Ability,"3,000 Zenie",Used,Piccolo,Fuse With Kami only,
61,Special Beam Cannon,1 (2),Yes,Yes,Rare,Ability,"6,000 Zenie",Used,Piccolo,,
62,Hellzone Grenade,1 (2),Yes,Yes,Special,Ability,"10,000 Zenie",Used,Piccolo,Fuse With Kami only,
63,Dodompa,1 (2),Yes,Yes,Common,Ability,"1,500 Zenie",Used,Tien,,
64,Ki Blast Cannon,1 (2),Yes,Yes,Uncommon,Ability,"3,000 Zenie",Used,Tien,,
65,Neo Ki Blast Cannon,1 (2),Yes,Yes,Special,Ability,"10,000 Zenie",Used,Tien,,
66,Kamehameha (Yamcha),1 (2),Yes,Yes,Common,Ability,"1,500 Zenie",Used,Yamcha,,
67,Wolf Fang Fist,1 (2),Yes,Yes,Uncommon,Ability,"3,000 Zenie",Used,Yamcha,,
68,Spirit Ball Attack,1 (2),Yes,Yes,Special,Ability,"10,000 Zenie",Used,Yamcha,,
69,High Tension,1,No,Yes,Rare,Ability,"6,000 Zenie",Used,Hercule,,
70,Dynamite Kick,1 (2),Yes,Yes,Common,Ability,"1,500 Zenie",Used,Hercule,,
71,Rolling Hercule Punch,1 (2),Yes,Yes,Uncommon,Ability,"3,000 Zenie",Used,Hercule,,
72,Hercule Special,1,No,Yes,Rare,Ability,"6,000 Zenie",Used,Hercule,,
73,Present For You,1 (2),Yes,Yes,Special,Ability,"50,000 Zenie",Used,Hercule,,
74,Eagle Kick,1 (2),Yes,Yes,Common,Ability,"1,500 Zenie",Used,Videl,,
75,Hawk Arrow,1 (2),Yes,Yes,Uncommon,Ability,"3,000 Zenie",Used,Videl,,
76,Videl's Close Call,1 (2),Yes,Yes,Special,Ability,"50,000 Zenie",Used,Videl,,
77,Shockwave,1 (2),Yes,Yes,Common,Ability,"1,500 Zenie",Used,Supreme Kai,,
78,Supernatural Abilities,1 (2),Yes,Yes,Uncommon,Ability,"3,000 Zenie",Used,Supreme Kai,,
79,Ki Cannon,1 (2),Yes,Yes,Common,Ability,"1,500 Zenie",Used,Uub,,
80,Fierce Flurry,1 (2),Yes,Yes,Uncommon,Ability,"3,000 Zenie",Used,Uub,,
81,Double Sunday,1 (2),Yes,Yes,Common,Ability,"1,500 Zenie",Used,Raditz,,
82,Saturday Crush,1 (2),Yes,Yes,Uncommon,Ability,"3,000 Zenie",Used,Raditz,,
83,Bomber DX,1 (2),Yes,Yes,Common,Ability,"1,500 Zenie",Used,Nappa,,
84,Break Cannon,1 (2),Yes,Yes,Uncommon,Ability,"3,000 Zenie",Used,Nappa,,
85,Giant Storm,1 (2),Yes,Yes,Special,Ability,"50,000 Zenie",Used,Nappa,,
86,Special Fighting Pose 1,1,No,Yes,Uncommon,Ability,"3,000 Zenie",Used,Captain Ginyu,,
87,Special Fighting Pose 2,1,No,Yes,Uncommon,Ability,"3,000 Zenie",Used,Captain Ginyu,,
88,Milky Cannon,1 (2),Yes,Yes,Common,Ability,"1,500 Zenie",Used,Captain Ginyu,,
89,Strong Jersey,1 (2),Yes,Yes,Uncommon,Ability,"3,000 Zenie",Used,Captain Ginyu,,
90,Body Change,1,No,Yes,Special,Ability,"50,000 Zenie",Used,Captain Ginyu,,
91,Special Fighting Pose 3,1,No,Yes,Uncommon,Ability,"3,000 Zenie",Used,Recoome,,
92,Special Fighting Pose 4,1,No,Yes,Uncommon,Ability,"3,000 Zenie",Used,Recoome,,
93,Recoome Eraser Gun,1 (2),Yes,Yes,Common,Ability,"1,500 Zenie",Used,Recoome,,
94,Recoome Kick,1 (2),Yes,Yes,Uncommon,Ability,"3,000 Zenie",Used,Recoome,,
95,Recoome Bomber,1 (2),Yes,Yes,Special,Ability,"50,000 Zenie",Used,Recoome,,
96,Second Form,1,No,Yes,Uncommon,Ability,"3,000 Zenie",Used,Frieza,,
97,Third Form,1,No,Yes,Uncommon,Ability,"3,000 Zenie",Used,Frieza,Second Form must be equipped,
98,Final Form (Frieza),1,No,Yes,Rare,Ability,"6,000 Zenie",Used,Frieza,Third Form must be equipped,
99,100% Full Power,1,No,Yes,Special,Ability,"10,000 Zenie",Used,Frieza,Final Form (Frieza) must be equipped,
100,Death Beam,1 (2),Yes,Yes,Common,Ability,"1,500 Zenie",Used,Frieza,,
101,Death Wave,1 (2),Yes,Yes,Uncommon,Ability,"3,000 Zenie",Used,Frieza,Third Form or higher (including Mecha Frieza),
102,Death Ball,1 (2),Yes,Yes,Special,Ability,"50,000 Zenie",Used,Frieza,Final Form (Frieza) or higher (including Mecha Frieza),
103,Rocket Punch,1 (2),Yes,Yes,Common,Ability,"1,500 Zenie",Used,Android #16,,
104,Hell Flash,1 (2),Yes,Yes,Special,Ability,"50,000 Zenie",Used,Android #16,,
105,Power Blitz (#17),1 (2),Yes,Yes,Common,Ability,"1,500 Zenie",Used,Android #17,,
106,Energy Field (#17),1 (2),Yes,Yes,Uncommon,Ability,"3,000 Zenie",Used,Android #17,,
107,Accel Dance (#17),1 (2),Yes,Yes,Special,Ability,"50,000 Zenie",Used,Android #17,,
108,Power Blitz (#18),1 (2),Yes,Yes,Common,Ability,"1,500 Zenie",Used,Android #18,,
109,Destructo Disc (Android #18),1 (2),Yes,Yes,Uncommon,Ability,"3,000 Zenie",Used,Android #18,,
110,Accel Dance (#18),1 (2),Yes,Yes,Special,Ability,"50,000 Zenie",Used,Android #18,,
111,Photon Wave,1 (2),Yes,Yes,Common,Ability,"1,500 Zenie",Used,Dr. Gero,,
112,Ki Blast Absorption,1 (2),Yes,Yes,Uncommon,Ability,"3,000 Zenie",Used,Dr. Gero,,
113,Life Drain,1 (2),Yes,Yes,Special,Ability,"50,000 Zenie",Used,Dr. Gero,,
114,#17 Absorption,1,No,Yes,Uncommon,Ability,"3,000 Zenie",Used,Cell,,
115,Perfect Form,1,No,Yes,Rare,Ability,"6,000 Zenie",Used,Cell,#17 Absorption must be equipped,
116,Super Perfect Form,1,No,Yes,Special,Ability,"10,000 Zenie",Used,Cell,Perfect Form must be equipped,
117,Kamehameha (Cell),1 (2),Yes,Yes,Common,Ability,"1,500 Zenie",Used,Cell,,
118,Energy Field (Cell),1 (2),Yes,Yes,Uncommon,Ability,"3,000 Zenie",Used,Cell,#17 Absorption or higher,
119,Spirit Bomb (Cell),1 (2),Yes,Yes,Special,Ability,"50,000 Zenie",Used,Cell,Perfect form of higher,
120,Innocence Cannon,1 (2),Yes,Yes,Common,Ability,"1,500 Zenie",Used,Majin Buu,,
121,Innocence Express,1 (2),Yes,Yes,Uncommon,Ability,"3,000 Zenie",Used,Majin Buu,,
122,Angry Explosion,1 (2),Yes,Yes,Special,Ability,"50,000 Zenie",Used,Majin Buu,,
123,Absorption,3,No,No,Special,Ability,"10,000 Zenie",Used,Super Buu,,
124,Ill Flash,1 (2),Yes,Yes,Common,Ability,"1,500 Zenie",Used,Super Buu,,
125,Ill Ball Attack,1 (2),Yes,Yes,Common,Ability,"1,500 Zenie",Used,Super Buu,,
126,Vanishing Ball,1 (2),Yes,Yes,Uncommon,Ability,"3,000 Zenie",Used,Kid Buu,,
127,Kamehameha (Kid Buu),1 (2),Yes,Yes,Common,Ability,"1,500 Zenie",Used,Kid Buu,,
128,Warp Kamehameha (Kid Buu),1 (2),Yes,Yes,Special,Ability,"50,000 Zenie",Used,Kid Buu,,
129,Demonic Will,1,No,Yes,Rare,Ability,"6,000 Zenie",Used,Dabura,,
130,Hell Blitz,1 (2),Yes,Yes,Common,Ability,"1,500 Zenie",Used,Dabura,,
131,Evil Blast,1 (2),Yes,Yes,Uncommon,Ability,"3,000 Zenie",Used,Dabura,,
132,Hell Blade Rush,1 (2),Yes,Yes,Special,Ability,"50,000 Zenie",Used,Dabura,,
133,Final Form (Cooler),1,No,Yes,Rare,Ability,"6,000 Zenie",Used,Cooler,,
134,Destructive Ray,1 (2),Yes,Yes,Common,Ability,"1,500 Zenie",Used,Cooler,,
135,Sauzer Blade,1 (2),Yes,Yes,Uncommon,Ability,"3,000 Zenie",Used,Cooler,,
136,Supernova,1 (2),Yes,Yes,Special,Ability,"50,000 Zenie",Used,Cooler,Final Form (Cooler) and Metal Cooler only,
137,Riot Javelin,1 (2),Yes,Yes,Common,Ability,"1,500 Zenie",Used,Bardock,,
138,Heat Phalanx,1 (2),Yes,Yes,Uncommon,Ability,"3,000 Zenie",Used,Bardock,,
139,Spirit of Saiyans,1 (2),Yes,Yes,Special,Ability,"50,000 Zenie",Used,Bardock,,
140,Legendary Super Saiyan,1,No,No,Rare,Ability,"6,000 Zenie",Used,Broly,,
141,Blaster Shell,1 (2),Yes,Yes,Common,Ability,"1,500 Zenie",Used,Broly,,
142,Gigantic Press,1 (2),Yes,Yes,Uncommon,Ability,"3,000 Zenie",Used,Broly,,
143,Gigantic Meteor,1 (2),Yes,Yes,Special,Ability,"10,000 Zenie",Used,Broly,Legendary Super Saiyan only,
144,Whirlwind Spin,1 (2),Yes,Yes,Common,Ability,"1,500 Zenie",Used,Omega Shenron,,
145,Dragon Thunder,1 (2),Yes,Yes,Uncommon,Ability,"3,000 Zenie",Used,Omega Shenron,,
146,Minus Energy Power Ball,1 (2),Yes,Yes,Special,Ability,"50,000 Zenie",Used,Omega Shenron,,
147,Acid,1 (2),Yes,Yes,Common,Ability,"1,500 Zenie",Used,Saibamen,,
148,Self-Destruct,1 (2),Yes,Yes,Rare,Ability,"6,000 Zenie",Used,Saibamen,,
149,Kamehameha (Cell Jr.),1 (2),Yes,Yes,Common,Ability,"1,500 Zenie",Used,Cell Jr.,,
150,Fusion <Gotenks> (Goten),7,No,No,Special,Ability,"30,000 Zenie",Used,Goten,,
151,Super Saiyan,0 (1),No,No,Common,Ability,"1,500 Zenie",Unused,Gotenks (Goten),,With normal means isn't possible to obtain into the Skill List
152,Super Saiyan 3,0 (1),No,No,Common,Ability,"1,500 Zenie",Unused,Gotenks (Goten),,With normal means isn't possible to obtain into the Skill List
153,Kamehameha,0 (1/2),Yes,No,Common,Ability,"1,500 Zenie",Unused,"Goten, Gotenks (Goten)",,With normal means isn't possible to obtain into the Skill List
154,Charge,0 (1/2),Yes,No,Common,Ability,"1,500 Zenie",Unused,"Goten, Gotenks (Goten)",,With normal means isn't possible to obtain into the Skill List
155,Victory Cannon,0 (1/2),Yes,No,Common,Ability,"1,500 Zenie",Unused,Gotenks (Goten),Super Saiyan 3 only,"When Gotenks (Goten) is in Super Saiyan 3 state, the ""Charge"" Capsule will turn into the ""Victory Cannon"" Capsule, but with normal means isn't possible to obtain into the Skill List"
156,Galactica Donuts,0 (1/2),Yes,No,Common,Ability,"1,500 Zenie",Unused,Gotenks (Goten),Super Saiyan or higher,With normal means isn't possible to obtain into the Skill List
157,Super Ghost Kamikaze Attk,0 (1/2),Yes,No,Common,Ability,"1,500 Zenie",Unused,Gotenks (Goten),Super Saiyan or higher,With normal means isn't possible to obtain into the Skill List
158,Fusion <Gotenks> (Trunks),7,No,No,Special,Ability,"30,000 Zenie",Used,Kid Trunks,,
159,Super Saiyan,0 (1),No,No,Common,Ability,"1,500 Zenie",Unused,Gotenks (Kid Trunks),,With normal means isn't possible to obtain into the Skill List
160,Super Saiyan 3,0 (1),No,No,Common,Ability,"1,500 Zenie",Unused,Gotenks (Kid Trunks),,With normal means isn't possible to obtain into the Skill List
161,Double Buster,0 (1/2),Yes,No,Common,Ability,"1,500 Zenie",Unused,Kid Trunks,,With normal means isn't possible to obtain into the Skill List
162,Kamehameha,0 (1/2),Yes,No,Common,Ability,"1,500 Zenie",Unused,Gotenks (Kid Trunks),,With normal means isn't possible to obtain into the Skill List
163,Final Cannon,0 (1/2),Yes,No,Common,Ability,"1,500 Zenie",Unused,"Kid Trunks, Gotenks (Kid Trunks)",,With normal means isn't possible to obtain into the Skill List
164,Victory Cannon,0 (1/2),Yes,No,Common,Ability,"1,500 Zenie",Unused,Gotenks (Kid Trunks),Super Saiyan 3 only,"When Gotenks (Kid Trunks) is in Super Saiyan 3 state, the ""Final Cannon"" Capsule will turn into the ""Victory Cannon"" Capsule, but with normal means isn't possible to obtain into the Skill List"
165,Galactica Donuts,0 (1/2),Yes,No,Common,Ability,"1,500 Zenie",Unused,Gotenks (Kid Trunks),Super Saiyan or higher,With normal means isn't possible to obtain into the Skill List
166,Super Ghost Kamikaze Attk,0 (1/2),Yes,No,Common,Ability,"1,500 Zenie",Unused,Gotenks (Kid Trunks),Super Saiyan or higher,With normal means isn't possible to obtain into the Skill List
167,Fusion <Gogeta> (Goku),7,No,No,Special,Ability,"30,000 Zenie",Used,Goku,,
168,Kamehameha,0 (1/2),Yes,No,Common,Ability,"1,500 Zenie",Unused,"Goku, Gogeta (Goku)",,With normal means isn't possible to obtain into the Skill List
169,Soul Strike,0 (1/2),Yes,No,Common,Ability,"1,500 Zenie",Unused,Gogeta (Goku),,With normal means isn't possible to obtain into the Skill List
170,Soul Punisher,0 (1/2),Yes,No,Common,Ability,"1,500 Zenie",Unused,Gogeta (Goku),,With normal means isn't possible to obtain into the Skill List
171,Fusion <Gogeta> (Vegeta),7,No,No,Special,Ability,"30,000 Zenie",Used,Vegeta,,
172,Galick Gun,0 (1/2),Yes,No,Common,Ability,"1,500 Zenie",Unused,"Vegeta, Gogeta (Vegeta)",,With normal means isn't possible to obtain into the Skill List
173,Soul Strike,0 (1/2),Yes,No,Common,Ability,"1,500 Zenie",Unused,Gogeta (Vegeta),,With normal means isn't possible to obtain into the Skill List
174,Soul Punisher,0 (1/2),Yes,No,Special,Ability,"10,000 Zenie",Unused,Gogeta (Vegeta),,With normal means isn't possible to obtain into the Skill List
175,Fusion <SS4 Gogeta> (Goku),7,No,No,Special,Ability,"60,000 Zenie",Used,Goku,,
176,Super Saiyan 4 (Goku),0 (1),No,No,Special,Ability,"10,000 Zenie",Unused,Goku,,With normal means isn't possible to obtain into the Skill List
177,Kamehameha,0 (1/2),Yes,No,Common,Ability,"1,500 Zenie",Unused,Goku,Base only,With normal means isn't possible to obtain into the Skill List
178,X10 Kamehameha,0 (1/2),Yes,No,Rare,Ability,"6,000 Zenie",Unused,Goku,Super Saiyan 4 only,"When Goku is in Super Saiyan 4 state, the ""Kamehameha"" Capsule will turn into the ""X10 Kamehameha"" Capsule, but with normal means isn't possible to obtain into the Skill List"
179,Big Bang Kamehameha,0 (1/2),Yes,No,Uncommon,Ability,"3,000 Zenie",Unused,Gogeta SSJ4 (Goku),,With normal means isn't possible to obtain into the Skill List
180,x100 Big Bang Kamehameha,0 (1/2),Yes,No,Common,Ability,"1,500 Zenie",Unused,Gogeta SSJ4 (Goku),,With normal means isn't possible to obtain into the Skill List
181,Fusion <SS4 Gogeta> (Vegeta),7,No,No,Special,Ability,"60,000 Zenie",Used,Vegeta,,
182,Super Saiyan 4 (Vegeta),0 (1),No,No,Special,Ability,"10,000 Zenie",Unused,Vegeta,,With normal means isn't possible to obtain into the Skill List
183,Galick Gun,0 (1/2),Yes,No,Common,Ability,"1,500 Zenie",Unused,Vegeta,Base only,With normal means isn't possible to obtain into the Skill List
184,Final Shine Attack,0 (1/2),Yes,No,Rare,Ability,"6,000 Zenie",Unused,Vegeta,Super Saiyan 4 only,"When Vegeta is in Super Saiyan 4 state, the ""Galick Gun"" Capsule will turn into the ""Final Shine Attack"" Capsule, but with normal means isn't possible to obtain into the Skill List"
185,Big Bang Kamehameha,0 (1/2),Yes,No,Uncommon,Ability,"3,000 Zenie",Unused,Gogeta SSJ4 (Vegeta),,With normal means isn't possible to obtain into the Skill List
186,x100 Big Bang Kamehameha,0 (1/2),Yes,No,Special,Ability,"10,000 Zenie",Unused,Gogeta SSJ4 (Vegeta),,With normal means isn't possible to obtain into the Skill List
187,Potara <Vegito> (Goku),7,No,No,Special,Ability,"45,000 Zenie",Used,Goku,,
188,Super Vegito,0 (1),No,No,Common,Ability,"1,500 Zenie",Unused,Vegito (Goku),,With normal means isn't possible to obtain into the Skill List
189,Kamehameha,0 (1/2),Yes,No,Common,Ability,"1,500 Zenie",Unused,"Goku, Vegito (Goku)",,With normal means isn't possible to obtain into the Skill List
190,Spirit Cannon,0 (1/2),Yes,No,Common,Ability,"1,500 Zenie",Unused,Vegito (Goku),,With normal means isn't possible to obtain into the Skill List
191,Spirit Sword,0 (1/2),Yes,No,Common,Ability,"1,500 Zenie",Unused,Vegito (Goku),Super Vegito only,With normal means isn't possible to obtain into the Skill List
192,Potara <Vegito> (Vegeta),7,No,No,Special,Ability,"45,000 Zenie",Used,Vegeta,,
193,Super Vegito,0 (1),No,No,Common,Ability,"1,500 Zenie",Unused,Vegito (Vegeta),,With normal means isn't possible to obtain into the Skill List
194,Galick Gun,0 (1/2),Yes,No,Common,Ability,"1,500 Zenie",Unused,"Vegeta, Vegito (Vegeta)",,With normal means isn't possible to obtain into the Skill List
195,Spirit Cannon,0 (1/2),Yes,No,Common,Ability,"1,500 Zenie",Unused,Vegito (Vegeta),,With normal means isn't possible to obtain into the Skill List
196,Spirit Sword,0 (1/2),Yes,No,Common,Ability,"1,500 Zenie",Unused,Vegito (Vegeta),Super Vegito only,With normal means isn't possible to obtain into the Skill List
197,Potara <Kibitoshin>,7,No,No,Special,Ability,"30,000 Zenie",Used,Supreme Kai,,
198,Shockwave,0 (1/2),Yes,No,Common,Ability,"1,500 Zenie",Unused,Kibitoshin,,With normal means isn't possible to obtain into the Skill List
199,Supernatural Abilities,0 (1/2),Yes,No,Common,Ability,"1,500 Zenie",Unused,Kibitoshin,,With normal means isn't possible to obtain into the Skill List
200,Victory Cannon,0 (1/2),Yes,No,Common,Ability,"1,500 Zenie",Unused,Super Buu (Gotenks absorbed),,With normal means isn't possible to obtain into the Skill List
201,Super Ghost Kamikaze Attk,0 (1/2),Yes,No,Common,Ability,"1,500 Zenie",Unused,Super Buu (Gotenks absorbed),,With normal means isn't possible to obtain into the Skill List
202,Kamehameha,0 (1/2),Yes,No,Common,Ability,"1,500 Zenie",Unused,Super Buu (Gohan absorbed),,With normal means isn't possible to obtain into the Skill List
203,Super Kamehameha,0 (1/2),Yes,No,Common,Ability,"1,500 Zenie",Unused,Super Buu (Gohan absorbed),,With normal means isn't possible to obtain into the Skill List
204,Destructive Wave,0 (1/2),Yes,No,Common,Ability,"1,500 Zenie",Unused,Super Buu (Piccolo absorbed),,With normal means isn't possible to obtain into the Skill List
205,Light Grenade,0 (1/2),Yes,No,Common,Ability,"1,500 Zenie",Unused,Super Buu (Piccolo absorbed),,With normal means isn't possible to obtain into the Skill List
206,Special Beam Cannon,0 (1/2),Yes,No,Common,Ability,"1,500 Zenie",Unused,Super Buu (Piccolo absorbed),,With normal means isn't possible to obtain into the Skill List
207,Breakthrough (Goku),7,No,No,Special,Ability,"10,000 Zenie",Used,Goku,,
208,Breakthrough (Kid Goku),7,No,No,Special,Ability,"75,000 Zenie",Used,Kid Goku,,
209,Breakthrough (Kid Gohan),7,No,No,Special,Ability,"10,000 Zenie",Used,Kid Gohan,,
210,Breakthrough (Teen Gohan),7,No,No,Special,Ability,"10,000 Zenie",Used,Teen Gohan,,
211,Breakthrough (Gohan),7,No,No,Special,Ability,"10,000 Zenie",Used,Gohan,,
212,Breakthrough (Great Saiyaman),7,No,No,Special,Ability,"75,000 Zenie",Used,Gt. Saiyaman,,
213,Breakthrough (Goten),7,No,No,Special,Ability,"75,000 Zenie",Used,Goten,,
214,Breakthrough (Vegeta),7,No,No,Special,Ability,"10,000 Zenie",Used,Vegeta,,
215,Breakthrough (Trunks),7,No,No,Special,Ability,"75,000 Zenie",Used,Trunks,,
216,Breakthrough (Kid Trunks),7,No,No,Special,Ability,"75,000 Zenie",Used,Kid Trunks,,
217,Breakthrough (Krillin),7,No,No,Special,Ability,"10,000 Zenie",Used,Krillin,,
218,Breakthrough (Piccolo),7,No,No,Special,Ability,"10,000 Zenie",Used,Piccolo,,
219,Breakthrough (Tien),7,No,No,Special,Ability,"10,000 Zenie",Used,Tien,,
220,Breakthrough (Yamcha),7,No,No,Special,Ability,"10,000 Zenie",Used,Yamcha,,
221,Breakthrough (Hercule),7,No,No,Special,Ability,"75,000 Zenie",Used,Hercule,,
222,Breakthrough (Videl),7,No,No,Special,Ability,"75,000 Zenie",Used,Videl,,
223,Breakthrough (Supreme Kai),7,No,No,Special,Ability,"75,000 Zenie",Used,Supreme Kai,,
224,Breakthrough (Uub),7,No,No,Special,Ability,"10,000 Zenie",Used,Uub,,
225,Breakthrough (Raditz),7,No,No,Special,Ability,"75,000 Zenie",Used,Raditz,,
226,Breakthrough (Nappa),7,No,No,Special,Ability,"75,000 Zenie",Used,Nappa,,
227,Breakthrough (Ginyu),7,No,No,Special,Ability,"75,000 Zenie",Used,Captain Ginyu,,
228,Breakthrough (Recoome),7,No,No,Special,Ability,"75,000 Zenie",Used,Recoome,,
229,Breakthrough (Frieza),7,No,No,Special,Ability,"75,000 Zenie",Used,Frieza,,
230,Breakthrough (Android #16),7,No,No,Special,Ability,"75,000 Zenie",Used,Android #16,,
231,Breakthrough (Android #17),7,No,No,Special,Ability,"75,000 Zenie",Used,Android #17,,
232,Breakthrough (Android #18),7,No,No,Special,Ability,"75,000 Zenie",Used,Android #18,,
233,Breakthrough (Dr. Gero),7,No,No,Special,Ability,"75,000 Zenie",Used,Dr. Gero,,
234,Breakthrough (Cell),7,No,No,Special,Ability,"75,000 Zenie",Used,Cell,,
235,Breakthrough (Majin Buu),7,No,No,Special,Ability,"75,000 Zenie",Used,Majin Buu,,
236,Breakthrough (Super Buu),7,No,No,Special,Ability,"75,000 Zenie",Used,Super Buu,,
237,Breakthrough (Kid Buu),7,No,No,Special,Ability,"75,000 Zenie",Used,Kid Buu,,
238,Breakthrough (Dabura),7,No,No,Special,Ability,"75,000 Zenie",Used,Dabura,,
239,Breakthrough (Cooler),7,No,No,Special,Ability,"75,000 Zenie",Used,Cooler,,
240,Breakthrough (Bardock),7,No,No,Special,Ability,"75,000 Zenie",Used,Bardock,,
241,Breakthrough (Broly),7,No,No,Special,Ability,"10,000 Zenie",Used,Broly,,
242,Breakthrough (Omega Shenron),7,No,No,Special,Ability,"75,000 Zenie",Used,Omega Shenron,,
243,Breakthrough (Saibamen),7,No,No,Special,Ability,"75,000 Zenie",Used,Saibamen,,
244,Breakthrough (Cell Jr.),7,No,No,Special,Ability,"75,000 Zenie",Used,Cell Jr.,,
245,Breakthrough (Bulma),7,No,No,Special,Ability,"10,000 Zenie",Unused,Bulma,,With normal means isn't possible to obtain into the Skill List
246,Tempura Bowl,1,No,Yes,Common,Item,"1,500 Zenie",Used,Everyone can use,,
247,Tonkatsu (Fried Pork) Bowl,2,No,Yes,Uncommon,Item,"3,000 Zenie",Used,Everyone can use,,
248,Chicken & Egg Bowl,3,No,Yes,Rare,Item,"6,000 Zenie",Used,Everyone can use,,
249,Chilled Juice,1,No,Yes,Common,Item,"1,500 Zenie",Used,Everyone can use,,
250,Well Chilled Juice,2,No,Yes,Uncommon,Item,"3,000 Zenie",Used,Everyone can use,,
251,Extremely Chilled Juice,3,No,Yes,Rare,Item,"6,000 Zenie",Used,Everyone can use,,
252,1/3 Senzu Bean,2,No,Yes,Uncommon,Item,"3,000 Zenie",Used,Everyone can use,,
253,1/2 Senzu Bean,3,No,Yes,Rare,Item,"6,000 Zenie",Used,Everyone can use,,
254,Senzu Bean,4,No,Yes,Special,Item,"30,000 Zenie",Used,Everyone can use,,
255,King-Kai's Water,1,No,Yes,Common,Item,"1,500 Zenie",Used,Everyone can use,,
256,Supreme Kai's Water,2,No,Yes,Uncommon,Item,"3,000 Zenie",Used,Everyone can use,,
257,Grand Supreme Kai's Water,3,No,Yes,Rare,Item,"6,000 Zenie",Used,Everyone can use,,
258,Super Holy Water Drop,1,No,Yes,Common,Item,"1,500 Zenie",Used,Everyone can use,,15% Attack boost
259,Super Holy Water Bottle,2,No,Yes,Uncommon,Item,"3,000 Zenie",Used,Everyone can use,,15% Attack boost
260,Super Holy Water,3,No,Yes,Rare,Item,"6,000 Zenie",Used,Everyone can use,,15% Attack boost
261,Hercule Drink,1,No,Yes,Common,Item,"1,500 Zenie",Used,Everyone can use,,15% Defense boost
262,Hercule Drink DX,2,No,Yes,Uncommon,Item,"3,000 Zenie",Used,Everyone can use,,15% Defense boost
263,Hercule Drink SP,3,No,Yes,Rare,Item,"6,000 Zenie",Used,Everyone can use,,15% Defense boost
264,Super Kami Water Drop,1,No,Yes,Common,Item,"1,500 Zenie",Used,Everyone can use,,30% Attack boost
265,Super Kami Water Bottle,2,No,Yes,Uncommon,Item,"3,000 Zenie",Used,Everyone can use,,30% Attack boost
266,Super Kami Water,3,No,Yes,Rare,Item,"6,000 Zenie",Used,Everyone can use,,30% Attack boost
267,Portable Shield (Prototype),1,No,Yes,Common,Item,"1,500 Zenie",Used,Everyone can use,,
268,Portable Shield (Improved),2,No,Yes,Uncommon,Item,"3,000 Zenie",Used,Everyone can use,,
269,Portable Shield (Production),3,No,Yes,Rare,Item,"6,000 Zenie",Used,Everyone can use,,
270,Portable Barrier System,2,No,Yes,Uncommon,Item,"3,000 Zenie",Used,Everyone can use,,
271,Gero Style Defense System,3,No,Yes,Rare,Item,"6,000 Zenie",Used,Everyone can use,,
272,Gero Style Defense System,4,No,Yes,Special,Item,"10,000 Zenie",Used,Everyone can use,,
273,Bibidi's Pot,3,No,Yes,Special,Item,"10,000 Zenie",Used,Everyone can use,,
274,Vaccine,3,No,Yes,Rare,Item,"6,000 Zenie",Used,Everyone can use,,
275,Senzu Root,4,No,Yes,Common,Item,"1,500 Zenie",Used,Everyone can use,,
276,Senzu Leaf,5,No,Yes,Uncommon,Item,"3,000 Zenie",Used,Everyone can use,,
277,Senzu Seeding,6,No,Yes,Rare,Item,"6,000 Zenie",Used,Everyone can use,,
278,Centiped Eel Soup,1,No,Yes,Uncommon,Item,"3,000 Zenie",Used,Everyone can use,,
279,Chicken-fried 7-Seasoned Toad,1,No,Yes,Rare,Item,"6,000 Zenie",Used,Everyone can use,,"30% Attack boost, 25% Defense nerf"
280,Paozusaurus Tail,2,No,Yes,Rare,Item,"6,000 Zenie",Used,Everyone can use,,"45% Attack boost, 50% Defense nerf"
281,Z-Sword,1,No,Yes,Rare,Equipment,"6,000 Zenie",Used,"Goku, Gohan",,10% Attack boost
282,Juice!,1,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,Kid Goku,,10% Attack boost
283,Daimao's Power,1,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,Piccolo,,10% Attack boost
284,Fruits of Training,1,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,"Kid Gohan, Teen Gohan, Goten, Krillin, Tien, Kid Trunks, Trunks, Yamcha, Uub",,10% Attack boost
285,Videl's Kiss,1,No,Yes,Special,Equipment,"10,000 Zenie",Used,Gt. Saiyaman,,10% Attack boost
286,Kibito's Backing,1,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,Supreme Kai,,10% Attack boost
287,Battle Testament,1,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,"Vegeta, Raditz, Nappa, Captain Ginyu, Recoome",,10% Attack boost
288,Power Amplification System,1,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,"Android #16, Android #17, Android #18, Dr. Gero",,10% Attack boost
289,Warrior Genetics,1,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,"Cell, Cell Jr.",,10% Attack boost
290,Demon Realm Flames,1,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,"Dabura, Majin Buu, Super Buu, Kid Buu",,10% Attack boost
291,Kakarot's Crying,1,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,Broly,,10% Attack boost
292,Ginyu Special Forces,1,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,Frieza,,10% Attack boost
293,Cooler's Armored Squad,1,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,Cooler,,10% Attack boost
294,Power of Friends,1,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,Bardock,,10% Attack boost
295,Appetites of Man,1,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,Omega Shenron,,10% Attack boost
296,Strength Serum,1,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,Saibamen,,10% Attack boost
297,King's Lineage,1,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,Videl,,10% Attack boost
298,Cheering,1,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,Hercule,,10% Attack boost
299,General Vest,1,No,Yes,Common,Equipment,"1,500 Zenie",Used,"Goku, Goten, Krillin, Tien, Yamcha",,10% Defense boost
300,Training Vest,2,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,"Goku, Goten, Krillin, Tien, Yamcha",,20% Defense boost
301,Sturdy Vest,3,No,Yes,Rare,Equipment,"6,000 Zenie",Used,"Goku, Goten, Krillin, Tien, Yamcha",,30% Defense boost
302,Mysterious Vest,4,No,Yes,Special,Equipment,"10,000 Zenie",Used,"Goku, Goten, Krillin, Tien, Yamcha",,40% Defense boost
303,Vest from Grandpa Gohan,1,No,Yes,Common,Equipment,"1,500 Zenie",Used,Kid Goku,,10% Defense boost
304,Vest with hole for tail,2,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,Kid Goku,,20% Defense boost
305,Turtle School Vest,3,No,Yes,Rare,Equipment,"6,000 Zenie",Used,Kid Goku,,30% Defense boost
306,Kami's Vest,4,No,Yes,Special,Equipment,"10,000 Zenie",Used,Kid Goku,,40% Defense boost
307,Normal Tribe Uniform,1,No,Yes,Common,Equipment,"1,500 Zenie",Used,"Kid Gohan, Teen Gohan, Piccolo",,10% Defense boost
308,Evil Training Uniform,2,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,"Kid Gohan, Teen Gohan, Piccolo",,20% Defense boost
309,Evil Sturdy Uniform,3,No,Yes,Rare,Equipment,"6,000 Zenie",Used,"Kid Gohan, Teen Gohan, Piccolo",,30% Defense boost
310,Evil Mystery Uniform,4,No,Yes,Special,Equipment,"10,000 Zenie",Used,"Kid Gohan, Teen Gohan, Piccolo",,40% Defense boost
311,Normal Fiber Jacket,1,No,Yes,Common,Equipment,"1,500 Zenie",Used,"Kid Trunks, Trunks",,10% Defense boost
312,Quality Fiber Jacket,2,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,"Kid Trunks, Trunks",,20% Defense boost
313,Sturdy Fiber Jacket,3,No,Yes,Rare,Equipment,"6,000 Zenie",Used,"Kid Trunks, Trunks",,30% Defense boost
314,Mystery Fiber Jacket,4,No,Yes,Special,Equipment,"10,000 Zenie",Used,"Kid Trunks, Trunks",,40% Defense boost
315,Kami's Outfit,1,No,Yes,Common,Equipment,"1,500 Zenie",Used,"Gohan, Supreme Kai",,10% Defense boost
316,King-Kai's Outfit,2,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,"Gohan, Supreme Kai",,20% Defense boost
317,Grand Kai's Outfit,3,No,Yes,Rare,Equipment,"6,000 Zenie",Used,"Gohan, Supreme Kai",,30% Defense boost
318,Supreme Kai's Outfit,4,No,Yes,Special,Equipment,"10,000 Zenie",Used,"Gohan, Supreme Kai",,40% Defense boost
319,Old Training Vest,1,No,Yes,Common,Equipment,"1,500 Zenie",Used,Hercule,,10% Defense boost
320,Wedding Vest,2,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,Hercule,,20% Defense boost
321,World Champion Vest,3,No,Yes,Rare,Equipment,"6,000 Zenie",Used,Hercule,,30% Defense boost
322,High-tech Vest,4,No,Yes,Special,Equipment,"10,000 Zenie",Used,Hercule,,40% Defense boost
323,Champion Belt,1,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,Hercule,,12% Defense boost
324,T-shirt,1,No,Yes,Common,Equipment,"1,500 Zenie",Used,Videl,,10% Defense boost
325,Black Belt Vest,2,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,Videl,,20% Defense boost
326,Sparring Outfit,3,No,Yes,Rare,Equipment,"6,000 Zenie",Used,Videl,,30% Defense boost
327,Great Saiyaman's Wardrobe,4,No,Yes,Special,Equipment,"10,000 Zenie",Used,Videl,,40% Defense boost
328,Old Style Armor,1,No,Yes,Common,Equipment,"1,500 Zenie",Used,"Vegeta, Raditz, Nappa, Captain Ginyu, Recoome, Frieza, Cooler",,10% Defense boost
329,Rit Armor,2,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,"Vegeta, Raditz, Nappa, Captain Ginyu, Recoome, Frieza, Cooler",,20% Defense boost
330,New Style Armor,3,No,Yes,Rare,Equipment,"6,000 Zenie",Used,"Vegeta, Raditz, Nappa, Captain Ginyu, Recoome, Frieza, Cooler",,30% Defense boost
331,Bulma's Armor,4,No,Yes,Special,Equipment,"10,000 Zenie",Used,"Vegeta, Raditz, Nappa, Captain Ginyu, Recoome, Frieza, Cooler",,40% Defense boost
332,Special Coating,1,No,Yes,Common,Equipment,"1,500 Zenie",Used,"Android #16, Android #17, Android #18, Dr. Gero",,10% Defense boost
333,Improved Special Coating,2,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,"Android #16, Android #17, Android #18, Dr. Gero",,20% Defense boost
334,Nanomachine,3,No,Yes,Rare,Equipment,"6,000 Zenie",Used,"Android #16, Android #17, Android #18, Dr. Gero",,30% Defense boost
335,Improved Nanomachine,4,No,Yes,Special,Equipment,"10,000 Zenie",Used,"Android #16, Android #17, Android #18, Dr. Gero",,40% Defense boost
336,Life Extract for 10,1,No,Yes,Common,Equipment,"1,500 Zenie",Used,"Cell, Cell Jr.",,10% Defense boost
337,Life Extract for 100,2,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,"Cell, Cell Jr.",,20% Defense boost
338,Life Extract for 1000,3,No,Yes,Rare,Equipment,"6,000 Zenie",Used,"Cell, Cell Jr.",,30% Defense boost
339,Life Extract for 10000,4,No,Yes,Special,Equipment,"10,000 Zenie",Used,"Cell, Cell Jr.",,40% Defense boost
340,Demon Realm Guard,1,No,Yes,Common,Equipment,"1,500 Zenie",Used,"Dabura, Majin Buu, Super Buu, Kid Buu",,10% Defense boost
341,Mage Guard,2,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,"Dabura, Majin Buu, Super Buu, Kid Buu",,20% Defense boost
342,Babidi's Guard,3,No,Yes,Rare,Equipment,"6,000 Zenie",Used,"Dabura, Majin Buu, Super Buu, Kid Buu",,30% Defense boost
343,Bibidi's Guard,4,No,Yes,Special,Equipment,"10,000 Zenie",Used,"Dabura, Majin Buu, Super Buu, Kid Buu",,40% Defense boost
344,Normal Belt,1,No,Yes,Common,Equipment,"1,500 Zenie",Used,Uub,,10% Defense boost
345,Training Belt,2,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,Uub,,20% Defense boost
346,Warrior Belt,3,No,Yes,Rare,Equipment,"6,000 Zenie",Used,Uub,,30% Defense boost
347,Majin Belt,4,No,Yes,Special,Equipment,"10,000 Zenie",Used,Uub,,40% Defense boost
348,Lower-class Saiyan Guard,1,No,Yes,Common,Equipment,"1,500 Zenie",Used,Bardock,,10% Defense boost
349,Kanassan-made Guard,2,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,Bardock,,20% Defense boost
350,Battle Jacket (Prototype),3,No,Yes,Rare,Equipment,"6,000 Zenie",Used,Bardock,,30% Defense boost
351,Patched-up Battle Jacket,4,No,Yes,Special,Equipment,"10,000 Zenie",Used,Bardock,,40% Defense boost
352,Strongman's Body Wrap,1,No,Yes,Common,Equipment,"1,500 Zenie",Used,Broly,,10% Defense boost
353,King's Body Wrap,2,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,Broly,,20% Defense boost
354,God of Destruction Body Wrap,3,No,Yes,Rare,Equipment,"6,000 Zenie",Used,Broly,,30% Defense boost
355,Legendary Body Wrap,4,No,Yes,Special,Equipment,"10,000 Zenie",Used,Broly,,40% Defense boost
356,Shenron's Hide,1,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,Omega Shenron,,10% Defense boost
357,Porunga's Hide,2,No,Yes,Rare,Equipment,"6,000 Zenie",Used,Omega Shenron,,20% Defense boost
358,Shadow Dragons' Hide,3,No,Yes,Special,Equipment,"10,000 Zenie",Used,Omega Shenron,,40% Defense boost
359,2X Enriched Serum,1,No,Yes,Common,Equipment,"1,500 Zenie",Used,Saibamen,,10% Defense boost
360,16X Enriched Serum,2,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,Saibamen,,20% Defense boost
361,64X Enriched Serum,3,No,Yes,Rare,Equipment,"6,000 Zenie",Used,Saibamen,,30% Defense boost
362,128X Enriched Serum,4,No,Yes,Special,Equipment,"10,000 Zenie",Used,Saibamen,,40% Defense boost
363,Mixed Blood Power,1,No,Yes,Rare,Equipment,"6,000 Zenie",Used,"Kid Gohan, Teen Gohan, Gohan, Goten, Gt. Saiyaman, Kid Trunks, Trunks",,8% Attack and Defense boost
364,Moon Light,1,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,"Raditz, Nappa, Bardock",,20% Attack boost in 5% steps
365,Full Moon's Glow,1,No,Yes,Rare,Equipment,"6,000 Zenie",Used,Kid Goku,,40% Attack boost in 10% steps
366,Potential,2,No,Yes,Rare,Equipment,"6,000 Zenie",Used,Everyone can use,,24% Attack boost in 6% steps
367,Universal Power,3,No,Yes,Rare,Equipment,"6,000 Zenie",Used,Goku,,"24% Attack boost in 6% steps, 32% Defense boost in 8% steps"
368,Miracle Power,3,No,Yes,Rare,Equipment,"6,000 Zenie",Used,"Goten, Kid Trunks, Piccolo, Krillin, Tien, Yamcha, Gt. Saiyaman, Videl, Supreme
Kai",,"24% Attack boost in 6% steps, 32% Defense boost in 8% steps"
369,Ultimate Power,3,No,Yes,Rare,Equipment,"6,000 Zenie",Used,"Kid Gohan, Teen Gohan, Gohan, Vegeta, Trunks",,"24% Attack boost in 6% steps, 32% Defense boost in 8% steps"
370,King's Confidence,3,No,Yes,Rare,Equipment,"6,000 Zenie",Used,Hercule,,"24% Attack boost in 6% steps, 32% Defense boost in 8% steps"
371,Mode-switching Systems,3,No,Yes,Rare,Equipment,"6,000 Zenie",Used,"Android #16, Android #17, Android #18, Dr. Gero",,"24% Attack boost in 6% steps, 32% Defense boost in 8% steps"
372,Saiyans' Awakening,3,No,Yes,Rare,Equipment,"6,000 Zenie",Used,"Raditz, Nappa",,"24% Attack boost in 6% steps, 32% Defense boost in 8% steps"
373,Warrior Race's Awakening,3,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,Bardock,,"24% Attack boost in 6% steps, 32% Defense boost in 8% steps"
374,Nature of Evil,3,No,Yes,Rare,Equipment,"6,000 Zenie",Used,"Recoome, Captain Ginyu, Frieza, Cell, Dabura, Cooler",,"24% Attack boost in 6% steps, 32% Defense boost in 8% steps"
375,Hatred of Kakarot,3,No,Yes,Rare,Equipment,"6,000 Zenie",Used,Broly,,"24% Attack boost in 6% steps, 32% Defense boost in 8% steps"
376,Black Dragonball,3,No,Yes,Rare,Equipment,"6,000 Zenie",Used,Omega Shenron,,"24% Attack boost in 6% steps, 32% Defense boost in 8% steps"
377,Toxic Chocolate,3,No,Yes,Special,Equipment,"10,000 Zenie",Used,"Majin Buu, Super Buu, Kid Buu",,"24% Attack boost in 6% steps, 32% Defense boost in 8% steps"
378,Rage!,1,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,Everyone can use,,12% Attack boost
379,Rage!!,2,No,Yes,Rare,Equipment,"6,000 Zenie",Used,Everyone can use,,20% Attack boost
380,Rage!!!,3,No,Yes,Special,Equipment,"10,000 Zenie",Used,Everyone can use,,28% Attack boost
381,Spirit!,1,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,Everyone can use,,12% Defense boost
382,Spirit!!,2,No,Yes,Rare,Equipment,"6,000 Zenie",Used,Everyone can use,,20% Defense boost
383,Spirit!!!,3,No,Yes,Special,Equipment,"10,000 Zenie",Used,Everyone can use,,28% Defense boost
384,Serious!,1,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,Everyone can use,,10% Attack boost
385,Serious!!,2,No,Yes,Rare,Equipment,"6,000 Zenie",Used,Everyone can use,,20% Attack boost
386,Serious!!!,3,No,Yes,Special,Equipment,"10,000 Zenie",Used,Everyone can use,,30% Attack boost
387,Power Near the Limit,2,No,Yes,Rare,Equipment,"6,000 Zenie",Used,"Kid Gohan, Teen Gohan, Gohan, Trunks, Piccolo, Gt. Saiyaman",,45% Attack boost
388,Desperate Resolution,2,No,Yes,Rare,Equipment,"6,000 Zenie",Used,"Vegeta, Krillin, Tien, Yamcha, Videl, Supreme Kai",,45% Attack boost
389,Desperate Power,2,No,Yes,Rare,Equipment,"6,000 Zenie",Used,"Goku, Goten, Kid Trunks",,45% Attack boost
390,Pride of the Strongest,2,No,Yes,Rare,Equipment,"6,000 Zenie",Used,"Frieza, Cooler, Cell, Dabura, Broly",,45% Attack boost
391,Last Ounce of Strength,2,No,Yes,Rare,Equipment,"6,000 Zenie",Used,"Raditz, Nappa, Recoome, Captain Ginyu, Dr. Gero, Android #16, Android #17,
Android #18",,45% Attack boost
392,Pressure on the Champ,2,No,Yes,Rare,Equipment,"6,000 Zenie",Used,Hercule,,45% Attack boost
393,Dabura Cookie,2,No,Yes,Rare,Equipment,"6,000 Zenie",Used,"Majin Buu, Super Buu, Kid Buu",,45% Attack boost
394,Piccolo's Regeneration,1,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,"Piccolo, Cell, Cell Jr.",,
395,Majin Buu's Regeneration,1,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,"Majin Buu, Super Buu, Kid Buu, Uub",,
396,Dende's Recovery,1,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,"Goku, Goten, Vegeta, Piccolo, Kid Gohan, Teen Gohan, Gohan, Kid Trunks, Trunks,
Krillin, Tien, Yamcha, Videl, Gt. Saiyaman, Hercule",,
397,Kibito's Revival Power,1,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,"Gohan, Supreme Kai",,
398,Medical Machine,1,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,"Raditz, Nappa, Recoome, Captain Ginyu, Frieza, Cooler, Saibamen",,
399,Automatic Restoration,1,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,"Android #16, Android #17, Android #18, Dr. Gero",,
400,Saiyan Spirit,1,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,"Goku, Vegeta, Raditz, Nappa",,"25% Attack boost, 30% defense boost"
401,Going All-out!!,1,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,Kid Goku,,"25% Attack boost, 30% defense boost"
402,Ginyu Force Badge,1,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,"Recoome, Captain Ginyu",,"25% Attack boost, 30% defense boost"
403,Hercule's False Courage,1,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,Hercule,,"25% Attack boost, 30% defense boost"
404,Rush!!!,3,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,Everyone can use,,
405,Frieza's Space Ship,4,No,Yes,Special,Equipment,"10,000 Zenie",Used,Frieza,,
406,Cooler's Space Ship,4,No,Yes,Special,Equipment,"10,000 Zenie",Used,Cooler,,
407,Babidi's Mind Control,3,No,No,Special,Equipment,"10,000 Zenie",Used,Vegeta,,
408,Overtension,2,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,Everyone can use,,30% Attack boost
409,Gero's Deflection R&D,1,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,Everyone can use,,
410,Gero's Deflect-Back R&D,2,No,Yes,Rare,Equipment,"6,000 Zenie",Used,Everyone can use,,
411,Gero's Energy R&D,3,No,Yes,Rare,Equipment,"6,000 Zenie",Used,Everyone can use,,
412,Viral Hearth Disease,2,No,Yes,Rare,Equipment,"6,000 Zenie",Used,Everyone can use,,
413,Babidi's Scope,1,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,"Dabura, Majin Buu, Super Buu, Kid Buu",,
414,Ki Control,2,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,"Goten, Kid Trunks, Tien, Yamcha, Gt. Saiyaman, Videl, Supreme Kai, Cell",,
415,Warrior's Career,2,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,"Raditz, Nappa, Captain Ginyu, Recoome, Bardock",,
416,Power Save System,2,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,"Android #16, Android #17, Android #18, Dr. Gero",,
417,Breathing Room of the Strongest,2,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,"Frieza, Cooler, Cell",,
418,Paragas' Admonsihment,2,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,Broly,,
419,Evil Grin,2,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,Omega Shenron,,
420,Meditation,3,No,Yes,Uncommon,Equipment,"3,000 Zenie",Used,"Goku, Teen Gohan, Gohan, Vegeta, Trunks, Piccolo, Krillin",,
421,Yakon,1,No,Yes,Rare,Equipment,"6,000 Zenie",Used,Everyone can use,,
422,Angel's Halo,2,No,Yes,Rare,Equipment,"6,000 Zenie",Used,"Goku, Vegeta",,
423,Human Candy,2,No,Yes,Special,Equipment,"10,000 Zenie",Used,"Majin Buu, Super Buu, Kid Buu",,
424,Marron's Wish,2,No,Yes,Special,Equipment,"10,000 Zenie",Used,"Krillin, Android #18",,
425,Chiaotsu's Wish,2,No,Yes,Special,Equipment,"10,000 Zenie",Used,Tien,,
426,Puar's Wish,2,No,Yes,Special,Equipment,"10,000 Zenie",Used,Yamcha,,
427,Chi-Chi's Wish,2,No,Yes,Special,Equipment,"10,000 Zenie",Used,"Kid Gohan, Teen Gohan, Gohan, Goten, Gt. Saiyaman",,
428,Dende's Wish,2,No,Yes,Special,Equipment,"10,000 Zenie",Used,Piccolo,,
429,Bulma's Wish,2,No,Yes,Special,Equipment,"10,000 Zenie",Used,"Vegeta, Kid Trunks, Trunks",,
430,World's Expetations,2,No,Yes,Special,Equipment,"10,000 Zenie",Used,"Hercule, Videl",,
431,Loyalty to Frieza,2,No,Yes,Special,Equipment,"10,000 Zenie",Used,"Raditz, Nappa, Recoome, Captain Ginyu",,
432,Universal Ambition,2,No,Yes,Special,Equipment,"10,000 Zenie",Used,Frieza,,
433,Pride of the Clan,2,No,Yes,Special,Equipment,"10,000 Zenie",Used,Cooler,,
434,Androids' Goal,2,No,Yes,Special,Equipment,"10,000 Zenie",Used,"Android #16, Android #17, Dr. Gero",,
435,Essence of the Mighty,2,No,Yes,Special,Equipment,"10,000 Zenie",Used,Cell,,
436,Loyalty to Babidi,2,No,Yes,Special,Equipment,"10,000 Zenie",Used,Dabura,,
437,Kibito's Wish,2,No,Yes,Special,Equipment,"10,000 Zenie",Used,Supreme Kai,,
438,King-Kai's Wish,2,No,Yes,Special,Equipment,"10,000 Zenie",Used,Goku,,
439,Thirst for Earth's Destruction,2,No,Yes,Special,Equipment,"10,000 Zenie",Used,Omega Shenron,,
440,Thoughts of Friends,2,No,Yes,Special,Equipment,"10,000 Zenie",Used,Bardock,,
441,God of Destruction's Arrogance,2,No,Yes,Special,Equipment,"10,000 Zenie",Used,Broly,,
442,Grandpa Gohan's Teachings,2,No,Yes,Special,Equipment,"10,000 Zenie",Used,Kid Goku,,
443,Goku's Teachings,2,No,Yes,Special,Equipment,"10,000 Zenie",Used,Uub,,
444,Turtle Shell,1,No,Yes,Special,Equipment,"10,000 Zenie",Used,Everyone can use,,
445,Concentration,1,No,Yes,Special,Equipment,"10,000 Zenie",Used,Everyone can use,,
446,Sparking!,1,No,No,Special,Equipment,"10,000 Zenie",Used,Everyone can use,,
447,Sparking!!,2,No,No,Special,Equipment,"30,000 Zenie",Used,Everyone can use,,
448,Sparking!!!,3,No,No,Special,Equipment,"50,000 Zenie",Used,Everyone can use,,
449,Sparking!!!!,4,No,No,Special,Equipment,"70,000 Zenie",Used,Everyone can use,,
450,Sparking!!!!!,5,No,No,Special,Equipment,"90,000 Zenie",Used,Everyone can use,,
451,Sparking!!!!!!,6,No,No,Special,Equipment,"120,000 Zenie",Used,Everyone can use,,
452,Sparking!!!!!!!,7,No,No,Special,Equipment,"150,000 Zenie",Used,Everyone can use,,
453,WE GOTTA POWER!,1,No,No,Special,Equipment,"10,000 Zenie",Used,Everyone can use,,
454,WE GOTTA POWER!!,2,No,No,Special,Equipment,"30,000 Zenie",Used,Everyone can use,,
455,WE GOTTA POWER!!!,3,No,No,Special,Equipment,"50,000 Zenie",Used,Everyone can use,,
456,WE GOTTA POWER!!!!,4,No,No,Special,Equipment,"150,000 Zenie",Used,Everyone can use,,
457,Goku,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
458,Kid Goku,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
459,Kid Gohan,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
460,Teen Gohan,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
461,Gohan,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
462,Gt. Saiyaman,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
463,Goten,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
464,Vegeta,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
465,Trunks,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
466,Kid Trunks,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
467,Krillin,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
468,Piccolo,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
469,Tien,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
470,Yamcha,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
471,Hercule,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
472,Videl,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
473,Supreme Kai,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
474,Uub,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
475,Raditz,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
476,Nappa,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
477,Captain Ginyu,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
478,Recoome,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
479,Frieza,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
480,Android #16,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
481,Android #17,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
482,Android #18,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
483,Dr. Gero,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
484,Cell,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
485,Majin Buu,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
486,Super Buu,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
487,Kid Buu,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
488,Dabura,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
489,Cooler,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
490,Bardock,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
491,Broly,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
492,Omega Shenron,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
493,Saibamen,0,No,No,Special,System,"100,000 Zenie",Used,Player,,
494,Cell Jr.,0,No,No,Special,System,"120,000 Zenie",Used,Player,,
495,Bulma,0,No,No,Special,System,"10,000 Zenie",Unused,Player,,With normal means isn't possible to obtain into the Skill List
496,Training 1 'Scouter',0,No,No,Rare,System,"6,000 Zenie",Used,Player,,
497,Training 2 'Fighting Basics',0,No,No,Rare,System,"6,000 Zenie",Used,Player,,
498,Training 3 'Ki Control',0,No,No,Rare,System,"6,000 Zenie",Used,Player,,
499,Training 4 'Death-moves',0,No,No,Rare,System,"6,000 Zenie",Used,Player,,
500,Training 5 'Ki Control 2',0,No,No,Rare,System,"6,000 Zenie",Used,Player,,
501,Training 6 'Dodging',0,No,No,Rare,System,"6,000 Zenie",Used,Player,,
502,Training 7 'Teleporting',0,No,No,Rare,System,"6,000 Zenie",Used,Player,,
503,Training 8 'Hi-level Fighting',0,No,No,Rare,System,"6,000 Zenie",Used,Player,,
504,Training 9 'Ultimate Moves',0,No,No,Rare,System,"6,000 Zenie",Used,Player,,
505,Training 10 'Dragon Rush',0,No,No,Rare,System,"6,000 Zenie",Used,Player,,
506,Training 11 'Item Skills',0,No,No,Rare,System,"6,000 Zenie",Used,Player,,
507,Training 12 'Final Secrets',0,No,No,Rare,System,"6,000 Zenie",Used,Player,,
508,Green Membership Card,0,No,No,Rare,System,"6,000 Zenie",Used,Player,,
509,Silver Membership Card,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
510,Gold Membership Card,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
511,Black Membership Card,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
512,World Tournament-Novice,0,No,No,Rare,System,"6,000 Zenie",Used,Player,,
513,World Tournament-Adept,0,No,No,Rare,System,"6,000 Zenie",Used,Player,,
514,World Tournament-Advanced,0,No,No,Rare,System,"6,000 Zenie",Used,Player,,
515,World Tournament-Cell Games,0,No,No,Special,System,"50,000 Zenie",Used,Player,,
516,Dragon Arena Ticket,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
517,World Tournament Stage,0,No,No,Rare,System,"6,000 Zenie",Used,Everyone can use,,
518,Hyperbolic Time Chamber,0,No,No,Rare,System,"6,000 Zenie",Used,Everyone can use,,
519,Archipelago,0,No,No,Rare,System,"6,000 Zenie",Used,Everyone can use,,
520,Urban Area,0,No,No,Rare,System,"6,000 Zenie",Used,Everyone can use,,
521,Mountains,0,No,No,Rare,System,"6,000 Zenie",Used,Everyone can use,,"It will appear as ""Supreme Kai's World"" in the Skills Shop"
522,Plains,0,No,No,Rare,System,"6,000 Zenie",Used,Everyone can use,,
523,Grandpa Gohan's House,0,No,No,Rare,System,"6,000 Zenie",Used,Everyone can use,,
524,Planet Namek,0,No,No,Rare,System,"6,000 Zenie",Used,Everyone can use,,
525,Cell Ring,0,No,No,Rare,System,"6,000 Zenie",Used,Everyone can use,,
526,Supreme Kai's World,0,No,No,Rare,System,"6,000 Zenie",Used,Everyone can use,,"It will appear as ""Grandpa Gohan's House"" in the Skills Shop"
527,Inside Buu,0,No,No,Rare,System,"6,000 Zenie",Used,Everyone can use,,
528,Red Ribbon Base,0,No,No,Special,System,"90,000 Zenie",Used,Everyone can use,,
529,Goku's Wish,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
530,The Path to Power,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
531,Endless Path to Power,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
532,Strongest of Universe Trophy,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
533,Memories of Goku,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
534,Memories of Piccolo,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
535,Memories of Kid Gohan,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
536,Memories of Teen Gohan,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
537,Memories of Gohan,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
538,Memories of Vegeta,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
539,Memories of Goten,0,No,No,Special,System,"100,000 Zenie",Used,Player,,
540,Memories of Trunks,0,No,No,Special,System,"100,000 Zenie",Used,Player,,
541,Memories of Kid Trunks,0,No,No,Special,System,"100,000 Zenie",Used,Player,,
542,Memories of Krillin,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
543,Memories of Tien,0,No,No,Special,System,"100,000 Zenie",Used,Player,,
544,Memories of Yamcha,0,No,No,Special,System,"100,000 Zenie",Used,Player,,
545,Memories of Hercule,0,No,No,Special,System,"100,000 Zenie",Used,Player,,
546,Memories of Videl,0,No,No,Special,System,"100,000 Zenie",Used,Player,,
547,Memories of Gt. Saiyaman,0,No,No,Special,System,"100,000 Zenie",Used,Player,,
548,Memories of Android #16,0,No,No,Special,System,"100,000 Zenie",Used,Player,,
549,Memories of Android #17,0,No,No,Special,System,"100,000 Zenie",Used,Player,,
550,Memories of Android #18,0,No,No,Special,System,"100,000 Zenie",Used,Player,,
551,Memories of Supreme Kai,0,No,No,Special,System,"100,000 Zenie",Used,Player,,
552,Memories of Kid Goku,0,No,No,Special,System,"100,000 Zenie",Used,Player,,
553,Memories of Bardock,0,No,No,Special,System,"100,000 Zenie",Used,Player,,
554,Memories of Uub,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
555,Memories of Raditz,0,No,No,Special,System,"100,000 Zenie",Used,Player,,
556,Memories of Nappa,0,No,No,Special,System,"100,000 Zenie",Used,Player,,
557,Memories of Recoome,0,No,No,Special,System,"100,000 Zenie",Used,Player,,
558,Memories of Captain Ginyu,0,No,No,Special,System,"100,000 Zenie",Used,Player,,
559,Memories of Frieza,0,No,No,Special,System,"100,000 Zenie",Used,Player,,
560,Memories of Dr. Gero,0,No,No,Special,System,"100,000 Zenie",Used,Player,,
561,Memories of Cell,0,No,No,Special,System,"100,000 Zenie",Used,Player,,
562,Memories of Dabura,0,No,No,Special,System,"100,000 Zenie",Used,Player,,
563,Memories of Majin Buu,0,No,No,Special,System,"100,000 Zenie",Used,Player,,
564,Memories of Super Buu,0,No,No,Special,System,"100,000 Zenie",Used,Player,,
565,Memories of Super Buu,0,No,No,Special,System,"100,000 Zenie",Used,Player,,
566,Memories of Cooler,0,No,No,Special,System,"100,000 Zenie",Used,Player,,
567,Memories of Broly,0,No,No,Special,System,"10,000 Zenie",Used,Player,,
568,Memories of Omega Shenron,0,No,No,Special,System,"100,000 Zenie",Used,Player,,
569,Memories of Saibamen,0,No,No,Special,System,"100,000 Zenie",Used,Player,,
570,Memories of Cell Jr.,0,No,No,Special,System,"100,000 Zenie",Used,Player,,
571,Memories of Heroes,0,No,No,Special,System,"100,000 Zenie",Used,Player,,
572,Memories of Supporters,0,No,No,Special,System,"100,000 Zenie",Used,Player,,
573,Baba's Crystal Ball (000),0,No,No,Uncommon,System,"120,000 Zenie",Used,Player,,
574,Baba's Crystal Ball (001),0,No,No,Uncommon,System,"120,000 Zenie",Used,Player,,
575,Baba's Crystal Ball (002),0,No,No,Rare,System,"200,000 Zenie",Unused,Player,,Appear normally in Dragon Ball Z 3 (Japan version). With normal means isn't possible to obtain into the Skill List (West versions)
576,Baba's Crystal Ball (003),0,No,No,Rare,System,"200,000 Zenie",Unused,Player,,Appear normally in Dragon Ball Z 3 (Japan version). With normal means isn't possible to obtain into the Skill List (West versions)
577,Baba's Crystal Ball (004),0,No,No,Special,System,"400,000 Zenie",Unused,Player,,Appear normally in Dragon Ball Z 3 (Japan version). With normal means isn't possible to obtain into the Skill List (West versions)
578,Gamble,0,No,No,Common,Item,"5,000 Zenie",Used,Player,,"Technically is unused. With normal means isn't possible to obtain into the Skill List, and will appear in Item Capsules List"
579,Blank,0,No,No,Common,Item,"1,500 Zenie",Unused,Player,,With normal means isn't possible to obtain into the Skill List`;
