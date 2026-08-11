// Real content sourced from the client's existing site export.
// Swap PORTFOLIO_ITEMS thumbnails / CLIENT_LOGOS with real assets when available.
import { buildSlugMap } from "./slug";

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
] as const;

export const HERO = {
  eyebrow: "Creative Strategy · Video Production · Motion Design · Animation",
  headline: "Making stories matter.",
  vimeoId: "1213218364",
  vimeoHash: "868f33df5d",
  fullscreenVimeoId: "848037923",
};

export const ABOUT = {
  eyebrow: "Video Production · Motion Graphics · Animation · Creative Direction",
  headingLines: ["Creative video production,", "from brief to final frame."],
  paragraphs: [
    "I'm a Dublin-based freelance Creative Director, Video Producer, Motion Designer, and Animator, helping brands, businesses and agencies create engaging, story-driven video content. From corporate films and social campaigns to advertising, animation and broadcast graphics, I can lead complete video projects from concept to delivery, or provide modular creative consultancy and production expertise where additional specialist support is needed.",
    "I work with clients from the initial brief to the finished film, helping shape the idea, define the audience and turn the message into a clear creative approach. From there, I develop the creative, script and storyboard, build the right production around the brief, and oversee the project through post-production and delivery. Giving clients a single point of creative leadership, connecting strategy, storytelling and production into one coherent process.",
  ],
};

export const SERVICES = [
  {
    title: "Creative Direction & Brand Storytelling",
    desc: "Leading projects from brief to delivery, turning business objectives and brand strategy into clear creative concepts, strong narratives and content audiences actually engage with — strategy, concept development, campaign thinking, scripting, storyboarding and creative oversight across every stage of production.",
    icon: "compass",
  },
  {
    title: "Brand Identity & Design",
    desc: "Creating and evolving visual identities that give brands clarity, character and consistency — from logo design and campaign identities to typography, visual systems and supporting brand assets, built as flexible creative frameworks that work across video, social, digital and corporate communications.",
    icon: "pen-tool",
  },
  {
    title: "Social, Digital & Corporate Content",
    desc: "Content designed for where and how it will be viewed, from fast-moving social-first campaigns to polished corporate films, explainers, product videos, recruitment content and internal communications — each project adaptable into multiple formats for greater value and reach.",
    icon: "share-2",
  },
  {
    title: "Video Production",
    desc: "Managing video production end-to-end, from initial concept and planning through filming, post-production and final delivery — assembling trusted directors, videographers, producers and specialists around the specific needs, ambition and budget of each project.",
    icon: "video",
  },
  {
    title: "Motion Graphics, 2D & 3D Animation",
    desc: "Broadcast-quality motion graphics and bespoke animation that bring brands, products and complex ideas to life — animated brand systems, title sequences, kinetic typography, UI animation, product visualisation, character animation, technical explainers and fully integrated 2D and 3D sequences.",
    icon: "box",
  },
  {
    title: "Compositing & Editing",
    desc: "Precision editing and post-production built around story, rhythm and audience attention — editing, colour grading, sound design, visual effects, tracking, green-screen work, cleanup and layered compositing, delivered through a flexible modular model with senior creative leadership and no unnecessary agency overhead.",
    icon: "scissors",
  },
] as const;

export const CATEGORIES = [
  "Featured",
  "Animation",
  "Broadcast",
  "Commercials",
  "Corporate",
  "Events",
  "Explainers",
  "Medical",
  "Motion Graphics",
  "Real Estate",
  "Showreels",
  "Social Content",
  "Technology",
] as const;

export type PortfolioItem = {
  id: number;
  slug: string;
  title: string;
  client: string;
  categories: string[];
  role: string;
  desc: string;
  thumbUrl?: string;
  embedUrl?: string;
};

