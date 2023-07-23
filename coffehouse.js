import data from "./data.json" assert { type: "json" };
let container = document.getElementById("container");
let body = document.body;

function DiaChi_SDT() {
  let DiaChi_SDT = document.createElement("div");
  DiaChi_SDT.style.width = "100%";
  DiaChi_SDT.style.height = "45px";
  DiaChi_SDT.style.display = "flex";
  DiaChi_SDT.style.justifyContent = "center";

  let CanhGiua = document.createElement("div");
  CanhGiua.style.height = "100%";
  CanhGiua.style.width = "35%";
  CanhGiua.style.display = "flex";
  CanhGiua.style.justifyContent = "space-evenly";
  CanhGiua.style.marginRight = "130px";

  let DiaChi = document.createElement("div");
  DiaChi.style.display = "flex";
  DiaChi.style.alignItems = "center";

  let NoiDungDC = document.createElement("p");
  NoiDungDC.textContent = "149 Cửa hàng khắp cả nước";
  NoiDungDC.style.fontSize = "12px";
  NoiDungDC.style.fontFamily = "'SF Pro Text', sans-serif";
  NoiDungDC.style.color = "#00000099";

  let LogoDC = document.createElement("img");
  LogoDC.src =
    "https://file.hstatic.net/1000075078/file/vector_706a88566eab4f009bed6eea93cd890b.png";
  LogoDC.style.height = "22px";
  LogoDC.style.marginRight = "3px";

  let icon = document.createElement("i");
  icon.className = "fas fa-shopping-basket";
  icon.style.fontSize = "24px";
  icon.style.color = "black";
  icon.style.height = "45px";
  icon.style.width = "45px";
  icon.style.display = "flex";
  icon.style.justifyContent = "center";
  icon.style.alignItems = "center";
  icon.style.color = "orange";

  let dialogCart = document.createElement("dialog");
  dialogCart.id = "fastfood";
  dialogCart.innerHTML = `
      <form>
      <p>
        <label>
          Favorite animal:
          <select>
            <option value="default">Choose…</option>
            <option>Brine shrimp</option>
            <option>Red panda</option>
            <option>Spider monkey</option>
          </select>
        </label>
      </p>
      <div>
        <button value="cancel" formmethod="dialog">Cancel</button>
        <button id="confirmBtn" value="default">Thanh toán</button>
      </div>
    </form>
  `;
  const confirmBtn = dialogCart.querySelector("#confirmBtn");

  icon.addEventListener("click", () => {
    dialogCart.showModal();
  });

  confirmBtn.addEventListener("click", (event) => {
    thanhToan();
  });

  DiaChi.appendChild(LogoDC);
  DiaChi.appendChild(NoiDungDC);

  let SoDienThoai = document.createElement("div");
  SoDienThoai.style.display = "flex";
  SoDienThoai.style.alignItems = "center";
  SoDienThoai.style.marginLeft = "10%";

  let LogoSDT = document.createElement("img");
  LogoSDT.src =
    "https://file.hstatic.net/1000075078/file/group_8de276faa50c486b9d485826c506803b.png";
  LogoSDT.style.marginRight = "5px";

  let NoiDungSDT = document.createElement("p");
  NoiDungSDT.textContent = "Đặt hàng: 1800.6936";
  NoiDungSDT.style.fontSize = "12px";
  NoiDungSDT.style.fontFamily = "'SF Pro Text', sans-serif";
  NoiDungSDT.style.color = "#00000099";

  SoDienThoai.appendChild(LogoSDT);
  SoDienThoai.appendChild(NoiDungSDT);

  CanhGiua.appendChild(DiaChi);
  CanhGiua.appendChild(SoDienThoai);
  CanhGiua.appendChild(dialogCart);
  CanhGiua.appendChild(icon);

  DiaChi_SDT.appendChild(CanhGiua);

  return DiaChi_SDT;
}

function thanhToan() {
  let total = 0;
  for (let i = 0; i < Marketcart.length; i++) {
    let indexTea = data.foods.findIndex(
      (value) => value.id == Marketcart[i].id
    );
    if (indexTea != -1) {
      total += data.foods[indexTea].price * Marketcart[i].quantity;
    }
  }
  alert(total);
}

function NavBar() {
  let NavBar = document.createElement("div");
  NavBar.style.height = "60px";
  NavBar.style.width = "100%";
  NavBar.style.display = "flex";
  NavBar.style.alignItems = "center";
  NavBar.style.borderBottom = "1px solid #F6F1F1";

  let CanhLeNavBar = document.createElement("div");
  CanhLeNavBar.style.height = "100%";
  CanhLeNavBar.style.width = "80%";
  CanhLeNavBar.style.alignItems = "center";
  CanhLeNavBar.style.display = "Flex";
  CanhLeNavBar.style.justifyContent = "space-evenly";

  let Logo = document.createElement("img");
  Logo.src =
    "https://cdn.haitrieu.com/wp-content/uploads/2022/03/logo-the-coffee-house-chieu-dai.png";
  Logo.style.height = "15px";
  Logo.style.marginLeft = "8%";

  CanhLeNavBar.appendChild(Logo);

  let Option = [
    "Cà Phê",
    "Trà",
    "Menu",
    "Chuyện Nhà",
    "Cảm Hứng CloudFee",
    "Cửa Hàng",
    "Tuyển Dụng",
  ];

  let OptionBox = document.createElement("div");
  OptionBox.style.display = "flex";
  OptionBox.style.alignItems = "end";
  OptionBox.style.justifyContent = "space-between";

  for (let i = 0; i < Option.length; i++) {
    let OptionButton = document.createElement("button");
    OptionButton.innerHTML = Option[i];
    OptionButton.style.backgroundColor = "white";
    OptionButton.style.border = "none";
    OptionButton.style.fontSize = "14px";
    OptionButton.style.fontFamily = "'SF Pro Text', sans-serif";
    OptionButton.style.fontWeight = "600";
    OptionButton.style.justifyContent = "space-between";
    OptionButton.style.padding = "19px 18px";
    OptionButton.style.cursor = "pointer";
    OptionButton.onmouseover = function () {
      this.style.color = "orange";
    };
    OptionButton.onmouseout = function () {
      this.style.color = "black";
    };

    OptionBox.appendChild(OptionButton);
  }

  CanhLeNavBar.appendChild(OptionBox);

  NavBar.appendChild(CanhLeNavBar);
  return NavBar;
}

