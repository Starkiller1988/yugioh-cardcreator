export default interface YugiohCard {
    id: string;
    name: string;
    attribute: string;
    cardtype: string;
    normalLevel: number;
    xyzLevel: number;
    type: string;
    race: string;
    description: string;
    attack: number;
    defence: number;
    image: string;
}