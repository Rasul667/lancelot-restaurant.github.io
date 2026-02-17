const MENU = {
  "Салаты": [
    { id:"salad-1", name:"Салат Царский состав:(семга, красная фасоль, огурец, лук, майонез, соус унаги)", price:3900, img:"images/zarski_salad.jpg" },
    { id:"salad-2", name:"Салат Греческий состав:(лист сала, помидор, огурец, маслины, сок лимона, цветной перец)", price:2500, img:"images/grek_salad.jpg" },
    { id:"salad-3", name:"Салат Свежий по-армянски состав:(помидор, огурец, цветной перец, зелень, лук, сок лимона, растит. масло)", price:2300, img:"images/sveji_salad.jpg" },

    { id:"salad-4", name:"Салат Ланцелот состав:(говядина, яйцо, грецкие орехи,чеснок, майонез, жареный лук)", price:3200, img:"images/lancelot_salad.jpg" },
    { id:"salad-5", name:"Салат с хрустящими баклажанами состав:(жарен баклажан в кляре, черри,соус бальзамический, кинза, крем чиз)", price:2900, img:"images/baklazhan_salad.jpg" },
    { id:"salad-6", name:"Салат Цезарь состав:(пекинская капуста, копчен.куриная грудка,перепел. яйцо, черри, сыр пармезан,сухарики, соус)", price:2600, img:"images/zezar_salad.jpg" },
  ],

  "Первые блюда": [
    { id:"soup-1", name:"Солянка мясная", price:2400, img:"images/solanka_soup.jpg" },
    { id:"soup-2", name:"Чечевичный суп с конским щавелом по-армянский", price:2400, img:"images/shavel_soup.jpg" },
    { id:"soup-3", name:"Суп грибной", price:1200, img:"images/grib_soup.jpg" },
    { id:"soup-4", name:"Борщ", price:1200, img:"images/borsh_soup.jpg" },
    { id:"soup-5", name:"Крем-суп грибной", price:1400, img:"images/kremgrib_soup.jpg" },
  ],

  "Горячие из рыбы": [
    { id:"fish-1", name:"Семга бабочка(семга запеченная, сливочный соус, соус унаги)", price:5500, img:"images/babok_hot.jpg" },
    { id:"fish-2", name:"Семга Веллингтоy(семга, сыр, шпинат, слоен. тесто)", price:5500, img:"images/velik_hot.jpg" },
  ],

  "Горячие из птицы": [
    { id:"bird-1", name:"Птица (Запеченное куриное филе по-Голландски)", price:2900, img:"images/zapak_hot.jpg" },
    { id:"bird-2", name:"Птица (Курица по тайски)", price:3200, img:"images/kukariku_hot.jpg" },
  ],

  "Горячие из говядины": [
    { id:"beef-1", name:"Говядина (Телятина с перцем и помидорами)", price:3500, img:"images/buzau_hot.jpg" },
    { id:"beef-2", name:"Говядина (Бефстроганов)", price:3100, img:"images/bebebe_hot.jpg" },
  ],

  "Горячие из баранины": [
    { id:"lamb-1", name:"Баранина (Баранина Лопатка)", price:7850, img:"images/lopatka_hot.jpg" },
    { id:"lamb-2", name:"Баранина (Баранина Шея)", price:5300, img:"images/moiyn_hot.jpg" },
  ],

  "Горячие из свинины": [
    { id:"pork-1", name:"Свинина (Свинина с соусом киви)", price:3100, img:"images/kivi_hot.jpg" },
    { id:"pork-2", name:"Свинина (Соте из свинины)", price:3400, img:"images/sote_hot.jpg" },
  ],

  "Шашлыки": [
    { id:"bbq-1", name:"Шашлык (Свинина кусковая)", price:3050, img:"images/xruxru_bbq.jpg" },
    { id:"bbq-2", name:"Шашлык (Баранина кусковая)", price:4950, img:"images/baran_bbq.jpg" },
    { id:"bbq-3", name:"Шашлык (Говядина кусковая)", price:5000, img:"images/korova_bbq.jpg" },
  ],

  "Кавказская кухня": [
    { id:"kav-1", name:"Кавказская блюда (Толма)", price:3500, img:"images/tolma_hot.jpg" },
    { id:"kav-2", name:"Кавказская блюда (Спас)", price:1500, img:"images/spas_hot.jpg" },
  ],

  "Мучные изделия": [
    { id:"bak-1", name:"Мучное (Лаваш)", price:150, img:"images/lavash_bakery.jpg" },
    { id:"bak-2", name:"Мучное (Хачапури Аджарский)", price:3000, img:"images/adjar_bakery.jpg" },
    { id:"bak-3", name:"Мучное (Хачапури Слоённое)", price:2000, img:"images/sloi_bakery.jpg" },
  ],

  "Роллы": [
    { id:"roll-1", name:"Поцелуй гейши", price:2000, img:"images/gei_roll.jpg" },
    { id:"roll-2", name:"Филаделфия ХОТ", price:2200, img:"images/xot_roll.jpg" },
    { id:"roll-3", name:"Филадельфия", price:2600, img:"images/fila_roll.jpg" },
  ],

  "Сеты": [
    { id:"set-1", name:"Сет Лас-Вегас (74 шт.)", price:16500, img:"images/vegas_set.jpg" },
    { id:"set-2", name:"Сет Император(72 шт.)", price:16500, img:"images/imperia_set.jpg" },
    { id:"set-3", name:"Сет Наслаждение (32 шт.)", price:8800, img:"images/naslda_set.jpg" },
  ],
};

