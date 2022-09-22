package Self.demo.models;

public class Weapon {
    private String[] weaponArray = {
        "Great Sword",
        "Long Sword",
        "Sword & Shield",
        "Dual Blades",
        "Lance",
        "Gunlance",
        "Hammer",
        "Hunting Horn",
        "Switch Axe",
        "Charge Blade",
        "Insect Glaive",
        "Light Bowgun",
        "Heavy Bowgun",
        "Bow",
    };

    public Weapon() {
        
    }

    public String getAWeaponByIndex(int i){
        return weaponArray[i];
    }
}
