// 思路1: 双循环，暴力解法
// 第一次接触题目，首先肯定是想到暴力解法，通过双循环遍历数组，找nums[i] + nums[j] === target。
// 时间复杂度: O(n^2)O(n2)
// 空间复杂度: O(1)O(1)


var twoSum = function(nums, target) {
    for(let i = 0, len = nums.length;i < len;i++){
        // 因为同一元素不允许重复出现，所以从i的下一位开始遍历
        for(let j = i + 1;j < len;j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    // 所有样例都是有返回结果的，这里无所谓
    return [-1, -1];
};

// 思路2: 一次循环，使用HashMap进行记录
// 通过HashMap，在循环的时候进行查找我们将HashMap的Key定位nums[i]，Value定义为i。
// 那么，每次循环到一个数的时候，我们就可以在HashMap中查找是否存在key === target - nums[i]，如果存在则可以直接返回对应的两个下标，否则，将当前的值记入到HashMap中。
// 时间复杂度：O(n)O(n)
// 空间复杂度：O(n)O(n)


var twoSum = function(nums, target) {
    const map = new Map();
    for(let i = 0, len = nums.length;i < len;i++) {
        if(map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        }
        map.set(nums[i], i);
    }
    return [];
};
