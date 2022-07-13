// 认为是nice的刻度
var SNAP_COUNT_ARRAY = [1, 1.2, 1.5, 2, 2.2, 2.4, 2.5, 3, 4, 5, 6, 7.5, 8, 10];
var DEFAULT_COUNT = 5; // 默认刻度值
export default (function (cfg) {
    var _a = cfg || {}, tickCount = _a.tickCount, tickInterval = _a.tickInterval;
    var _b = cfg || {}, min = _b.min, max = _b.max;
    min = isNaN(min) ? 0 : min;
    max = isNaN(max) ? 0 : max;
    var count = tickCount && tickCount >= 2 ? tickCount : DEFAULT_COUNT;
    // 计算interval， 优先取tickInterval
    var interval = tickInterval || getBestInterval({ tickCount: count, max: max, min: min });
    // 通过interval计算最小tick
    var minTick = Math.floor(min / interval) * interval;
    // 如果指定了tickInterval, count 需要根据指定的tickInterval来算计
    if (tickInterval) {
        var intervalCount = Math.abs(Math.ceil((max - minTick) / tickInterval)) + 1;
        // tickCount 作为最小 count 处理
        count = Math.max(count, intervalCount);
    }
    var ticks = [];
    var tickLength = 0;
    var fixedLength = getFixedLength(interval);
    while (tickLength < count) {
        ticks.push(toFixed(minTick + tickLength * interval, fixedLength));
        tickLength++;
    }
    return ticks;
});
var DECIMAL_LENGTH = 12;
function getFactor(number) {
    // 取正数
    number = Math.abs(number);
    var factor = 1;
    if (number === 0) {
        return factor;
    }
    // 小于1,逐渐放大
    if (number < 1) {
        var count = 0;
        while (number < 1) {
            factor = factor / 10;
            number = number * 10;
            count++;
        }
        // 浮点数计算出现问题
        if (factor.toString().length > DECIMAL_LENGTH) {
            factor = parseFloat(factor.toFixed(count));
        }
        return factor;
    }
    // 大于10逐渐缩小
    while (number > 10) {
        factor = factor * 10;
        number = number / 10;
    }
    return factor;
}
// 获取最佳匹配刻度
function getBestInterval(_a) {
    var tickCount = _a.tickCount, min = _a.min, max = _a.max;
    // 如果最大最小相等，则直接按1处理
    if (min === max) {
        return 1 * getFactor(max);
    }
    // 1.计算平均刻度间隔
    var avgInterval = (max - min) / (tickCount - 1);
    // 2.数据标准归一化 映射到[1-10]区间
    var factor = getFactor(avgInterval);
    var calInterval = avgInterval / factor;
    var calMax = max / factor;
    var calMin = min / factor;
    // 根据平均值推算最逼近刻度值
    var similarityIndex = 0;
    for (var index = 0; index < SNAP_COUNT_ARRAY.length; index++) {
        var item = SNAP_COUNT_ARRAY[index];
        if (calInterval <= item) {
            similarityIndex = index;
            break;
        }
    }
    var similarityInterval = getInterval(similarityIndex, tickCount, calMin, calMax);
    // 小数点位数还原到数据的位数, 因为similarityIndex有可能是小数，所以需要保留similarityIndex自己的小数位数
    var fixedLength = getFixedLength(similarityInterval) + getFixedLength(factor);
    return toFixed(similarityInterval * factor, fixedLength);
}
function getInterval(startIndex, tickCount, min, max) {
    var verify = false;
    var interval = SNAP_COUNT_ARRAY[startIndex];
    // 刻度值校验，如果不满足，循环下去
    for (var i = startIndex; i < SNAP_COUNT_ARRAY.length; i++) {
        if (intervalIsVerify({ interval: SNAP_COUNT_ARRAY[i], tickCount: tickCount, max: max, min: min })) {
            // 有符合条件的interval
            interval = SNAP_COUNT_ARRAY[i];
            verify = true;
            break;
        }
    }
    // 如果不满足, 依次缩小10倍，再计算
    if (!verify) {
        return 10 * getInterval(0, tickCount, min / 10, max / 10);
    }
    return interval;
}
// 刻度是否满足展示需求
function intervalIsVerify(_a) {
    var interval = _a.interval, tickCount = _a.tickCount, max = _a.max, min = _a.min;
    var minTick = Math.floor(min / interval) * interval;
    if (minTick + (tickCount - 1) * interval >= max) {
        return true;
    }
    return false;
}
// 计算小数点应该保留的位数
function getFixedLength(num) {
    var str = num.toString();
    var index = str.indexOf('.');
    var indexOfExp = str.indexOf('e-');
    var length = indexOfExp >= 0 ? parseInt(str.substr(indexOfExp + 2), 10) : str.substr(index + 1).length;
    if (length > 20) {
        // 最多保留20位小数
        length = 20;
    }
    return length;
}
// @antv/util fixedbase不支持科学计数法的判断，需要提mr
function toFixed(v, length) {
    return parseFloat(v.toFixed(length));
}
//# sourceMappingURL=linear-tick.js.map