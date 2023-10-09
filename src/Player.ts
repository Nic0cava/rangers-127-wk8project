import { v4 as uuidv4 } from 'uuid'
import { Weapon } from './Weapon'
class Player {
    id: string
    name: string
    age: number
    inventory: Weapon[]


    constructor(name: string, age: number) {
        this.id = uuidv4()
        this.name = name
        this.age = age
        this.inventory = []

    }
    addToInventory(weapon: Weapon): void {
        this.inventory.push(weapon);
    }

    static loginInPlayer(): Player | null {
        const name = document.getElementById('name') as HTMLInputElement;
        const age = document.getElementById('age') as HTMLInputElement;

        if (name && age) {
            const userName = name.value;
            const userAge = parseInt(age.value);

            if (userName && userAge) {
                return new Player(userName, userAge);
            }
        }

        return null;
    }

    removeFromInventory(weapon: Weapon): void {
        for (let i = this.inventory.length - 1; i >= 0; i--) {
            if (this.inventory[i].id === weapon.id) {
                this.inventory.splice(i, 1);
            }
        }
    }

    removeQuantityFromInventory(weapon: Weapon, quantity: number): void {
        for (let weapons of this.inventory) {
            if (weapons == weapon) {
                weapon.quantity -= quantity
            }
        }
    }




    inventoryTotal(): number {
        let total = 0;
        for (const weapon of this.inventory) {
            total += weapon.power;
        }
        return total;
    }

    printInventory(): void {
        console.log(this.inventory);
    }


}






export { Player }