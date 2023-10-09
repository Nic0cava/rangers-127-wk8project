import { Weapon } from './Weapon'
import { Player } from './Player'
import { v4 as uuidv4 } from 'uuid'
let myUuid = uuidv4()
console.log(myUuid)

function createPlayer(name: string, age: number): Player {
  const player = new Player(name, age)
  return player;
}
const player1 = createPlayer('Guts', 25);
console.log(player1);


function createWeapon(name: string, power: number, quantity: number, description: string): Weapon {
  const weapon = new Weapon(name, power, quantity, description)
  return weapon;
}
const weapon = createWeapon('Sword', 25, 4, 'Large long sword');
console.log(weapon);


function run(): void {
  // Create a new player
  const player2 = createPlayer('Mike Doe', 22);
  console.log(player2);
  // Createing 3 weapons with power, quantity, and description 
  const weapon1 = new Weapon('Club', 15, 5, 'large wood club for knocking out demons');
  const weapon2 = new Weapon('Bow', 20, 4, 'average bow great for long distance');
  const weapon3 = new Weapon('Sword', 30, 1, 'large long sword');
  // Add weapon1 to the players inventory
  player2.addToInventory(weapon1);
  console.log(player2.printInventory());
  // Add more weapons to players inventory
  player2.addToInventory(weapon2);
  player2.addToInventory(weapon3);
 
  console.log(player2.printInventory());
  // Print the total
  console.log(player2.inventoryTotal());
  // Remove weapons
  player2.removeFromInventory(weapon3);
  player2.removeFromInventory(weapon1);
  player2.removeFromInventory(weapon2);
  
  console.log(player2.printInventory());
  // Print the total
  console.log(player2.inventoryTotal());

}
console.log(run())



// // Step 1: Create Types and Classes
// type Class = "Orge" | "Peon" | "Knight" | "Archer";

// interface Character {
//   id: string;
//   name: string;
//   class: Class;
//   weapon: string;
//   gold: number;
//   health: number;
//   power: number;
//   action(vs: Character | Demon): void;
// }

// // Demon
// interface Demon {
//   id: string;
//   rank: number; // Demons have 5 diffierent ranks (5 is very weak -> 1 is very strong)
//   health: number;
//   power: number;
//   gold: number;
//   action(vs: Character | Demon): void;
// }

// interface Attack {
//   action(vs: Character | Demon): void;
// }

// class DarkMagic implements Attack {
//     action(vs: Character | Demon): void {
//       if ('power' in vs) {
//         vs.health -= 15;
//       }
//     }
//   }


// class Club implements Attack {
//   action(vs: Character | Demon): void {
//     if ('power' in vs) {
//       vs.health -= 15;
//     }
//   }
// }

// class Magic implements Attack {
//     action(vs: Character | Demon): void {
//       if ('power' in vs) {
//         vs.health -= 30;
//       }
//     }
//   }

// class Sword implements Attack {
//   action(vs: Character | Demon): void {
//     if ('power' in vs) {
//       vs.health -= 25;
//     }
//   }
// }

// class Bow implements Attack {
//   action(vs: Character | Demon): void {
//     if ('power' in vs) {
//         vs.health -= 20;
//       }
//   }
// }

// // Step 2: Create Characters and Enemies

// class Tank implements Character {
//   id: string;
//   name: string;
//   class: Class;
//   weapon: string;
//   gold: number;
//   health: number;
//   power: number;

//   private readonly attack: Attack = new Club();

//   constructor(name: string) {
//     this.id = uuidv4();
//     this.name = name;
//     this.class = 'Orge';
//     this.weapon = 'Club';
//     this.gold = 20;
//     this.health = 120;
//     this.power = 15;
//   }

//   action(vs: Character | Demon): void {
//     this.attack.action(vs);
//   }
// }

// class Wizard implements Character {
//   id: string;
//   name: string;
//   class: Class;
//   weapon: string;
//   gold: number;
//   health: number;
//   power: number;

//   private readonly attack: Attack = new Magic();

//   constructor(name: string) {
//     this.id = uuidv4();
//     this.name = name;
//     this.class = 'Peon';
//     this.weapon = 'Club';
//     this.gold = 20;
//     this.health = 60;
//     this.power = 30;
//   }

