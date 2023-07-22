const { promises } = require("dns");
const readline = require("readline");

function wait(second) {
  let waitPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, second * 1000);
  });
  return waitPromise;
}

async function getCustomerName() {
  const rlName = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve, reject) => {
    rlName.question("Hỏi mẹ tên được ghi trên chiếc bánh: ", (input) => {
      rlName.close();
      resolve(input);
    });
  });
}

async function getAge() {
  const rlAge = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve, reject) => {
    rlAge.question("Hỏi mẹ tuổi được ghi trên chiếc bánh: ", (input) => {
      resolve(parseInt(input));
      rlAge.close();
    });
  });
}

async function getSize() {
  const rlSize = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve, reject) => {
    rlSize.question("Hỏi mẹ Size chiếc bánh(S, M, L):", (input) => {
      rlSize.close();
      resolve(input);
    });
  });
}

function MoneyOfSize(Size) {
  if (Size == "S" || Size == "s") {
    return 169000;
  } else if (Size == "M" || Size == "m") {
    return 233000;
  } else if (Size == "L" || Size == "l") {
    return 510000;
  } else {
    return 0;
  }
}

async function getMoney(moneyExpect) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let moneyGet;
  return new Promise(async (resolve, reject) => {
    console.log("Mẹ cho tiền đê");
    await new Promise((resolve, reject) => {
      rl.on("line", (input) => {
        moneyGet = parseInt(input);
        resolve(moneyGet);
        rl.close();
      });
    });

    if (moneyGet >= moneyExpect) {
      resolve(["Ok đủ tiền rồi đi mua bánh thôi", moneyGet]);
    } else {
      reject("Mẹ cho hỏng đủ tiền");
    }
  });
}

async function diMua() {
  console.log("Đi mua nguyên liệu nào!");
  await wait(4);
  console.log("Đi về nào!");
  await wait(2);
}

async function soChe() {
  console.log("Sơ chế nguyên liệu");
  await wait(3);
  console.log("Sơ chế thành công");
}

async function lamBanh() {
  async function lamBotbanh() {
    return new Promise(async (resolve, reject) => {
      console.log("Làm Bột Bánh Thôi");
      await wait(5);
      console.log("Làm Bột Bánh Xong");
      resolve();
    });
  }
  async function danhKem() {
    return new Promise(async (resolve, reject) => {
      console.log("Đánh kem Thôi");
      await wait(3);
      console.log("đánh xong!");
      resolve();
    });
  }
  async function uBanh() {
    return new Promise(async (resolve, reject) => {
      console.log("Ủ bánh Thôi");
      await wait(8);
      console.log("cuối cùng cũng ủ xong!");
      resolve();
    });
  }

  async function doKhuon() {
    return new Promise(async (resolve, reject) => {
      console.log("Đổ bánh vào khuôn thôi");
      await wait(1);
      console.log("Xong!!!");
      resolve();
    });
  }

  async function nuongBanh() {
    return new Promise(async (resolve, reject) => {
      console.log("Nướng cháy bánh nào");
      await wait(6);
      console.log("Done!!!");
      resolve();
    });
  }

  async function quetKem() {
    return new Promise(async (resolve, reject) => {
      console.log("Quết kem nào");
      await wait(1);
      console.log("Xong!!!");
      resolve();
    });
  }

  async function trangTri() {
    return new Promise(async (resolve, reject) => {
      console.log("Custom bánh nào");
      await wait(2);
      console.log("Quá Đẹp");
      resolve();
    });
  }
  async function vietTen() {
    return new Promise(async (resolve, reject) => {
      console.log("Viết tên lên bánh nào");
      await wait(2);
      console.log("Perfect!");
      resolve();
    });
  }

  await Promise.all([lamBotbanh(), danhKem()]);
  await uBanh();
  await doKhuon();
  await nuongBanh();
  await quetKem();
  await Promise.all([trangTri(), vietTen()]);
}

async function Quat() {
  console.log("Quất!!!!!!!!!!!");
}

let main = async function () {
  await getCustomerName();
  console.log("Tên đẹp đấy");
  await wait(1);

  let age = await getAge();
  console.log(`${age} tuổi cơ à`);
  await wait(1);

  let size = await getSize();
  let moneyExpect = MoneyOfSize(size);
  await wait(1);

  await getMoney(moneyExpect)
    .then(async (value) => {
      let thongBao = value[0];
      let soTienDuocCho = parseInt(value[1]);
      //   console.log(`thông báo: ${value[0]}`);
      //   console.log(`số tiền cho: ${sot}`);
      console.log(thongBao);
      await diMua();
      await soChe();
      await lamBanh();
      await Quat();
      await wait(1);
      let tienThua = soTienDuocCho - moneyExpect;
      console.log(`còn dư ${tienThua}, vậy là trả tiền dư cho mẹ`);
    })
    .catch((value) => {
      console.log(value);
      console.log("Sủi!!!!!!!!!!!!!!!!!!!!!");
    });
};

main();