const PORTFOLIO_ITEMS_RAW: Omit<PortfolioItem, "slug">[] = [
  { id: 1188172010, title: "Tullamore D.E.W.", client: "Tullamore D.E.W.", categories: ["Featured", "Commercials", "Broadcast"], role: "Editor", desc: "Brand commercial for the Irish whiskey house." },
  { id: 1188171905, title: "Tullamore D.E.W. — Campaign Cut", client: "Tullamore D.E.W.", categories: ["Commercials", "Broadcast"], role: "Editor", desc: "Alternate campaign edit for the Tullamore D.E.W. brand." },
  { id: 1209818858, title: "Adherent", client: "Adherent", categories: ["Featured", "Technology", "Motion Graphics"], role: "Motion Designer", desc: "Product motion graphics for a healthcare technology brand." },
  { id: 1198014700, title: "Nurse On Call App", client: "Nurse On Call", categories: ["Technology", "Medical", "Explainers"], role: "Motion Designer", desc: "App promo animation for a healthcare on-demand service." },
  { id: 1188176440, title: "National Proton Therapy Centre", client: "National Proton Therapy Centre", categories: ["Featured", "Medical", "Explainers"], role: "Editor & Animator", desc: "Explainer film for a national medical facility." },
  { id: 1188176550, title: "World Rugby", client: "World Rugby", categories: ["Featured", "Events", "Commercials", "Broadcast"], role: "Editor", desc: "Campaign film produced for World Rugby." },
  { id: 1188176486, title: "Indeed — Talent Unleashed", client: "Indeed", categories: ["Corporate", "Commercials", "Broadcast"], role: "Editor", desc: "Brand campaign film for Indeed." },
  { id: 1188174251, title: "Dublin Airport Logistics Park", client: "Dublin Airport", categories: ["Featured", "Real Estate", "Corporate"], role: "Motion Designer", desc: "Development visualisation for Dublin Airport Logistics Park." },
  { id: 1188174120, title: "The Bloom Portfolio", client: "Bloom", categories: ["Motion Graphics"], role: "Motion Designer", desc: "Portfolio motion piece for the Bloom brand." },
  { id: 1188172519, title: "Google — Enchanted Kids Christmas Map", client: "Google", categories: ["Featured", "Animation", "Commercials", "Broadcast", "Social Content"], role: "Animator", desc: "Festive campaign animation produced for Google." },
  { id: 1188172463, title: "Foróige", client: "Foróige", categories: ["Corporate"], role: "Editor", desc: "Brand film for the Irish youth organisation." },
  { id: 1188172425, title: "Dublin City University — Engagement Award", client: "Dublin City University", categories: ["Events", "Corporate"], role: "Editor", desc: "Award ceremony film for DCU." },
  { id: 1188172396, title: "ComReg — Where to Find New Numbers", client: "ComReg", categories: ["Featured", "Motion Graphics", "Explainers", "Corporate"], role: "Motion Designer", desc: "Explainer animation for the Irish communications regulator." },
  { id: 1188171702, title: "Madri Excepcional", client: "Madri Excepcional", categories: ["Commercials", "Broadcast"], role: "Editor", desc: "Brand commercial for Madri Excepcional." },
  { id: 1188171652, title: "Cairn's Passive House", client: "Cairn", categories: ["Real Estate", "Corporate"], role: "Editor", desc: "Development film for Cairn Homes." },
  { id: 1188171606, title: "Permanent TSB", client: "Permanent TSB", categories: ["Commercials", "Broadcast", "Corporate"], role: "Editor", desc: "Brand campaign film for Permanent TSB." },
  { id: 1188171397, title: "Cubic 3 — Ubiquitous Connectivity", client: "Cubic", categories: ["Technology", "Corporate"], role: "Motion Designer", desc: "Technology brand film for Cubic." },
  { id: 1188171310, title: "The Collaborations Agency", client: "The Collaborations Agency", categories: ["Showreels", "Corporate"], role: "Editor", desc: "Agency showreel for The Collaborations Agency." },
  { id: 1188171097, title: "Grey Dog Reel", client: "Grey Dog", categories: ["Showreels"], role: "Editor", desc: "Showreel edit for Grey Dog." },
  { id: 1188171048, title: "ELFC — Life at ELFC", client: "ELFC", categories: ["Corporate", "Social Content"], role: "Editor", desc: "Culture and careers film for ELFC." },
  { id: 1188170762, title: "Janssen Globe", client: "Janssen", categories: ["Medical", "Motion Graphics", "Corporate"], role: "Motion Designer", desc: "Brand animation for Janssen (J&J)." },
  { id: 1188170594, title: "Jabil Healthcare", client: "Jabil", categories: ["Medical", "Technology", "Corporate"], role: "Editor", desc: "Healthcare technology brand film for Jabil." },
  { id: 1188155997, title: "Fuel", client: "Fuel", categories: ["Showreels"], role: "Editor", desc: "Showreel piece produced for Fuel." },
  { id: 1072549470, title: "STEM Inizio Advisory", client: "STEM Healthcare", categories: ["Medical", "Corporate"], role: "Editor & Animator", desc: "Advisory brand film for STEM Inizio." },
  { id: 1072475320, title: "Cleaver Card", client: "Cleaver Card", categories: ["Motion Graphics", "Commercials"], role: "Motion Designer", desc: "Brand motion piece for Cleaver Card." },
  { id: 838341623, title: "The Irish Hospital Consultants Association", client: "IHCA", categories: ["Medical", "Corporate"], role: "Editor", desc: "Institutional film for the IHCA." },
  { id: 838229488, title: "NP Medical — nCompass™", client: "NP Medical", categories: ["Featured", "Medical", "Motion Graphics", "Explainers"], role: "Motion Designer", desc: "Product animation for NP Medical's nCompass platform." },
  { id: 569786346, title: "Tullamore Dew", client: "Tullamore D.E.W.", categories: ["Commercials", "Broadcast"], role: "Editor", desc: "Earlier brand campaign for Tullamore D.E.W." },
  { id: 528802179, title: "PayPal — Small Actions, Big Impact", client: "PayPal", categories: ["Featured", "Commercials", "Animation", "Broadcast", "Social Content"], role: "Animator", desc: "Brand campaign animation for PayPal." },
  { id: 455768823, title: "Dublin City Council — 30km Campaign", client: "Dublin City Council", categories: ["Commercials", "Events", "Broadcast", "Social Content"], role: "Editor", desc: "Road safety campaign film for Dublin City Council." },
  { id: 423109785, title: "20x20 Campaign — Dublin v Kerry", client: "AIG / GAA", categories: ["Featured", "Events", "Commercials", "Broadcast"], role: "Editor", desc: "GAA campaign film produced with AIG." },
  { id: 393417886, title: "Forecast5 App Promo", client: "Forecast5", categories: ["Technology", "Explainers"], role: "Motion Designer", desc: "App promo animation for Forecast5." },
  { id: 340181597, title: "Life Style Sports — Women's Studio: Sweet Escape", client: "Life Style Sports", categories: ["Commercials", "Broadcast", "Social Content"], role: "Editor", desc: "Retail campaign film for Life Style Sports." },
  { id: 257471974, title: "Guinness — Made of More", client: "Guinness", categories: ["Featured", "Commercials", "Broadcast"], role: "Editor", desc: "Brand campaign edit for Guinness." },
  { id: 969645753, title: "Neuropause Medical", client: "Neuropause", categories: ["Medical", "Explainers"], role: "Editor & Animator", desc: "Medical device explainer for Neuropause." },
  { id: 848037923, title: "Showreel", client: "Rory Fitzgerald", categories: ["Featured", "Showreels"], role: "Director & Editor", desc: "Full portfolio showreel." },
];

