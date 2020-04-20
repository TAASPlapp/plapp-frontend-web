export class PlantInfo {
    name: string;
    sname: string;
    description: string;
    wiki: string;
    watering: number;
    wamount: number;
    temperature: number;
    light: number;
    humidity: number;
    diseases: [{
        name: string;
        description: string;
        prevention: string;
        treating: string;
    }];

}
