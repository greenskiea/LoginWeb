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
    CanhGiua.style.marginRight = "130px"

    let DiaChi = document.createElement("div");
    DiaChi.style.display = "flex";
    DiaChi.style.alignItems = "center";

    let NoiDungDC = document.createElement("p");
    NoiDungDC.textContent = "149 Cửa hàng khắp cả nước";
    NoiDungDC.style.fontSize = "12px";
    NoiDungDC.style.fontFamily = "'SF Pro Text', sans-serif";
    NoiDungDC.style.color = "#00000099";

    let LogoDC = document.createElement("img");
    LogoDC.src = "https://file.hstatic.net/1000075078/file/vector_706a88566eab4f009bed6eea93cd890b.png"
    LogoDC.style.height = "22px";
    LogoDC.style.marginRight = "3px";

    DiaChi.appendChild(LogoDC);
    DiaChi.appendChild(NoiDungDC);
    

    let SoDienThoai = document.createElement("div");
    SoDienThoai.style.display = "flex";
    SoDienThoai.style.alignItems = "center";
    SoDienThoai.style.marginLeft = "10%";

    let LogoSDT = document.createElement("img");
    LogoSDT.src = "https://file.hstatic.net/1000075078/file/group_8de276faa50c486b9d485826c506803b.png"
    LogoSDT.style.marginRight = "5px";

    let NoiDungSDT = document.createElement("p");
    NoiDungSDT.textContent = "Đặt hàng: 1800.6936"
    NoiDungSDT.style.fontSize = "12px";
    NoiDungSDT.style.fontFamily = "'SF Pro Text', sans-serif";
    NoiDungSDT.style.color = "#00000099";

    
    SoDienThoai.appendChild(LogoSDT);
    SoDienThoai.appendChild(NoiDungSDT);

    CanhGiua.appendChild(DiaChi);
    CanhGiua.appendChild(SoDienThoai);
    DiaChi_SDT.appendChild(CanhGiua);
    return DiaChi_SDT;
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
    Logo.src = "https://cdn.haitrieu.com/wp-content/uploads/2022/03/logo-the-coffee-house-chieu-dai.png";
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

    for(let i = 0; i < Option.length; i++)
    {
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

        OptionBox.appendChild(OptionButton);
    }

    CanhLeNavBar.appendChild(OptionBox);

    NavBar.appendChild(CanhLeNavBar);
    return NavBar
}

function MenuItem () {
    let MenuItem = document.createElement("div");
    MenuItem.style.width = "100%";
    MenuItem.style.display = "flex";
    MenuItem.style.paddingTop = "20px"


    let MenuItemTitle = document.createElement("p");
    MenuItemTitle.textContent = "Trà tại nhà"
    MenuItemTitle.style.width = "80%"
    MenuItemTitle.style.fontFamily = "'SF Pro Display', sans-serif";
    MenuItemTitle.style.fontWeight = "600";
    MenuItemTitle.style.fontSize = "24px";

    MenuItem.appendChild(MenuItemTitle);
    return MenuItem;
}

function BuildItemCard(name, price, image) {
    let ItemCard = document.createElement("div");
    Object.assign(ItemCard.style, {
        "font-family": "'SF Pro Display', sans-serif",
        "max-width": "280px",
        "font-size": "16px",
        "margin": "0px 5px 10px",
    });
    
    ItemCard.innerHTML = `<img src="${image}" style="width: 100%; border-radius: 10px; height: 280px; object-fit: cover; box-shadow: 0 -2px 8px 0 rgba(0, 0, 0, 0.2), 0 -2px 20px 0 rgba(0, 0, 0, 0.19);">
    <div style="margin-top: 5px;">
    <h4 style="margin-bottom: 4px;">${name}</h4>
    <p style="margin-top: 5px">${price} đ</p>
    </div>`
    return ItemCard;
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

// let NewCardTraDao = BuildItemCard(
//     "Trà Vị Đào Tearoma 14x14g",
//     32.000,
//     "https://product.hstatic.net/1000075078/product/1669706771_bg-tradao-min_023afa26f3e943199fc468cc916ef936_large.jpg"
// )
// let NewCardTraSua = BuildItemCard(
//     "Trà Sữa Trân Châu Tearoma 250g",
//     "38.000",
//     "https://product.hstatic.net/1000075078/product/1669880647_bg-trasua-min_5f01ce93b1684d4e86010988be8559f4_large.jpg"
// )
// let NewCardTraMatOng = BuildItemCard(
//     "Trà Vị Tắc Mật Ong Tearoma 14x14g",
//     "32.000",
//     "https://product.hstatic.net/1000075078/product/1669706748_bg-tratatmatong-min_cbb8a839f404459d8efba52f566d79c9_large.jpg"
// )
// let NewCardTraOolong = BuildItemCard(
//     "Trà Oolong Túi Lọc Tearoma 20x2G",
//     "28.000",
//     "https://product.hstatic.net/1000075078/product/1639646968_tra-oolong-tui-loc-tearoma-20x2gr_d835290c7eed46cd860764777adc55d5_large.jpg"
// )
// let NewCardTraLai = BuildItemCard(
//     "Trà Lài Túi Lọc Tearoma 20x2G",
//     "28.000",
//     "https://product.hstatic.net/1000075078/product/1639647075_tra-lai-tui-loc-tearoma-20x2gr_4bdef73c8abd44ef893f167088c99a8f_large.jpg"
// )
// let NewCardTraSen = BuildItemCard(
//     "Trà Sen Túi Lọc Tearoma 20x2G",
//     "28.000",
//     "https://product.hstatic.net/1000075078/product/1639648068_tra-sen-tui-loc-tearoma-20x2gr_af088d6bf1934ef482a1da313a798ea0_large.jpg"
// )
// let NewCardTuiLocDao = BuildItemCard(
//     "Trà Đào Túi Lọc Tearoma 20x2G",
//     "28.000",
//     "https://product.hstatic.net/1000075078/product/1639646846_tra-dao-tui-loc-tearoma-20x2gr_0a91c5a70f4345218d731ef5328bc120_large.jpg"
// )
// let NewCardGiftSet = BuildItemCard(
//     "Giftset Trà Tearoma",
//     "166.000",
//     "https://product.hstatic.net/1000075078/product/1641440575_gift-set-tearoma-1_81a5aff3a4814cb786c61cbeeccfd71f_large.jpeg"
// )

class tea {
    /**
     * @param {String} name
     * @param {Number} price
     * @param {String} image
     */

    constructor(name,price,image){
        this.name = name;
        this.price = price;
        this.image = image;
    }
}




// listCard.appendChild(NewCardTraDao);
// listCard.appendChild(NewCardTraSua);
// listCard.appendChild(NewCardTraMatOng);
// listCard.appendChild(NewCardTraOolong);
// listCard.appendChild(NewCardTraLai);
// listCard.appendChild(NewCardTraSen);
// listCard.appendChild(NewCardTuiLocDao);
// listCard.appendChild(NewCardGiftSet);

for(let i=0; i<data.foods.length; i++)
{
    let item = data.foods[i]
    let newItem = BuildItemCard(item.name,item.price,item.image);
    listCard.appendChild(newItem);
}




ContainerCard.appendChild(NewMenuItem);
ContainerCard.appendChild(listCard);


container.appendChild(NewDiaChi_SDT);
container.appendChild(NewNavBar);
container.appendChild(ContainerCard);