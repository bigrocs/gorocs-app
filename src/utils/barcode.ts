/*
 * @Author: BigRocs
 * @Date: 2023-06-24 16:27:01
 * @LastEditTime: 2023-06-24 16:58:36
 * @LastEditors: BigRocs
 * @Description: QQ: 532388887, Email:bigrocs@qq.com
 */
const EAN8_LENGTH = 8;
const UPC_A_LENGTH = 11;
const UPC_E_LENGTH = 12;
const EAN13_LENGTH = 13;

export default {
    // 校验条形码
    isBarcodeValid: (code:string) => {
        if (code.length === EAN8_LENGTH) { // EAN-8
            code = '00000' + code
        }
        if (code.length === UPC_A_LENGTH) { // UPC-A
            code = '06' + code
        }
        if (code.length === UPC_E_LENGTH) { // UPC-E
            code = '0' + code
        }
        if (code.length === EAN13_LENGTH) { // EAN-13
            code = code
        }
        const length = code.length
        const res = code
        .substr(0, 12)
        .split('')
        .map((n) => +n)
        .reduce((sum, a, idx) => (
          idx % 2 ? sum + a * 3 : sum + a
        ), 0)
        const checksum = (10 - (res % 10)) % 10
        return Number(checksum) === Number(code[length-1])
    },
}