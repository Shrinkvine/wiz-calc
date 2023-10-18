import spellIcon from "../assets/spellIcon.png";
import dmgIcon from "../assets/dmgIcon.png";
import critIcon from "../assets/critIcon.png";
import pierceIcon from "../assets/pierceIcon.png";
import enemyResIcon from "../assets/enemyResIcon.png";
import uniBladeIcon from "../assets/uniBlade.png";
import auraBuffIcon from "../assets/auraBuff.png";
import bubbleIcon from "../assets/bubble.png";
import shieldIcon from "../assets/shield.png";
import jinxIcon from "../assets/jinx.png";
import wraith from "../assets/wraith.jpg";
import devin from "../assets/devin.png";

export enum Endpoints {
  GET_CALCULATION = "calculate",
}

export enum EffectType {
  SPELL_DAMAGE = 0,
  WIZARD_DAMAGE,
  CRIT_CHANCE,
  PIERCE,
  ENEMY_RESISTANCE,
  BLADE,
  AURA,
  BUBBLE,
  SHIELD,
  JINX,
  DEF_AURA,
  DEF_BUBBLE,
}

export type Effect = {
  text: string;
  icon: string;
  type: EffectType;
  value?: number;
  required?: boolean;
  id?: string;
};

export const wizardStats: Effect[] = [
  {
    text: "Spell Damage",
    icon: spellIcon,
    type: EffectType.SPELL_DAMAGE,
    required: true,
    id: "spellDamage",
  },
  {
    text: "Wizard Damage",
    icon: dmgIcon,
    type: EffectType.WIZARD_DAMAGE,
    required: true,
    id: "wizardDamage",
  },
  {
    text: "Crit Chance",
    icon: critIcon,
    type: EffectType.CRIT_CHANCE,
    required: true,
    id: "critChance",
  },
  {
    text: "Pierce",
    icon: pierceIcon,
    type: EffectType.PIERCE,
    required: true,
    id: "pierce",
  },
  {
    text: "Enemy Resistance",
    icon: enemyResIcon,
    type: EffectType.ENEMY_RESISTANCE,
    required: true,
    id: "enemyResist",
  },
];

export const buffs: Effect[] = [
  { text: "Blade", icon: uniBladeIcon, type: EffectType.BLADE },
  { text: "Aura", icon: auraBuffIcon, type: EffectType.AURA },
  { text: "Bubble", icon: bubbleIcon, type: EffectType.BUBBLE },
];

export const debuffs: Effect[] = [
  { text: "Shield", icon: shieldIcon, type: EffectType.SHIELD },
  { text: "Jinx", icon: jinxIcon, type: EffectType.JINX },
  { text: "DefAura", icon: "", type: EffectType.DEF_AURA },
  { text: "DefBubble", icon: "", type: EffectType.DEF_BUBBLE },
];

export enum Titles {
  BASE_STATS = "Wizard Stats",
  BUFFS = "Buffs",
  DEBUFFS = "Debuffs",
}

export type Project = {
  id: number;
  avatar: string;
  title: string;
  description: string;
  link: string;
  contentImage?: string;
  new?: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    avatar: wraith,
    title: "Wizard101 Deck Tracker",
    description:
      "Wizard101 Deck Tracker allows you to track your cards, treasure cards, and item cards in real-time as you battle in Wizard101. By keeping a close eye on your deck, you gain valuable insights into your available resources, enabling you to make more informed decisions and devise effective strategies.\n\nWith this powerful tool at your disposal, you can seamlessly manage and monitor your card usage, empowering you to adapt and adjust your gameplay on the fly. Stay ahead of your opponents, maximize your card efficiency, and unleash your true potential as a wizard in the magical world of Wizard101.",
    link: "https://wizdecktracker.com",
    contentImage: "https://wizdecktracker.com/example.png",
    new: true,
  },
  {
    id: 2,
    avatar: devin,
    title: "Wizard101 Damage Calculator (Java)",
    description:
      "My name is Devin, and I'm an avid W101 raid player who consistently pushes to find new challenging and fun ways to complete raids, as well as optimizing or simplifying them. I am the co-leader of the Spiral Shadows guild that took a top place in the community Spiral Cup and plans to take higher spots in guild-specific competitions.\n\nIf you are interested in joining The Spirals Shadows please add Devin#0585 or uxoas#7879 on discord (entry to the guild is more open but in game guild spots will go to the most active members)\n\nThis code will calculate any base spell damage and player-acquired damage while taking into account any and all buffs or debuffs within a small margin of error.\n\nYou can always use the help command to get the full command list\n\nTo use this calculator please run the java file titled W101Calculator.java",
    link: "https://github.com/DevinOLacey/W101",
  },
];
