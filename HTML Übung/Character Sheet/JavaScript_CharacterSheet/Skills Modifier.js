// 24.01.2019 working

document.getElementById('ExperiencePoints').addEventListener('input', ChangeExperience);

document.getElementById('AbilityScoreStrength').addEventListener('input', getSkills);
document.getElementById('AbilityScoreDexterity').addEventListener('input', getSkills);
document.getElementById('AbilityScoreConstitution').addEventListener('input', getSkills);
document.getElementById('AbilityScoreIntelligence').addEventListener('input', getSkills);
document.getElementById('AbilityScoreWisdom').addEventListener('input', getSkills);
document.getElementById('AbilityScoreCharisma').addEventListener('input', getSkills);

document.getElementById('CheckboxSkillsAcrobatics').addEventListener('input', getSkills);
document.getElementById('CheckboxSkillsAnimalHandling').addEventListener('input', getSkills);
document.getElementById('CheckboxSkillsArcana').addEventListener('input', getSkills);
document.getElementById('CheckboxSkillsAthletics').addEventListener('input', getSkills);
document.getElementById('CheckboxSkillsDeception').addEventListener('input', getSkills);
document.getElementById('CheckboxSkillsHistory').addEventListener('input', getSkills);
document.getElementById('CheckboxSkillsInsight').addEventListener('input', getSkills);
document.getElementById('CheckboxSkillsIntimidation').addEventListener('input', getSkills);
document.getElementById('CheckboxSkillsInvestigation').addEventListener('input', getSkills);
document.getElementById('CheckboxSkillsMedicine').addEventListener('input', getSkills);
document.getElementById('CheckboxSkillsNature').addEventListener('input', getSkills);
document.getElementById('CheckboxSkillsPerception').addEventListener('input', getSkills);
document.getElementById('CheckboxSkillsPerformance').addEventListener('input', getSkills);
document.getElementById('CheckboxSkillsPersuasion').addEventListener('input', getSkills);
document.getElementById('CheckboxSkillsReligion').addEventListener('input', getSkills);
document.getElementById('CheckboxSkillsSleightofHand').addEventListener('input', getSkills);
document.getElementById('CheckboxSkillsStealth').addEventListener('input', getSkills);
document.getElementById('CheckboxSkillsSurvival').addEventListener('input', getSkills);




