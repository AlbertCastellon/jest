const { resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct} = require('./product')
beforeEach(() => {
    resetProducts();
});
describe('addProduct', () => {
    it('should add a product', () => {
        expect(addProduct('manzanas', 5)).toBe('Las manzanas cuestan 5 €')
    })
    it('should throw error if name or price are undefined', () => {
        expect(() => addProduct('manzanas')).toThrow('Tienes que establecer nombre y precio')
    })
    it('should throw error if the product already exixst', () => {
        expect(() => addProduct('peras', 7)).toThrow('Este producto ya existe')
    })
})

describe('removeProduct', () => {
    it('should remove a product', () => {
        expect(removeProduct(0)).toBe(`El producto eliminado es peras`)
    })
    it('should throw error if the product does not exist', () => {
        expect(() => removeProduct(1)).toThrow('Este producto no existe')
    })
})

describe('getProduct', () => {
    it('should get a product by its id', () => {
        expect(getProduct(0)).toBe('El producto con id 0 es peras y cuesta 3 €')
    })
    it('should throw error if the product does not exist', () => {
        expect(() => getProduct(1)).toThrow('Este producto no existe')
    })
})

describe('updateProduct', () => {
    it('should get a product by its id', () => {
        expect(updateProduct(0, 'manzanas', 5)).toBe('El producto con id 0 ha sido cambiado a manzanas y cuesta 5 €')
    })
    it('should throw error if the product does not exist', () => {
        expect(() => updateProduct(1, 'manzanas', 5)).toThrow('Este producto no existe')
    })
})