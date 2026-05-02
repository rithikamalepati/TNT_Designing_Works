// --- 1. SETTINGS ---
const SHEET_ID = '15yWF3Sp5mdu28OOiBrN_BjOSgS6wGrFXSGAYJQklmRE'; 
const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`;

// --- 2. FIXED DATA MAP ---
const shopData = {
    'bangles': {
        title: 'Silk Thread Bangles',
        subs: [
            { name: 'Bridal Set Bangles', code: 'STB1', img: 'images/Silk_thread_bangles/STB_Featured1.png' },
            { name: 'Plain Thread Wrapped Bangles', code: 'STB2', img: 'images/Silk_thread_bangles/STB_Featured2.png' },
            { name: 'Premium Bangles', code: 'STB3', img: 'images/Silk_thread_bangles/STB_Featured3.png' }
        ]
    },
    'return-gifts': {
        title: 'Return Gifts',
        subs: [
            { name: 'Bangles (Bulk Packs)', code: 'RG1', img: 'images/Return_gifts/RG_Featured1.png' },
            { name: 'Thaamboolam Gifts', code: 'RG2', img: 'images/Return_gifts/RG_Featured2.png' }
        ]
    },
    'saree': {
        title: 'Saree Accessories',
        subs: [
            { name: 'Saree Pins', code: 'SA1', img: 'images/Saree_Acc/SA_Featured1.png' }, 
            { name: 'Broch Pins', code: 'SA2', img: 'images/Saree_Acc/SA_Featured2.png' }
        ]
    },
    'hair': {
        title: 'Hair Accessories',
        subs: [{ name: 'Hair Bands', code: 'HA1', img: 'images/Hair_Acc/HA_Featured1.png' },
                { name: 'Centre Clips', code: 'HA2', img: 'images/Hair_Acc/HA_Featured2.png' },
                { name: 'Jada Billalu', code: 'HA3', img: 'images/Hair_Acc/HA_Featured3.png' },
                { name: 'Kids Alligator Clips', code: 'HA4', img:'images/Hair_Acc/HA_Featured4.png' },
                { name: 'Tic Tac Pins', code: 'HA5', img: 'images/Hair_Acc/HA_Featured5.png' },
                { name: 'Kids Metal Hair Bands', code: 'HA6', img: 'images/Hair_Acc/HA_Featured6.png' }
            ]
    },
    'earrings': {
        title: 'Earrings',
        subs: [{ name: 'Stud Earrings', code: 'ER1', img: 'images/Earrings/ER_Featured1.png' }]
    },
    'wedding': {
        title: 'Wedding Decorations',
        subs: [
            { name: 'Kobbari Kudikalu', code: 'WD1', img: 'images/Wedding_decor/WD_Featured1.png' },
            { name: 'Garika Muntalu', code: 'WD2', img: 'images/Wedding_decor/WD_Featured2.png' }
        ]
    },
    'personalized': {
        title: 'Personalized Gifts',
        subs: [
            { name: 'Birthday', code: 'PG1', img: 'images/Personalized_gifts/PG_Featured1.png' }, 
            { name: 'Anniversary', code: 'PG2', img: 'images/Personalized_gifts/PG_Featured2.png' },
            { name: 'Baby Shower', code: 'PG3', img: 'images/Personalized_gifts/PG_Featured3.png' }, 
            { name: 'Wedding', code: 'PG4', img: 'images/Personalized_gifts/PG_Featured4.png' }
        ]
    }
};

// --- 3. HERO SLIDER & SCROLL ---
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
function nextSlide() {
    if(!slides.length) return;
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}
if(slides.length) setInterval(nextSlide, 3000);

function scrollCat(dir) {
    document.getElementById('category-scroll').scrollBy({ left: dir * 250, behavior: 'smooth' });
}

// --- 4. NAVIGATION ---
function showSub(key) {
    const menu = document.getElementById('sub-menu');
    const grid = document.getElementById('product-grid');
    const data = shopData[key];
    
    if(!data) return;

    menu.style.display = 'block'; 
    const revealSection = document.querySelector('.product-reveal-section');
    if(revealSection) revealSection.style.display = 'block';

    grid.innerHTML = ''; 
    menu.innerHTML = `<h3>${data.title}</h3><div class="sub-card-container" id="sc"></div>`;
    
    const shortCatCode = key === 'bangles' ? 'STB' : 
                         key === 'return-gifts' ? 'RG' : 
                         key === 'saree' ? 'SA' : 
                         key === 'hair' ? 'HA' : 
                         key === 'earrings' ? 'ER' : 
                         key === 'wedding' ? 'WD' : 'PG';

    data.subs.forEach(s => {
        const div = document.createElement('div');
        div.className = 'sub-flash-card';
        div.innerHTML = `<div class="sub-card-img" style="background-image:url('${s.img}')"></div><h4>${s.name}</h4>`;
        
        div.onclick = () => fetchProductsFromSheet(s.code, shortCatCode);
        
        document.getElementById('sc').appendChild(div);
    });
    menu.scrollIntoView({ behavior: 'smooth' });
}

// --- 5. GOOGLE SHEETS FETCHING ---
async function fetchProductsFromSheet(subCode, catCode) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:40px;">🔍 Fetching latest designs... ✨</div>`;
    grid.scrollIntoView({ behavior: 'smooth' });

    try {
        const response = await fetch(SHEET_URL);
        const text = await response.text();
        const json = JSON.parse(text.substring(47).slice(0, -2));
        const rows = json.table.rows;

        const categoryData = Object.values(shopData).find(cat => 
            cat.subs.some(s => s.code === subCode)
        );
        const subInfo = categoryData ? categoryData.subs.find(s => s.code === subCode) : null;
        const displayName = subInfo ? subInfo.name : subCode;

        let foundProducts = 0;
        let htmlContent = ''; 

        rows.forEach(row => {
            const sheetCat = row.c[0] ? String(row.c[0].v).trim().toUpperCase() : '';
            const sheetSub = row.c[2] ? String(row.c[2].v).trim().toUpperCase() : '';

            if (sheetCat === catCode.toUpperCase() && sheetSub === subCode.toUpperCase()) {
                foundProducts++;
                const pId = row.c[1] ? String(row.c[1].v) : 'p-' + foundProducts;
                const pPrice = row.c[3] ? Number(row.c[3].v) : 0;
                const pImg = row.c[4] ? String(row.c[4].v) : '';
                const pTitle = (row.c[5] && row.c[5].v) ? String(row.c[5].v) : `${displayName} #${foundProducts}`;

                let sizeHTML = '';
                if (catCode.toUpperCase() === 'STB') {
                    sizeHTML = `
                        <div class="size-selector" style="margin: 10px 0;">
                            <label style="font-size:11px; font-weight:bold; color:#555;">Size:</label>
                            <select id="size-${pId}" style="width:100%; padding:5px; border:1px solid #D4AF37; border-radius:4px;">
                                <option value="2.0">2.0</option><option value="2.2">2.2</option>
                                <option value="2.4">2.4</option><option value="2.6">2.6</option>
                                <option value="2.8" selected>2.8</option><option value="2.10">2.10</option>
                            </select>
                        </div>`;
                }

                htmlContent += `
                    <div class="product-card">
                        <img src="${pImg}" loading="lazy" style="width:100%; height:220px; object-fit:cover; border-radius:10px;">
                        <div style="padding:15px; text-align:center;">
                            <h5 style="margin:5px 0; font-size:14px;">${pTitle}</h5>
                            <p style="color:#D4AF37; font-weight:bold;">₹${pPrice}</p>
                            ${sizeHTML}
                            <button class="add-btn" onclick="addToCart('${pId}', '${pTitle}', ${pPrice}, '${pImg}')">Add to Selection</button>
                        </div>
                    </div>`;
            }
        });

        if (foundProducts > 0) {
            grid.innerHTML = `<h4 style="grid-column: 1/-1;">Collection: ${displayName}</h4>${htmlContent}`;
        } else {
            grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:60px; color:#888;">No designs found for codes: <b>${catCode} / ${subCode}</b></div>`;
        }
    } catch (err) {
        grid.innerHTML = `<div style="grid-column:1/-1; color:red;">⚠️ Error loading products. Check internet or Sheet ID.</div>`;
    }
}

