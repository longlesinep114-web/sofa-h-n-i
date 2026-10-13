/**
 * XƯỞNG SẢN XUẤT SOFA HÀ NỘI - APP & INTERACTIVITY
 * Xử lý dữ liệu sản phẩm, thư viện thực tế, tính giá đóng sofa theo kích thước, giỏ hàng, đặt hàng
 */

// 1. DỮ LIỆU SẢN PHẨM & CÔNG TRÌNH THỰC TẾ
const PRODUCTS_DATA = [
  {
    id: 'sp-01',
    name: 'Sofa Da Tân Cổ Điển Hoàng Gia Góc L Chạm Khắc Tinh Xảo',
    category: 'sofa-da',
    categoryName: 'Sofa Tân Cổ Điển',
    price: 18500000,
    oldPrice: 24000000,
    image: 'assets/images/sofa_real_3.jpg',
    tag: 'Bàn giao thực tế',
    specs: 'Khung sồi Nga chống mối mọt, da bò Nano nhập khẩu chống cào xước, mút D40 Nhật Bản êm ái đàn hồi cao, đính cúc đá pha lê.',
    isReal: true
  },
  {
    id: 'sp-02',
    name: 'Bộ Bàn Ghế Ăn 8 Ghế Da Tân Cổ Điển Viền Đinh Tán Sang Trọng',
    category: 'ban-ghe-an',
    categoryName: 'Bàn Ghế Ăn',
    price: 14800000,
    oldPrice: 19500000,
    image: 'assets/images/sofa_real_1.jpg',
    tag: 'Bàn giao thực tế',
    specs: 'Gỗ tự nhiên nguyên khối sơn đen bóng cao cấp, ghế bọc da cao cấp viền đinh đồng tỉ mỉ, mặt kính chịu lực 10mm.',
    isReal: true
  },
  {
    id: 'sp-03',
    name: 'Bộ Bàn Ghế Gỗ Đồng Kỵ Chạm Hoa Sen Cẩm Lai Đệm Đỏ Qúy Tộc',
    category: 'sofa-go',
    categoryName: 'Nội Thất Gỗ & Phòng Khách',
    price: 28500000,
    oldPrice: 35000000,
    image: 'assets/images/sofa_real_2.jpg',
    tag: 'Bàn giao thực tế',
    specs: 'Chạm khắc hoạ tiết hoa sen phong thuỷ tinh xảo, đệm bọc nhung nỉ đỏ sang trọng, bàn trà mặt kính phối đồng hồ cây.',
    isReal: true
  },
  {
    id: 'sp-04',
    name: 'Bộ Sofa Da Tiếp Khách Giám Đốc / Văn Phòng Hiện Đại Đẳng Cấp',
    category: 'sofa-van-phong',
    categoryName: 'Sofa Văn Phòng / Giám Đốc',
    price: 16500000,
    oldPrice: 21000000,
    image: 'assets/images/sofa_real_4.jpg',
    tag: 'Bàn giao thực tế',
    specs: 'Bộ sofa gồm văng dài và 2 ghế bành đơn bọc da bò màu đen huyền bí, đệm tựa êm ái chuẩn công thái học cho phòng trà, phòng lãnh đạo.',
    isReal: true
  },
  {
    id: 'sp-05',
    name: 'Bộ Sofa Góc L Da Bò Màu Rượu Vang Đệm Dày Kèm Đôn Rời',
    category: 'sofa-da',
    categoryName: 'Sofa Phòng Khách Gia Đình',
    price: 13500000,
    oldPrice: 17500000,
    image: 'assets/images/sofa_real_5.jpg',
    tag: 'Bàn giao thực tế',
    specs: 'Màu đỏ mận quý phái mang lại tài lộc may mắn cho gia chủ, kích thước may đo vừa vặn không gian nhà phố, bọc da vi sợi kháng nước.',
    isReal: true
  },
  {
    id: 'sp-06',
    name: 'Sofa Da Văng Gật Gù Hiện Đại SD-69 Chuẩn Tâm Việt',
    category: 'sofa-da',
    categoryName: 'Sofa Da Hiện Đại',
    price: 8500000,
    oldPrice: 11500000,
    image: 'assets/images/sd_48.jpg',
    tag: 'Mẫu bán chạy',
    specs: 'Tựa đầu gật gù chỉnh góc thông minh, chất liệu da Carola chống trầy, tay vịn vát tinh tế tối ưu diện tích.',
    isReal: false
  },
  {
    id: 'sp-07',
    name: 'Ghế Sofa Da Cong Mềm Mại SD-67 Xu Hướng Bắc Âu',
    category: 'sofa-da',
    categoryName: 'Sofa Nghệ Thuật Cong',
    price: 11800000,
    oldPrice: 15500000,
    image: 'assets/images/sd_67.jpg',
    tag: 'Mẫu mới 2026',
    specs: 'Kiểu dáng bo cong uyển chuyển cho căn hộ chung cư cao cấp, mút lông vũ cao cấp êm vượt trội.',
    isReal: false
  },
  {
    id: 'sp-08',
    name: 'Bộ Sofa Văng Da Cao Cấp SD-21 Kèm Bàn Trà Tối Giản',
    category: 'sofa-da',
    categoryName: 'Sofa Da Hiện Đại',
    price: 9800000,
    oldPrice: 13000000,
    image: 'assets/images/sd_21.jpg',
    tag: 'Giá tại xưởng',
    specs: 'Chân thép mạ sơn tĩnh điện bền bỉ, đường may quả trám viền đôi, nệm đúc nguyên khối chống xẹp lún 10 năm.',
    isReal: false
  },
  {
    id: 'sp-09',
    name: 'Bộ Sofa Nỉ Nhung Cao Cấp Băng Dài Tone Ấm SN-21',
    category: 'sofa-ni',
    categoryName: 'Sofa Nỉ Hàn Quốc',
    price: 7900000,
    oldPrice: 10500000,
    image: 'assets/images/sofa_ni_tv.jpg',
    tag: 'Trẻ trung',
    specs: 'Vải nỉ nhung Bỉ cao cấp dệt 3 lớp, chống bám bụi và thoáng khí mát mẻ cả 4 mùa.',
    isReal: false
  }
];

