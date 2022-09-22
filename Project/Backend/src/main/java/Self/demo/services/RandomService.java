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

    private int indexNum = 0;

    public String getRandom(){
        Random rand = new Random();
        int randomInt = rand.nextInt(13) + 1;
        setIndex(randomInt);
        return weaponList[randomInt];
    }

    public String getRandomNoDup(){
        while(true){
            Random rand = new Random();
            int randomInt = rand.nextInt(13) + 1;
            if(randomInt != getIndex()){
                setIndex(randomInt);
                return weaponList[randomInt];
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
