

/*
 * @Author: BigRocs
 * @Date: 2023-06-23 17:31:08
 * @LastEditTime: 2023-06-25 08:45:50
 * @LastEditors: BigRocs
 * @Description: QQ: 532388887, Email:bigrocs@qq.com
 */
import pino from 'pino';

// const fileTransport = pino.transport({
//   target: 'pino/file',
//   options: { destination: `/app.log` },
// });
export default pino(
  {
    level: 'info',
    formatters: {
      level: (label) => {
        return { level: label.toUpperCase() };
      },
    },
    timestamp: pino.stdTimeFunctions.isoTime,
  },
);