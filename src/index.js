/**
 * Сортирует массив, содержащий вложенные массивы.
 *
 * @param {array<array>} matrix Массив, содержащий вложенные массивы, который необходимо отсортировать.
 * @return {array} преобразованный массив.
 */
module.exports = function towelSort(matrix) {
    let res = [];
    if (!matrix) {
        return [];
    } else {
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 !== 0) {
                res.push(matrix[i].reverse());
            } else {
                res.push(matrix[i]);
            }
        }
        return res.flat();
    }
};
