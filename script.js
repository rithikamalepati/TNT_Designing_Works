// --- 1. SETTINGS ---
const SHEET_ID  = '15yWF3Sp5mdu28OOiBrN_BjOSgS6wGrFXSGAYJQklmRE';
const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&tq=select%20*`;

const RAW_SHEET_ID  = '12T8InoTXsfyDyoYRBy3qgPKfpRTwHB13UqQ6nP7i2d0';
const RAW_SHEET_URL = `https://docs.google.com/spreadsheets/d/${RAW_SHEET_ID}/gviz/tq?tqx=out:json&tq=select%20*`;

// --- 2. SHOP DATA ---
const shopData = {
    'bangles': {
        title: 'Silk Thread Bangles',
        subs: [
            { name: 'Bridal Set Bangles',          code: 'STB1', img: 'images/Silk_thread_bangles/STB_Featured1.jpeg' },
            { name: 'Plain Thread Wrapped Bangles', code: 'STB2', img: 'images/Silk_thread_bangles/STB_Featured2.jpeg' },
            { name: 'Premium Bangles',              code: 'STB3', img: 'images/Silk_thread_bangles/STB_Featured3.jpeg' }
        ]
    },
    'return-gifts': {
        title: 'Return Gifts',
        subs: [
            { name: 'Bangles (Bulk Packs)', code: 'RG1', img: 'images/Return_gifts/RG_Featured1.jpeg' },
            { name: 'Thaamboolam Gifts',    code: 'RG2', img: 'images/Return_gifts/RG_Featured2.jpeg' }
        ]
    },
    'saree': {
        title: 'Saree Accessories',
        subs: [
            { name: 'Saree Pins', code: 'SA1', img: 'images/Saree_Acc/SA_Featured1.jpeg' },
            { name: 'Broch Pins', code: 'SA2', img: 'images/Saree_Acc/SA_Featured2.jpeg' }
        ]
    },
    'hair': {
        title: 'Hair Accessories',
        subs: [
            { name: 'Hair Bands',            code: 'HA1', img: 'images/Hair_Acc/HA_Featured1.jpeg' },
            { name: 'Centre Clips',          code: 'HA2', img: 'images/Hair_Acc/HA_Featured2.jpeg' },
            { name: 'Jada Billalu',          code: 'HA3', img: 'images/Hair_Acc/HA_Featured3.jpeg' },
            { name: 'Kids Alligator Clips',  code: 'HA4', img: 'images/Hair_Acc/HA_Featured4.jpeg' },
            { name: 'Tic Tac Pins',          code: 'HA5', img: 'images/Hair_Acc/HA_Featured5.jpeg' },
            { name: 'Kids Metal Hair Bands', code: 'HA6', img: 'images/Hair_Acc/HA_Featured6.jpeg' }
        ]
    },
    'earrings': {
        title: 'Earrings',
        subs: [{ name: 'Stud Earrings', code: 'ER1', img: 'images/Earrings/ER_Featured1.jpeg' }]
    },
    'wedding': {
        title: 'Wedding Decorations',
        subs: [
            { name: 'Kobbari Kudikalu', code: 'WD1', img: 'images/Wedding_decor/WD_Featured1.jpeg' },
            { name: 'Garika Muntalu',   code: 'WD2', img: 'images/Wedding_decor/WD_Featured2.jpeg' }
        ]
    },
    'personalized': {
        title: 'Personalized Gifts',
        subs: [
            { name: 'Birthday',    code: 'PG1', img: 'images/Personalized_gifts/PG_Featured1.jpeg' },
            { name: 'Anniversary', code: 'PG2', img: 'images/Personalized_gifts/PG_Featured2.jpeg' },
            { name: 'Baby Shower', code: 'PG3', img: 'images/Personalized_gifts/PG_Featured3.jpeg' },
            { name: 'Wedding',     code: 'PG4', img: 'images/Personalized_gifts/PG_Featured4.jpeg' }
        ]
    },
    'raw': {
        title: 'Raw Materials',
        isRaw: true,
        subs: [
            {
                name: 'Bangle Boxes', code: 'BB', img: 'images/Raw_Materials/RM_Featured_BB.jpeg',
                level4: [
                    { name: 'Flat Boxes (2.2 – 2.10)',  tag: 'BB1', img: 'images/Raw_Materials/BangleBoxes/BB_Flat.jpeg'  },
                    { name: 'Round Boxes (2.2 – 2.10)', tag: 'BB2', img: 'images/Raw_Materials/BangleBoxes/BB_Round.jpeg' }
                ]
            },
            {
                name: 'Kundan Stones', code: 'KS', img: 'images/Raw_Materials/RM_Featured_KS.jpeg',
                level4: [
                    { name: 'Glossy White & Gold',  tag: 'KS1', img: 'images/Raw_Materials/Glossy_Colors/KS_GlossyWhiteGold.jpeg'  },
                    { name: 'Ceramic White & Gold', tag: 'KS2', img: 'images/Raw_Materials/Glossy_Colors/KS_CeramicWhiteGold.jpeg' },
                    {
                        name: 'Glossy Colors', tag: 'KS3', hasShapes: true, img: 'images/Raw_Materials/RM_Featured_KS3.jpeg',
                        shapes: [
                            { name: 'Square',    tag: 'KS3_SQUARE',   img: 'images/Raw_Materials/Glossy_Colors/KS3_Square.jpeg'    },
                            { name: '3mm Round', tag: 'KS3_ROUND3',   img: 'images/Raw_Materials/Glossy_Colors/KS3_Round3mm.jpeg'  },
                            { name: '4mm Round', tag: 'KS3_ROUND4',   img: 'images/Raw_Materials/Glossy_Colors/KS3_Round4mm.jpeg'  },
                            { name: '6K Eye',    tag: 'KS3_EYE6',     img: 'images/Raw_Materials/Glossy_Colors/KS3_Eye6k.jpeg'     },
                            { name: '8K Eye',    tag: 'KS3_EYE8',     img: 'images/Raw_Materials/Glossy_Colors/KS3_Eye8k.jpeg'     },
                            { name: 'Drop',      tag: 'KS3_DROP',     img: 'images/Raw_Materials/Glossy_Colors/KS3_Drop.jpeg'      },
                            { name: 'Triangle',  tag: 'KS3_TRIANGLE', img: 'images/Raw_Materials/Glossy_Colors/KS3_Triangle.jpeg'  },
                            { name: 'Rectangle', tag: 'KS3_RECT',     img: 'images/Raw_Materials/Glossy_Colors/KS3_Rectangle.jpeg' },
                            { name: 'Diamond',   tag: 'KS3_DIAMOND',  img: 'images/Raw_Materials/Glossy_Colors/KS3_Diamond.jpeg'   },
                            { name: 'Crown',     tag: 'KS3_CROWN',    img: 'images/Raw_Materials/Glossy_Colors/KS3_Crown.jpeg'     },
                            { name: 'Tilagam',   tag: 'KS3_TILAGAM',  img: 'images/Raw_Materials/Glossy_Colors/KS3_Tilagam.jpeg'  },
                            { name: 'Star',      tag: 'KS3_STAR',     img: 'images/Raw_Materials/Glossy_Colors/KS3_Star.jpeg'      },
                            { name: 'Moon',      tag: 'KS3_MOON',     img: 'images/Raw_Materials/Glossy_Colors/KS3_Moon.jpeg'      },
                            { name: 'Heart',     tag: 'KS3_HEART',    img: 'images/Raw_Materials/Glossy_Colors/KS3_Heart.jpeg'     }
                        ]
                    },
                    {
                        name: 'Matte Colors', tag: 'KS4', hasShapes: true, img: 'images/Raw_Materials/RM_Featured_KS4.jpeg',
                        shapes: [
                            { name: 'Square',    tag: 'KS4_SQUARE',   img: 'images/Raw_Materials/Matte_Colors/KS4_Square.jpeg'    },
                            { name: '3mm Round', tag: 'KS4_ROUND3',   img: 'images/Raw_Materials/Matte_Colors/KS4_Round3mm.jpeg'  },
                            { name: '4mm Round', tag: 'KS4_ROUND4',   img: 'images/Raw_Materials/Matte_Colors/KS4_Round4mm.jpeg'  },
                            { name: '6K Eye',    tag: 'KS4_EYE6',     img: 'images/Raw_Materials/Matte_Colors/KS4_Eye6k.jpeg'     },
                            { name: '8K Eye',    tag: 'KS4_EYE8',     img: 'images/Raw_Materials/Matte_Colors/KS4_Eye8k.jpeg'     },
                            { name: 'Drop',      tag: 'KS4_DROP',     img: 'images/Raw_Materials/Matte_Colors/KS4_Drop.jpeg'      },
                            { name: 'Triangle',  tag: 'KS4_TRIANGLE', img: 'images/Raw_Materials/Matte_Colors/KS4_Triangle.jpeg'  },
                            { name: 'Rectangle', tag: 'KS4_RECT',     img: 'images/Raw_Materials/Matte_Colors/KS4_Rectangle.jpeg' },
                            { name: 'Diamond',   tag: 'KS4_DIAMOND',  img: 'images/Raw_Materials/Matte_Colors/KS4_Diamond.jpeg'   },
                            { name: 'Moon',      tag: 'KS4_MOON',     img: 'images/Raw_Materials/Matte_Colors/KS4_Moon.jpeg'      },
                            { name: 'S Shape',   tag: 'KS4_SSHAPE',   img: 'images/Raw_Materials/Matte_Colors/KS4_Sshape.jpeg'   }
                        ]
                    },
                    { name: 'Clip Stones', tag: 'KS5', img: 'images/Raw_Materials/KS_Clips.jpeg' },
                    { name: 'Zarcons', tag: 'KS6', img: 'images/Raw_Materials/KS_Zarcons.jpeg' },
                    { name: 'Beads', tag: 'KS7', img: 'images/Raw_Materials/KS_Beads.jpeg'        }
                ]
            },
            { name: 'Threads',        code: 'TH', img: 'images/Raw_Materials/RM_Featured_TH.jpeg', level4: [] },
            { name: 'Glues & Sheets', code: 'GL', img: 'images/Raw_Materials/RM_Featured_GL.jpeg', level4: [] },
            {
                name: 'Sequins', code: 'SQ', img: 'images/Raw_Materials/RM_Featured_SQ.jpeg',
                level4: [
                    { name: 'Regular',     tag: 'SQ1', img: 'images/Raw_Materials/Sequins/SQ_Regular.jpeg'     },
                    { name: 'Multicolour', tag: 'SQ2', img: 'images/Raw_Materials/Sequins/SQ_Multicolour.jpeg' },
                    { name: 'Pastels',     tag: 'SQ3', img: 'images/Raw_Materials/Sequins/SQ_Pastels.jpeg'     }
                ]
            },
            {
                name: 'Hair Acc, Saree Pins & MDFs', code: 'HP', img: 'images/Raw_Materials/RM_Featured_HP.jpeg',
                level4: [
                    { name: 'Hair Accessories & Saree Pins', tag: 'HP1', img: 'images/Raw_Materials/HairSaree/HP_HairSareePins.jpeg' },
                    { name: 'MDFs',                          tag: 'HP2', img: 'images/Raw_Materials/HairSaree/HP_MDFs.jpeg'          }
                ]
            },
            {
                name: 'Charms, Chains & Coins', code: 'CC', img: 'images/Raw_Materials/RM_Featured_CC.jpeg',
                level4: [
                    { name: 'Charms & Coins', tag: 'CC1', img: 'images/Raw_Materials/Charms/CC_CharmsCoins.jpeg' },
                    { name: 'Chains',         tag: 'CC2', img: 'images/Raw_Materials/Charms/CC_Chains.jpeg'      }
                ]
            },
            { name: 'Packing Material', code: 'PM', img: 'images/Raw_Materials/RM_Featured_PM.jpeg', level4: [] }
        ]
    }
};

