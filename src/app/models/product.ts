export interface Product {
    _id: string,
    name: string,
    imageUrl: string[],
    description: string,
    category: string[],
    sold_price: number,
    regular_price: number,
    created_at: Date,
    updated_at?: Date,
}