// 2. GIỎ HÀNG (LƯU LOCALSTORAGE)
let cart = JSON.parse(localStorage.getItem('sofa_cart') || '[]');

function saveCart() {
  localStorage.setItem('sofa_cart', JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  if (badge) {
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.textContent = total;
  }
}

// 3. HIỂN THỊ DANH SÁCH SẢN PHẨM THEO DANH MỤC
function renderProducts(filter = 'all', searchQuery = '') {
  const container = document.getElementById('product-list-container');
  if (!container) return;

  let filtered = PRODUCTS_DATA.filter(p => {
    const matchCategory = (filter === 'all') || (p.category === filter);
    const matchSearch = searchQuery === '' || 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.specs.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px 20px; color: #7f8c8d;">
        <h3>Không tìm thấy sản phẩm nào phù hợp</h3>
        <p>Vui lòng thử từ khóa khác hoặc gọi trực tiếp Hotline xưởng: <strong>0985.451.396</strong></p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(p => `
    <div class="product-card">
      <span class="product-badge-flag">${p.tag}</span>
      <div class="product-img-wrapper">
        <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='assets/images/xuong_1.jpg'">
      </div>
      <div class="product-info">
        <span class="product-cat">${p.categoryName}</span>
        <h3 class="product-name" title="${p.name}">${p.name}</h3>
        <p class="product-specs">${p.specs}</p>
        <div class="product-pricing">
          <span class="price-main">${formatCurrency(p.price)}</span>
          <span class="price-old">${formatCurrency(p.oldPrice)}</span>
        </div>
        <div class="product-actions">
          <button class="btn-card btn-card-primary" onclick="addToCart('${p.id}')">🛒 Thêm giỏ</button>
          <button class="btn-card btn-card-secondary" onclick="openProductDetail('${p.id}')">🔍 Chi tiết</button>
        </div>
      </div>
    </div>
  `).join('');
}

// FORMAT TIỀN TỆ VNĐ
function formatCurrency(amount) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

// 4. THAO TÁC GIỎ HÀNG
function addToCart(productId) {
  const p = PRODUCTS_DATA.find(x => x.id === productId);
  if (!p) return;

  const existing = cart.find(x => x.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: p.id,
      name: p.name,
      price: p.price,
      image: p.image,
      quantity: 1
    });
  }
  saveCart();
  alert(`Đã thêm [${p.name}] vào danh sách đặt đóng của bạn! Bấm vào biểu tượng Giỏ Hàng góc trên để xem chi tiết.`);
}

function openCartModal() {
  const modal = document.getElementById('cart-modal');
  const itemsContainer = document.getElementById('cart-items-list');
  const totalPriceEl = document.getElementById('cart-total-price');
  
  if (!modal || !itemsContainer) return;

  if (cart.length === 0) {
    itemsContainer.innerHTML = '<p style="text-align:center; padding: 20px; color:#777;">Giỏ hàng của bạn đang trống.</p>';
    totalPriceEl.textContent = '0 đ';
  } else {
    let total = 0;
    itemsContainer.innerHTML = cart.map((item, idx) => {
      const subtotal = item.price * item.quantity;
      total += subtotal;
      return `
        <div style="display:flex; align-items:center; justify-content:space-between; gap:12px; padding:12px 0; border-bottom:1px solid #eee;">
          <img src="${item.image}" style="width:50px; height:50px; object-fit:cover; border-radius:6px;">
          <div style="flex:1;">
            <strong style="font-size:0.9rem; display:block;">${item.name}</strong>
            <span style="color:#c0392b; font-weight:700;">${formatCurrency(item.price)}</span> x ${item.quantity}
          </div>
          <div>
            <button onclick="changeQuantity(${idx}, -1)" style="padding:2px 8px; border:1px solid #ccc; background:#f9f9f9; border-radius:4px; cursor:pointer;">-</button>
            <span style="margin: 0 4px; font-weight:bold;">${item.quantity}</span>
            <button onclick="changeQuantity(${idx}, 1)" style="padding:2px 8px; border:1px solid #ccc; background:#f9f9f9; border-radius:4px; cursor:pointer;">+</button>
            <button onclick="removeItem(${idx})" style="margin-left:10px; color:#e74c3c; border:none; background:none; cursor:pointer; font-weight:bold;">Xóa</button>
          </div>
        </div>
      `;
    }).join('');
    totalPriceEl.textContent = formatCurrency(total);
  }

  modal.classList.add('active');
}

function changeQuantity(index, delta) {
  if (!cart[index]) return;
  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
  openCartModal();
}

function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
  openCartModal();
}

