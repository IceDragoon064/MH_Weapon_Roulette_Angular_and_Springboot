package Self.demo.services;
import java.util.Random;
import Self.demo.models.Weapon;
import org.springframework.stereotype.Service;

@Service
public class RandomService {
    private int indexNum = 0;
    private String[] weaponL = {
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

    public Weapon getRandom(){
        Random rand = new Random();
        int randomInt = rand.nextInt(13) + 1;
        Weapon weapon = new Weapon(randomInt, weaponL[randomInt]);
        setIndex(randomInt);
        return weapon;
    }

    public Weapon getRandomNoDup(){
        while(true){
            Random rand = new Random();
            int randomInt = rand.nextInt(13) + 1;
            if(randomInt != getIndex()){
                Weapon weapon = new Weapon(randomInt, weaponL[randomInt]);
                setIndex(randomInt);
                return weapon;
            }
        }
    }

    private void setIndex(int indexNn){
        this.indexNum = indexNn;
    }

    private int getIndex(){
        return this.indexNum;
    }
}