// ─────────────────────────────────────────────────────
// FIX 2: improved cell() and tag() — handles all gviz
// null patterns and accepts yes/no/true/false/1/0
// ─────────────────────────────────────────────────────
function cell(row, idx, fallback) {
    fallback = (fallback === undefined) ? '' : fallback;
    try {
        if (!row || !row.c) return fallback;
        if (idx >= row.c.length) return fallback;
        const c = row.c[idx];
        if (c === null || c === undefined) return fallback;
        if (c.v === null || c.v === undefined || c.v === '') return fallback;
        return String(c.v).trim();
    } catch(e) { return fallback; }
}

function tag(row, idx, fallback) {
    fallback = (fallback === undefined) ? 'NO' : fallback;
    const v = cell(row, idx, fallback).toUpperCase();
    if (v === 'YES' || v === 'TRUE' || v === '1') return 'YES';
    if (v === 'NO'  || v === 'FALSE'|| v === '0') return 'NO';
    return fallback.toUpperCase();
}

// --- BROWSE FLOAT SCROLL ---
function browseScroll(e) {
    e.preventDefault();
    const target = document.getElementById('browse');
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.getElementById('menu-icon');
    if (navLinks && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        if (menuIcon) menuIcon.classList.remove('open');
        document.body.style.overflow = '';
    }
}

