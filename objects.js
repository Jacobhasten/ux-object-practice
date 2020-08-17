/*
    Object Practice

    Gardening!

    You were hired to work as a landscaper for a large estate.

    See garden.jpg

    The owner wants you to help them organize their gardens.

    They have decided there will be three gardens: the rose arbor, 
    the perennial garden, and the slope planters.

    You want to use your newly learned programming skills to make
    this job easier.  

    Complete the following exercises to make your work on the garden easier.
*/

/*
    Note, To run the tests for an exercise run the entire file!
    Do not just highlight a section and try to run it, because the tests will
    throw an exception 
    ReferenceError: createdPopulatedEstate is not defined

    If you see that exception, make sure you deselect any text and then click Run Code again

    Remember to Save the file before you click Run Code!
*/

/* ---------------------------------------------------------------------------
    Exercise One

    Creating a plant

    In order to keep track of your plants, you need to store them in your program.
    Complete the createPlant() function, which returns an object representing a plant.
    It should include all of the properties listed in the comment above the function.
*/
/**
 * createPlant - Produces an object respresenting a plant.  It should have the following properties:
 * @param {string} type - The Type of plant.  Possible values are [ "rose", "orchid", "lily", "lavender", "poppy", "begonia", "snapdragon", "marigold"] 
 * @param {boolean} isPerennial - A boolean showing if the plant is a perennial or not
 * @param {string} leafDescription - A visual description of the leaves
 * @param {string} leafColor - A string representing the leaf color
 * @param {string} flowerColor - A string representing the color of the flower
 * @param {string} flowerDescription - A visual description of the flower
 * @param {number} gallonsWaterPerWeek - 0.0 to 3.0, representing the number of gallons of water needed per week for the plant
 * @param {number} amountOfSunNeeded - 0 to 10, representing the amount of sun needed
 */
class Plant {
    constructor(type, isPerennial, leafDescription, leafColor, flowerColor, flowerDescription, gallonsWaterPerWeek, amountOfSunNeeded) {

        this.type = type;
        this.isPerennial = isPerennial;
        this.leafDescription = leafDescription;
        this.leafColor = leafColor;
        this.flowerColor = flowerColor;
        this.flowerDescription = flowerDescription;
        this.gallonsWaterPerWeek = gallonsWaterPerWeek;
        this.amountOfSunNeeded = amountOfSunNeeded;

    }
    changeColor() {
        let newColors = ["Amber", "Crimson", "Aqua", "Cerulean Blue", "Flamingo", "Gun Smoke", "Jade", "Merigold", "Mustard", "Periwinkle"];
        // ~~ Magic Genetic Engineering ~~
        let randIndex = Math.floor(Math.random() * newColors.length);

        if (this.isFlawed) {
            this.flowerDescription = "wilted sad buds with no pedals.";
            this.flowerColor = null;
        } else {
            this.flowerColor = newColors[randIndex];
        }

        let randomChance = Math.floor(Math.random() * 3);
        if (randomChance < 1) {
            this.isFlawed = true;
        }
    }
     describe() {
        let description = `A ${this.type} has gorgeous leaves that are ${this.Description} and unique flowers that are ${this.flowerColor} and have ${this.flowerDescription}. `;
    
        return description;
    }
    cloneRose() {
        let clone = {};
        for (let key in this) {
            if (this.hasOwnProperty(key)) {
                clone[key] = this[key];
            }
        }
        // Your Code Here!
        // Given a plant, clone it and return the new plant
        // Hint: You do this in the Reading!  copyObject...
    
        // changeColorOfPlant(clone);
        return clone;
    }

}

class Garden {
    constructor(name) {
      this.name = name;
      this.plants = [];
    }
    describe() {
        let description = `${this.name} has ${this.plants.length} types of plants in it. It contains:`;
        for (let plant of this.plants) {
            description += "\n" + plant.describe()
        }

        return description;
    }
    addPlant(plant) {
        this.plants.push(plant);
    }
  }

/* ------------------------------------------------
    Exercise Two

    The owner wants you to decide where to put every new plant they get.

    Each plant must go in one of the three gardens of the estate.

    The createEstate() has already been written for you, which returns an object representing the entire estate.
    The estate contains three collections of plants: 
    the roseArbor, the perennialGarden, and the slopePlanters.

    Now complete the function addPlantToEstate()
    This should decide, based upon the plant's properties, where to put the plant in the estate.  

    The rose arbor should contain all of the roses.
    The perennial garden should contain only perennials.  However, the perennial garden doesn't get that much sun.  
    No plants with an amountOfSunNeeded greater than 5 should be placed in the perennial garden.
    The rest of the plans should be placed in the slop planters.
*/

class Estate {
    constructor() {
        this.roseArbor = new Garden("Rose Arbor")
        this.perennialGarden = new Garden("Perennial Garden");
        this.slopePlanters = new Garden("Slope Planters");
}
    addPlant(plant) {
    if (plant.type === "rose") {
        this.roseArbor.plants.push(plant)
    } else if (plant.isPerennial && plant.amountOfSunNeeded <= 5) {
        this.perennialGarden.plants.push(plant)
    } else {
        this.slopePlanters.plants.push(plant)
    }
}
describe() {
    let description = `The estate has a beatiful display of ${this.length} intentionally organized plants in various gardens. `;

    for (let gardenName in this) {
        let listOfPlants = this[gardenName];
        description += listOfPlants.describe()
    }

    return description
}
calculateWaterUsagePerWeek() {
    let numGallons = 0;
    for (let gardenName in this) {
        let listOfPlants = this[gardenName].plants
        for (let plant of listOfPlants) {
            numGallons += plant.gallonsWaterPerWeek
        }
    }


    return Math.floor(numGallons);
}
cloneAllTheRosesAndChangeTheirColors() {
    // Your Code Here! 

    // for each rose...
    let clonedRoses = [];
    for (let gardenName in this) {
        let listOfPlants = this[gardenName].plants
        for (let plant of listOfPlants) {
            if (plant.type === "rose" && !plant.isFlawed) {
                clonedRoses.push(plant)
            }
        }
        for (let flower in clonedRoses) {
            listOfPlants.push(clonedRoses[flower]);
        }
    }


    // Hint: Watch out for modifying an array you are currently looping through!  How can you avoid that?
    // Instead of putting the new plants immediately into the rose arbor, maybe store them in a new array
    // until you have finished iterating.  Then you can add them in after your loop finishes.
}

} 



let myEstate = new Estate();
 
let firstPlant = new Plant("rose", true, "rounded with a point", "green", "red", "concentric circles of pedals", 0.8, 4);
myEstate.addPlant(firstPlant);
 
let secondPlant = new Plant("orchid", true, "long and wide with a point at the end", "green", "fuscia", "pedals surrounding a central mouth", 1.2, 2);
myEstate.addPlant(secondPlant);
 
let thirdPlant = new Plant("marigold", false, "thin and jagged along branches", "green", "yellow and orange", "rounded pedals in groups of five with a darker orange center", 0.8, 4);
myEstate.addPlant(thirdPlant);
 
myEstate.describe(); // This should print the whole description of the estate.
 
myEstate.calculateWaterUsagePerWeek(); // This should print 2.8
 
myEstate.cloneAllTheRosesAndChangeTheirColors(); // This should clone the rose and make a second one.
console.log(myEstate.roseArbor.plants.length == 2);