import { Request, Response } from 'express';
import { Pet } from '../models/Pet';
import { createMenuObject } from '../helpers/createMenuObject';

export const home = (req: Request, res: Response) => {
    let list = Pet.getAll();

    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            background: 'allanimals.jpg',
            title: 'Todos os Animais'
        },
        list
    });
}
export const dogs = (req: Request, res: Response) => {
    let list = Pet.getFromType('dog');

    res.render('pages/page', {
        menu: createMenuObject('dog'),
        banner: {
            background: 'banner_dog.jpg',
            title: 'Cães'
        },
        list
    });
}
export const cats = (req: Request, res: Response) => {
    let list = Pet.getFromType('cat');

    res.render('pages/page', {
        menu: createMenuObject('cat'),
        banner: {
            background: 'banner_cat.jpg',
            title: 'Gatos'
        },
        list
    });
}
export const fishes = (req: Request, res: Response) => {
    let list = Pet.getFromType('fish');

    res.render('pages/page', {
        menu: createMenuObject('fish'),
        banner: {
            background: 'banner_fish.jpg',
            title: 'Peixes'
        },
        list
    });
}