// --- HERO SLIDER ---
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
function nextSlide() {
    if (!slides.length) return;
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}
if (slides.length) setInterval(nextSlide, 3000);

function scrollCat(dir) {
    document.getElementById('category-scroll').scrollBy({ left: dir * 250, behavior: 'smooth' });
}

// --- NAVIGATION ---
function showSub(key) {
    const menu = document.getElementById('sub-menu');
    const grid = document.getElementById('product-grid');
    const data = shopData[key];
    if (!data) return;

    menu.style.display = 'block';
    const revealSection = document.querySelector('.product-reveal-section');
    if (revealSection) revealSection.style.display = 'block';

    grid.innerHTML = '';
    menu.innerHTML = `<h3>${data.title}</h3><div class="sub-card-container" id="sc"></div>`;

    data.subs.forEach(s => {
        const div = document.createElement('div');
        div.className = 'sub-flash-card';
        div.innerHTML = `<div class="sub-card-img" style="background-image:url('${s.img}')"></div><h4>${s.name}</h4>`;

        if (data.isRaw && s.level4 && s.level4.length > 0) {
            div.onclick = () => showLevel4(s, data.title);
        } else {
            div.onclick = () => {
                if (data.isRaw) fetchRawProducts(s.code, null, s.name);
                else fetchProductsFromSheet(s.code, getCatCode(key));
            };
        }
        document.getElementById('sc').appendChild(div);
    });

    menu.scrollIntoView({ behavior: 'smooth' });
}

