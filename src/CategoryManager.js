import Category from './Category';

export default class CategoryManager 
{
    constructor(category) {
        if (!(category instanceof Category))
            throw new Error('Invalid category');

        this.category = category;
    }

    
}