function closeCartModal() {
  const modal = document.getElementById('cart-modal');
  if (modal) modal.classList.remove('active');
}

// 5. MODAL XEM CHI TIẾT SẢN PHẨM
function openProductDetail(productId) {
  const p = PRODUCTS_DATA.find(x => x.id === productId);
  if (!p) return;

  const modal = document.getElementById('product-detail-modal');
  const body = document.getElementById('product-detail-body');
  if (!modal || !body) return;

  body.innerHTML = `
    <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 20px;">
      <div>
        <img src="${p.image}" alt="${p.name}" style="width:100%; height:280px; object-fit:cover; border-radius:8px;">
        <div style="margin-top:10px; background:#fff8e7; padding:10px; border-radius:6px; font-size:0.85rem; border:1px solid #f9ca24;">
          ⭐ <strong>Xưởng cam kết:</strong> Khách hàng được trực tiếp về xưởng nghiệm thu phần khung xương mút trước khi bọc áo ngoài!
        </div>
      </div>
      <div>
        <span style="color:#d4af37; font-weight:bold; font-size:0.85rem; text-transform:uppercase;">${p.categoryName}</span>
        <h3 style="color:#1e272e; margin: 6px 0 12px; font-size:1.2rem;">${p.name}</h3>
        <div style="margin-bottom:12px;">
          <span style="font-size:1.5rem; font-weight:800; color:#c0392b;">${formatCurrency(p.price)}</span>
          <span style="color:#999; text-decoration:line-through; margin-left:10px;">${formatCurrency(p.oldPrice)}</span>
          <span style="display:inline-block; background:#ffeaa7; color:#d35400; font-size:0.75rem; padding:2px 8px; border-radius:10px; font-weight:bold; margin-left:8px;">Tiết kiệm 30% giá gốc</span>
        </div>
        <p style="font-size:0.9rem; color:#555; margin-bottom:14px; line-height:1.6;">${p.specs}</p>
        <ul style="font-size:0.85rem; color:#444; margin-bottom:18px; line-height:1.7;">
          <li>🛡️ <strong>Bảo hành:</strong> 5 năm khung sườn, 3 năm chất liệu da nỉ.</li>
          <li>🚚 <strong>Vận chuyển:</strong> Miễn phí vận chuyển & lắp đặt nội thành Hà Nội.</li>
          <li>📐 <strong>Tùy biến:</strong> Đóng theo kích thước & màu sắc phong thủy tùy chọn.</li>
        </ul>
        <div style="display:flex; gap:10px;">
          <button class="btn btn-primary" onclick="addToCart('${p.id}'); closeProductDetail();">🛒 Đặt làm mẫu này</button>
          <a href="tel:0985451396" class="btn btn-secondary">📞 Gọi thợ tư vấn</a>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

function closeProductDetail() {
  const modal = document.getElementById('product-detail-modal');
  if (modal) modal.classList.remove('active');
}

// 6. CÔNG CỤ DỰ TOÁN BÁO GIÁ ĐÓNG SOFA THEO KÍCH THƯỚC (QUICK CALCULATOR CHUẨN XƯỞNG)
function calculateCustomSofa() {
  const lengthEl = document.getElementById('calc-length');
  const widthEl = document.getElementById('calc-width');
  const materialEl = document.getElementById('calc-material');
  const colorTextEl = document.getElementById('calc-color-text');
  const woodEl = document.getElementById('calc-wood');
  const foamEl = document.getElementById('calc-foam');
  const springEl = document.getElementById('calc-spring');
  const demandSummaryEl = document.getElementById('customer-demand-summary');

  if (!lengthEl || !widthEl || !materialEl || !woodEl || !foamEl || !springEl) return;

  const length = parseFloat(lengthEl.value) || 2.6;
  const width = parseFloat(widthEl.value) || 1.6;
  const material = materialEl.value; // 'da' | 'ni'
  const colorText = colorTextEl ? colorTextEl.value.trim() : 'Theo yêu cầu';
  const wood = woodEl.value; // 'soi' | 'thong' | 'keo'
  const foam = foamEl.value; // 'nhat-ban' | 'viet-nam'
  const spring = springEl.value; // 'co-lo-xo' | 'khong-lo-xo'

  // 1. Đơn giá cơ sở theo chất liệu vỏ bọc (tính theo mét vuông quy đổi hoặc mét dài tiêu chuẩn)
  // Nếu sofa văng (rộng < 1.1m) tính theo mét dài; Nếu góc L (rộng >= 1.2m) tính mét dài + mét góc
  let effectiveLength = length;
  if (width >= 1.2) {
    // Kích thước góc L (Dài x Rộng)
    effectiveLength = length + (width * 0.6);
  }

  let basePricePerMeter = (material === 'da') ? 3900000 : 3400000;

  // 2. Điều chỉnh chất liệu khung gỗ tự nhiên: Sồi, Thông, Keo
  let woodAdjustment = 0;
  let woodName = 'Gỗ sồi Nga cao cấp';
  if (wood === 'soi') {
    woodAdjustment = 450000;
    woodName = 'Gỗ sồi (Chống mối mọt, bền chắc nhất)';
  } else if (wood === 'thong') {
    woodAdjustment = 150000;
    woodName = 'Gỗ thông tự nhiên (Khô ráo, chịu lực tốt)';
  } else if (wood === 'keo') {
    woodAdjustment = -200000;
    woodName = 'Gỗ keo đã qua xử lý (Kinh tế, tiết kiệm)';
  }

  // 3. Điều chỉnh chất lượng đệm mút: Việt Nam hoặc Nhật Bản
  let foamAdjustment = 0;
  let foamName = 'Mút Nhật Bản (Việt Nhật D40)';
  if (foam === 'nhat-ban') {
    foamAdjustment = 350000;
    foamName = 'Mút Nhật Bản (Việt Nhật D40 êm ái, chống xẹp lún)';
  } else {
    foamAdjustment = 0;
    foamName = 'Mút Việt Nam tiêu chuẩn (Độ cứng vừa phải)';
  }

  // 4. Đệm ngồi có lò xo hoặc không lò xo
  let springAdjustment = 0;
  let springName = 'Có lò xo giàn sóng thép trợ lực';
  if (spring === 'co-lo-xo') {
    springAdjustment = 200000;
    springName = 'Có lò xo (Lò xo giàn sóng thép trợ lực)';
  } else {
    springAdjustment = 0;
    springName = 'Không có lò xo (Đệm mút đúc nguyên khối đầm chắc)';
  }

  // Tính tổng dự toán xuất xưởng
  const unitPricePerMeter = basePricePerMeter + woodAdjustment + foamAdjustment + springAdjustment;
  const total = Math.round((effectiveLength * unitPricePerMeter) / 100000) * 100000;

  const resultEl = document.getElementById('calc-price-output');
  if (resultEl) {
    resultEl.textContent = formatCurrency(total);
  }

  // Cập nhật Prompt tóm tắt nhu cầu khách hàng trực quan
  if (demandSummaryEl) {
    demandSummaryEl.innerHTML = `
      <strong>📋 Tóm tắt nhu cầu đặt đóng của bạn:</strong><br>
      • <strong>Kích thước may đo:</strong> Dài ${length}m × Rộng ${width}m<br>
      • <strong>Chất liệu & Màu sắc:</strong> Bọc ${material === 'da' ? 'Da cao cấp' : 'Vải nỉ cao cấp'} (Màu: <em>${colorText || 'Chọn tự do'}</em>)<br>
      • <strong>Khung gỗ:</strong> ${woodName}<br>
      • <strong>Đệm mút:</strong> ${foamName}<br>
      • <strong>Đệm ngồi:</strong> ${springName}
    `;
  }
}

// HÀM GỬI NHANH TẤT CẢ THÔNG TIN YÊU CẦU QUA ZALO XƯỞNG (0985.451.396)
function sendCustomDemandToZalo() {
  const length = document.getElementById('calc-length').value || '2.6';
  const width = document.getElementById('calc-width').value || '1.6';
  const material = document.getElementById('calc-material').value === 'da' ? 'Da cao cấp' : 'Vải nỉ cao cấp';
  const color = document.getElementById('calc-color-text').value || 'Theo mẫu yêu cầu';
  const wood = document.getElementById('calc-wood').options[document.getElementById('calc-wood').selectedIndex].text;
  const foam = document.getElementById('calc-foam').options[document.getElementById('calc-foam').selectedIndex].text;
  const spring = document.getElementById('calc-spring').options[document.getElementById('calc-spring').selectedIndex].text;

  // Bản tin chi tiết tổng hợp toàn bộ các ô trong bảng
  const msg = `[ĐƠN YÊU CẦU MAY ĐO SOFA TẬN XƯỞNG]
• Kích thước: Dài ${length}m × Rộng ${width}m
• Chất liệu bọc: ${material}
• Màu sắc mong muốn: ${color}
• Khung xương gỗ: ${wood}
• Đệm mút: ${foam}
• Hệ thống đệm ngồi: ${spring}
---------------------------
Kính nhờ xưởng liên hệ tư vấn và mang catalog da nỉ qua nhà đo đạc giúp tôi nhé!`;

  // 1. Tự động Copy nội dung vào bộ nhớ máy tính / điện thoại
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(msg).catch(() => {});
  } else {
    const tempInput = document.createElement('textarea');
    tempInput.value = msg;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
  }

  // 2. Chuyển thẳng người dùng tới Zalo của hotline 0985451396
  const zaloPhone = '0985451396';
  const zaloLink = `https://zalo.me/${zaloPhone}`;
  window.open(zaloLink, '_blank');

  // 3. Thông báo rõ ràng cho khách hàng
  alert(`✅ ĐÃ TỔNG HỢP TOÀN BỘ THÔNG TIN BẢNG NHU CẦU CỦA BẠN!\n\n${msg}\n\n👉 Hệ thống đã sao chép sẵn nội dung và mở Zalo xưởng (${zaloPhone}). Bạn chỉ cần dán (Ctrl+V hoặc Nhấn giữ Dán) vào ô chat Zalo là xong!`);
}

