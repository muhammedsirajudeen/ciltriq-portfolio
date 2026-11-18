export interface MemeCharacter {
  id: string;
  name: string;
  nameMalayalam: string;
  actor: string;
  movie: string;
  roleTitle: string;
  avatarEmoji: string;
  avatarBg: string;
  accentColor: string;
  tagline: string;
  roastPower: number; // 0 - 100
  chaliMeter: number; // 0 - 100
  patience: number;   // 0 - 100
  signatureItem: string;
  sampleAudioText: string;
  quickPrompts: string[];
  responses: {
    keywords: string[];
    reply: string;
    punchlineMalayalam: string;
  }[];
  defaultReply: string;
}

export const MEME_CHARACTERS: MemeCharacter[] = [
  {
    id: "damu",
    name: "Dashamoolam Damu",
    nameMalayalam: "ദശമൂലം ദാമു",
    actor: "Salim Kumar",
    movie: "Chattambinadu (2009)",
    roleTitle: "National Meme Contractor & Don",
    avatarEmoji: "🔨",
    avatarBg: "from-amber-500/20 to-orange-600/30",
    accentColor: "#F59E0B",
    tagline: "Ellam sheriyakkitharam... Pakshe hammer enikku thanne venam!",
    roastPower: 96,
    chaliMeter: 99,
    patience: 12,
    signatureItem: "Stainless Steel Chuttika (Hammer)",
    sampleAudioText: "Ayyedaaa... Enikk vere paniyille?",
    quickPrompts: [
      "Damu, enikk oru panikk kettamo?",
      "Roast me, Damu!",
      "Hammer enthina kayyil vechekkane?",
      "Njan oru road contract eduthaalo?",
    ],
    responses: [
      {
        keywords: ["panikk", "job", "work", "joli", "contract"],
        reply: "Contract-o? Eda mwone, Damunte aduth contract chodhich varunno! Aadyam aa munnil kanda 5 lorry manal oru kooda kond maattu. Ennitt aalojikkam!",
        punchlineMalayalam: "അയ്യെടാ... ദാമുവിനോടോ നിന്റെ കളി?",
      },
      {
        keywords: ["roast", "kaliyaakku", "parayada"],
        reply: "Ninne roast cheyyan njan aara electric oven-o? Ninne kandappole enikk manasilayi, school-il bench theppaan poya kuttikalam aanennu!",
        punchlineMalayalam: "നിന്നെ റോസ്റ്റ് ചെയ്യാൻ എനിക്ക് വേറെ പണിയില്ലേ?",
      },
      {
        keywords: ["hammer", "chuttika", "aayudham"],
        reply: "Ithu verum chuttika alla mwone... Ithu Dashamoolam Empire-inte foundation stone ilakkunna aayudham aanu! Thottu nokkunno?",
        punchlineMalayalam: "ചുറ്റിക തൊട്ടാൽ കൈ പൊള്ളും മോനേ!",
      },
      {
        keywords: ["road", "bridge", "palam"],
        reply: "Road njan sheriyaki tharam, pakshe mazha peythal road koodi ozhuki pokum. Ath project specification-il undayirunnu ketto!",
        punchlineMalayalam: "എല്ലാം ശരിയാക്കിത്തരാം... മഴ പെയ്യരുത്!",
      },
    ],
    defaultReply: "Ayyedaa... Kooduthal chodhich ennodu kali kalikkaruth! Damu onnu kannuruttiaal theerunna prashname ninakkullu!",
  },
  {
    id: "gafoor",
    name: "Gafoor Ka Dosth",
    nameMalayalam: "ഗഫൂർ കാ ദോസ്ത്",
    actor: "Mamukkoya",
    movie: "Nadodikkattu (1987)",
    roleTitle: "Chief Trans-Continental Navigator",
    avatarEmoji: "🚤",
    avatarBg: "from-emerald-500/20 to-teal-600/30",
    accentColor: "#10B981",
    tagline: "Dubai alla mwone, California! Gafoorkaante dosthanaanu njaan!",
    roastPower: 92,
    chaliMeter: 95,
    patience: 35,
    signatureItem: "Urub (Smuggling Boat) & Ray-Ban Glass",
    sampleAudioText: "Nee Gafoorkaane ariyumo? Gafoorkaante dosthanaanu njaan!",
    quickPrompts: [
      "Gafoorka, California-lekk oru ticket tharo?",
      "Dubai ethrayum pettenn ethan vazhiyundo?",
      "Nee aara mon?",
      "Kadappurathu ninnu oru chaaya kudikkam?",
    ],
    responses: [
      {
        keywords: ["california", "ticket", "visa", "gulf"],
        reply: "California alla, athilum valiya sthalathekku njan kondupokam! Pakshe dhow ippo Beypore-il anchoring aanu. 500 roopa advance thaa!",
        punchlineMalayalam: "ദുബായ് അല്ല മോനേ, കാലിഫോർണിയ!",
      },
      {
        keywords: ["dubai", "vazhi", "oru", "route"],
        reply: "Dubai-kku ippo direct route undu. Raathri 2 manikku light off aakki vellathilekku chaadiyan madhi... Karayil ethumbo Burj Khalifa-kku pakaram light house kaanam!",
        punchlineMalayalam: "കര കണ്ടാൽ ചാടിക്കോണം... തിരിച്ചൊന്നും ചോദിക്കരുത്!",
      },
      {
        keywords: ["aara", "who", "parichayam"],
        reply: "Njan aaraano? Kozhikode muthal Dubai vare enikk Gafoorkka enna oru dosth undu. Avante per paranjaal police polum saluttadikkum!",
        punchlineMalayalam: "ഗഫൂർക്കാന്റെ ദോസ്താണ് ഞാൻ!",
      },
    ],
    defaultReply: "Pinne, namukku dhow-il oru VIP seat blank aayittundu. Chekka, nee pettennu luggage eduth ready aayikko!",
  },
  {
    id: "ramanan",
    name: "Ramanan",
    nameMalayalam: "രമണൻ",
    actor: "Harisree Ashokan",
    movie: "Punjabi House (1998)",
    roleTitle: "Head of Dockyard Philosophy & Crisis Management",
    avatarEmoji: "👳",
    avatarBg: "from-yellow-500/20 to-amber-600/30",
    accentColor: "#EAB308",
    tagline: "Muthalali... Enthokke aayirunnu! Malaramban... chaattumazha...",
    roastPower: 85,
    chaliMeter: 98,
    patience: 5,
    signatureItem: "Thorthu (Towel) & Punjabi Thali Plate",
    sampleAudioText: "Muthalaliii... Mudiyan thudangiyath ithonnum allayirunnu!",
    quickPrompts: [
      "Ramanan, Muthalali ippo evide?",
      "Enikk oru life advice tharumo?",
      "Malaramban pattu onnu padu!",
      "Salary kittiyo Ramanan?",
    ],
    responses: [
      {
        keywords: ["muthalali", "boss", "owner"],
        reply: "Muthalali ippo Punjabi-kkalude idayil ninnu oru vazhi aayi irikkukayanu. Ente oru thorthu polum avide baakiyilla!",
        punchlineMalayalam: "മുതലാളീീീ... എന്നെ രക്ഷിക്കൂ!",
      },
      {
        keywords: ["advice", "life", "career", "future"],
        reply: "Life advice-o? Eda mwone, vellathil chaadumbo oru thuni eduth alakkan polum ariyatha aalukale kootukaar aakaruth. Ath pinne chathu jeevikkendi varum!",
        punchlineMalayalam: "എന്റെ ഭാഗത്തും തെറ്റുണ്ട്... സമ്മതിച്ചു!",
      },
      {
        keywords: ["malaramban", "pattu", "song"],
        reply: "Malaaraamban thaananinjooo... Chaattumazha kodi thudangiyooo! Ath kettittu Gangadharan muthalali enikku oru adi tharumo ennanu ente pedi!",
        punchlineMalayalam: "എന്തൊക്കെയായിരുന്നു... മലരമ്പൻ, ചാറ്റുമഴ!",
      },
      {
        keywords: ["salary", "paisa", "coolie", "kaash"],
        reply: "Salary-o? Ath eth cinema-yil ulla vaakk aanu? Ivide 3 neram Punjabi rotti thinnu vayarirangi thorthum thoongi nadakkunnu!",
        punchlineMalayalam: "ശമ്പളം ചോദിച്ചാൽ മുതലാളി പാത്രം കഴുകിക്കും!",
      },
    ],
    defaultReply: "Muthalali vilikkunnu... Njan poyi oru 40 pathram koodi thekkatte! Ente bhagathum thettund!",
  },
  {
    id: "manavalan",
    name: "Manavalan",
    nameMalayalam: "മണവാളൻ",
    actor: "Salim Kumar",
    movie: "Pulival Kalyanam (2003)",
    roleTitle: "Founder & Chairman, Manavalan & Sons",
    avatarEmoji: "🕶️",
    avatarBg: "from-rose-500/20 to-red-600/30",
    accentColor: "#F43F5E",
    tagline: "Manavalan & Sons, Dubai, Kochi, Alappuzha... Business-il athinte standard venam!",
    roastPower: 94,
    chaliMeter: 97,
    patience: 20,
    signatureItem: "Burgundy Suit & Dollar Pendant",
    sampleAudioText: "Engane undu ente oru look? Manavalan and Sons!",
    quickPrompts: [
      "Manavala, paisa undakkan entha vazhi?",
      "Suit ittathu choodavunnille?",
      "Horse carriage business eppol thudangum?",
      "Dharmendra-kku oru vandi kodukko?",
    ],
    responses: [
      {
        keywords: ["paisa", "money", "rich", "business"],
        reply: "Paisa undakkan Manavalan formula: Aadyam oru heavy suit iduka. Ennitt bank manager-odu 10 kodi chodhikkuka. Thannillenkil oru tea kudichittu irangi poruka!",
        punchlineMalayalam: "ബിസിനസ്സ് എന്ന് പറഞ്ഞാൽ ഇതാണ് സ്റ്റൈൽ!",
      },
      {
        keywords: ["suit", "choodu", "look", "style"],
        reply: "Choodu? Inganathe 3-piece suit Manavalan-e pole ulla high-profile industrialists maathrame dharikkarullu. Sweating is just liquid success mwone!",
        punchlineMalayalam: "എങ്ങനെയുണ്ട് എന്റെ ഒരു ലുക്ക്?",
      },
      {
        keywords: ["horse", "kuthira", "carriage"],
        reply: "Kuthira vandi ippo premium vintage luxury cab service aayi pivot cheythu. Uber-um Ola-yum Manavalan-te back seat-il aanu!",
        punchlineMalayalam: "മണവാളൻ ആൻഡ് സൺസ്... ലോകോത്തര സംരംഭം!",
      },
    ],
    defaultReply: "Manavalan & Sons-il vacancy illenkilum ninakk oru board pidikkaan njan chance tharam. Profile send chey!",
  },
  {
    id: "pavanayi",
    name: "Pavanayi",
    nameMalayalam: "പവനായി",
    actor: "Captain Raju",
    movie: "Nadodikkattu (1987)",
    roleTitle: "International Hitman & Malfunctioning Gadget King",
    avatarEmoji: "💼",
    avatarBg: "from-purple-500/20 to-indigo-600/30",
    accentColor: "#A855F7",
    tagline: "Pavanayi shavamayi! But still the most stylish assassin in history.",
    roastPower: 88,
    chaliMeter: 91,
    patience: 15,
    signatureItem: "Secret Agent Briefcase with Bomb & Malappuram Knife",
    sampleAudioText: "Pavanayi... The real hitman!",
    quickPrompts: [
      "Suitcase-il entha ullath Pavanayi?",
      "Nee oru hitman aano?",
      "Ananthan Nambiar enth paranju?",
      "Switch knife work cheyyunnundo?",
    ],
    responses: [
      {
        keywords: ["suitcase", "briefcase", "gadget", "bomb"],
        reply: "Suitcase-il Malappuram kathi, bomb, switch knife, bullet-proof waistcoat... ellam undu. Switch amarthiyal pakshe FM radio aanu padunne!",
        punchlineMalayalam: "സ്വിച്ച് ഇട്ടാൽ റേഡിയോ പാടും... അതാണ് ടെക്നോളജി!",
      },
      {
        keywords: ["hitman", "target", "killer"],
        reply: "International assassin aanu njan. London, Tokyo, New York... pinne ippo Calicut beach. Njan target-ne kollan nokkumbo aalkkar chirich chathal njan enthu cheyyum?",
        punchlineMalayalam: "പവനായി ശവമായി... അല്ലാതെന്ത് പറയാൻ!",
      },
      {
        keywords: ["ananthan", "nambiar", "boss"],
        reply: "Ananthan Nambiar enikku advance thannu, pakshe njan bridge-il ninnu thazhekku veenu. Ath target planning-inte part aayirunnu!",
        punchlineMalayalam: "അനന്തൻ നമ്പ്യാർക്ക് എന്റെ സല്യൂട്ട്!",
      },
    ],
    defaultReply: "Don't move! Ente pocket-il switch knife undu. Ath thurakkan screwdriver eduthondu varatte!",
  },
];

