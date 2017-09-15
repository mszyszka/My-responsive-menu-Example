function hamburgerBtn(x) {
    x.classList.toggle("change");
    document.getElementsByClassName("page-nav")[0].classList.toggle("nav-opened");
}
var subMenuNames = ["grapes-ul", "apples-ul", "oranges-ul", "pineapple-ul", "bananas-ul"];
var subMenuNamesNapis = "";

function takeSubMenuNames() {
    var subMenuNamesNapis = "";
    for (i = 0; i < subMenuNames.length; i++) {
        subMenuNamesNapis = subMenuNamesNapis +" "+ subMenuNames[i];
    }
}

function openSubmenuGrapes(x) {
    document.getElementsByClassName("oranges-ul")[0].classList.remove("submenu-opened");
    document.getElementsByClassName("pineapple-ul")[0].classList.remove("submenu-opened");
    document.getElementsByClassName("bananas-ul")[0].classList.remove("submenu-opened");
    document.getElementsByClassName("apples-ul")[0].classList.remove("submenu-opened");
    document.getElementsByClassName("grapes-ul")[0].classList.toggle("submenu-opened");
}

function openSubmenuApples(x) {
    document.getElementsByClassName("grapes-ul")[0].classList.remove("submenu-opened");
    document.getElementsByClassName("oranges-ul")[0].classList.remove("submenu-opened");
    document.getElementsByClassName("pineapple-ul")[0].classList.remove("submenu-opened");
    document.getElementsByClassName("bananas-ul")[0].classList.remove("submenu-opened");
    document.getElementsByClassName("apples-ul")[0].classList.toggle("submenu-opened");
}

function openSubmenuOranges(x) {
    document.getElementsByClassName("grapes-ul")[0].classList.remove("submenu-opened");
    document.getElementsByClassName("pineapple-ul")[0].classList.remove("submenu-opened");
    document.getElementsByClassName("bananas-ul")[0].classList.remove("submenu-opened");
    document.getElementsByClassName("apples-ul")[0].classList.remove("submenu-opened");
    document.getElementsByClassName("oranges-ul")[0].classList.toggle("submenu-opened");
}

function openSubmenuPineapple(x) {
    document.getElementsByClassName("grapes-ul")[0].classList.remove("submenu-opened");
    document.getElementsByClassName("oranges-ul")[0].classList.remove("submenu-opened");
    document.getElementsByClassName("bananas-ul")[0].classList.remove("submenu-opened");
    document.getElementsByClassName("apples-ul")[0].classList.remove("submenu-opened");
    document.getElementsByClassName("pineapple-ul")[0].classList.toggle("submenu-opened");
}

function openSubmenuBananas(x) {
    document.getElementsByClassName("grapes-ul")[0].classList.remove("submenu-opened");
    document.getElementsByClassName("oranges-ul")[0].classList.remove("submenu-opened");
    document.getElementsByClassName("pineapple-ul")[0].classList.remove("submenu-opened");
    document.getElementsByClassName("apples-ul")[0].classList.remove("submenu-opened");
    document.getElementsByClassName("bananas-ul")[0].classList.toggle("submenu-opened");
}