function getSkills() {

    // Acrobatics --> Dexterity
    function getSkillsAcrobatics() {
        let SkillsAcrobatics = 0;
        const AcrobaticsCheckbox = document.getElementById('CheckboxSkillsAcrobatics');
        if (AcrobaticsCheckbox.checked == true) {
            SkillsAcrobatics = ProficencyBonus + AbilityScoreModifierDexterity;
        } else {
            SkillsAcrobatics = AbilityScoreModifierDexterity;
        }
        return SkillsAcrobatics;
    }

    // Animal Handling --> Wisdom
    function getSkillsAnimalHandling() {
        let SkillsAnimalHandling = 0;
        const AnimalHandlingCheckbox = document.getElementById('CheckboxSkillsAnimalHandling');
        if (AnimalHandlingCheckbox.checked == true) {
            SkillsAnimalHandling = ProficencyBonus + AbilityScoreModifierWisdom;
        } else {
            SkillsAnimalHandling = AbilityScoreModifierWisdom;
        }
        return SkillsAnimalHandling;
    }

    // Arcana --> Intelligence
    function getSkillsArcana() {
        let SkillsArcana = 0;
        const ArcanaCheckbox = document.getElementById('CheckboxSkillsArcana');
        if (ArcanaCheckbox.checked == true) {
            SkillsArcana = ProficencyBonus + AbilityScoreModifierIntelligence;
        } else {
            SkillsArcana = AbilityScoreModifierIntelligence;
        }
        return SkillsArcana;
    }

    // Athletics --> Strength
    function getSkillsAthletics() {
        let SkillsAthletics = 0;
        const AthleticsCheckbox = document.getElementById('CheckboxSkillsAthletics');
        if (AthleticsCheckbox.checked == true) {
            SkillsAthletics = ProficencyBonus + AbilityScoreModifierStrength;
        } else {
            SkillsAthletics = AbilityScoreModifierStrength;
        }
        return SkillsAthletics;
    }

    // Deception --> Charisma
    function getSkillsDeception() {
        let SkillsDeception = 0;
        const DeceptionCheckbox = document.getElementById('CheckboxSkillsDeception');
        if (DeceptionCheckbox.checked == true) {
            SkillsDeception = ProficencyBonus + AbilityScoreModifierCharisma;
        } else {
            SkillsDeception = AbilityScoreModifierCharisma;
        }
        return SkillsDeception;
    }

    // History --> Intelligence
    function getSkillsHistory() {
        let SkillsHistory = 0;
        const HistoryCheckbox = document.getElementById('CheckboxSkillsHistory');
        if (HistoryCheckbox.checked == true) {
            SkillsHistory = ProficencyBonus + AbilityScoreModifierIntelligence;
        } else {
            SkillsHistory = AbilityScoreModifierIntelligence;
        }
        return SkillsHistory;
    }

    // Insight --> Wisdom
    function getSkillsInsight() {
        let SkillsInsight = 0;
        const InsightCheckbox = document.getElementById('CheckboxSkillsInsight');
        if (InsightCheckbox.checked == true) {
            SkillsInsight = ProficencyBonus + AbilityScoreModifierWisdom;
        } else {
            SkillsInsight = AbilityScoreModifierWisdom;
        }
        return SkillsInsight;
    }

    // Intimidation --> Charisma
    function getSkillsIntimidation() {
        let SkillsIntimidation = 0;
        const IntimidationCheckbox = document.getElementById('CheckboxSkillsIntimidation');
        if (IntimidationCheckbox.checked == true) {
            SkillsIntimidation = ProficencyBonus + AbilityScoreModifierCharisma;
        } else {
            SkillsIntimidation = AbilityScoreModifierCharisma;
        }
        return SkillsIntimidation;
    }

    // Investigation --> Intelligence
    function getSkillsInvestigation() {
        let SkillsInvestigation = 0;
        const InvestigationCheckbox = document.getElementById('CheckboxSkillsInvestigation');
        if (InvestigationCheckbox.checked == true) {
            SkillsInvestigation = ProficencyBonus + AbilityScoreModifierIntelligence;
        } else {
            SkillsInvestigation = AbilityScoreModifierIntelligence;
        }
        return SkillsInvestigation;
    }

    // Medicine --> Wisdom
    function getSkillsMedicine() {
        let SkillsMedicine = 0;
        const MedicineCheckbox = document.getElementById('CheckboxSkillsMedicine');
        if (MedicineCheckbox.checked == true) {
            SkillsMedicine = ProficencyBonus + AbilityScoreModifierWisdom;
        } else {
            SkillsMedicine = AbilityScoreModifierWisdom;
        }
        return SkillsMedicine;
    }

    // Nature --> Intelligence
    function getSkillsNature() {
        let SkillsNature = 0;
        const NatureCheckbox = document.getElementById('CheckboxSkillsNature');
        if (NatureCheckbox.checked == true) {
            SkillsNature = ProficencyBonus + AbilityScoreModifierIntelligence;
        } else {
            SkillsNature = AbilityScoreModifierIntelligence;
        }
        return SkillsNature;
    }     

    // Perception --> Wisdom
    function getSkillsPerception() {
        let SkillsPerception = 0;
        const PerceptionCheckbox = document.getElementById('CheckboxSkillsPerception');
        if (PerceptionCheckbox.checked == true) {
            SkillsPerception = ProficencyBonus + AbilityScoreModifierWisdom;
        } else {
            SkillsPerception = AbilityScoreModifierWisdom;
        }
        return SkillsPerception;
    }

    // Performance --> Charisma
    function getSkillsPerformance() {
        let SkillsPerformance = 0;
        const PerformanceCheckbox = document.getElementById('CheckboxSkillsPerformance');
        if (PerformanceCheckbox.checked == true) {
            SkillsPerformance = ProficencyBonus + AbilityScoreModifierCharisma;
        } else {
            SkillsPerformance = AbilityScoreModifierCharisma;
        }
        return SkillsPerformance;
    } 

    // Persuasion --> Charisma
    function getSkillsPersuasion() {
        let SkillsPersuasion = 0;
        const PersuasionCheckbox = document.getElementById('CheckboxSkillsPersuasion');
        if (PersuasionCheckbox.checked == true) {
            SkillsPersuasion = ProficencyBonus + AbilityScoreModifierCharisma;
        } else {
            SkillsPersuasion = AbilityScoreModifierCharisma;
        }
        return SkillsPersuasion;
    } 

    // Religion --> Intelligence
    function getSkillsReligion() {
        let SkillsReligion = 0;
        const ReligionCheckbox = document.getElementById('CheckboxSkillsReligion');
        if (ReligionCheckbox.checked == true) {
            SkillsReligion = ProficencyBonus + AbilityScoreModifierIntelligence;
        } else {
            SkillsReligion = AbilityScoreModifierIntelligence;
        }
        return SkillsReligion;
    } 

    // Sleight of Hands --> Dexterity
    function getSkillsSleightofHand() {
        let SkillsSleightofHand = 0;
        const SleightofHandCheckbox = document.getElementById('CheckboxSkillsSleightofHand');
        if (SleightofHandCheckbox.checked == true) {
            SkillsSleightofHand = ProficencyBonus + AbilityScoreModifierDexterity;
        } else {
            SkillsSleightofHand = AbilityScoreModifierDexterity;
        }
        return SkillsSleightofHand;
    } 

    // Stealth--> Dexterity
    function getSkillsStealth() {
        let SkillsStealth = 0;
        const StealthCheckbox = document.getElementById('CheckboxSkillsStealth');
        if (StealthCheckbox.checked == true) {
            SkillsStealth = ProficencyBonus + AbilityScoreModifierDexterity;
        } else {
            SkillsStealth = AbilityScoreModifierDexterity;
        }
        return SkillsStealth;
    } 

    // Survival--> Wisdom
    function getSkillsSurvival() {
        let SkillsSurvival = 0;
        const SurvivalCheckbox = document.getElementById('CheckboxSkillsSurvival');
        if (SurvivalCheckbox.checked == true) {
            SkillsSurvival = ProficencyBonus + AbilityScoreModifierWisdom;
        } else {
            SkillsSurvival = AbilityScoreModifierWisdom;
        }
        return SkillsSurvival;
    } 

     

    document.getElementById('SkillsAcrobatics').innerHTML = getSkillsAcrobatics();
    document.getElementById('SkillsAnimalHandling').innerHTML = getSkillsAnimalHandling();
    document.getElementById('SkillsArcana').innerHTML = getSkillsArcana();
    document.getElementById('SkillsAthletics').innerHTML = getSkillsAthletics();
    document.getElementById('SkillsDeception').innerHTML = getSkillsDeception();
    document.getElementById('SkillsHistory').innerHTML = getSkillsHistory();
    document.getElementById('SkillsInsight').innerHTML = getSkillsInsight();
    document.getElementById('SkillsIntimidation').innerHTML = getSkillsIntimidation();
    document.getElementById('SkillsInvestigation').innerHTML = getSkillsInvestigation();
    document.getElementById('SkillsMedicine').innerHTML = getSkillsMedicine();
    document.getElementById('SkillsNature').innerHTML = getSkillsNature();
    document.getElementById('SkillsPerception').innerHTML = getSkillsPerception();
    document.getElementById('SkillsPerformance').innerHTML = getSkillsPerformance();
    document.getElementById('SkillsPersuasion').innerHTML = getSkillsPersuasion();
    document.getElementById('SkillsReligion').innerHTML = getSkillsReligion();
    document.getElementById('SkillsSleightofHand').innerHTML = getSkillsSleightofHand();
    document.getElementById('SkillsStealth').innerHTML = getSkillsStealth();
    document.getElementById('SkillsSurvival').innerHTML = getSkillsSurvival();

}

