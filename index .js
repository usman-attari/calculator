#!usr/bin/env node
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let raimbowTitle = chalkAnimation.rainbow('Lets Start Calculation'); //start
    await sleep();
    raimbowTitle.stop();
}
welcome();