function showLevel4(sub, parentTitle) {
    const menu = document.getElementById('sub-menu');
    document.getElementById('product-grid').innerHTML = '';

    menu.innerHTML = `
        <button class="back-btn" onclick="showSub('raw')">← Back</button>
        <h3>${parentTitle} → ${sub.name}</h3>
        <div class="sub-card-container" id="sc"></div>`;

    sub.level4.forEach(l4 => {
        const div = document.createElement('div');
        div.className = 'sub-flash-card';
        const cardImg = l4.img || sub.img;
        div.innerHTML = `<div class="sub-card-img" style="background-image:url('${cardImg}')"></div><h4>${l4.name}</h4>`;
        div.onclick = l4.hasShapes
            ? () => showShapes(l4, sub, parentTitle)
            : () => fetchRawProducts(sub.code, l4.tag, `${sub.name} – ${l4.name}`);
        document.getElementById('sc').appendChild(div);
    });

    menu.scrollIntoView({ behavior: 'smooth' });
}

function showShapes(l4, sub, parentTitle) {
    const menu = document.getElementById('sub-menu');
    document.getElementById('product-grid').innerHTML = '';

    menu.innerHTML = `
        <button class="back-btn" onclick="showLevel4(shopData['raw'].subs.find(s=>s.code==='${sub.code}'),'${parentTitle}')">← Back</button>
        <h3>${parentTitle} → ${sub.name} → ${l4.name}</h3>
        <div class="sub-card-container" id="sc"></div>`;

    l4.shapes.forEach(shape => {
        const div = document.createElement('div');
        div.className = 'sub-flash-card';
        const cardImg = shape.img || sub.img;
        div.innerHTML = `<div class="sub-card-img" style="background-image:url('${cardImg}')"></div><h4>${shape.name}</h4>`;
        div.onclick = () => fetchRawProducts(sub.code, shape.tag, `${l4.name} – ${shape.name}`);
        document.getElementById('sc').appendChild(div);
    });

    menu.scrollIntoView({ behavior: 'smooth' });
}

