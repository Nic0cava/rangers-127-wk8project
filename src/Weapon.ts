import { v4 as uuidv4 } from 'uuid'
class Weapon {
    id: string
    name: string
    power: number
    quantity: number
    description: string


    constructor(name: string, power: number, quantity: number, description: string) {
        this.id = uuidv4()
        this.name = name
        this.power = power
        this.quantity = quantity
        this.description = description

    }
}

export { Weapon}