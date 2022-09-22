package Self.demo.services;
import java.util.Random;

import org.springframework.stereotype.Service;

@Service
public class RandomService {
    private String[] weaponList = {
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

    public String getRandom(){
        Random rand = new Random();
        int randomInt = rand.nextInt(13) + 1;
        return weaponList[randomInt];
    }
}