function getCatCode(key) {
    return { 'bangles':'STB','return-gifts':'RG','saree':'SA','hair':'HA','earrings':'ER','wedding':'WD','personalized':'PG' }[key] || key.toUpperCase();
}

// ─────────────────────────────────────────────────────────────
// SHEET 1 — EXISTING CATEGORIES
// 0=category  1=ID  2=Sub Category  3=Price  4=Image URL
// 5=Product Title  6=Description  7=In Stock  8=Is New  9=Bestseller
// ─────────────────────────────────────────────────────────────
async function fetchProductsFromSheet(subCode, catCode) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:40px;">🔍 Fetching latest designs... ✨</div>`;
    grid.scrollIntoView({ behavior: 'smooth' });

    try {
        const json = JSON.parse((await (await fetch(SHEET_URL)).text()).substring(47).slice(0,-2));
        const rows = json.table.rows;

        const sub     = Object.values(shopData).flatMap(c => c.subs||[]).find(s => s.code === subCode);
        const display = sub ? sub.name : subCode;

        let found = 0, html = '';

        rows.forEach(row => {
            if (!row.c) return;
            if (cell(row,0).toUpperCase() !== catCode.toUpperCase()) return;
            if (cell(row,2).toUpperCase() !== subCode.toUpperCase())  return;

            found++;
            const pId      = cell(row,1) || 'p'+found;
            const pPrice   = Number(cell(row,3,'0')) || 0;
            const pImg     = cell(row,4);
            const pTitle   = cell(row,5) || `${display} #${found}`;
            const pDesc    = cell(row,6);
            const inStock  = tag(row,7,'YES');
            const isNew    = tag(row,8,'NO');
            const isBest   = tag(row,9,'NO');
            const oos      = inStock === 'NO';

            // FIX 3: label uses for+id to associate with select properly
            let sizeHTML = '';
            if (catCode.toUpperCase() === 'STB') {
                sizeHTML = `<div class="size-selector" style="margin:10px 0;">
                    <label for="size-${pId}" style="font-size:11px;font-weight:bold;color:#555;">Size:</label>
                    <select id="size-${pId}" name="size-${pId}" style="width:100%;padding:5px;border:1px solid #D4AF37;border-radius:4px;">
                        <option>2.0</option><option>2.2</option><option>2.4</option>
                        <option>2.6</option><option selected>2.8</option><option>2.10</option>
                    </select></div>`;
            }
            html += buildProductCard(pId, pTitle, pPrice, pImg, pDesc, oos, isNew, isBest, sizeHTML, false);
        });

        grid.innerHTML = found > 0
            ? `<h4 style="grid-column:1/-1;">Collection: ${display}</h4>${html}`
            : `<div style="grid-column:1/-1;text-align:center;padding:60px;color:#888;">No designs found for <b>${subCode}</b></div>`;

    } catch(e) {
        console.error(e);
        grid.innerHTML = `<div style="grid-column:1/-1;color:red;">⚠️ Error loading products.</div>`;
    }
}

