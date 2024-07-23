import { ActorSR } from "./actor/ActorSR.js";
import { CreatureSR } from "./actor/Creature/document.js";
import { NpcSR } from "./actor/PNJ/document.js";
import { PersonnageSR } from "./actor/Personnage/PersonnageSR.js";
import { ShaaniSR } from "./actor/Shaani/document.js";
import { LootSR } from "./actor/loot/LootSR.js";
import { AcquisSR } from "./item/Acquis/base.js";
import { CreatorSet } from "./item/CreatorSet/base.js";
import { ItemSR } from "./item/ItemSR.js";
import { Ability } from "./item/ability/base.js";
import { Symbiose } from "./item/ability/symbiose.js";
import { ConditionSR } from "./item/condition/document.js";
import { SpéTest, SpéTestNécr, domainTest, necroseTest } from "./jets/dice.js";
import { AddCoins, AddPrestige, AddXP, RemoveCoins } from "./macros/macros.js";
import { getSelectedOrOwnActors } from "./utils/utils.js";

export const shaanRenaissance = {};

shaanRenaissance.Actor = {
  documentClasses: {
    Personnage: PersonnageSR,
    Loot: LootSR,
    Shaani: ShaaniSR,
    Réseau: ActorSR,
    Créature: CreatureSR,
    PNJ: NpcSR,
  },
};
shaanRenaissance.Item = {
  documentClasses: {
    Armement: AcquisSR,
    Artefact: AcquisSR,
    Armimale: AcquisSR,
    Manuscrit: AcquisSR,
    Outil: AcquisSR,
    Protection: AcquisSR,
    Relation: AcquisSR,
    Richesse: AcquisSR,
    Technologie: AcquisSR,
    Transport: AcquisSR,
    Bâtiment: AcquisSR,
    Trihn: ItemSR,
    Pouvoir: Ability,
    Race: CreatorSet,
    Peuple: CreatorSet,
    Caste: CreatorSet,
    Métier: CreatorSet,
    condition: ConditionSR,
    Symbiose: Symbiose,
  },
};
shaanRenaissance.macros = {
  domainTest: domainTest,
  necroseTest: necroseTest,
  speTest: SpéTest,
  speTestNecrose: SpéTestNécr,
  addCoins: AddCoins,
  removeCoins: RemoveCoins,
  addXP: AddXP,
  addPrestige: AddPrestige,
};
shaanRenaissance.utils = {
  getSelectedOrOwnActors: getSelectedOrOwnActors,
};
shaanRenaissance.tokenHUDStatuses = {
  deafened: "SR.ConditionTypeDeafened",
  blinded: "SR.ConditionTypeBlinded",
  stunned: "SR.ConditionTypeStunned",
  obscurity: "SR.ConditionTypeObscurity",
  weakened: "SR.ConditionTypeWeakened",
  dazzled: "SR.ConditionTypeDazzled",
  muted: "SR.ConditionTypeMuted",
  dominated: "SR.ConditionTypeDominated",
  slowed: "SR.ConditionTypeSlowed",
  bewitched: "SR.ConditionTypeBewitched",
  paralyzed: "SR.ConditionTypeParalyzed",
  unconscious: "SR.ConditionTypeUnconscious",
  advantaged: "SR.ConditionTypeAdvantaged",
  protected: "SR.ConditionTypeProtected",
  invisible: "SR.ConditionTypeInvisible",
  prone: "SR.ConditionTypeProne",
};
shaanRenaissance.conditionTypes = {
  ...shaanRenaissance.tokenHUDStatuses,
};
(shaanRenaissance.statusEffects = {
  IconTheme: "default",
  iconDir: "systems/shaanrenaissance/icons/conditions/",
  conditions: shaanRenaissance.tokenHUDStatuses,
}),
  (shaanRenaissance.SRdomains = {
    Shaan: "Shaan",
    Technique: "Technique",
    Savoir: "Savoir",
    Social: "Social",
    Arts: "Arts",
    Magie: "Magie",
    Rituels: "Rituels",
    Survie: "Survie",
    Combat: "Combat",
    Nécrose: "Nécrose",
  });
