type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish';

export const createMenuObject = (menuActive: MenuOptions) => {
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false,
    }

    if(menuActive !== '') {
        returnObject[menuActive] = true;
    }

    return returnObject;
}