export interface QuizQuestion {
  id: number;
  dialogueLead: string;
  movie: string;
  character: string;
  options: string[];
  correctIndex: number;
  punchExplanation: string;
}

export const CHALI_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    dialogueLead: "Pavanayi is officially announced by Ananthan Nambiar as: ___",
    movie: "Nadodikkattu",
    character: "Ananthan Nambiar (Thilakan)",
    options: ["Dubai-il poyi", "Shavamayi!", "Police aayi", "MLA aayi"],
    correctIndex: 1,
    punchExplanation: "Iconic line: 'പവനായി ശവമായി!' - Captain Raju's hitman legacy in one single word.",
  },
  {
    id: 2,
    dialogueLead: "Gafoorka's secret launch promised to land in California, but actually dropped them in: ___",
    movie: "Nadodikkattu",
    character: "Gafoor Ka Dosth",
    options: ["California Beach", "Kochi Shipyard", "Kozhikode Light House / Beypore", "Singapore"],
    correctIndex: 2,
    punchExplanation: "'Dubai alla mwone California!' - Dasan & Vijayan landed right back at Kozhikode beach!",
  },
  {
    id: 3,
    dialogueLead: "Dashamoolam Damu's ultimate demand before doing any contractor operation: ___",
    movie: "Chattambinadu",
    character: "Dashamoolam Damu",
    options: ["50% Advance", "Stainless Steel Hammer enikku thanne venam!", "Biriyani & Lime", "Bullet motorcycle"],
    correctIndex: 1,
    punchExplanation: "The hammer is Damu's crown jewel. Lose the hammer, lose the kingdom!",
  },
  {
    id: 4,
    dialogueLead: "Ramanan's epic breakdown quote when asked about his dreams: ___",
    movie: "Punjabi House",
    character: "Ramanan",
    options: [
      "I am an engineer!",
      "Enthokke aayirunnu... Malaramban... chaattumazha...",
      "Dubai Sheikh aakanam",
      "Kinnaram kinnaram!",
    ],
    correctIndex: 1,
    punchExplanation: "Harisree Ashokan delivered the most painfully hilarious monologue in Malayalam cinema history.",
  },
  {
    id: 5,
    dialogueLead: "Sreenivasan's golden rule for international politics in Sandesham: ___",
    movie: "Sandesham",
    character: "KRP Prabhakaran",
    options: [
      "Polandine patti oraksharam parayaruth!",
      "America is great",
      "Russia nammude friend aanu",
      "Cuba mukhyam bigil-e",
    ],
    correctIndex: 0,
    punchExplanation: "'പോളണ്ടിനെ പറ്റി ഒരക്ഷരം മിണ്ടരുത്!' - Kerala's supreme debate-ending card since 1991.",
  },
];

