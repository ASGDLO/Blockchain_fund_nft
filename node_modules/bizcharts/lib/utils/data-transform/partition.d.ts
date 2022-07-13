/** 数据分片
 * @param {any[]} rows
 * @param {(string | string[] | ((item: any) => string))} group_by
 * @param {(string | string[] | ((item: any) => number))} [order_by=[]]
 * @returns {Record<string, any[]>}
 */
declare function partition(rows: any[], group_by: string | string[] | ((item: any) => string), order_by?: string | string[] | ((item: any) => number)): Record<string, any[]>;
export default partition;