//   action(vs: Character | Demon): void {
//     this.attack.action(vs);
//   }
// }

// class Knight implements Character {
//   id: string;
//   name: string;
//   class: Class;
//   weapon: string;
//   gold: number;
//   health: number;
//   power: number;

//   private readonly attack: Attack = new Sword();

//   constructor(name: string) {
//     this.id = uuidv4();
//     this.name = name;
//     this.class = 'Knight';
//     this.weapon = 'Sword';
//     this.gold = 20;
//     this.health = 80;
//     this.power = 25;
//   }

//   action(vs: Character | Demon): void {
//     this.attack.action(vs);
//   }
// }

// class Archer implements Character {
//     id: string;
//     name: string;
//     class: Class;
//     weapon: string;
//     gold: number;
//     health: number;
//     power: number;
  
//     private readonly attack: Attack = new Bow();
  
//     constructor(name: string) {
//       this.id = uuidv4();
//       this.name = name;
//       this.class = 'Archer';
//       this.weapon = 'Bow';
//       this.gold = 20;
//       this.health = 80;
//       this.power = 20;
//     }
  
//     action(vs: Character | Demon): void {
//       this.attack.action(vs);
//     }
//   }

//   class Demon implements Demon {
//     id: string;
//     rank: number; // Demons have 5 diffierent ranks (5 is very weak -> 1 is very strong)
//     health: number;
//     power: number;
//     gold: number;
  
//     private readonly attack: Attack = new DarkMagic();
  
//     constructor(rank:number, health:number , power:number ,gold:number) {
//       this.id = uuidv4();
//       this.rank = rank;
//       this.gold = gold;
//       this.health = health;
//       this.power = power;
//     }
  
//     action(vs: Character | Demon): void {
//       this.attack.action(vs);
//     }
//   }

// // Step 4: Create Players and Demons

// const theTank = new Tank("Jim");
// const theWizard = new Wizard("Sam");
// const theKnight = new Knight("Guts");
// const theArcher = new Archer("Robin");

// const Demon5 = new Demon(5, 60, 15, 20)

// // Step 5: Combat
// console.log("--- Players ---");
// console.log(theTank);
// console.log(theWizard);
// console.log(theKnight);
// console.log(theArcher);

// console.log("\n--- Combat ---");

// console.log(`${theKnight.name} encounters a Demon of rank ${Demon5.rank} in combat!`);

// // Player attacks
// console.log(`${theKnight.name} attacks!`);
// theKnight.action(Demon5);

// // Check if Demon health reaches 0

// if (Demon5.health <= 0) {
//     console.log(`The Demon is defeated!`);
//   } else {
//     console.log(`The Demon remains standing with ${Demon5.health} health!`);
//   }


// // Demon attacks
// console.log('Demon attacks back!')
// Demon5.action(theKnight)

// // Check Knight health
// console.log(`${theKnight.name} has ${theKnight.health} health left`)


// // Player attacks
// console.log(`${theKnight.name} attacks!`);
// theKnight.action(Demon5);


// // Check Demon health
// if (Demon5.health <= 0) {
//     console.log(`The Demon is defeated!`);
//   } else {
//     console.log(`The Demon remains with ${Demon5.health} health!`);
//   }


// // Demon attacks
// console.log('Demon attacks back!')
// Demon5.action(theKnight)

// // Check Knight health
// console.log(`${theKnight.name} has ${theKnight.health} health left`)

// // Player attacks
// console.log(`${theKnight.name} attacks!`);
// theKnight.action(Demon5);


// // Check Demon health
// if (Demon5.health <= 0) {
//     console.log(`The Demon is defeated!`);
//   } else {
//     console.log(`The Demon remains with ${Demon5.health} health!`);
//   }


// // Step 6: Collecting Gold

// console.log("\n--- Collect Gold ---");

// // Collect gold after defeating the Demon

// theKnight.gold += Demon5.gold;

// console.log(`${theKnight.name} collected ${Demon5.gold} from defeating the Demon`);
// console.log(`${theKnight.name} now has ${theKnight.gold} gold in total`)