let currentCategory = Object.keys(MENU)[0];
let cart = {}; // id -> { item, qty }

const tabsEl = document.getElementById("tabs");
const gridEl = document.getElementById("grid");
const sectionTitleEl = document.getElementById("sectionTitle");
const searchInput = document.getElementById("searchInput");

const cartBtn = document.getElementById("cartBtn");
const cartDrawer = document.getElementById("cartDrawer");
const drawerOverlay = document.getElementById("drawerOverlay");
const closeCart = document.getElementById("closeCart");
const cartList = document.getElementById("cartList");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");

const checkoutBtn = document.getElementById("checkoutBtn");
const modal = document.getElementById("modal");
const modalOverlay = document.getElementById("modalOverlay");
const closeModal = document.getElementById("closeModal");
const checkoutForm = document.getElementById("checkoutForm");
const modalTotal = document.getElementById("modalTotal");
const successBox = document.getElementById("successBox");

const cardFields = document.getElementById("cardFields");

// ======================
// 3) РЕНДЕР
// ======================
function money(x){
  return `${x.toLocaleString("ru-RU")} тг`;
}

function buildTabs(){
  tabsEl.innerHTML = "";
  Object.keys(MENU).forEach(cat=>{
    const btn = document.createElement("button");
    btn.className = "tab" + (cat === currentCategory ? " active" : "");
    btn.textContent = cat;
    btn.addEventListener("click", ()=>{
      currentCategory = cat;
      document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
      btn.classList.add("active");
      sectionTitleEl.textContent = cat;
      renderGrid();
    });
    tabsEl.appendChild(btn);
  });
}

function renderGrid(){
  const q = (searchInput.value || "").trim().toLowerCase();
  const items = MENU[currentCategory].filter(i => i.name.toLowerCase().includes(q));

  gridEl.innerHTML = "";

  items.forEach((item, idx)=>{
    const card = document.createElement("div");
    card.className = "card";
    card.style.animationDelay = (idx * 0.05) + "s";

    card.innerHTML = `
      <div class="card__img">
        <img src="${item.img}" alt="${escapeHtml(item.name)}" onerror="this.src='images/placeholder.jpg'">
      </div>
      <div class="card__body">
        <div class="card__title">${escapeHtml(item.name)}</div>
        <div class="card__meta">
          <div class="price">${item.price ? money(item.price) : "Цена: поменяй"}</div>
          <button class="btn btn--primary">В корзину</button>
        </div>
      </div>
    `;

    const btn = card.querySelector("button");
    btn.addEventListener("click", (e)=>{
      addToCart(item);
      burst(e.clientX, e.clientY);
    });

    gridEl.appendChild(card);
  });
}