shaanRenaissance.createAcquis = {
  Armement: "Armement",
  Armimale: "Armimale",
  Artefact: "Artefact",
  Manuscrit: "Manuscrit",
  Outil: "Outil",
  Protection: "Protection",
  Relation: "Relation",
  Richesse: "Richesse",
  Technologie: "Technologie",
  Transport: "Transport",
  Bâtiment: "Bâtiment",
};
shaanRenaissance.createPouvoir = {
  esprit: {
    "Astuce de Technique": "Astuce de Technique",
    "Secret de Savoir": "Secret de Savoir",
    "Privilège de Social": "Privilège de Social",
  },
  ame: {
    "Création d'Arts": "Création d'Arts",
    "Symbiose de Shaan": "Symbiose de Shaan",
    "Sort de Magie": "Sort de Magie",
  },
  corps: {
    "Transe de Rituels": "Transe de Rituels",
    "Exploit de Survie": "Exploit de Survie",
    "Tactique de Combat": "Tactique de Combat",
  },
};
shaanRenaissance.createTrihn = {
  type: {
    Esprit: "Esprit",
    Ame: "Âme",
    Corps: "Corps",
    "Anti-Âme": "Anti-Âme",
  },
};
shaanRenaissance.pouvoirs = {
  trihns: {
    esprit: "Esprit",
    ame: "Âme",
    corps: "Corps",
    necrose: "Nécrose",
  },
  pouvoirSelect: {
    none: "",
    "Astuce de Technique": "Astuce de Technique",
    "Secret de Savoir": "Secret de Savoir",
    "Privilège de Social": "Privilège de Social",
    "Création d'Arts": "Création d'Arts",
    "Symbiose de Shaan": "Symbiose de Shaan",
    "Sort de Magie": "Sort de Magie",
    "Transe de Rituels": "Transe de Rituels",
    "Exploit de Survie": "Exploit de Survie",
    "Tactique de Combat": "Tactique de Combat",
    "Tourment de Nécrose": "Tourment de Nécrose",
  },
  pouvoirRank: {
    Rank1: "Rang 1",
    Rank2: "Rang 2",
    Rank3: "Rang 3",
    Rank4: "Rang 4",
  },
  pouvoirType: {
    none: "",
    Attaque: "Attaque",
    Défense: "Défense",
    Déplacement: "Déplacement",
    Amélioration: "Amélioration",
    Altération: "Altération",
    Invocation: "Invocation",
    Contrôle: "Contrôle",
    Perception: "Perception",
    Récupération: "Récupération",
    Communication: "Communication",
  },
  pouvoirFréquence: {
    none: "",
    Permanente: "Permanente",
    "1/Tour": "1/Tour",
    "1/Situation": "1/Situation",
    "1/Jour": "1/Jour",
    "1/Transition": "1/Transition",
  },
  pouvoirActivation: {
    none: "",
    "1 Geste": "1 Geste",
    "1 Action": "1 Action",
    "1 Action": "1 Action",
    "1 Action par Cible": "1 Action par Cible",
    "1 Heure": "1 Heure",
    "1 Jour": "1 Jour",
    "1 Transition": "1 Transition",
    "1 Semaine": "1 Semaine",
    "1 Test par Action": "1 Test par Action",
    "1 Test par Heure": "1 Test par Heure",
    "1 Test par Jour": "1 Test par Jour",
    "1 Heure et 1 point de Corps": "1 Heure et 1 point de Corps",
    "2 Actions ou 1 Actions et -1 de Corps": "2 Actions ou 1 Actions et -1 de Corps",
    "1 Test toutes les 2 Actions ou 1 Test et -1 points de corps par Action":
      "1 Test toutes les 2 Actions ou 1 Test et -1 points de corps par Action",
    "2 Actions et -2 points de Corps ou 3 Actions et -1 point de Corps":
      "2 Actions et -2 points de Corps ou 3 Actions et -1 point de Corps",
  },
  pouvoirPortée: {
    none: "",
    soi: "Soi",
    contact: "Contact",
    interaction: "Interaction",
    distance: "Distance",
    horizon: "Horizon",
  },
};
shaanRenaissance.acquis = {
  category: {
    Armement: "Armement",
    Armimale: "Armimales",
    Artefact: "Artefacts",
    Manuscrit: "Manuscrits",
    Outil: "Outils",
    Protection: "Protections",
    Relation: "Relations",
    Richesse: "Richesses",
    Technologie: "Technologie",
    Transport: "Transport",
    Bâtiment: "Bâtiment",
  },
  class: {
    class1: "Classe 1",
    class2: "Classe 2",
    class3: "Classe 3",
    class4: "Classe 4",
    class5: "Classe 5",
  },
  caste: {
    none: "",
    Novateur: "Novateur",
    Erudit: "Erudit",
    Négociant: "Négociant",
    Artiste: "Artiste",
    Shaaniste: "Shaaniste",
    Magicien: "Magicien",
    Elementaliste: "Elementaliste",
    Voyageur: "Voyageur",
    Combattant: "Combattant",
    Ombre: "Ombre",
  },
  voie: {
    none: "",
    terrestre: "Terrestre",
    aerienne: "Aérienne",
    maritime: "Maritime",
  },
  Ressources: {
    Verre: "Verre",
    Bois: "Bois",
    Or: "Or",
    Population: "Population",
    Pierre: "Pierre",
    Trihnite: "Trihnite",
    Animal: "Animal",
    Cultures: "Cultures",
    Métal: "Métal",
    Hydrocarbure: "Hydrocarbure",
  },
};
shaanRenaissance.abilitiesTypes = {
  Attaque: "SR.abilitiesTypes.Attaque",
  Défense: "SR.abilitiesTypes.Défense",
  Déplacement: "SR.abilitiesTypes.Déplacement",
  Amelioration: "SR.abilitiesTypes.Amelioration",
  Altération: "SR.abilitiesTypes.Altération",
  Invocation: "SR.abilitiesTypes.Invocation",
  Control: "SR.abilitiesTypes.Control",
  Perception: "SR.abilitiesTypes.Perception",
  Récuperation: "SR.abilitiesTypes.Récuperation",
};
shaanRenaissance.abilitiesDomains = {
  Technique: "SRdomains.Technique",
  Savoir: "SRdomains.Savoir",
  Social: "SRdomains.Social",
  Arts: "SRdomains.Arts",
  Shaan: "SRdomains.Shaan",
  Magie: "SRdomains.Magie",
  Rituels: "SRdomains.Rituels",
  Survie: "SRdomains.Survie",
  Combat: "SRdomains.Combat",
  Nécrose: "SRdomains.Nécrose",
};
shaanRenaissance.bestiaryBrowser = {
  type: {
    Créature: "SR.creature",
    PNJ: "SR.PNJ",
  },
  class: {
    Mammifère: "SR.mammifere",
    Poisson: "SR.poisson",
    Oiseau: "SR.oiseau",
    Reptile: "SR.reptile",
    Mollusquien: "SR.mollusquien",
    Crustacé: "SR.crustace",
    Amphibien: "SR.amphibien",
    Insectoïde: "SR.insectoide",
    Créature: "SR.creature",
    Monstre: "SR.monstre",
  },
  role: {
    "Prédateur alpha": "SR.alphapredateur",
    Prédateur: "SR.predateur",
    Omnivore: "SR.omnivore",
    Herbivore: "SR.herbivore",
    Recycleur: "SR.recycleur",
  },
};
shaanRenaissance.activeEffectChanges = {
  spés: {
    Technique: {
      "system.skills.Technique.specialisations.engrenages.acquis": "SRActiveEffect.changes.engrenagesAcquis",
      "system.skills.Technique.specialisations.pilotage.acquis": "SRActiveEffect.changes.pilotageAcquis",
      "system.skills.Technique.specialisations.recuperation.acquis": "SRActiveEffect.changes.recuperationAcquis",
      "system.skills.Technique.specialisations.sensdelapierre.acquis": "SRActiveEffect.changes.sensdelapierreAcquis",
      "system.skills.Technique.specialisations.sensdubois.acquisbonus": "SRActiveEffect.changes.sensduboisAcquis",
      "system.skills.Technique.specialisations.sensducuir.acquis": "SRActiveEffect.changes.sensducuirAcquis",
      "system.skills.Technique.specialisations.sensdumetal.acquis": "SRActiveEffect.changes.sensdumetalAcquis",
      "system.skills.Technique.specialisations.sensdutissu.acquis": "SRActiveEffect.changes.sensdutissuAcquis",
      "system.skills.Technique.specialisations.sensduverre.acquis": "SRActiveEffect.changes.sensduverreAcquis",
      "system.skills.Technique.specialisations.technologie.acquis": "SRActiveEffect.changes.technologieAcquis",
    },
    Savoir: {
      "system.skills.Savoir.specialisations.alchimie.acquis": "SRActiveEffect.changes.alchimieAcquis",
      "system.skills.Savoir.specialisations.bibliotheque.acquis": "SRActiveEffect.changes.bibliothequeAcquis",
      "system.skills.Savoir.specialisations.botanique.acquis": "SRActiveEffect.changes.botaniqueAcquis",
      "system.skills.Savoir.specialisations.culturehumaine.acquis": "SRActiveEffect.changes.culturehumaineAcquis",
      "system.skills.Savoir.specialisations.esoterisme.acquis": "SRActiveEffect.changes.esoterismeAcquis",
      "system.skills.Savoir.specialisations.geologie.acquis": "SRActiveEffect.changes.geologieAcquis",
      "system.skills.Savoir.specialisations.histoiredheos.acquis": "SRActiveEffect.changes.histoiredheosAcquis",
      "system.skills.Savoir.specialisations.medecine.acquis": "SRActiveEffect.changes.medecineAcquis",
      "system.skills.Savoir.specialisations.protocoles.acquis": "SRActiveEffect.changes.protocolesAcquis",
      "system.skills.Savoir.specialisations.zoologie.acquis": "SRActiveEffect.changes.zoologieAcquis",
    },
    Social: {
      "system.skills.Social.specialisations.arpege.acquis": "SRActiveEffect.changes.arpegeAcquis",
      "system.skills.Social.specialisations.bluff.acquis": "SRActiveEffect.changes.bluffAcquis",
      "system.skills.Social.specialisations.commerce.acquis": "SRActiveEffect.changes.commerceAcquis",
      "system.skills.Social.specialisations.diplomatie.acquis": "SRActiveEffect.changes.diplomatieAcquis",
      "system.skills.Social.specialisations.enseignement.acquis": "SRActiveEffect.changes.enseignementAcquis",
      "system.skills.Social.specialisations.langageprimal.acquis": "SRActiveEffect.changes.langageprimalAcquis",
      "system.skills.Social.specialisations.languesexotiques.acquis": "SRActiveEffect.changes.languesexotiquesAcquis",
      "system.skills.Social.specialisations.psychologie.acquis": "SRActiveEffect.changes.psychologieAcquis",
      "system.skills.Social.specialisations.seduction.acquis": "SRActiveEffect.changes.seductionAcquis",
      "system.skills.Social.specialisations.vieurbaine.acquis": "SRActiveEffect.changes.vieurbaineAcquis",
    },
    Arts: {
      "system.skills.Arts.specialisations.artsappliques.acquis": "SRActiveEffect.changes.artsappliquesAcquis",
      "system.skills.Arts.specialisations.artsdufeu.acquis": "SRActiveEffect.changes.artsdufeuAcquis",
      "system.skills.Arts.specialisations.chant.acquis": "SRActiveEffect.changes.chantAcquis",
      "system.skills.Arts.specialisations.comedie.acquis": "SRActiveEffect.changes.comedieAcquis",
      "system.skills.Arts.specialisations.deguisement.acquis": "SRActiveEffect.changes.deguisementAcquis",
      "system.skills.Arts.specialisations.gastronomie.acquis": "SRActiveEffect.changes.gastronomieAcquis",
      "system.skills.Arts.specialisations.langageducorps.acquis": "SRActiveEffect.changes.langageducorpsAcquis",
      "system.skills.Arts.specialisations.lettres.acquis": "SRActiveEffect.changes.lettresAcquis",
      "system.skills.Arts.specialisations.musique.acquis": "SRActiveEffect.changes.musiqueAcquis",
      "system.skills.Arts.specialisations.trucages.acquis": "SRActiveEffect.changes.trucagesAcquis",
    },
    Shaan: {
      "system.skills.Shaan.specialisations.embiose.acquis": "SRActiveEffect.changes.embioseAcquis",
      "system.skills.Shaan.specialisations.empathieanimale.acquis": "SRActiveEffect.changes.empathieanimaleAcquis",
      "system.skills.Shaan.specialisations.empathieantheenne.acquis": "SRActiveEffect.changes.empathieantheenneAcquis",
      "system.skills.Shaan.specialisations.empathieminerale.acquis": "SRActiveEffect.changes.empathiemineraleAcquis",
      "system.skills.Shaan.specialisations.empathievegetale.acquis": "SRActiveEffect.changes.empathievegetaleAcquis",
      "system.skills.Shaan.specialisations.intuition.acquis": "SRActiveEffect.changes.intuitionAcquis",
      "system.skills.Shaan.specialisations.reve.acquis": "SRActiveEffect.changes.reveAcquis",
      "system.skills.Shaan.specialisations.soinsdelame.acquis": "SRActiveEffect.changes.soinsdelameAcquis",
      "system.skills.Shaan.specialisations.soinsdelesprit.acquis": "SRActiveEffect.changes.soinsdelespritAcquis",
      "system.skills.Shaan.specialisations.soinsducorps.acquis": "SRActiveEffect.changes.soinsducorpsAcquis",
    },
    Magie: {
      "system.skills.Magie.specialisations.arcanes.acquis": "SRActiveEffect.changes.arcanesAcquis",
      "system.skills.Magie.specialisations.conjuration.acquis": "SRActiveEffect.changes.conjurationAcquis",
      "system.skills.Magie.specialisations.defensemagique.acquis": "SRActiveEffect.changes.defensemagiqueAcquis",
      "system.skills.Magie.specialisations.enchantement.acquis": "SRActiveEffect.changes.enchantementAcquis",
      "system.skills.Magie.specialisations.invocation.acquis": "SRActiveEffect.changes.invocationAcquis",
      "system.skills.Magie.specialisations.incandescence.acquis": "SRActiveEffect.changes.incandescenceAcquis",
      "system.skills.Magie.specialisations.maitrisedesschemes.acquis": "SRActiveEffect.changes.maitrisedesschemesAcquis",
      "system.skills.Magie.specialisations.regenerationdetrihn.acquis": "SRActiveEffect.changes.regenerationdetrihnAcquis",
      "system.skills.Magie.specialisations.transfert.acquis": "SRActiveEffect.changes.transfertAcquis",
      "system.skills.Magie.specialisations.voile.acquis": "SRActiveEffect.changes.voileAcquis",
    },
    Rituels: {
      "system.skills.Rituels.specialisations.ritedarts.acquis": "SRActiveEffect.changes.ritedartsAcquis",
      "system.skills.Rituels.specialisations.ritedecombat.acquis": "SRActiveEffect.changes.ritedecombatAcquis",
      "system.skills.Rituels.specialisations.ritedelanimal.acquis": "SRActiveEffect.changes.ritedelanimalAcquis",
      "system.skills.Rituels.specialisations.ritedemagie.acquis": "SRActiveEffect.changes.ritedemagieAcquis",
      "system.skills.Rituels.specialisations.ritedenecrose.acquis": "SRActiveEffect.changes.ritedenecroseAcquis",
      "system.skills.Rituels.specialisations.ritedesavoir.acquis": "SRActiveEffect.changes.ritedesavoirAcquis",
      "system.skills.Rituels.specialisations.ritedeshaan.acquis": "SRActiveEffect.changes.ritedeshaanAcquis",
      "system.skills.Rituels.specialisations.ritedesocial.acquis": "SRActiveEffect.changes.ritedesocialAcquis",
      "system.skills.Rituels.specialisations.ritedesurvie.acquis": "SRActiveEffect.changes.ritedesurvieAcquis",
      "system.skills.Rituels.specialisations.ritedetechnique.acquis": "SRActiveEffect.changes.ritedetechniqueAcquis",
    },
    Survie: {
      "system.skills.Survie.specialisations.acrobatie.acquis": "SRActiveEffect.changes.acrobatieAcquis",
      "system.skills.Survie.specialisations.caravane.acquis": "SRActiveEffect.changes.caravaneAcquis",
      "system.skills.Survie.specialisations.cultureheossienne.acquis": "SRActiveEffect.changes.cultureheossienneAcquis",
      "system.skills.Survie.specialisations.culturenecrosienne.acquis": "SRActiveEffect.changes.culturenecrosienneAcquis",
      "system.skills.Survie.specialisations.discretion.acquis": "SRActiveEffect.changes.discretionAcquis",
      "system.skills.Survie.specialisations.educationphysique.acquis": "SRActiveEffect.changes.educationphysiqueAcquis",
      "system.skills.Survie.specialisations.monture.acquis": "SRActiveEffect.changes.montureAcquis",
      "system.skills.Survie.specialisations.navigation.acquis": "SRActiveEffect.changes.navigationAcquis",
      "system.skills.Survie.specialisations.viesauvage.acquis": "SRActiveEffect.changes.viesauvageAcquis",
      "system.skills.Survie.specialisations.vigilance.acquis": "SRActiveEffect.changes.vigilanceAcquis",
    },
    Combat: {
      "system.skills.Combat.specialisations.armeslancees.acquis": "SRActiveEffect.changes.armeslanceesAcquis",
      "system.skills.Combat.specialisations.armesdemelee.acquis": "SRActiveEffect.changes.armesdemeleeAcquis",
      "system.skills.Combat.specialisations.armesaprojectiles.acquis": "SRActiveEffect.changes.armesaprojectilesAcquis",
      "system.skills.Combat.specialisations.armimales.acquis": "SRActiveEffect.changes.armimalesAcquis",
      "system.skills.Combat.specialisations.enginsdeguerre.acquis": "SRActiveEffect.changes.enginsdeguerreAcquis",
      "system.skills.Combat.specialisations.esquive.acquis": "SRActiveEffect.changes.esquiveAcquis",
      "system.skills.Combat.specialisations.forcer.acquis": "SRActiveEffect.changes.forcerAcquis",
      "system.skills.Combat.specialisations.intimidation.acquis": "SRActiveEffect.changes.intimidationAcquis",
      "system.skills.Combat.specialisations.pugilat.acquis": "SRActiveEffect.changes.pugilatAcquis",
      "system.skills.Combat.specialisations.strategie.acquis": "SRActiveEffect.changes.strategieAcquis",
    },
    Nécrose: {
      "system.skills.Nécrose.specialisations.armeshumaines.acquis": "SRActiveEffect.changes.armeshumainesAcquis",
      "system.skills.Nécrose.specialisations.biomorphie.acquis": "SRActiveEffect.changes.biomorphieAcquis",
      "system.skills.Nécrose.specialisations.cauchemar.acquis": "SRActiveEffect.changes.cauchemarAcquis",
      "system.skills.Nécrose.specialisations.contrebande.acquis": "SRActiveEffect.changes.contrebandeAcquis",
      "system.skills.Nécrose.specialisations.corruption.acquis": "SRActiveEffect.changes.corruptionAcquis",
      "system.skills.Nécrose.specialisations.explosifs.acquis": "SRActiveEffect.changes.explosifsAcquis",
      "system.skills.Nécrose.specialisations.fraude.acquis": "SRActiveEffect.changes.fraudeAcquis",
      "system.skills.Nécrose.specialisations.harcelement.acquis": "SRActiveEffect.changes.harcelementAcquis",
      "system.skills.Nécrose.specialisations.larcin.acquis": "SRActiveEffect.changes.larcinAcquis",
      "system.skills.Nécrose.specialisations.pactenecrotique.acquis": "SRActiveEffect.changes.pactenecrotiqueAcquis",
    },
  },
  protections: {
    "system.protections.esprit.value": "SRLabels.Esprit",
    "system.protections.ame.value": "SRLabels.Ame",
    "system.protections.corps.value": "SRLabels.Corps",
  },
};