const PORTFOLIO_SLUGS = buildSlugMap(PORTFOLIO_ITEMS_RAW);
export const PORTFOLIO_ITEMS: PortfolioItem[] = PORTFOLIO_ITEMS_RAW.map((item) => ({
  ...item,
  slug: PORTFOLIO_SLUGS.get(item.id) ?? String(item.id),
}));

export const PROCESS_STEPS = [
  { title: "Discover", desc: "Understanding the message, audience and goals before a single frame is shot." },
  { title: "Create", desc: "Shooting, animating and editing with close attention to pacing and detail." },
  { title: "Deliver", desc: "Final grade, sound and export, optimised for the platform it will live on." },
] as const;

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
};

export const TESTIMONIALS: Testimonial[] = [
  { quote: "Rory was a great find and someone in the creative industry that has multiple skill sets is extremely helpful. One of our biggest problems is finding skilled editors and animators that can add creative direction. Most like to be led or told explicitly what to create. Rory was given the brief and owned that from start to finish.", name: "Tom Stride", title: "Digital Director", company: "Digital Playmakers", avatar: "/images/testimonials/tom-stride.jpeg" },
  { quote: "I recently had the absolute pleasure of working with Rory (for the first time) and was extremely impressed with his approach, attention to detail, speed of delivery and quality of the overall output. Over the past 25+ years of my career in the pharmaceutical industry, I have worked with multiple creative agencies of all sizes...and having now worked with Rory, I can honestly say that the end-to-end customer experience & final output that Rory delivered to our business, surpassed every single one of them. I will definitely be using Rory Fitzgerald again and wouldn't hesitate to recommend his services to anyone looking for an expert partner for video/animation/motion graphics projects, and someone that really does go the extra mile. Truly excellent.", name: "Adam Boucher", title: "Head of Innovation & Product Development", company: "STEM Healthcare", avatar: "/images/testimonials/adam-boucher.jpeg" },
  { quote: "I've worked with Rory on a number of design and creative projects. He is so excellent at what he does and he went above and beyond the brief delivering an excellent end product. His skillsets unique and a real differentiator. Both myself and our commercial stakeholders were really impressed with what he delivered. I can't recommend Rory high enough.", name: "Michéle Quinn", title: "Head of Branding and Marketing", company: "McCann FitzGerald LLP", avatar: "/images/testimonials/michele-quinn.jpeg" },
  { quote: "As a production company CEO, knowing that we have Rory's expertise, creativity and professionalism on our team has always been an enormous benefit to our productions and the clients are always impressed with the quality of his graphic design and implementation. Having had to work on projects when Rory has not available can be a precarious situation. Rory brings a piece of mind that the job will get done on time, on budget and most of all, with a creative flair. I can not recommend Rory highly enough.", name: "James Tyrrell", title: "CEO", company: "Big Red Box Media", avatar: "/images/testimonials/james-tyrrell.jpeg" },
  { quote: "We collaborated with Rory to work on client campaign that required a fast response and quick turnaround. We provided the initial storyboard and creatives but were blown away with his animation skills. He enriched the concepts and brought motion to even the smallest of details. He really understood the brief and art direction and the final product was delivered ahead of schedule. Our client was equally impressed with the results.", name: "Richard Curry", title: "Lead UX/UI Designer", company: "Total Digital", avatar: "/images/testimonials/richard-curry.jpeg" },
  { quote: "Rory is a highly professional and accomplished graphic designer. I had a great experience using Rory as a graphic designer (static and motion) on a filmed podcast project Chemistry was making for The42/GUINNESS. The finished product was even better than I hoped for and all stakeholders were delighted with it. I wouldn't hesitate to use Rory again.", name: "Paddy McKenna", title: "Founder", company: "Chemistry Media", avatar: "/images/testimonials/paddy-mckenna.jpeg" },
  { quote: "I absolutely loved working with Rory. He had to work against tight deadlines and big asks and did so with ease. His manner and personality shun through and was just great to deal with. I would highly recommended him and looking forward to the next project.", name: "Grace Cotter", title: "Post Production Supervisor / Content Producer", company: "Fuel", avatar: "/images/testimonials/grace-cotter.jpeg" },
  { quote: "I have worked with Rory on numerous projects over the years. His quality of work is second to none. I thoroughly enjoy working with him and am always so impressed with the end product. Rory has a great attitude and approach to creative undertakings, problem solving and providing creative solutions to the tasks at hand. His top class creative skills and output are complemented by how nice a guy he is. I would highly recommend Rory and look forward to our next collaboration.", name: "Conor Moore", title: "Creative Manager", company: "PML Group", avatar: "/images/testimonials/conor-moore.png" },
  { quote: "Rory quickly adapted to an extremely fast paced, multi-faceted business, while maintaining high quality, premium work. He is a highly creative person and always strove to get the best possible output, but understood commerciality at the same time.", name: "Shireen McDonagh", title: "Head of Integrated, Brand & Sponsorship", company: "Legacy Communications", avatar: "/images/testimonials/shireen-mcdonagh.jpeg" },
];