// ─────────────────────────────────────────────────────────────
// SHEET 2 — RAW MATERIALS
// 0=CatCode 1=ProductID 2=SubCode 3=Level4Tag 4=Price
// 5=ImageURL 6=Title 7=Description 8=InStock 9=IsNew 10=Bestseller
// ─────────────────────────────────────────────────────────────
async function fetchRawProducts(subCode, level4Tag, displayName) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:40px;">🔍 Fetching raw materials... ✨</div>`;
    grid.scrollIntoView({ behavior: 'smooth' });

    try {
        const json = JSON.parse((await (await fetch(RAW_SHEET_URL)).text()).substring(47).slice(0,-2));
        const rows = json.table.rows;

        let found = 0, html = '';

        rows.forEach(row => {
            if (!row.c) return;
            if (cell(row,2).toUpperCase() !== subCode.toUpperCase()) return;
            if (level4Tag && cell(row,3).toUpperCase() !== level4Tag.toUpperCase()) return;

            found++;
            const pId    = cell(row,1) || 'rm'+found;
            const pPrice = Number(cell(row,4,'0')) || 0;
            const pImg   = cell(row,5);
            const pTitle = cell(row,6) || `${displayName} #${found}`;
            const pDesc  = cell(row,7);
            const inStock= tag(row,8,'YES');
            const isNew  = tag(row,9,'NO');
            const isBest = tag(row,10,'NO');
            const oos    = inStock === 'NO';

            html += buildProductCard(pId, pTitle, pPrice, pImg, pDesc, oos, isNew, isBest, '', true, subCode, level4Tag);
        });

        grid.innerHTML = found > 0
            ? `<h4 style="grid-column:1/-1;">Collection: ${displayName}</h4>${html}`
            : `<div style="grid-column:1/-1;text-align:center;padding:60px;color:#888;">No products yet for <b>${displayName}</b>. Check back soon!</div>`;

    } catch(e) {
        console.error(e);
        grid.innerHTML = `<div style="grid-column:1/-1;color:red;">⚠️ Error loading raw materials.</div>`;
    }
}

// ─────────────────────────────────────────────
// CARD BUILDER — badges use inline styles
// FIX 3: all label elements have matching for+id
// ─────────────────────────────────────────────
function buildProductCard(pId, pTitle, pPrice, pImg, pDesc, oos, isNew, isBest, extraHTML, isRaw, subCode, level4Tag) {

    const bs = `position:absolute;top:10px;left:10px;font-size:10px;font-weight:700;padding:4px 12px;border-radius:999px;letter-spacing:0.5px;z-index:10;pointer-events:none;`;
    let badge = '';
    if (oos)                 badge = `<div style="${bs}background:#FCEBEB;color:#A32D2D;border:1px solid #F09595;">OUT OF STOCK</div>`;
    else if (isBest==='YES') badge = `<div style="${bs}background:#EEEDFE;color:#3C3489;border:1px solid #AFA9EC;">★ BESTSELLER</div>`;
    else if (isNew==='YES')  badge = `<div style="${bs}background:#E1F5EE;color:#085041;border:1px solid #9FE1CB;">✦ NEW</div>`;

    const descHTML = pDesc ? `<p style="font-size:12px;color:#888;margin:4px 0 8px;line-height:1.4;">${pDesc}</p>` : '';

    let dropdown = '';
    const sub = (subCode||'').toUpperCase();
    const l4  = (level4Tag||'').toUpperCase();

    if (sub === 'BB') {
        const label = l4==='BB1' ? 'Flat Size' : l4==='BB2' ? 'Round Size' : 'Size';
        dropdown = `<div style="margin:10px 0;text-align:left;">
            <label for="size-${pId}" style="font-size:11px;font-weight:bold;color:#555;">${label}:</label>
            <select id="size-${pId}" name="size-${pId}" style="width:100%;padding:5px;border:1px solid #D4AF37;border-radius:4px;margin-top:4px;">
                <option>2.2</option><option>2.4</option><option selected>2.6</option><option>2.8</option><option>2.10</option>
            </select></div>`;
    }

    const btn = oos
        ? `<button class="add-btn" style="background:#f0f0f0;color:#aaa;cursor:not-allowed;border:1px solid #ddd;" disabled>Currently Unavailable</button>`
        : `<button class="add-btn" onclick="addToCart('${pId}','${pTitle}',${pPrice},'${pImg}')">Add to Selection</button>`;

    return `
        <div class="product-card${oos?' card-out-of-stock':''}">
            <div style="position:relative;">
                ${badge}
                <img src="${pImg}" loading="lazy" style="width:100%;height:220px;object-fit:cover;border-radius:10px;${oos?'filter:grayscale(60%);opacity:0.7;':''}">
            </div>
            <div style="padding:15px;text-align:center;">
                <h5 style="margin:5px 0;font-size:14px;${oos?'color:#aaa;':''}">${pTitle}</h5>
                ${descHTML}
                <p style="color:${oos?'#bbb':'#D4AF37'};font-weight:bold;">₹${pPrice}</p>
                ${extraHTML}${dropdown}
                ${btn}
            </div>
        </div>`;
}

