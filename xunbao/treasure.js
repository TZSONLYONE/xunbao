// 模拟显示每个步骤的动画
function displayStep(stepId, delay = 2000) {
    return new Promise(resolve => {
        const stepElement = document.getElementById(stepId);
        setTimeout(() => {
            stepElement.classList.add('visible');
            resolve();
        }, delay);
    });
}

// 玩家解答谜题
async function solvePuzzle() {
    return new Promise(resolve => {
        const hint = "提示：我总是前进，但永远不会后退。它不可以被触摸，但却会改变一切。";
        const answer = prompt(`图书馆里的谜题：'我总是前进，但永远不会后退。是什么？'\n\n${hint}`);
        if (answer.toLowerCase() === '时间') {
            resolve('谜题解答正确！');
        } else {
            resolve('谜题解答错误！提示：再想想，可以改变一切的是什么？');
        }
    });
}

// 玩家破解密码
async function crackPassword() {
    return new Promise(resolve => {
        const hint = "提示：密码是一个简单的四位数，代表四个季节的顺序。";
        const password = prompt(`请输入密码：\n\n${hint}`);
        if (password === '1234') {
            resolve('密码正确！宝藏位置揭晓！');
        } else {
            resolve('密码错误！提示：它是数字1234，代表一年四季。');
        }
    });
}

// 模拟迷宫路径选择
async function choosePath() {
    return new Promise(resolve => {
        const hint = "提示：迷宫中右侧的路径通向光明，而左侧可能充满未知的危险。";
        const path = prompt(`你来到了迷宫，选择路径：左（L）或右（R）\n\n${hint}`);
        if (path.toLowerCase() === 'r') {
            resolve('选择正确，继续前进！');
        } else {
            resolve('糟糕，迷路了！提示：右侧的路径是通向宝藏的正确路径。');
        }
    });
}

// 战斗小游戏
async function battleGuard() {
    return new Promise(resolve => {
        const hint = "提示：当你看到守卫抬起剑的时候，是时候反应了！";
        const fight = prompt(`神庙守卫出现！快速反应：输入'攻击'以击败他们！\n\n${hint}`);
        if (fight.toLowerCase() === '攻击') {
            resolve('你成功击败了守卫！');
        } else {
            resolve('你未能反应及时，守卫阻止了你！提示：快速反应击败守卫！');
        }
    });
}

// 修改的寻宝过程
async function findTreasureWithAsyncAwait() {
    try {
        await displayStep("step1", 1000); // 第一步
        let puzzleResult = await solvePuzzle();
        alert(puzzleResult); // 提示玩家谜题结果
        await displayStep("step2", 1000); // 第二步
        let passwordResult = await crackPassword();
        alert(passwordResult); // 提示玩家密码结果

        await displayStep("step3", 1000); // 第三步
        let pathResult = await choosePath();
        alert(pathResult); // 提示玩家路径选择结果

        await displayStep("step4", 1000); // 第四步
        let battleResult = await battleGuard();
        alert(battleResult); // 提示玩家战斗结果

        await displayStep("step5", 1000); // 第五步
        await displayStep("step6", 1000); // 第六步
        alert('恭喜！你找到了宝藏！');

    } catch (error) {
        console.error("任务失败:", error);
    }
}

// 启动寻宝过程
findTreasureWithAsyncAwait();
