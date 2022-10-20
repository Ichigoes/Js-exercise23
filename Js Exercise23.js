function shopping(input) {
    let budget = Number(input[0]);
    let gpu = Number(input[1]);
    let cpu = Number(input[2]);
    let ram = Number(input[3]);

    gpuPrice = gpu * 250;
    cpuPrice = 0.35 * gpuPrice * cpu;
    ramPrice = 0.1 * gpuPrice * ram;    
    totalSum = gpuPrice + cpuPrice + ramPrice;

    if (gpu > cpu) {
        discount = 0.15 * totalSum;
        totalSum -= discount;
    }


    if (budget >= totalSum) {
        let moneyLeft;
        moneyLeft = budget - totalSum;
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
    } else {
        moneyNeeded = totalSum - budget
        console.log(`Not enough money! You need ${Math.abs(moneyLeft).toFixed(2)} leva more!`)
    }

}

shopping(["900", "2", "1", "3"])