function renderCart(){
  cartList.innerHTML = "";
  const entries = Object.values(cart);

  if(entries.length === 0){
    cartList.innerHTML = `<div style="color:rgba(205,185,167,.8); padding:10px">Корзина пустая</div>`;
    cartTotal.textContent = money(0);
    cartCount.textContent = "0";
    modalTotal.textContent = money(0);
    return;
  }

  let total = 0;
  let count = 0;

  entries.forEach(({item, qty})=>{
    total += (item.price || 0) * qty;
    count += qty;

    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <div class="cart-item__img"><img src="${item.img}" alt="${escapeHtml(item.name)}" onerror="this.src='images/placeholder.jpg'"></div>
      <div>
        <div class="cart-item__top">
          <div class="cart-item__name">${escapeHtml(item.name)}</div>
          <div class="cart-item__price">${item.price ? money(item.price) : "—"}</div>
        </div>
        <div class="cart-item__controls">
          <button class="pill" data-act="dec">−</button>
          <div class="qty">${qty}</div>
          <button class="pill" data-act="inc">+</button>
          <button class="pill" data-act="del" style="margin-left:auto">Удалить</button>
        </div>
      </div>
    `;

    row.querySelectorAll("button").forEach(b=>{
      b.addEventListener("click", ()=>{
        const act = b.dataset.act;
        if(act==="inc") changeQty(item.id, +1);
        if(act==="dec") changeQty(item.id, -1);
        if(act==="del") removeFromCart(item.id);
      });
    });

    cartList.appendChild(row);
  });

  cartTotal.textContent = money(total);
  cartCount.textContent = String(count);
  modalTotal.textContent = money(total);
}

// ======================
// 4) КОРЗИНА (логика)
// ======================
function addToCart(item){
  if(!cart[item.id]) cart[item.id] = { item, qty:0 };
  cart[item.id].qty += 1;
  renderCart();
}

function changeQty(id, delta){
  if(!cart[id]) return;
  cart[id].qty += delta;
  if(cart[id].qty <= 0) delete cart[id];
  renderCart();
}

function removeFromCart(id){
  delete cart[id];
  renderCart();
}

// ======================
// 5) ОКНА (Drawer / Modal)
// ======================
function openCart(){
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
}
function closeCartDrawer(){
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
}

function openModal(){
  if(Object.keys(cart).length === 0){
    alert("Корзина пустая 🙂");
    return;
  }
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  successBox.classList.add("hidden");
}
function closeModalWindow(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

// ======================
// 6) ФЕЙК-ОПЛАТА (UI)
// ======================
document.querySelectorAll("input[name='pay']").forEach(r=>{
  r.addEventListener("change", ()=>{
    const val = document.querySelector("input[name='pay']:checked").value;
    if(val === "card") cardFields.classList.remove("hidden");
    else cardFields.classList.add("hidden");
  });
});

checkoutForm.addEventListener("submit", (e)=>{
  e.preventDefault();

  const addr = document.getElementById("addr").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const pay = document.querySelector("input[name='pay']:checked").value;

  if(!addr || !phone){
    alert("Заполни адрес и телефон");
    return;
  }

  if(pay === "card"){
    // Простая “фейк” проверка
    const cn = document.getElementById("cardNumber").value.replace(/\s+/g,"");
    const exp = document.getElementById("cardExp").value.trim();
    const cvc = document.getElementById("cardCvc").value.trim();
    if(cn.length < 12 || exp.length < 4 || cvc.length < 3){
      alert("Заполни данные карты (демо)");
      return;
    }
  }

  // УСПЕХ (демо)
  successBox.classList.remove("hidden");

  // очистим корзину через 1.2 сек
  setTimeout(()=>{
    cart = {};
    renderCart();
  }, 1200);
});

// ======================
// 7) АНИМАЦИЯ "добавлено"
// ======================
function burst(x,y){
  const b = document.createElement("div");
  b.className = "burst";
  b.style.left = x + "px";
  b.style.top = y + "px";
  document.body.appendChild(b);
  setTimeout(()=> b.remove(), 650);
}

// ======================
// 8) УТИЛИТЫ
// ======================
function escapeHtml(s){
  return s.replace(/[&<>"']/g, (m)=>({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[m]));
}

// ======================
// 9) СОБЫТИЯ
// ======================
searchInput.addEventListener("input", renderGrid);

cartBtn.addEventListener("click", openCart);
drawerOverlay.addEventListener("click", closeCartDrawer);
closeCart.addEventListener("click", closeCartDrawer);

checkoutBtn.addEventListener("click", ()=>{
  closeCartDrawer();
  openModal();
});
modalOverlay.addEventListener("click", closeModalWindow);
closeModal.addEventListener("click", closeModalWindow);

// ======================
// 10) СТАРТ
// ======================
buildTabs();
renderGrid();
renderCart();

// ===== ОТЗЫВЫ =====
const reviewModal = document.getElementById("reviewModal");
const openReviewBtn = document.getElementById("openReviewBtn");
const closeReviewBtn = document.getElementById("closeReviewBtn");
const reviewOverlay = document.getElementById("reviewOverlay");
const reviewForm = document.getElementById("reviewForm");
const reviewsList = document.getElementById("reviewsList");

function openReview(){
  reviewModal.classList.add("open");
}
function closeReview(){
  reviewModal.classList.remove("open");
}

openReviewBtn?.addEventListener("click", openReview);
closeReviewBtn?.addEventListener("click", closeReview);
reviewOverlay?.addEventListener("click", closeReview);

reviewForm?.addEventListener("submit", (e)=>{
  e.preventDefault();

  const name = document.getElementById("reviewName").value;
  const text = document.getElementById("reviewText").value;

  const div = document.createElement("div");
  div.className = "review";
  div.innerHTML = `<strong>${name}</strong><br>${text}`;

  reviewsList.prepend(div);

  reviewForm.reset();
  closeReview();
});

