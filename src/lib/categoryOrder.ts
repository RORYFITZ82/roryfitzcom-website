import type { CATEGORIES } from "./content";

// Manual display order for videos within each category tab, as Vimeo video
// IDs (titles in comments). IDs are used rather than titles so renaming a
// video on Vimeo never breaks the order, and duplicate uploads that share a
// title (AIG, Indeed, Tullamore D.E.W.) can be placed individually.
// Videos in a category but missing from its list fall to the end, A to Z.
// Categories with no entry sort A to Z.
export const CATEGORY_ORDER: Partial<Record<(typeof CATEGORIES)[number], number[]>> = {
  Featured: [
    1087734282, // Aer Lingus - Our Sustainability Journey
    1212696047, // Heineken - Unwasted Beer
    257471974, // Guinness - Made Of More
    343402448, // Life Style Sports - Nike - Women Studio - Destination Leggings
    1072475320, // Clever Cards
    1209818858, // Adherent
    1111376214, // elfc - Going Further Together
    1188171397, // Cubic 3 - Ubiquitous Connectivity
    351362074, // Dublin City Council
    969647934, // Charleen and Ellie Go all in...
    838324558, // Coerver Coaching App
    808716535, // Digital Playmaker
    1111378968, // Fintua - Rise above the rest
    1198014700, // Nurse On Call App
    1217261900, // Forty Foot Pictures
    1240729941, // Fran the Man
    1245759123, // Madrí Excepcional - Dublin: Ruben x Maser
    1245755744, // Madrí Excepcional - Ruben Sanchez creative process
  ],
  Animation: [
    1087734282, // Aer Lingus - Our Sustainability Journey
    423109932, // AIG - GAA Sponsorship Campaign
    423109785, // AIG - GAA Sponsorship Campaign
    1188171652, // Cairn's Passive House
    1111378968, // Fintua - Rise above the rest
    351361523, // Bionic - Universal Marketing Solutions
    838341623, // The Irish Hospital Consultants Association - IHCA
    1217264337, // Ceolaireacht
    1188172396, // ComReg Connects
    569789899, // ComReg Connects - NGN Campaign
    216645754, // Virgin Media - Broadband Information Video
    1188176421, // Key Note Productions - Animated Logo Endboard
    838229488, // NP Medical _ nCompassTM
    969645753, // Neuropause Medical
    1072549470, // STEM Inizio Advisory
    1188171310, // The Collaborations Agency
    1188172463, // Foroige
    1188172519, // Google - Elf's Enchanted Kids Christmas
    528802179, // Pay Pal - Small Actions, Big Impact
    1188174700, // Battle of the Bridesmaids
    1188170594, // Jabil Healthcare
    1061788661, // Jabil Healthcare – Qfinity™ Drug Delivery Device
    1188170762, // Janssen Globe
    1061790493, // Breakthrough Cancer Research
    1061800416, // Breakthrough Cancer Research - How to spot signs of cancer early
    1240729941, // Fran the Man
    1111376214, // elfc - Going Further Together
    1188171048, // elfc - Life at elfc
  ],
  Broadcast: [
    969647934, // Charleen and Ellie Go all in...
    216647347, // Xposé
    1188174653, // Animal A & E
    1188155997, // Fuel
    216648465, // Renovation Nation
    1217264337, // Ceolaireacht
    1188176391, // Irish Traditional Music Archive Titles
    1188174733, // Charleen & Ellie's Football Fever
    216650091, // The SEVEN O CLOCK Show
    216651505, // Ireland AM Titles
    217648709, // Six Nation Champions Promo TV3
    1188172010, // Tullamore D.E.W.
    528831774, // The 2 Johnnies Christmas Spectacular
    1212694145, // The 2 Johnnies take on...
    1188175362, // Europe on the Edge
    1217261900, // Forty Foot Pictures
    1188174588, // TV3 - 3Kids
    1188174700, // Battle of the Bridesmaids
    1212696402, // KBC Marthon 2019 Titles
    1188176421, // Key Note Productions - Animated Logo Endboard
    1188175393, // Savage Waters Titles _ V01_1
    1188175992, // The 42 - The Front Row Titles
    1188174612, // The Algorithm
    216645754, // Virgin Media - Broadband Information Video
    216651548, // Whiskey Business
    1072475320, // Clever Cards
  ],
  Commercials: [
    1072475320, // Clever Cards
    1188171652, // Cairn's Passive House
    1188172010, // Tullamore D.E.W.
    1212698928, // Madri Excepcional - Dublin Event Reel
    1212699145, // Madri Excepcional - Ruben Sanchez
    312507932, // Life Style Sports - Trains Central - Christmas Campaign
    343402448, // Life Style Sports - Nike - Women Studio - Destination Leggings
    340181597, // Life Style Sports - Women's Studio
    1188171606, // Permanent TSB
    1188172396, // ComReg Connects
    569789899, // ComReg Connects - NGN Campaign
    1212696803, // Life Style Sports - FasterStronger - Spring Campaign
    312508229, // Life Style Sports - FasterStronger - Winter Campaign
    1212697459, // Life Style Sports - Wanderlust Tropical Tide
    340182229, // Lifestyle Sports _ Proudly Irish Campaign
    838341623, // The Irish Hospital Consultants Association - IHCA
    1212696553, // Life Style Sports - Kids Summer Campaign
  ],
  Corporate: [
    1087734282, // Aer Lingus - Our Sustainability Journey
    1209818858, // Adherent
    1111376214, // elfc - Going Further Together
    1198014700, // Nurse On Call App
    1188171397, // Cubic 3 - Ubiquitous Connectivity
    1188171048, // elfc - Life at elfc
    351361523, // Bionic - Universal Marketing Solutions
    838324558, // Coerver Coaching App
    1072549470, // STEM Inizio Advisory
    1188172396, // ComReg Connects
    569789899, // ComReg Connects - NGN Campaign
    1212694857, // Compliance & Risk
    1188175605, // Compliance & Risk - ESG Journey
    808716535, // Digital Playmaker
    351362074, // Dublin City Council
    1212696047, // Heineken - Unwasted Beer
    1188176486, // Indeed - Talent Unleashed
    455767655, // Meritsoft
    1242904188, // Sn@p Printing - Personalised Client Video Campaign
    838341623, // The Irish Hospital Consultants Association - IHCA
  ],
  Events: [
    1212698928, // Madri Excepcional - Dublin Event Reel
    1188155997, // Fuel
    1111378968, // Fintua - Rise above the rest
    1188175992, // The 42 - The Front Row Titles
    1188176550, // World Rudby
    528802179, // Pay Pal - Small Actions, Big Impact
    1188175756, // Proximo
    1188172519, // Google - Elf's Enchanted Kids Christmas
    1242904188, // Sn@p Printing - Personalised Client Video Campaign
  ],
  Explainers: [
    1212696047, // Heineken - Unwasted Beer
    1087734282, // Aer Lingus - Our Sustainability Journey
    1198014700, // Nurse On Call App
    1111376214, // elfc - Going Further Together
    1209818858, // Adherent
    1188176192, // FMI Reel
    343402448, // Life Style Sports - Nike - Women Studio - Destination Leggings
    1188171397, // Cubic 3 - Ubiquitous Connectivity
    351361523, // Bionic - Universal Marketing Solutions
    838341623, // The Irish Hospital Consultants Association - IHCA
    838324558, // Coerver Coaching App
    808716535, // Digital Playmaker
    1072549470, // STEM Inizio Advisory
    1188171048, // elfc - Life at elfc
    257486991, // Her - In Training with Vogue
    1188172396, // ComReg Connects
    569789899, // ComReg Connects - NGN Campaign
    1212694857, // Compliance & Risk
    1188175605, // Compliance & Risk - ESG Journey
    838229488, // NP Medical _ nCompassTM
    969645753, // Neuropause Medical
    1188174251, // Dublin Airport Logistics Park
    393417886, // Forecast5 App Promo
    1188172463, // Foroige
    1217264058, // Glenveagh
    1188174312, // Harcourt Place
    1188170594, // Jabil Healthcare
    1061788661, // Jabil Healthcare – Qfinity™ Drug Delivery Device
    1188170762, // Janssen Globe
    455767655, // Meritsoft
    1217264788, // NAAMA
    1188174516, // One & two Dockland Central Reel
    1188174436, // One Molesworth Street
    1188174368, // Parkgate Business Centre
    1188174120, // The Bloom Portfolio
    1188171905, // Tullamore D.E.W.
    1061790493, // Breakthrough Cancer Research
    1061800416, // Breakthrough Cancer Research - How to spot signs of cancer early
  ],
  Medical: [
    969645753, // Neuropause Medical
    1072549470, // STEM Inizio Advisory
    838341623, // The Irish Hospital Consultants Association - IHCA
    838229488, // NP Medical _ nCompassTM
    1188170594, // Jabil Healthcare
    1061788661, // Jabil Healthcare – Qfinity™ Drug Delivery Device
    1188170762, // Janssen Globe
    1061790493, // Breakthrough Cancer Research
    1061800416, // Breakthrough Cancer Research - How to spot signs of cancer early
    1188176440, // National Proton Therapy Centre
  ],
  "Motion Graphics": [
    1087734282, // Aer Lingus - Our Sustainability Journey
    1209818858, // Adherent
    1072475320, // Clever Cards
    1111378968, // Fintua - Rise above the rest
    257471974, // Guinness - Made Of More
    343402448, // Life Style Sports - Nike - Women Studio - Destination Leggings
    1188174653, // Animal A & E
    969647934, // Charleen and Ellie Go all in...
    1188155997, // Fuel
    1198014700, // Nurse On Call App
    1188171397, // Cubic 3 - Ubiquitous Connectivity
    351362074, // Dublin City Council
    808716535, // Digital Playmaker
    351361523, // Bionic - Universal Marketing Solutions
    1217261900, // Forty Foot Pictures
    423109932, // AIG - GAA Sponsorship Campaign
    423109785, // AIG - GAA Sponsorship Campaign
    1061790493, // Breakthrough Cancer Research
    1061800416, // Breakthrough Cancer Research - How to spot signs of cancer early
    1188171652, // Cairn's Passive House
    1217264337, // Ceolaireacht
    1188174733, // Charleen & Ellie's Football Fever
    838324558, // Coerver Coaching App
    1188172396, // ComReg Connects
    1188172010, // Tullamore D.E.W.
    1188174251, // Dublin Airport Logistics Park
    1188175362, // Europe on the Edge
    1188176192, // FMI Reel
    393417886, // Forecast5 App Promo
    1212694145, // The 2 Johnnies take on...
    1188172463, // Foroige
    216651505, // Ireland AM Titles
    838341623, // The Irish Hospital Consultants Association - IHCA
    569789899, // ComReg Connects - NGN Campaign
    216650091, // The SEVEN O CLOCK Show
    1188176421, // Key Note Productions - Animated Logo Endboard
    1240729941, // Fran the Man
    1188171310, // The Collaborations Agency
    1217264058, // Glenveagh
    1188172519, // Google - Elf's Enchanted Kids Christmas
    1188171097, // Grey Dog Reel
    1188175605, // Compliance & Risk - ESG Journey
    1188174700, // Battle of the Bridesmaids
    1188174312, // Harcourt Place
    257486991, // Her - In Training with Vogue
    1188176519, // Indeed - Talent Unleashed
    1188176172, // DIGICAN
    1188176486, // Indeed - Talent Unleashed
    1188176391, // Irish Traditional Music Archive Titles
    1188170594, // Jabil Healthcare
    1061788661, // Jabil Healthcare – Qfinity™ Drug Delivery Device
    1188170762, // Janssen Globe
    1212696402, // KBC Marthon 2019 Titles
    312508229, // Life Style Sports - FasterStronger - Winter Campaign
    312507932, // Life Style Sports - Trains Central - Christmas Campaign
    340181597, // Life Style Sports - Women's Studio
    340182229, // Lifestyle Sports _ Proudly Irish Campaign
    1188171702, // Madri Excepcional
    1217265398, // Main FKM Logo Reveal_Endboard
    455767655, // Meritsoft
    1217264788, // NAAMA
    838229488, // NP Medical _ nCompassTM
    1188176440, // National Proton Therapy Centre
    969645753, // Neuropause Medical
    1188174516, // One & two Dockland Central Reel
    1188174436, // One Molesworth Street
    1188174368, // Parkgate Business Centre
    528802179, // Pay Pal - Small Actions, Big Impact
    1188171606, // Permanent TSB
    1188175756, // Proximo
    216648465, // Renovation Nation
    1072549470, // STEM Inizio Advisory
    1188175393, // Savage Waters Titles _ V01_1
    217648709, // Six Nation Champions Promo TV3
    1242904188, // Sn@p Printing - Personalised Client Video Campaign
    1188174588, // TV3 - 3Kids
    528831774, // The 2 Johnnies Christmas Spectacular
    1188175992, // The 42 - The Front Row Titles
    1188174612, // The Algorithm
    1188174120, // The Bloom Portfolio
    1188171905, // Tullamore D.E.W.
    216645754, // Virgin Media - Broadband Information Video
    216651548, // Whiskey Business
    1188176550, // World Rudby
    216647347, // Xposé
    1111376214, // elfc - Going Further Together
    1188171048, // elfc - Life at elfc
    1245759123, // Madrí Excepcional - Dublin: Ruben x Maser
    1245755744, // Madrí Excepcional - Ruben Sanchez creative process
  ],
  "Real Estate": [
    1188174251, // Dublin Airport Logistics Park
    1217264058, // Glenveagh
    1188174312, // Harcourt Place
    1188174516, // One & two Dockland Central Reel
    1188174436, // One Molesworth Street
    1188174368, // Parkgate Business Centre
    1188174120, // The Bloom Portfolio
  ],
  Showreels: [
    808716535, // Digital Playmaker
    351362074, // Dublin City Council
    1188176192, // FMI Reel
    1111378968, // Fintua - Rise above the rest
    1188155997, // Fuel
    1188171097, // Grey Dog Reel
    340182229, // Lifestyle Sports _ Proudly Irish Campaign
    1188171310, // The Collaborations Agency
    1188171905, // Tullamore D.E.W.
    1111376214, // elfc - Going Further Together
    1188171048, // elfc - Life at elfc
    1213218364, // RORY FITZ HOME PAGE
  ],
  "Social Content": [
    1087734282, // Aer Lingus - Our Sustainability Journey
    351362074, // Dublin City Council
    257471974, // Guinness - Made Of More
    1212699145, // Madri Excepcional - Ruben Sanchez
    312507932, // Life Style Sports - Trains Central - Christmas Campaign
    1188175605, // Compliance & Risk - ESG Journey
    1188171397, // Cubic 3 - Ubiquitous Connectivity
    1188171702, // Madri Excepcional
    257486991, // Her - In Training with Vogue
    343402448, // Life Style Sports - Nike - Women Studio - Destination Leggings
    340181597, // Life Style Sports - Women's Studio
    1212698928, // Madri Excepcional - Dublin Event Reel
    1188171310, // The Collaborations Agency
    1188176192, // FMI Reel
    1111376214, // elfc - Going Further Together
    569789899, // ComReg Connects - NGN Campaign
    808716535, // Digital Playmaker
    312508229, // Life Style Sports - FasterStronger - Winter Campaign
    1212697459, // Life Style Sports - Wanderlust Tropical Tide
    340182229, // Lifestyle Sports _ Proudly Irish Campaign
    423109932, // AIG - GAA Sponsorship Campaign
    423109785, // AIG - GAA Sponsorship Campaign
    1188171652, // Cairn's Passive House
    838324558, // Coerver Coaching App
    1188172396, // ComReg Connects
    1212696553, // Life Style Sports - Kids Summer Campaign
    1111378968, // Fintua - Rise above the rest
    393417886, // Forecast5 App Promo
    1188155997, // Fuel
    1188171097, // Grey Dog Reel
    1188176519, // Indeed - Talent Unleashed
    1188176486, // Indeed - Talent Unleashed
    1188170594, // Jabil Healthcare
    1061788661, // Jabil Healthcare – Qfinity™ Drug Delivery Device
    1188170762, // Janssen Globe
    838229488, // NP Medical _ nCompassTM
    969645753, // Neuropause Medical
    1188171606, // Permanent TSB
    838341623, // The Irish Hospital Consultants Association - IHCA
    1188176550, // World Rudby
    1188171048, // elfc - Life at elfc
    1061790493, // Breakthrough Cancer Research
    1061800416, // Breakthrough Cancer Research - How to spot signs of cancer early
    1212696803, // Life Style Sports - FasterStronger - Spring Campaign
    1245759123, // Madrí Excepcional - Dublin: Ruben x Maser
    1245755744, // Madrí Excepcional - Ruben Sanchez creative process
  ],
  Technology: [
    1209818858, // Adherent
    351361523, // Bionic - Universal Marketing Solutions
    838324558, // Coerver Coaching App
    1188171397, // Cubic 3 - Ubiquitous Connectivity
    1111378968, // Fintua - Rise above the rest
    393417886, // Forecast5 App Promo
    1217264788, // NAAMA
    1198014700, // Nurse On Call App
  ],
};

const byTitle = (a: { title: string }, b: { title: string }) => a.title.localeCompare(b.title);

export function sortByCategoryOrder<T extends { id: number; title: string }>(items: T[], category: string): T[] {
  const order = CATEGORY_ORDER[category as (typeof CATEGORIES)[number]];
  if (!order) return [...items].sort(byTitle);
  const rank = new Map(order.map((id, i) => [id, i]));
  const ranked = items.filter((item) => rank.has(item.id)).sort((a, b) => rank.get(a.id)! - rank.get(b.id)!);
  const rest = items.filter((item) => !rank.has(item.id)).sort(byTitle);
  return [...ranked, ...rest];
}