export type ClientLogo = { name: string; logo: string };

export const CLIENT_LOGOS: ClientLogo[] = [
  { name: "Adidas", logo: "/images/clients/adidas.png" },
  { name: "Aer Lingus", logo: "/images/clients/aer-lingus.png" },
  { name: "AIB", logo: "/images/clients/aib.png" },
  { name: "Cairn", logo: "/images/clients/cairn.png" },
  { name: "C&R", logo: "/images/clients/c-and-r.png" },
  { name: "Cleaver Card", logo: "/images/clients/cleaver-card.png" },
  { name: "ComReg", logo: "/images/clients/comreg.png" },
  { name: "Cubic 3", logo: "/images/clients/cubic-3.png" },
  { name: "DCC", logo: "/images/clients/dcc.png" },
  { name: "DCU", logo: "/images/clients/dcu.png" },
  { name: "ELFC", logo: "/images/clients/elfc.png" },
  { name: "FMI", logo: "/images/clients/fmi.png" },
  { name: "GAA", logo: "/images/clients/gaa.png" },
  { name: "Guinness", logo: "/images/clients/guinness.png" },
  { name: "Heineken", logo: "/images/clients/heineken.png" },
  { name: "IHCA", logo: "/images/clients/ihca.png" },
  { name: "Inizio", logo: "/images/clients/inizio.png" },
  { name: "IRFU", logo: "/images/clients/irfu.png" },
  { name: "ITMA", logo: "/images/clients/itma.png" },
  { name: "Janssen (J&J)", logo: "/images/clients/janssen.png" },
  { name: "Laya", logo: "/images/clients/laya.png" },
  { name: "Leinster Rugby", logo: "/images/clients/leinster.png" },
  { name: "Limerick Chamber", logo: "/images/clients/limerick-chamber.png" },
  { name: "Life Style Sports", logo: "/images/clients/life-style-sports.png" },
  { name: "Munster Rugby", logo: "/images/clients/munster.png" },
  { name: "NAAMA", logo: "/images/clients/naama.png" },
  { name: "NCI", logo: "/images/clients/nci.png" },
  { name: "Nike", logo: "/images/clients/nike.png" },
  { name: "NP Medical", logo: "/images/clients/np-medical.png" },
  { name: "Paralympic Ireland", logo: "/images/clients/paralympic-ireland.png" },
  { name: "RTÉ", logo: "/images/clients/rte.png" },
  { name: "Spotlight Oral", logo: "/images/clients/spotlight-oral.png" },
  { name: "Tellings", logo: "/images/clients/tellings.png" },
  { name: "TG4", logo: "/images/clients/tg4.png" },
  { name: "TU Dublin", logo: "/images/clients/tu-dublin.png" },
  { name: "Tullamore D.E.W.", logo: "/images/clients/tullamore-dew.png" },
  { name: "Virgin Media", logo: "/images/clients/virgin-media.png" },
  { name: "World Rugby", logo: "/images/clients/world-rugby.png" },
];

export const CONTACT = {
  address: ["93 Ranelagh Road,", "Dublin,", "Ireland.", "D06N6C3"],
  phone: "+353 87 233 3770",
  phoneHref: "tel:+353872333770",
  email: "roryfitz01@gmail.com",
  hours: ["Mon – Fri", "9:00am – 6:00pm"],
  linkedin: "https://www.linkedin.com/in/roryfitz/",
  vimeo: "https://vimeo.com/roryfitz",
  instagram: "https://instagram.com/roryfitz",
  googleMaps: "https://maps.app.goo.gl/TUhD25py2hMHdjik9",
  geo: { lat: 53.3301229, lng: -6.2592162 },
};