// --- CART ---
let cart = JSON.parse(localStorage.getItem('tnt_cart')) || [];

function addToCart(id, name, price, img) {
    const sizeEl = document.getElementById(`size-${id}`) || document.getElementById(`qty-${id}`);
    const size   = sizeEl ? sizeEl.value : 'Standard';
    const cartId = `${id}-${size}`;
    const item   = cart.find(i => i.cartId === cartId);
    if (item) item.quantity++;
    else cart.push({ cartId, id, name, price, img, size, quantity: 1 });
    saveAndRefresh();
    showToast(`${name} added! ✨`);
}

function updateQuantity(cartId, change) {
    const item = cart.find(i => i.cartId === cartId);
    if (!item) return;
    item.quantity += change;
    if (item.quantity <= 0) removeItem(cartId);
    else saveAndRefresh();
}

function removeItem(cartId) {
    cart = cart.filter(i => i.cartId !== cartId);
    saveAndRefresh();
}

function saveAndRefresh() {
    localStorage.setItem('tnt_cart', JSON.stringify(cart));
    const total = cart.reduce((s,i) => s+i.quantity, 0);
    const b1 = document.getElementById('cart-count');       if (b1) b1.innerText = total;
    const b2 = document.getElementById('cart-float-badge'); if (b2) b2.innerText = total;
    renderCart();
}

function renderCart() {
    const list = document.getElementById('cart-items');
    const tot  = document.getElementById('cart-total');
    const btn  = document.querySelector('.checkout-btn');
    if (!list) return;
    list.innerHTML = '';

    if (!cart.length) {
        list.innerHTML = `
            <div style="text-align:center;padding:60px 20px;">
                <div style="background:#f0f9ff;width:100px;height:100px;border-radius:50%;margin:0 auto 20px;display:flex;align-items:center;justify-content:center;position:relative;">
                    <span style="position:absolute;top:10px;left:15px;color:#ffd700;font-size:12px;">★</span>
                    <span style="position:absolute;top:5px;right:20px;color:#ffd700;font-size:16px;">★</span>
                    <span style="font-size:40px;">🛒</span>
                    <span style="position:absolute;bottom:25px;right:10px;color:#ffd700;font-size:10px;">★</span>
                </div>
                <h3 style="color:#333;margin-bottom:10px;font-size:1.2rem;">Your selection is empty</h3>
                <p style="color:#888;margin-bottom:25px;font-size:0.9rem;">Looks like you haven't made your choice yet...</p>
                <button onclick="toggleCart()" style="background:#D4AF37;color:white;border:none;padding:10px 25px;border-radius:5px;cursor:pointer;font-weight:bold;">Keep Shopping ✨</button>
            </div>`;
        if (tot) tot.innerText = '0';
        if (btn) btn.style.display = 'none';
        return;
    }

    if (btn) btn.style.display = 'block';
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        list.innerHTML += `
            <li style="display:flex;gap:10px;margin-bottom:15px;border-bottom:1px solid #eee;padding-bottom:10px;list-style:none;">
                <img src="${item.img}" width="100" height="100" style="object-fit:cover;border-radius:5px;">
                <div style="flex:1">
                    <h6 style="margin:0;font-size:1rem;font-weight:700;">${item.name}</h6>
                    <small>Size: ${item.size}</small><br>
                    <div style="margin-top:5px;">
                        <button onclick="updateQuantity('${item.cartId}',-1)" class="qty-btn qty-minus">−</button>
                        <span class="qty-num">${item.quantity}</span>
                        <button onclick="updateQuantity('${item.cartId}',1)" class="qty-btn qty-plus">+</button>
                    </div>
                    <div style="text-align:right;">
                        ₹${(item.price*item.quantity).toLocaleString('en-IN')}<br>
                        <button onclick="removeItem('${item.cartId}')" style="color:red;background:none;border:none;cursor:pointer;font-size:10px;">REMOVE</button>
                    </div>
                </div>
            </li>`;
    });
    if (tot) tot.innerText = total.toLocaleString('en-IN');
}

