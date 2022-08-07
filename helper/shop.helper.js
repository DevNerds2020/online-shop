export const calculateTotalCount = (products) => {
    let totalCount = 0
    for (const product of products) {
        totalCount += product.count;
    }
    return totalCount;
}