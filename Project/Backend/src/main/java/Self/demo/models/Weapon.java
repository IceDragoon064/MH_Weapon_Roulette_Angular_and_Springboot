package Self.demo.models;

public class Weapon {
    /* 
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
    */
    private int id;
    private String weaponName;

    public Weapon(int id, String name) {
        this.id = id;
        this.weaponName = name;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public void setWeaponName(String weaponName) {
        this.weaponName = weaponName;
    }

    public String getWeaponName() {
        return weaponName;
    }
}
