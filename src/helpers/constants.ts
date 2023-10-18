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
  id?: string
};

export const wizardStats: Effect[] = [
  { text: "Spell Damage", icon: spellIcon, type: EffectType.SPELL_DAMAGE, required: true, id: 'spellDamage' },
  { text: "Wizard Damage", icon: dmgIcon, type: EffectType.WIZARD_DAMAGE, required: true, id: 'wizardDamage' },
  { text: "Crit Chance", icon: critIcon, type: EffectType.CRIT_CHANCE, required: true, id: 'critChance' },
  { text: "Pierce", icon: pierceIcon, type: EffectType.PIERCE, required: true, id: 'pierce' },
  {
    text: "Enemy Resistance",
    icon: enemyResIcon,
    type: EffectType.ENEMY_RESISTANCE,
    required: true,
    id: 'enemyResist'
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
