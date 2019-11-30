// Working 24.03.2019
// Missing: Changes other than Race

document.getElementById('CharacterRace').addEventListener('input', getSpeed);

function getSpeed() {
    const Race = document.getElementById('CharacterRace');

    function getSpeedRace() {
        if (Race.options[Race.selectedIndex].value === 'Dwarf' || Race.options[Race.selectedIndex].value === 'Gnome' || Race.options[Race.selectedIndex].value === 'Halfling') {
            Speed = 25;
        } else {
            Speed = 30;
        }
        return Speed; 
    }
    document.getElementById('Speed').innerHTML = getSpeedRace();

}