export interface SoundboardClip {
  id: string;
  title: string;
  character: string;
  movie: string;
  punchDialogue: string;
  audioSpeech: string;
  tag: string;
}

export const SOUNDBOARD_CLIPS: SoundboardClip[] = [
  {
    id: "damu-ayyeda",
    title: "Ayyedaaa...",
    character: "Dashamoolam Damu",
    movie: "Chattambinadu",
    punchDialogue: "അയ്യെടാ... എനിക്ക് വേറെ പണിയില്ലേ?",
    audioSpeech: "Ayyedaaa... Enikk vere paniyille mwone?",
    tag: "Defensive Masterclass",
  },
  {
    id: "gafoor-dosth",
    title: "Gafoorkaante Dosth",
    character: "Gafoor Ka Dosth",
    movie: "Nadodikkattu",
    punchDialogue: "നീ ഗഫൂർക്കാനെ അറിയുമോ? ഗഫൂർക്കാന്റെ ദോസ്താണ് ഞാൻ!",
    audioSpeech: "Nee Gafoorkaane ariyumo? Gafoorkaante dosthanaanu njaan!",
    tag: "Instant VIP Pass",
  },
  {
    id: "pavanayi-shavamayi",
    title: "Pavanayi Shavamayi",
    character: "Ananthan Nambiar",
    movie: "Nadodikkattu",
    punchDialogue: "പവനായി ശവമായി!",
    audioSpeech: "Pavanayi... Shavamayi!",
    tag: "Mission Failed",
  },
  {
    id: "ramanan-muthalali",
    title: "Muthalaliii!",
    character: "Ramanan",
    movie: "Punjabi House",
    punchDialogue: "മുതലാളീ... എന്നെ രക്ഷിക്കൂ!",
    audioSpeech: "Muthalaliii... Ente bhagathum thettundu!",
    tag: "Cry for Help",
  },
  {
    id: "manavalan-look",
    title: "Ente Oru Look?",
    character: "Manavalan",
    movie: "Pulival Kalyanam",
    punchDialogue: "എങ്ങനെയുണ്ട് എന്റെ ഒരു ലുക്ക്? മണവാളൻ ആൻഡ് സൺസ്!",
    audioSpeech: "Engane undu ente oru look? Manavalan and Sons!",
    tag: "Peak Swagger",
  },
  {
    id: "poland-rule",
    title: "Polandine Patti...",
    character: "Prabhakaran",
    movie: "Sandesham",
    punchDialogue: "പോളണ്ടിനെ പറ്റി ഒരക്ഷരം മിണ്ടരുത്!",
    audioSpeech: "Polandine patti oraksharam parayaruth!",
    tag: "Debate Winner",
  },
  {
    id: "nischal-kinnaram",
    title: "Kinnaram Kinnaram!",
    character: "Nischal",
    movie: "Kilukkam",
    punchDialogue: "കിന്നാരം... കിന്നാരം!",
    audioSpeech: "Kinnaram... Kinnaram!",
    tag: "Pure Chaos",
  },
  {
    id: "ramdas-sadhanam",
    title: "Sadhanam Kayyil Undo?",
    character: "CID Dasan & Vijayan",
    movie: "Pattana Pravesham",
    punchDialogue: "സാധനം കയ്യിലുണ്ടോ? സാധനം കയ്യിലുണ്ട്!",
    audioSpeech: "Sadhanam kayyil undo? Sadhanam kayyil undu!",
    tag: "Secret Code",
  },
];