// --- 6. CART LOGIC ---
let cart = JSON.parse(localStorage.getItem('tnt_cart')) || [];

function addToCart(id, name, price, img) {
    const sizeEl = document.getElementById(`size-${id}`);
    const size = sizeEl ? sizeEl.value : "Standard";
    const cartId = `${id}-${size}`;
    const item = cart.find(i => i.cartId === cartId);
    if (item) item.quantity++;
    else cart.push({ cartId, id, name, price, img, size, quantity: 1 });
    saveAndRefresh();
    showToast(`${name} added! ✨`);
}

function updateQuantity(cartId, change) {
    const item = cart.find(i => i.cartId === cartId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) removeItem(cartId);
        else saveAndRefresh();
    }
}

function removeItem(cartId) {
    cart = cart.filter(i => i.cartId !== cartId);
    saveAndRefresh();
}

function saveAndRefresh() {
    localStorage.setItem('tnt_cart', JSON.stringify(cart));
    const badge = document.getElementById('cart-count');
    if (badge) badge.innerText = cart.reduce((s, i) => s + i.quantity, 0);
    renderCart();
}

function renderCart() {
    const list = document.getElementById('cart-items');
    const totalDisp = document.getElementById('cart-total');
    const checkoutBtn = document.querySelector('.checkout-btn'); 
    
    if (!list) return;
    list.innerHTML = '';
    
    if (cart.length === 0) {
        // --- ONLY UPDATED THIS INNERHTML TO MATCH REFERENCE IMAGE ---
        list.innerHTML = `
            <div class="empty-cart-container" style="text-align:center; padding: 60px 20px;">
                <div class="empty-cart-icon" style="background:#f0f9ff; width:100px; height:100px; border-radius:50%; margin:0 auto 20px; display:flex; align-items:center; justify-content:center; position:relative;">
                    <span style="position:absolute; top:10px; left:15px; color:#ffd700;">★</span>
                    <span style="position:absolute; top:5px; right:20px; color:#ffd700;">★</span>
                    <span style="font-size:40px;">🛒</span>
                    <span style="position:absolute; bottom:25px; right:10px; color:#ffd700;">★</span>
                </div>
                <h3 style="color:#333; margin-bottom:10px; font-size:1.2rem;">Your selection is empty</h3>
                <p style="color:#888; margin-bottom:25px; font-size:0.9rem;">Looks like you haven't made your choice yet...</p>
                <button onclick="toggleCart()" style="background:#D4AF37; color:white; border:none; padding:10px 25px; border-radius:5px; cursor:pointer; font-weight:bold;">
                    Keep Shopping ✨
                </button>
            </div>`;
        if(totalDisp) totalDisp.innerText = '0';
        if(checkoutBtn) checkoutBtn.style.display = 'none';
        return;
    }

    if(checkoutBtn) checkoutBtn.style.display = 'block';
    let total = 0;
    cart.forEach(item => {
        total += (item.price * item.quantity);
        list.innerHTML += `
            <li style="display:flex; gap:10px; margin-bottom:15px; border-bottom:1px solid #eee; padding-bottom:10px; list-style:none;">
                <img src="${item.img}" width="50" height="50" style="object-fit:cover; border-radius:5px;">
                <div style="flex:1">
                    <h6 style="margin:0;">${item.name}</h6>
                    <small>Size: ${item.size}</small><br>
                    <div style="margin-top:5px;">
                        <button onclick="updateQuantity('${item.cartId}', -1)">-</button> 
                        <span>${item.quantity}</span> 
                        <button onclick="updateQuantity('${item.cartId}', 1)">+</button>
                    </div>
                </div>
                <div style="text-align:right">
                    ₹${(item.price * item.quantity).toLocaleString('en-IN')}<br>
                    <button onclick="removeItem('${item.cartId}')" style="color:red; background:none; border:none; cursor:pointer; font-size:10px;">REMOVE</button>
                </div>
            </li>`;
    });
    if(totalDisp) totalDisp.innerText = total.toLocaleString('en-IN');
}