function checkoutWhatsApp() {
    if (!cart.length) return alert('Selection empty!');
    let msg = '🛍 New Order from TNT Website %0A%0A';
    cart.forEach(i => {
        msg += `Item: ${i.name}%0ASize: ${i.size}%0AQty: ${i.quantity} x ₹${i.price} = ₹${i.price*i.quantity}%0AView: ${encodeURIComponent(i.img)}%0A%0A`;
    });
    msg += `Total Amount: ₹${document.getElementById('cart-total').innerText}`;
    window.open(`https://wa.me/918331059946?text=${msg}`, '_blank');
}

function toggleCart() { document.getElementById('cart-modal').classList.toggle('active'); }

function showToast(m) {
    const t = document.getElementById('toast');
    if (t) { t.innerText = m; t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 3000); }
}

// --- TESTIMONIALS ---
let tIndex = 0;
const tSlider = document.getElementById('testimonial-slider');
const tCards  = document.querySelectorAll('.testimonial-card');
function slideReviews() {
    if (!tCards.length) return;
    const show = window.innerWidth > 900 ? 3 : 1;
    const max  = tCards.length - show;
    if (++tIndex > max) tIndex = 0;
    if (tSlider) tSlider.style.transform = `translateX(-${tIndex*(tCards[0].offsetWidth+25)}px)`;
}
setInterval(slideReviews, 5000);

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => { saveAndRefresh(); });

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button'), orig = btn.innerText;
    btn.innerText = 'Sending... ⏳';
    emailjs.sendForm('service_gpv75um','template_pdo3ufp', this)
        .then(() => { btn.innerText=orig; alert('Message Sent! ✅'); e.target.reset(); },
              (err)=> { btn.innerText=orig; alert('Failed ❌ Try again.'); console.error(err); });
});

// --- MOBILE MENU ---
function toggleMenu() {
    const nav = document.querySelector('.nav-links');
    const ico = document.getElementById('menu-icon');
    const open = nav.classList.toggle('active');
    if (ico) ico.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-links a').forEach(a => {
        a.addEventListener('click', () => {
            document.querySelector('.nav-links').classList.remove('active');
            const ico = document.getElementById('menu-icon');
            if (ico) ico.classList.remove('open');
            document.body.style.overflow = '';
        });
    });
});

// --- OUR STORY MOBILE ---
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('our-story-btn');
    const sec = document.getElementById('our-story');
    if (btn && sec) {
        btn.addEventListener('click', e => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                sec.classList.add('story-visible');
                setTimeout(() => sec.scrollIntoView({ behavior:'smooth', block:'start' }), 60);
            }
        });
    }
});

window.addEventListener('resize', () => {
    const s = document.getElementById('our-story');
    if (s && window.innerWidth > 768) s.classList.add('story-visible');
});