// 7. GỬI FORM ĐẶT HÀNG / TƯ VẤN ĐO ĐẠC TẬN NHÀ (CHUYỂN THẲNG VỀ ZALO 0985.451.396)
function handleOrderSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.customerName ? form.customerName.value.trim() : '';
  const phone = form.customerPhone ? form.customerPhone.value.trim() : '';
  const address = form.customerAddress ? form.customerAddress.value.trim() : 'Hà Nội';
  const time = form.customerTime ? form.customerTime.value : (form.customerNote ? form.customerNote.value : 'Càng sớm càng tốt');

  if (!name || !phone) {
    alert('Vui lòng điền họ tên và số điện thoại để xưởng liên hệ phục vụ!');
    return;
  }

  // 1. Soạn tin nhắn đầy đủ thông tin khách hẹn
  const msg = `[ĐẶT LỊCH ĐO ĐẠC SOFA TẬN NHÀ]
• Khách hàng: ${name}
• Số điện thoại/Zalo: ${phone}
• Địa chỉ cần đo: ${address}
• Thời gian hẹn: ${time}
---------------------------
Kính nhờ xưởng mang mẫu da nỉ qua đo đạc và tư vấn trực tiếp giúp tôi!`;

  // 2. Tự động Copy tin nhắn vào bộ nhớ tạm
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(msg).catch(() => {});
  } else {
    const tempInput = document.createElement('textarea');
    tempInput.value = msg;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
  }

  // 3. Mở Zalo số điện thoại 0985.451.396
  const zaloPhone = '0985451396';
  const zaloLink = `https://zalo.me/${zaloPhone}`;
  window.open(zaloLink, '_blank');

  alert(`✅ ĐÃ GỬI LỊCH HẸN ĐO ĐẠC THÀNH CÔNG!\n\n${msg}\n\n👉 Thông tin đã được copy tự động. Trình duyệt đang mở cửa sổ Zalo xưởng (${zaloPhone}), bạn chỉ cần dán (Ctrl+V hoặc chạm giữ Dán) để gửi ngay cho kỹ thuật xưởng nhé!`);
  form.reset();
  closeCartModal();
}

