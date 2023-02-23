import { Forfait } from "./forfait";

export const FORFAITS: Forfait[] = [
    {
        nom: 'Forfait numéro 1',
        description: 'Lorem ipsum…',
        code: 'ABC001',
        categories: ['Hébergement', 'Restauration', 'Détente'],
        etablissement: {
            nom_etablissement: 'Hotel Pur',
            coordonnees: {
                adresse: '1233, Avenue Des Gouverneurs',
                ville: 'Québec, QC.',
                telephone: '418-922-5385',
                courriel: 'tamanacomb@gmail.com',
                site_web: 'tamanaco.martinez.com',
            },
            description_etablissement: 'Lorem ipsum…',
        },
        date_debut: '09/11/22',
        date_fin: '15/11/22',
        prix: 1999,
        nouveau_prix: 999,
        premium: true,
        avis: [
            {
            note: 10,
            commentaires: '...'
            },
            {
            note: 0,
            commentaires: '...'
            },
            ],
    },
    {
        nom: 'Forfait numéro 2',
        description: 'Lorem ipsum…',
        code: 'ABC002',
        categories: ['Hébergement', 'Restauration', 'Détente'],
        etablissement: {
            nom_etablissement: 'Hotel Le Voyageur',
            coordonnees: {
                adresse: '1233, Avenue Des Gouverneurs',
                ville: 'Québec, QC.',
                telephone: '418-922-5385',
                courriel: 'tamanacomb@gmail.com',
                site_web: 'tamanaco.martinez.com',
            },
            description_etablissement: 'Lorem ipsum…',
        },
        date_debut: '09/11/22',
        date_fin: '15/11/22',
        prix: 2999,
        nouveau_prix: 1999,
        premium: true,
        avis: [
            {
            note: 10,
            commentaires: '...'
            },
            {
            note: 0,
            commentaires: '...'
            },
            ],
    },
    {
        nom: 'Forfait numéro 3',
        description: 'Lorem ipsum…',
        code: 'ABC003',
        categories: ['Hébergement', 'Restauration', 'Détente'],
        etablissement: {
            nom_etablissement: 'Hotel Universel',
            coordonnees: {
                adresse: '1233, Avenue Des Gouverneurs',
                ville: 'Québec, QC.',
                telephone: '418-922-5385',
                courriel: 'tamanacomb@gmail.com',
                site_web: 'tamanaco.martinez.com',
            },
            description_etablissement: 'Lorem ipsum…',
        },
        date_debut: '09/11/22',
        date_fin: '15/11/22',
        prix: 3999,
        nouveau_prix: 2999,
        premium: true,
        avis: [
            {
            note: 10,
            commentaires: '...'
            },
            {
            note: 0,
            commentaires: '...'
            },
            ],
    },
    {
        nom: 'Forfait numéro 4',
        description: 'Lorem ipsum…',
        code: 'ABC004',
        categories: ['Hébergement', 'Restauration', 'Détente'],
        etablissement: {
            nom_etablissement: 'Auberge Saint Antoine',
            coordonnees: {
                adresse: '1233, Avenue Des Gouverneurs',
                ville: 'Québec, QC.',
                telephone: '418-922-5385',
                courriel: 'tamanacomb@gmail.com',
                site_web: 'tamanaco.martinez.com',
            },
            description_etablissement: 'Lorem ipsum…',
        },
        date_debut: '09/11/22',
        date_fin: '15/11/22',
        prix: 4999,
        premium: false,
        avis: [
            {
            note: 10,
            commentaires: '...'
            },
            {
            note: 0,
            commentaires: '...'
            },
            ],
    },
    {
        nom: 'Forfait numéro 5',
        description: 'Lorem ipsum…',
        code: 'ABC005',
        categories: ['Hébergement', 'Restauration', 'Détente'],
        etablissement:  {
            nom_etablissement: 'Fairmont Le Château Frontenac',
            coordonnees: {
                adresse: '1233, Avenue Des Gouverneurs',
                ville: 'Québec, QC.',
                telephone: '418-922-5385',
                courriel: 'tamanacomb@gmail.com',
                site_web: 'tamanaco.martinez.com',
                },
            description_etablissement: 'Lorem ipsum…',
        },
        date_debut: '09/11/22',
        date_fin: '15/11/22',
        prix: 5999,
        premium: false,
        avis: [
            {
            note: 10,
            commentaires: '...'
            },
            {
            note: 0,
            commentaires: '...'
            },
            ],
    },

]


