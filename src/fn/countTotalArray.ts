export const countTotalArray = (data: Array<number>) => {
    const total = data.length === 0 ? 0 : data?.reduce(function (a, b) { return a + b; });
    return total
}