function MenuItem() {
  let MenuItem = document.createElement("div");
  MenuItem.style.width = "100%";
  MenuItem.style.display = "flex";
  MenuItem.style.paddingTop = "20px";

  let MenuItemTitle = document.createElement("p");
  MenuItemTitle.textContent = "Trà tại nhà";
  MenuItemTitle.style.width = "80%";
  MenuItemTitle.style.fontFamily = "'SF Pro Display', sans-serif";
  MenuItemTitle.style.fontWeight = "600";
  MenuItemTitle.style.fontSize = "24px";

  MenuItem.appendChild(MenuItemTitle);
  return MenuItem;
}

/**
 *
 * @param {Tea} tea
 * @returns
 */
function BuildItemCard(tea) {
  let ItemCard = document.createElement("div");
  Object.assign(ItemCard.style, {
    "font-family": "'SF Pro Display', sans-serif",
    "max-width": "280px",
    "font-size": "16px",
    margin: "0px 5px 10px",
  });

  ItemCard.innerHTML = `<img src="${tea.image}" style="width: 100%; border-radius: 10px; height: 280px; object-fit: cover; box-shadow: 0 -2px 8px 0 rgba(0, 0, 0, 0.2), 0 -2px 20px 0 rgba(0, 0, 0, 0.19);">
    <div style="margin-top: 5px;">
    <h4 style="margin-bottom: 4px;">${tea.name}</h4>
    <p style="margin-top: 5px">${tea.price} đ</p>
    <p style="margin-top: 5px">Quantity: ${tea.quantity}</p>
    </div>`;

  let divButton = document.createElement("div");
  divButton.style.display = "flex";
  divButton.style.justifyContent = "center";

  let buttonAdd = document.createElement("button");
  buttonAdd.className = "btnAdd";
  Object.assign(buttonAdd.style, {
    width: "90%",
    backgroundColor: "green",
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    margin: "4px 2px",
    cursor: "pointer",
  });
  buttonAdd.textContent = "Add";
  buttonAdd.onclick = function () {
    addCartToMarket(tea);
  };

  divButton.appendChild(buttonAdd);
  ItemCard.appendChild(divButton);
  return ItemCard;
}

let Marketcart = [];
/**
 *
 * @param {Tea} tea
 * @returns
 */
function addCartToMarket(tea) {
  let itemTea;
  let indexTea = data.foods.findIndex((value) => value.id == tea.id);
  // console.log(tea);
  if (Marketcart.length == 0) {
    itemTea = {
      id: tea.id,
      name: tea.name,
      quantity: 1,
    };
    Marketcart.push(itemTea);
    data.foods[indexTea].quantity--;
  } else {
    let indexCard = Marketcart.findIndex((value) => value.id == tea.id);
    if (indexCard != -1) {
      if (data.foods[indexTea].quantity + 1 >= Marketcart[indexCard].quantity) {
        Marketcart[indexCard].quantity++;
        data.foods[indexTea].quantity--;
      } else {
        alert("hết hàng");
      }
    } else {
      itemTea = {
        id: tea.id,
        name: tea.name,
        quantity: 1,
      };
      Marketcart.push(itemTea);
      data.foods[indexTea].quantity--;
    }
  }
  console.log(Marketcart);
  console.log(data.foods);
}

let NewDiaChi_SDT = DiaChi_SDT();
let NewNavBar = NavBar();
let NewMenuItem = MenuItem();

let listCard = document.createElement("div");
listCard.style.display = "grid";
listCard.style.gridGap = "1rem";
listCard.style.gridTemplateColumns = "repeat(auto-fit, minmax(250px, 1fr))";

listCard.style.justifyContent = "center";

let ContainerCard = document.createElement("div");
ContainerCard.style.padding = "0px 170px 0px 170px";

class Tea {
  /**
   * @param {String} id
   * @param {Number} quantity
   * @param {String} name
   * @param {Number} price
   * @param {String} image
   */

  constructor(id, quantity, name, price, image) {
    this.id = id;
    this.quantity = quantity;
    this.name = name;
    this.price = price;
    this.image = image;
  }
}

for (let i = 0; i < data.foods.length; i++) {
  let item = new Tea();
  item = {
    id: data.foods[i].id,
    name: data.foods[i].name,
    price: data.foods[i].price,
    image: data.foods[i].image,
    quantity: data.foods[i].quantity,
  };
  let newItem = BuildItemCard(item);
  listCard.appendChild(newItem);
}

ContainerCard.appendChild(NewMenuItem);
ContainerCard.appendChild(listCard);

container.appendChild(NewDiaChi_SDT);
container.appendChild(NewNavBar);
container.appendChild(ContainerCard);

let gioHang = [];

/**
 * @param {Tea} tea
 */
function addCart(tea) {
  if (gioHang == 0) {
    gioHang.pu;
  }
}

document.querySelectorAll(".btnAdd").forEach((item, index) => {
  item.addEventListener("click", () => {
    addCart(index);
  });
});
