export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    imageURL: string;

    constructor(id, name, description = '', price = 0, category = 'Mens',
                imageURL = 'https://lallahoriye.com.tirzee.com/wp-content/uploads/2019/04/Product_Lg_Type.jpg'){

        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.imageURL = imageURL;

    }
}
