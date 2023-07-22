const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function wait(second) {
  let waitPromise = new Promise((resolver, rejector) => {
    setTimeout(() => {
      resolver();
    }, second * 1000);
  });
  return waitPromise;
}

async function askForDinner() {
  console.log("Hỏi mẹ ăn gì");
  await wait(1);
  console.log("Ăn cơm với thịt và canh chua");
  return 200; //Expect money
}

async function getMoney(moneyExpect) {
  let moneyGet;
  return new Promise(async (resolve, reject) => {
    console.log("Lấy tiền mẹ thôi!!!!");
    await new Promise((resolve, reject) => {
      rl.on("line", (input) => {
        moneyGet = parseInt(input);
        resolve();
        rl.close();
      });
    });

    if (moneyGet >= moneyExpect) {
      resolve("Ok đủ tiền đi chợ");
    } else {
      reject("Mẹ cho hỏng đủ tiền");
    }
  });
}
async function goToMarket() {
  console.log("Bắt đầu đi chợ");
  await wait(4);
  console.log("Bắt đầu về");
  await wait(2);
  console.log("Về đến nhà rồi nè mẹ ơi!!!!!!!!!!");
}

async function cook() {
  async function soChe() {
    return new Promise(async (res, rej) => {
      console.log("Sơ chế nguyên liệu\n==================");
      console.log("\n1.Lặt rau");
      console.log("2.Thái thịt");
      console.log("3.Vo gạo");
      await wait(5);
      console.log("sơ chế hoàn thành");
      res();
    });
  }
  async function nauCom() {
    return new Promise(async (resolve, reject) => {
      console.log("Bắt nồi cơm ");
      await wait(10);
      console.log("Cơm chín rồi!!!!!!!!");
      resolve();
    });
  }
  async function nauCanh() {
    return new Promise(async (resolve, reject) => {
      console.log("Bắt đầu nấu canh");
      await wait(5);
      console.log("Canh nấu xong");
      resolve();
    });
  }
  async function nauDoAn() {
    return new Promise(async (resolve, reject) => {
      console.log("Chiên thịt");
      console.log("chiên cá");
      await wait(3);
      console.log("Xong đồ ăn");
      resolve();
    });
  }
  await soChe();
  await Promise.all([nauCom(), nauCanh(), nauDoAn()]);
}
async function donCom() {
  await wait(2);
  console.log("Dọn lên bàn");
}
async function quat() {
  console.log("Mời ba mẹ ăn cơm");
  await wait(1);
  console.log("Quất!!!!!!!!!!!!!!!!!!!!!");
}
let main = async function () {
  let expectMoney = await askForDinner();
  await getMoney(expectMoney)
    .then(async (value) => {
      console.log(value);
      await goToMarket();
      await cook();
      await donCom();
      await quat();
    })
    .catch((value) => {
      console.log(value);
      console.log("Thôi ở nhà nhịn đói");
    });
};

main();