// 8. KHỞI TẠO SỰ KIỆN SAU KHI TẢI TRANG
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartBadge();

  // Tab lọc sản phẩm
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      tabs.forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');
      const cat = e.target.getAttribute('data-cat');
      renderProducts(cat);
    });
  });

  // Tìm kiếm
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const activeTab = document.querySelector('.tab-btn.active');
      const cat = activeTab ? activeTab.getAttribute('data-cat') : 'all';
      renderProducts(cat, e.target.value.trim());
    });
  }

  // Calculator inputs listener - cập nhật tự động khi thay đổi bất kỳ thuộc tính nào
  const calcInputs = ['calc-length', 'calc-width', 'calc-material', 'calc-color-text', 'calc-wood', 'calc-foam', 'calc-spring'];
  calcInputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('change', calculateCustomSofa);
      el.addEventListener('input', calculateCustomSofa);
    }
  });
  calculateCustomSofa();

  // Back to top scroll listener
  const topBtn = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      if (topBtn) topBtn.classList.add('visible');
    } else {
      if (topBtn) topBtn.classList.remove('visible');
    }
  });

  if (topBtn) {
    topBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Mobile navigation toggle
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });
  }
});

// Hàm đóng/mở câu hỏi thường gặp (FAQ Accordion)
function toggleFaq(buttonEl) {
  const faqItem = buttonEl.closest('.faq-item');
  if (!faqItem) return;
  
  const isActive = faqItem.classList.contains('active');
  
  // Đóng tất cả các mục FAQ khác nếu muốn giữ gọn (hoặc cho phép mở nhiều mục)
  document.querySelectorAll('.faq-item').forEach(item => {
    if (item !== faqItem) {
      item.classList.remove('active');
    }
  });

  // Toggle mục hiện tại
  if (isActive) {
    faqItem.classList.remove('active');
  } else {
    faqItem.classList.add('active');
  }
}
