const buyBtns = document.querySelectorAll('.js-buy-ticket') /* lấy ra và lưu lại 3 nút buy tickets vào biến buyBtns qua class .js-buy-ticket  */
const modal = document.querySelector('.js-modal') /* lấy class modal và lưu lại vào biến modal qua class .js-modal */
const modalClose = document.querySelector('.js-modal-close') /* lấy nút x và lưu lại vào biến modalClose qua class .js-modal-close*/
const modalContainer = document.querySelector('.js-modal-container') /* lấy class modal-container và lưu lại vào biến modalContainer qua class .js-modal-container */

/* Hàm hiển thị */
function showBuyTickets() {
    modal.classList.add('open') /* thêm class open vào modal để mở cửa sổ modal lên */
}

/* Hàm ẩn */
function hideBuyTickets() {
    modal.classList.remove('open') /* xóa class open khỏi modal tắt cửa sổ modal đi */
}

/* Vòng lặp for sẽ chạy lần lượt qua 3 nút trong buyBtns rồi lấy từng nút và lưu vào buyBtn */
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets) /* lắng nghe sự kiện người dùng click vào nút buy ticket để chạy hàm showBuyTickets */
}

modalClose.addEventListener('click', hideBuyTickets) /* lắng nghe sự kiện người dùng click vào nút x để chạy hàm hideBuyTickets */

modal.addEventListener('click', hideBuyTickets) /* lắng nghe sự kiện khi người chơi ấn vào vùng ngoài xung quanh modal để chạy hàm hideBuyTickets */ /* sẽ gây lỗi là: ấn vào đâu trong cửa sổ modal thì cũng sẽ bị tắt */

modalContainer.addEventListener('click', function (event){
    event.stopPropagation() /* làm hành động lan ra của hàm hideBuyTickets đến modal-container thì dừng lại để sửa lỗi click vào đâu trong modal cũng tắt cs modal */
})

//Menu Responsive
var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu')
var headerHeight = header.clientHeight;


//Đóng mở mobile menu
mobileMenu.onclick = function(){
    var isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
        header.style.height = 'auto';
    }else {
        header.style.height = '47px';
    }
}

//Tự động đóng khi chọn menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];

    menuItem.onclick = function(event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');

        if(isParentMenu) {
            event.preventDefault();
        } else {
            header.style.height = '47px';
        }
    }
}
