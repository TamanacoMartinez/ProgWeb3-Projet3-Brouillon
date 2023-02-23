import { Avis } from "./avis";
import { Etablissement } from "./etablissement";

export interface Forfait {
    nom: string;
    description: string; 
    code: string;
    categories?: string[];
    etablissement?: Etablissement;
    date_debut?: string;
    date_fin?: string;
    prix: number;
    nouveau_prix?: number;
    premium?: boolean;
    avis?: Avis[];
}
