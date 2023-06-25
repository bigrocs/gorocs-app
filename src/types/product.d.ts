/*
 * @Author: BigRocs
 * @Date: 2023-06-23 17:31:08
 * @LastEditTime: 2023-06-24 17:17:54
 * @LastEditors: BigRocs
 * @Description: QQ: 532388887, Email:bigrocs@qq.com
 */
export interface Product {
  plu: string; // 商品 PLU 编码
  barcode: string; // 商品条形码
  name: string; // 商品名称
  price: number; // 商品价格
  snapshotId: string; // 商品快照ID
}

export const sampleProducts: Product[] = [
  {
    plu: '10001',
    barcode: '2700000010015',
    name: '苹果',
    price: 5.99,
    snapshotId: '16fb269d190d2c85f6e0468ceca42a20',
  },
  {
    plu: '10002',
    barcode: '2700000020029',
    name: '香蕉',
    price: 3.99,
    snapshotId: '26fb269d190d2c85f6e0468ceca42a20',
  },
  {
    plu: '10003',
    barcode: '2700000030039',
    name: '橙子',
    price: 4.50,
    snapshotId: '36fb269d190d2c85f6e0468ceca42a20',
  },
  {
    plu: '10004',
    barcode: '2700000040046',
    name: '西瓜',
    price: 8.99,
    snapshotId: '46fb269d190d2c85f6e0468ceca42a20',
  },
  {
    plu: '10005',
    barcode: '2700000050053',
    name: '菠萝',
    price: 6.25,
    snapshotId: '56fb269d190d2c85f6e0468ceca42a20',
  },
  {
    plu: '10006',
    barcode: '2700000060060',
    name: '葡萄',
    price: 9.99,
    snapshotId: '66fb269d190d2c85f6e0468ceca42a20',
  },
  {
    plu: '10007',
    barcode: '2700000070077',
    name: '芒果',
    price: 12.99,
    snapshotId: '76fb269d190d2c85f6e0468ceca42a20',
  },
  {
    plu: '10008',
    barcode: '2700000080084',
    name: '草莓',
    price: 7.50,
    snapshotId: '86fb269d190d2c85f6e0468ceca42a20',
  },
  {
    plu: '10009',
    barcode: '2700000090091',
    name: '桃子',
    price: 5.75,
    snapshotId: '96fb269d190d2c85f6e0468ceca42a20',
  },
  {
    plu: '10010',
    barcode: '2700000100107',
    name: '樱桃',
    price: 18.99,
    snapshotId: '10fb269d190d2c85f6e0468ceca42a20',
  },
];