function checkoutWhatsApp() {
    if (cart.length === 0) return alert("Selection empty!");
    let msg = " New Order from TNT Website %0A%0A";
    cart.forEach(i => {
        msg += `Item: ${i.name}%0A`;
        msg += `Size: ${i.size}%0A`;
        msg += `Qty: ${i.quantity} x ₹${i.price} = ₹${i.price * i.quantity}%0A`;
        const safeLink = encodeURIComponent(i.img);
        msg += ` View: ${safeLink}%0A%0A`;
    });
    const totalVal = document.getElementById('cart-total').innerText;
    msg += `Total Amount: ₹${totalVal}`;
    window.open(`https://wa.me/918331059946?text=${msg}`, '_blank');
}

function toggleCart() { document.getElementById('cart-modal').classList.toggle('active'); }

function showToast(m) { 
    const t = document.getElementById('toast'); 
    if(t){
        t.innerText = m; 
        t.classList.add('show'); 
        setTimeout(() => t.classList.remove('show'), 3000);
    }
}

// --- 7. TESTIMONIALS LOGIC ---
let tIndex = 0;
const tSlider = document.getElementById('testimonial-slider');
const tCards = document.querySelectorAll('.testimonial-card');

function slideReviews() {
    if(!tCards.length) return;
    const total = tCards.length;
    const show = window.innerWidth > 900 ? 3 : 1;
    const max = total - show;

    tIndex++;
    if (tIndex > max) tIndex = 0; 

    const gap = 25;
    const width = tCards[0].offsetWidth; 
    const offset = tIndex * (width + gap);

    if(tSlider) tSlider.style.transform = `translateX(-${offset}px)`;
}
setInterval(slideReviews, 5000);

// --- 8. INITIALIZATION & FORM ---
document.addEventListener('DOMContentLoaded', () => {
    saveAndRefresh();
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const btn = event.target.querySelector('button');
    const originalText = btn.innerText;
    btn.innerText = 'Sending... ⏳';
    const serviceID = 'service_gpv75um';
    const templateID = 'template_pdo3ufp';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.innerText = originalText;
            alert('Message Sent Successfully! ✅');
            event.target.reset();
        }, (err) => {
            btn.innerText = originalText;
            alert('Failed to send message. ❌ Please try again.');
            console.error('EmailJS Error:', err);
        });
});

// --- 9. MOBILE MENU TOGGLE (FANCY FULL-SCREEN OVERLAY) ---
// Note: An earlier version of toggleMenu also exists above in original code.
// In JavaScript the last function definition wins, so this one is the active version.
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.getElementById('menu-icon');
    const isOpen = navLinks.classList.toggle('active');

    // Toggle gold/rotate state on the hamburger icon
    if (menuIcon) menuIcon.classList.toggle('open', isOpen);

    // Lock body scroll when menu is open so background doesn't scroll
    document.body.style.overflow = isOpen ? 'hidden' : '';
}

// Close the fancy menu when any nav link is tapped (runs after DOM is ready)
document.addEventListener('DOMContentLoaded', () => {
    const allNavLinks = document.querySelectorAll('.nav-links a');
    allNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            const navLinks = document.querySelector('.nav-links');
            const menuIcon = document.getElementById('menu-icon');
            navLinks.classList.remove('active');
            if (menuIcon) menuIcon.classList.remove('open');
            document.body.style.overflow = '';
        });
    });
});

// --- 10. OUR STORY — MOBILE REVEAL ON BUTTON CLICK ---
// On mobile (≤768px): section is hidden by default.
// Clicking the "Our Story" hero button reveals it with animation and scrolls to it.
// On desktop: normal anchor scroll behaviour is preserved.
document.addEventListener('DOMContentLoaded', () => {
    const storyBtn = document.getElementById('our-story-btn');
    const storySection = document.getElementById('our-story');

    if (storyBtn && storySection) {
        storyBtn.addEventListener('click', function (e) {
            if (window.innerWidth <= 768) {
                e.preventDefault(); // Stop the instant anchor jump on mobile
                storySection.classList.add('story-visible'); // Trigger CSS reveal
                // Short delay so display:flex kicks in before scrollIntoView runs
                setTimeout(() => {
                    storySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 60);
            }
            // On desktop: href="#our-story" works normally — no preventDefault
        });
    }
});

// --- 11. RESET Our Story on window resize (desktop ↔ mobile) ---
// Ensures the section is always visible when switching to desktop view.
window.addEventListener('resize', () => {
    const storySection = document.getElementById('our-story');
    if (storySection && window.innerWidth > 768) {
        storySection.classList.add('story-visible');
    }
});