/* ═══════════════════════════════════════
   NAVIGATION
═══════════════════════════════════════ */
const pageLabels = {
    dashboard: 'Inicio',
    inventario: 'Medicamentos',
    historial: 'Historial de Ventas',
    ventas: 'Registrar Venta',
    proveedores: 'Proveedores',
    usuarios: 'Usuarios',
    reportes: 'Reportes',
    configuracion: 'Configuración'
  };
  
  const pageIcons = {
    dashboard: `<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>`,
    inventario: `<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 12h6M12 9v6"/>`,
    historial: `<path d="M18 20V10M12 20V4M6 20v-6"/>`,
    ventas: `<path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>`,
    proveedores: `<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3H8l-2 4h12l-2-4z"/>`,
    usuarios: `<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>`,
    reportes: `<path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="9 7 4 12 9 17"/><line x1="4" y1="12" x2="15" y2="12"/>`,
    configuracion: `<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>`
  };
  
  let currentPage = 'dashboard';
  
  function goTo(page) {
    // 1. Ocultar todas las páginas
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    // 2. Mostrar la página objetivo
    const target = document.getElementById('page-' + page);
    if (target) target.classList.add('active');
    
    // 3. Actualizar los ítems del menú lateral (Sidebar)
    document.querySelectorAll('.nav-item[data-page]').forEach(item => {
      item.classList.toggle('active', item.dataset.page === page);
    });
    
    // 4. Configuración de nombres e iconos para la pestaña estilo Chrome
    const pageConfig = {
        'dashboard':  { text: 'Inicio', icon: '🏠' },
        'inventario': { text: 'Medicamentos', icon: '📦' },
        'historial':  { text: 'Historial De Ventas', icon: '📋' },
        'reportes':   { text: 'Reportes', icon: '📊' },
        'configuracion': {text: 'Configuración', icon: '⚙️'},
        'proveedores': {text: 'Proveedores', icon:'👥'},
        'usuarios': {text: 'Usuarios', icon:'👤'},

        // Agrega aquí más mapeos si tenés otras páginas (ej: 'configuracion': { text: 'Configuración', icon: '⚙️' })
    };

    const tabTextEl = document.getElementById('dynamic-tab-text');
    const tabIconEl = document.getElementById('dynamic-tab-icon');

    if (pageConfig[page] && tabTextEl && tabIconEl) {
        tabTextEl.textContent = pageConfig[page].text;
        tabIconEl.textContent = pageConfig[page].icon;
    }

    const nuevaVentaTab = document.querySelector('.tab[data-page="ventas"]');
    const dinamicaTab = document.getElementById('dynamic-tab');

    if (page === 'ventas') {
        if (nuevaVentaTab) nuevaVentaTab.classList.add('active');
        if (dinamicaTab) dinamicaTab.classList.remove('active');
        // Omitimos actualizar 'currentPage' acá para que recuerde la pestaña de atrás
    } else {
        if (nuevaVentaTab) nuevaVentaTab.classList.remove('active');
        if (dinamicaTab) dinamicaTab.classList.add('active');
        
        // REEMPLAZO: Solo actualizamos el historial si es una pantalla de la pestaña dinámica
        currentPage = page; 
    }
}
  
  /* ═══════════════════════════════════════
     SIDEBAR TOGGLE
  ═══════════════════════════════════════ */
  let sidebarCollapsed = false;
  function toggleSidebar() {
    sidebarCollapsed = !sidebarCollapsed;
    document.getElementById('sidebar').classList.toggle('collapsed', sidebarCollapsed);
  }
  
  /* ═══════════════════════════════════════
     TOPSTRIP DATE
  ═══════════════════════════════════════ */
  (function() {
    const d = new Date(2026, 5, 25);
    const days = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
    const months = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
    // Cambiá la línea 94 por esta:
document.querySelector('.topstrip-date').textContent =
      days[d.getDay()] + ', ' + d.getDate() + ' de ' + months[d.getMonth()] + ' de ' + d.getFullYear();
  })();

  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      
      const targetPage = this.getAttribute('data-page');
      if (targetPage) {
        goTo(targetPage);
      }
    });
  });
  
  /* ═══════════════════════════════════════
     TOAST — top-center, tipado
  ═══════════════════════════════════════ */
  let toastTimer = null;
  function showToast(msg, type = 'success') {
    const t = document.getElementById('toast-msg');
    const icon = document.getElementById('toast-icon');
    const text = document.getElementById('toast-text');
    text.textContent = msg;

    // Icon per type
    const icons = {
      success: `<polyline points="20 6 9 17 4 12"/>`,
      warning: `<path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>`,
      info:    `<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>`,
    };
    icon.innerHTML = icons[type] || icons.success;

    // Color per type
    t.setAttribute('data-type', type);

    t.classList.remove('show');
    void t.offsetWidth; // reflow to restart animation
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 3200);
  }
  
  /* ═══════════════════════════════════════
     THEME — preview immediately on settings page,
     apply to all pages only on "Guardar cambios"
  ═══════════════════════════════════════ */
  let pendingTheme = document.documentElement.getAttribute('data-theme') || '';
  let appliedTheme = pendingTheme;

  function setTheme(theme, swatch) {
    pendingTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    document.querySelectorAll('.theme-swatch').forEach(s => s.classList.remove('active'));
    if (swatch) swatch.classList.add('active');
    const names = { '': 'Clásico', blue: 'Azul', dark: 'Oscuro', midnight: 'Medianoche', 'light-clean': 'Claro' };
    showToast('Vista previa: ' + (names[theme] || theme) + ' — Guardá para aplicar', 'info');
  }

  function saveAppearance() {
    appliedTheme = pendingTheme;
    // Apply font size globally
    document.documentElement.style.setProperty('--font-size', fontSize + 'px');
    // Persist both
    localStorage.setItem('bs-theme', appliedTheme);
    localStorage.setItem('bs-font', fontSize);
    showToast('✅ Apariencia guardada — tema y tamaño de texto aplicados a toda la app', 'success');
  }
  
  /* ═══════════════════════════════════════
     FONT SIZE — live preview, global apply on save
  ═══════════════════════════════════════ */
  let fontSize = parseInt(localStorage.getItem('bs-font')) || 14;

//   function updateFontPreview() {
//     const box = document.getElementById('font-preview-box');
//     if (!box) return;
//     box.style.fontSize = fontSize + 'px';
//     const h = document.getElementById('preview-heading');
//     const b = document.getElementById('preview-body');
//     const s = document.getElementById('preview-small');
//     if (h) h.style.fontSize = (fontSize + 2) + 'px';
//     if (b) b.style.fontSize = fontSize + 'px';
//     if (s) s.style.fontSize = (fontSize - 1) + 'px';
//   }
function updateFontPreview() {
    const box = document.getElementById('font-preview-box');
    // ¡CAMBIO CLAVE ACÁ! Si el box no existe en la página actual, 
    // salimos de la función pacíficamente sin romper el sistema.
    if (!box) return; 
    
    box.style.fontSize = fontSize + 'px';
    const h = document.getElementById('preview-heading');
    const b = document.getElementById('preview-body');
    const s = document.getElementById('preview-small');
    if (h) h.style.fontSize = (fontSize + 2) + 'px';
    if (b) b.style.fontSize = fontSize + 'px';
    if (s) s.style.fontSize = (fontSize - 1) + 'px';
  }

  function changeFontSize(delta) {
    fontSize = Math.min(20, Math.max(11, fontSize + delta));
    // Only update the preview box — global apply happens on saveAppearance()
    document.getElementById('font-size-display').textContent = fontSize + 'px';
    updateFontPreview();
    showToast('Vista previa: ' + fontSize + 'px — Guardá para aplicar', 'info');
  }

  // Apply saved font on load
  // Apply saved font on load
(function() {
    const saved = localStorage.getItem('bs-font');
    if (saved) {
      fontSize = parseInt(saved);
      document.documentElement.style.setProperty('--font-size', fontSize + 'px');
      const disp = document.getElementById('font-size-display');
      if (disp) disp.textContent = fontSize + 'px';
    }
    const savedTheme = localStorage.getItem('bs-theme');
    if (savedTheme !== null) {
      appliedTheme = savedTheme;
      pendingTheme = savedTheme;
      document.documentElement.setAttribute('data-theme', savedTheme);
      
      // Controlamos de manera segura si existen swatches en pantalla
      const swatches = document.querySelectorAll('.theme-swatch');
      if (swatches.length > 0) {
        swatches.forEach(s => {
          const onclick = s.getAttribute('onclick') || '';
          const match = onclick.match(/setTheme\('([^']*)'/);
          if (match && match[1] === savedTheme) s.classList.add('active');
          else s.classList.remove('active');
        });
      }
    }
    updateFontPreview();
  })();
  
  /* ═══════════════════════════════════════
     ACCESSIBILITY TOGGLES
  ═══════════════════════════════════════ */
  function toggleHighContrast(cb) {
    document.body.style.filter = cb.checked ? 'contrast(1.3)' : '';
    showToast(cb.checked ? 'Alto contraste activado' : 'Alto contraste desactivado');
  }
  function toggleReducedMotion(cb) {
    const style = document.getElementById('reduced-motion-style') || document.createElement('style');
    style.id = 'reduced-motion-style';
    style.textContent = cb.checked ? '*, *::before, *::after { transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; }' : '';
    document.head.appendChild(style);
    showToast(cb.checked ? 'Animaciones reducidas' : 'Animaciones activadas');
  }
  function toggleLargeCursor(cb) {
    document.body.style.cursor = cb.checked ? 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewBox=\'0 0 24 24\'%3E%3Cpath fill=\'black\' stroke=\'white\' stroke-width=\'1\' d=\'M4 2l16 10-8 2-4 8z\'/%3E%3C/svg%3E") 0 0, auto' : '';
    showToast(cb.checked ? 'Cursor grande activado' : 'Cursor normal');
  }
  
  /* ═══════════════════════════════════════
     SETTINGS NAV
  ═══════════════════════════════════════ */
  function showSettingsPanel(panel, navItem) {
    document.querySelectorAll('.settings-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.settings-nav-item').forEach(n => n.classList.remove('active'));
    const target = document.getElementById('panel-' + panel);
    if (target) target.classList.add('active');
    if (navItem) navItem.classList.add('active');
    if (panel === 'atajos') renderShortcuts();
  }

const PRODUCTS = [
    { id: 1, name: 'Ibuprofeno 400mg', price: 850, stock: 5 },
    { id: 2, name: 'Aspirina 500mg', price: 420, stock: 18 },
    { id: 3, name: 'Amoxicilina 500mg', price: 1200, stock: 22 },
    { id: 4, name: 'Paracetamol 500mg', price: 380, stock: 145 },
    { id: 5, name: 'Omeprazol 20mg', price: 920, stock: 67 },
    { id: 6, name: 'Losartán 50mg', price: 1650, stock: 89 },
    { id: 7, name: 'Paracetamol 500mg x 16 comp', price: 980, stock: 8 },
    { id: 8, name: 'Loratadina 10mg x 10 comp', price: 1540, stock: 5 },
    { id: 9, name: 'Vitamina C 1000mg x 30 comp', price: 2750, stock: 60 },
    { id: 10, name: 'Termómetro digital', price: 4500, stock: 12 },
    { id: 11, name: 'Alcohol en gel 500ml', price: 1200, stock: 3 },
    { id: 12, name: 'Diclofenac 50mg x 20 comp', price: 2300, stock: 18 }
  ];
  
  let cart = [];
  let selectedMethod = 'Efectivo';
  
  function filterProducts(query) {
    const box = document.getElementById('product-suggestions');
    const list = document.getElementById('suggestions-list');
    if (!query.trim()) { box.style.display = 'none'; return; }
    const results = PRODUCTS.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
    if (!results.length) { box.style.display = 'none'; return; }
    list.innerHTML = results.map(p => `
      <div onclick="addToCart(${p.id})" style="padding:9px 12px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--border);transition:background .12s;" onmouseover="this.style.background='var(--surface-2)'" onmouseout="this.style.background=''">
        <span style="font-size:13px;font-weight:500;color:var(--text-main)">${p.name}</span>
        <span style="font-size:12px;color:var(--primary);font-weight:600">$${p.price.toLocaleString('es-AR')}</span>
      </div>`).join('');
    box.style.display = 'block';
  }
  
  function addToCart(productId) {
    const prod = PRODUCTS.find(p => p.id === productId);
    if (!prod) return;
    const existing = cart.find(c => c.id === productId);
    if (existing) { existing.qty++; }
    else { cart.push({ ...prod, qty: 1 }); }
    document.getElementById('product-search').value = '';
    document.getElementById('product-suggestions').style.display = 'none';
    renderCart();
  }

  function simularScan(){
    const random = PRODUCTS[Math.floor(Math.random()*PRODUCTS.length)];
    addToCart(random.id);
  }
  
  function changeQty(id, delta) {
    const item = cart.find(c => c.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) cart = cart.filter(c => c.id !== id);
    renderCart();
  }
  
  function removeFromCart(id) {
    cart = cart.filter(c => c.id !== id);
    renderCart();
  }
  
  function resetCart() {
    cart = [];
    renderCart();
    showToast('Venta cancelada');
  }
  
  function renderCart() {
    const tbody = document.getElementById('cart-tbody');
    const counter = document.getElementById('item-counter');
    const totalItems = cart.reduce((s, c) => s + c.qty, 0);
    counter.textContent = totalItems + ' ítem' + (totalItems !== 1 ? 's' : '');
  
    if (!cart.length) {
      tbody.innerHTML = `<tr id="cart-empty"><td colspan="5" style="text-align:center;padding:28px;color:var(--text-muted);font-size:12px;">
        <svg style="display:block;margin:0 auto 8px;color:var(--border);" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3H8l-2 4h12l-2-4z"/></svg>
        Ningún producto agregado aún</td></tr>`;
      updateTotals(0);
      return;
    }
  
    let subtotal = 0;
    tbody.innerHTML = cart.map(item => {
      const sub = item.price * item.qty;
      subtotal += sub;
      return `<tr>
        <td style="font-size:12px;font-weight:500;">${item.name}</td>
        <td style="font-size:12px;">$${item.price.toLocaleString('es-AR')}</td>
        <td><div class="qty-ctrl">
          <button class="qty-btn" onclick="changeQty(${item.id},-1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id},1)">+</button>
        </div></td>
        <td style="font-size:12px;font-weight:700;color:var(--primary);">$${sub.toLocaleString('es-AR')}</td>
        <td><button class="remove-btn" onclick="removeFromCart(${item.id})">✕</button></td>
      </tr>`;
    }).join('');
    updateTotals(subtotal);
  }
  
  
function selectMethod(el) {
    document.querySelectorAll('.method-opt').forEach(m => m.classList.remove('active'));
    el.classList.add('active');
    selectedMethod = el.dataset.method;
    
    // Mostrar u ocultar paneles basándose en IDs corregidos
    document.getElementById('cuotas-wrap').style.display = (selectedMethod === 'Tarjeta crédito') ? 'block' : 'none';
    document.getElementById('obra-wrap').style.display = (selectedMethod === 'Obra social') ? 'block' : 'none';
    
    if (document.getElementById('modal-method')) {
        document.getElementById('modal-method').textContent = selectedMethod;
    }
  
    if (typeof cart !== 'undefined') {
      renderCart(); 
    }
  }
  
// function updateTotals(subtotal) {
//     const descInput = document.getElementById('descuento');
//     const porcDescuento = descInput ? Math.max(0, Math.min(100, parseFloat(descInput.value) || 0)) : 0;
    
//     const montoDescuento = subtotal * (porcDescuento / 100);
//     const subtotalConDesc = subtotal - montoDescuento;
//     const iva = subtotalConDesc * 0.21;
//     const total = subtotalConDesc + iva;
    
//     const fmt = n => '$' + n.toLocaleString('es-AR', {minimumFractionDigits:2, maximumFractionDigits:2});
    
//     document.getElementById('subtotal-val').textContent = fmt(subtotal);
//     document.getElementById('descuento-val').textContent = '— ' + fmt(montoDescuento);
//     document.getElementById('iva-val').textContent = fmt(iva);
//     document.getElementById('total-val').textContent = fmt(total);
    
//     if (document.getElementById('modal-subtotal')) {
//         document.getElementById('modal-subtotal').textContent = fmt(subtotal);
//         document.getElementById('modal-iva').textContent = fmt(iva);
//         document.getElementById('modal-total').textContent = fmt(total);
//     }
  
//     // --- Lógica del Cálculo de Cuotas Corregida ---
//     const resCreditoInfo = document.getElementById('resumen-credito-info');
//     const selectCuotas = document.getElementById('cuotas'); // ID unificado
  
//     if (selectedMethod === 'Tarjeta crédito' && selectCuotas) {
//       const textoCuota = selectCuotas.value;
//       const cantidadCuotas = parseInt(textoCuota.match(/\d+/)) || 1; 
//       const valorCuota = total / cantidadCuotas;
  
//       // Actualizar Panel Lateral Resumen
//       document.getElementById('resumen-cuotas-detalle').textContent = `${cantidadCuotas} ${cantidadCuotas === 1 ? 'cuota' : 'cuotas'} de`;
//       document.getElementById('resumen-cuotas-valor').textContent = fmt(valorCuota);
//       if (resCreditoInfo) resCreditoInfo.style.display = 'block';
  
//       // Preparar el Modal
//       if (document.getElementById('modal-cuotas-detalle')) {
//         document.getElementById('modal-cuotas-detalle').textContent = `${cantidadCuotas} ${cantidadCuotas === 1 ? 'cuota' : 'cuotas'} de`;
//         document.getElementById('modal-cuotas-valor').textContent = fmt(valorCuota);
//       }
//     } else {
//       if (resCreditoInfo) resCreditoInfo.style.display = 'none';
//     }
//   }

function updateTotals(subtotal) {
    const descInput = document.getElementById('descuento');
    const porcDescuento = descInput ? Math.max(0, Math.min(100, parseFloat(descInput.value) || 0)) : 0;
    
    const montoDescuento = subtotal * (porcDescuento / 100);
    const subtotalConDesc = subtotal - montoDescuento;
    const iva = subtotalConDesc * 0.21;
    const total = subtotalConDesc + iva;
    
    const fmt = n => '$' + n.toLocaleString('es-AR', {minimumFractionDigits:2, maximumFractionDigits:2});
    
    document.getElementById('subtotal-val').textContent = fmt(subtotal);
    document.getElementById('descuento-val').textContent = '— ' + fmt(montoDescuento);
    document.getElementById('iva-val').textContent = fmt(iva);
    document.getElementById('total-val').textContent = fmt(total);
    
    if (document.getElementById('modal-subtotal')) {
        document.getElementById('modal-subtotal').textContent = fmt(subtotal);
        document.getElementById('modal-iva').textContent = fmt(iva);
        document.getElementById('modal-total').textContent = fmt(total);
    }
  
    // --- Lógica del Cálculo de Cuotas Corregida ---
    const resCreditoInfo = document.getElementById('resumen-credito-info');
    const selectCuotas = document.getElementById('cuotas'); 
  
    if (selectedMethod === 'Tarjeta crédito' && selectCuotas) {
      const textoCuota = selectCuotas.value;
      
      // Buscamos el número exacto dentro del texto (ej: "3 cuotas" -> 3)
      const coincidencias = textoCuota.match(/\d+/);
      const cantidadCuotas = coincidencias ? parseInt(coincidencias[0]) : 1; 
      
      const valorCuota = total / cantidadCuotas;
  
      // Actualizar Panel Lateral Resumen
      document.getElementById('resumen-cuotas-detalle').textContent = `${cantidadCuotas} ${cantidadCuotas === 1 ? 'cuota' : 'cuotas'} de`;
      document.getElementById('resumen-cuotas-valor').textContent = fmt(valorCuota);
      if (resCreditoInfo) resCreditoInfo.style.display = 'block';
  
      // Preparar el Modal
      if (document.getElementById('modal-cuotas-detalle')) {
        document.getElementById('modal-cuotas-detalle').textContent = `${cantidadCuotas} ${cantidadCuotas === 1 ? 'cuota' : 'cuotas'} de`;
        document.getElementById('modal-cuotas-valor').textContent = fmt(valorCuota);
      }
    } else {
      if (resCreditoInfo) resCreditoInfo.style.display = 'none';
    }
}
  
  // Modificación extra para limpiar el input de descuento al reiniciar el carrito
  const originalResetCart = resetCart;
  resetCart = function() {
    const descInput = document.getElementById('descuento');
    if (descInput) descInput.value = 0;
    originalResetCart();
  };

function openConfirmModal() {
    // 1. Lógica del Nombre del Cliente
    const inputNombre = document.getElementById('nombre-cliente');
    const modalNombre = document.getElementById('nombrecliente');
    if (inputNombre && modalNombre) {
      const nombreEscrito = inputNombre.value.trim();
      modalNombre.textContent = nombreEscrito !== "" ? nombreEscrito : "Consumidor final";
    }
  
    // 2. Lógica de Nota Interna
    const inputNota = document.getElementById('nota-interna');
    const modalNota = document.getElementById('notainterna');
    if (inputNota && modalNota) {
      const notaEscrita = inputNota.value.trim();
      modalNota.textContent = notaEscrita !== "" ? notaEscrita : "";
    }
  
    // 3. NUEVO: Setear Fecha Actual Dinámica
    const modalFecha = document.getElementById('modal-fecha');
    if (modalFecha) {
      const hoy = new Date();
      modalFecha.textContent = hoy.toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    }
  
    // 4. NUEVO: Capturar Vendedor de la sesión (busca la interfaz del footer si cambia)
    const userLabel = document.querySelector('.user-name');
    const modalVendedor = document.getElementById('modal-vendedor');
    if (userLabel && modalVendedor) {
      modalVendedor.textContent = userLabel.textContent;
    }
  
    // 5. Configurar método de pago y visibilidad del posnet en modal
    document.getElementById('modal-method').textContent = selectedMethod;
    const modalCreditoInfo = document.getElementById('modal-credito-info');
    if (modalCreditoInfo) {
      modalCreditoInfo.style.display = (selectedMethod === 'Tarjeta crédito') ? 'block' : 'none';
    }
  
    document.getElementById('confirm-modal').classList.add('open');
  }

  
  function closeModal() {
    document.getElementById('confirm-modal').classList.remove('open');
  }
  function confirmSale() {
    closeModal();
    resetCart();
    showToast('✅ Venta registrada correctamente');
    setTimeout(() => goTo('historial'), 600);
  }
  
  
  /* ═══════════════════════════════════════
     DRAG & DROP — MENU ORDER
  ═══════════════════════════════════════ */
  (function() {
    let dragSrc = null;
    function setupDrag() {
      const list = document.getElementById('menu-order-list');
      if (!list) return;
      list.querySelectorAll('.menu-order-item').forEach(item => {
        item.addEventListener('dragstart', e => {
          dragSrc = item;
          item.classList.add('dragging');
          e.dataTransfer.effectAllowed = 'move';
        });
        item.addEventListener('dragend', () => {
          item.classList.remove('dragging');
          list.querySelectorAll('.menu-order-item').forEach(i => i.classList.remove('drag-over'));
        });
        item.addEventListener('dragover', e => {
          e.preventDefault();
          item.classList.add('drag-over');
        });
        item.addEventListener('dragleave', () => item.classList.remove('drag-over'));
        item.addEventListener('drop', e => {
          e.preventDefault();
          item.classList.remove('drag-over');
          if (dragSrc && dragSrc !== item) {
            const items = [...list.querySelectorAll('.menu-order-item')];
            const srcIdx = items.indexOf(dragSrc);
            const dstIdx = items.indexOf(item);
            if (srcIdx < dstIdx) list.insertBefore(dragSrc, item.nextSibling);
            else list.insertBefore(dragSrc, item);
          }
        });
      });
    }
    document.addEventListener('DOMContentLoaded', setupDrag);
    setupDrag();
  })();
  
  /* ═══════════════════════════════════════
     KEYBOARD SHORTCUTS — editable + addable
  ═══════════════════════════════════════ */
  let shortcuts = JSON.parse(localStorage.getItem('bs-shortcuts') || 'null') || [
    { label: 'Ir al Inicio',            key: 'Ctrl+1',   action: 'dashboard' },
    { label: 'Registrar Venta',         key: 'Ctrl+V',   action: 'ventas' },
    { label: 'Ir a Inventario',         key: 'Ctrl+I',   action: 'inventario' },
    { label: 'Historial de Ventas',     key: 'Ctrl+H',   action: 'historial' },
    { label: 'Contraer/expandir menú',  key: 'Ctrl+B',   action: 'toggleSidebar' },
    { label: 'Ir a Configuración',      key: 'Ctrl+,',   action: 'configuracion' },
    { label: 'Aumentar texto',          key: 'Ctrl++',   action: '_fontUp' },
    { label: 'Reducir texto',           key: 'Ctrl+-',   action: '_fontDown' },
  ];

  let capturingFor = null; // index or 'new'

  function renderShortcuts() {
    const list = document.getElementById('shortcuts-list');
    if (!list) return;
    list.innerHTML = shortcuts.map((sc, i) => `
      <div class="setting-row" id="sc-row-${i}">
        <div class="setting-label"><div class="setting-label-title">${sc.label}</div></div>
        <div style="display:flex;align-items:center;gap:8px;">
          <span class="kbd sc-key-display" id="sc-key-${i}">${sc.key}</span>
          <button onclick="startCapture(${i})" style="height:28px;padding:0 10px;font-size:11px;border:1.5px solid var(--primary);border-radius:6px;background:transparent;color:var(--primary);cursor:pointer;font-family:Inter,sans-serif;font-weight:600;transition:background .12s;"
            onmouseover="this.style.background='rgba(0,122,142,.1)'" onmouseout="this.style.background='transparent'">Editar</button>
          <button onclick="removeShortcut(${i})" style="height:28px;width:28px;border:1.5px solid var(--border);border-radius:6px;background:transparent;color:var(--text-muted);cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;transition:all .12s;"
            onmouseover="this.style.borderColor='#ef4444';this.style.color='#ef4444'" onmouseout="this.style.borderColor='var(--border)';this.style.color='var(--text-muted)'">✕</button>
        </div>
      </div>`).join('');
  }

  function startCapture(idx) {
    capturingFor = idx;
    const span = document.getElementById('sc-key-' + idx);
    span.textContent = '…presioná tecla…';
    span.style.background = 'rgba(0,122,142,.15)';
    span.style.borderColor = 'var(--primary)';
    showToast('Presioná la combinación de teclas', 'info');
  }

  function captureNewShortcut(input) {
    capturingFor = 'new';
    input.value = '…presioná tecla…';
    input.style.borderColor = 'var(--primary)';
    showToast('Presioná la combinación de teclas', 'info');
  }

  function removeShortcut(idx) {
    shortcuts.splice(idx, 1);
    renderShortcuts();
    showToast('Atajo eliminado');
  }

  function addShortcut() {
    const label = document.getElementById('new-shortcut-label').value.trim();
    const key = document.getElementById('new-shortcut-key').value.trim();
    const action = document.getElementById('new-shortcut-action').value;
    if (!label) { showToast('⚠️ Ingresá un nombre para el atajo', 'warning'); return; }
    if (!key || key.includes('…')) { showToast('⚠️ Capturá una tecla para el atajo', 'warning'); return; }
    shortcuts.push({ label, key, action });
    renderShortcuts();
    document.getElementById('new-shortcut-label').value = '';
    document.getElementById('new-shortcut-key').value = '';
    showToast('Atajo agregado — guardá para activarlo');
  }

  function saveShortcuts() {
    localStorage.setItem('bs-shortcuts', JSON.stringify(shortcuts));
    registerShortcuts();
    showToast('✅ Atajos guardados y activados');
  }

  // Key capture listener
  document.addEventListener('keydown', e => {
    if (capturingFor === null) return;
    if (e.key === 'Escape') { capturingFor = null; renderShortcuts(); return; }
    e.preventDefault();
    const parts = [];
    if (e.ctrlKey || e.metaKey) parts.push('Ctrl');
    if (e.altKey) parts.push('Alt');
    if (e.shiftKey) parts.push('Shift');
    const k = e.key.length === 1 ? e.key.toUpperCase() : e.key;
    if (!['Control','Alt','Shift','Meta'].includes(e.key)) parts.push(k);
    const combo = parts.join('+');

    if (capturingFor === 'new') {
      const input = document.getElementById('new-shortcut-key');
      if (input) { input.value = combo; input.style.borderColor = 'var(--border)'; }
    } else {
      shortcuts[capturingFor].key = combo;
      renderShortcuts();
    }
    capturingFor = null;
  }, true);

  // Dynamic shortcut dispatcher
  function registerShortcuts() {
    // handled in keydown below
  }

  /* ═══════════════════════════════════════
     LANGUAGE — translate UI + RTL support
  ═══════════════════════════════════════ */
  const TRANSLATIONS = {
    es: {
      dir: 'ltr',
      pageLabels: { dashboard:'Inicio', inventario:'Medicamentos', historial:'Historial de Ventas', ventas:'Registrar Venta', proveedores:'Proveedores', usuarios:'Usuarios', reportes:'Reportes', configuracion:'Configuración' },
      nav: ['Inicio','Registrar Venta','Medicamentos','Proveedores','Historial de Ventas','Usuarios','Reportes','Configuración'],
      sections: ['Principal','Inventario','Gestión'],
      toast: 'Idioma aplicado: Español',
      brand: ['Biene','Star'],
    },
    'es-es': {
      dir: 'ltr',
      pageLabels: { dashboard:'Inicio', inventario:'Medicamentos', historial:'Historial de ventas', ventas:'Registrar venta', proveedores:'Proveedores', usuarios:'Usuarios', reportes:'Informes', configuracion:'Configuración' },
      nav: ['Inicio','Registrar venta','Medicamentos','Proveedores','Historial de ventas','Usuarios','Informes','Configuración'],
      sections: ['Principal','Inventario','Gestión'],
      toast: 'Idioma aplicado: Español (España)',
      brand: ['Biene','Star'],
    },
    en: {
      dir: 'ltr',
      pageLabels: { dashboard:'Dashboard', inventario:'Medications', historial:'Sales History', ventas:'Register Sale', proveedores:'Suppliers', usuarios:'Users', reportes:'Reports', configuracion:'Settings' },
      nav: ['Dashboard','Register Sale','Medications','Suppliers','Sales History','Users','Reports','Settings'],
      sections: ['Main','Inventory','Management'],
      toast: 'Language applied: English',
      brand: ['Biene','Star'],
    },
    pt: {
      dir: 'ltr',
      pageLabels: { dashboard:'Início', inventario:'Medicamentos', historial:'Histórico de Vendas', ventas:'Registrar Venda', proveedores:'Fornecedores', usuarios:'Usuários', reportes:'Relatórios', configuracion:'Configurações' },
      nav: ['Início','Registrar Venda','Medicamentos','Fornecedores','Histórico de Vendas','Usuários','Relatórios','Configurações'],
      sections: ['Principal','Inventário','Gestão'],
      toast: 'Idioma aplicado: Português',
      brand: ['Biene','Star'],
    },
    de: {
      dir: 'ltr',
      pageLabels: { dashboard:'Übersicht', inventario:'Medikamente', historial:'Verkaufsverlauf', ventas:'Verkauf erfassen', proveedores:'Lieferanten', usuarios:'Benutzer', reportes:'Berichte', configuracion:'Einstellungen' },
      nav: ['Übersicht','Verkauf erfassen','Medikamente','Lieferanten','Verkaufsverlauf','Benutzer','Berichte','Einstellungen'],
      sections: ['Hauptmenü','Inventar','Verwaltung'],
      toast: 'Sprache angewendet: Deutsch',
      brand: ['Biene','Star'],
    },
    ru: {
      dir: 'ltr',
      pageLabels: { dashboard:'Главная', inventario:'Медикаменты', historial:'История продаж', ventas:'Оформить продажу', proveedores:'Поставщики', usuarios:'Пользователи', reportes:'Отчёты', configuracion:'Настройки' },
      nav: ['Главная','Оформить продажу','Медикаменты','Поставщики','История продаж','Пользователи','Отчёты','Настройки'],
      sections: ['Главное','Склад','Управление'],
      toast: 'Язык применён: Русский',
      brand: ['Biene','Star'],
    },
    zh: {
      dir: 'ltr',
      pageLabels: { dashboard:'首页', inventario:'药品管理', historial:'销售记录', ventas:'登记销售', proveedores:'供应商', usuarios:'用户', reportes:'报告', configuracion:'设置' },
      nav: ['首页','登记销售','药品管理','供应商','销售记录','用户','报告','设置'],
      sections: ['主菜单','库存','管理'],
      toast: '语言已应用：中文',
      brand: ['Biene','Star'],
    },
    ar: {
      dir: 'rtl',
      pageLabels: { dashboard:'الرئيسية', inventario:'الأدوية', historial:'سجل المبيعات', ventas:'تسجيل بيع', proveedores:'الموردون', usuarios:'المستخدمون', reportes:'التقارير', configuracion:'الإعدادات' },
      nav: ['الرئيسية','تسجيل بيع','الأدوية','الموردون','سجل المبيعات','المستخدمون','التقارير','الإعدادات'],
      sections: ['الرئيسي','المخزون','الإدارة'],
      toast: 'تم تطبيق اللغة: العربية',
      brand: ['Biene','Star'],
    },
    he: {
      dir: 'rtl',
      pageLabels: { dashboard:'ראשי', inventario:'תרופות', historial:'היסטוריית מכירות', ventas:'רשום מכירה', proveedores:'ספקים', usuarios:'משתמשים', reportes:'דוחות', configuracion:'הגדרות' },
      nav: ['ראשי','רשום מכירה','תרופות','ספקים','היסטוריית מכירות','משתמשים','דוחות','הגדרות'],
      sections: ['ראשי','מלאי','ניהול'],
      toast: 'שפה הוחלה: עברית',
      brand: ['Biene','Star'],
    },
  };

  let currentLang = localStorage.getItem('bs-lang') || 'es';

  function previewLanguage(lang) {
    const t = TRANSLATIONS[lang];
    if (!t) return;
    const notice = document.getElementById('lang-rtl-notice');
    const noticeText = document.getElementById('lang-rtl-text');
    if (t.dir === 'rtl' && notice && noticeText) {
      noticeText.textContent = 'Este idioma se lee de derecha a izquierda. Al guardar, la página se adaptará automáticamente.';
      notice.style.display = 'block';
    } else if (notice) {
      notice.style.display = 'none';
    }
  }

  function applyLanguage() {
    const sel = document.getElementById('lang-select');
    if (!sel) return;
    const lang = sel.value;
    const t = TRANSLATIONS[lang];
    if (!t) { showToast('Idioma no disponible aún'); return; }

    currentLang = lang;
    localStorage.setItem('bs-lang', lang);

    // Update <html> lang + dir
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;

    // Update pageLabels object used by goTo()
    Object.assign(pageLabels, t.pageLabels);

    // Update nav items
    const navItems = document.querySelectorAll('.nav-item[data-page]');
    const pageOrder = ['dashboard','ventas','inventario','proveedores','historial','usuarios','reportes','configuracion'];
    navItems.forEach(item => {
      const page = item.dataset.page;
      const label = item.querySelector('.nav-label');
      if (label && t.pageLabels[page]) label.textContent = t.pageLabels[page];
    });

    // Update section labels
    const sectionLabels = document.querySelectorAll('.nav-section-label');
    sectionLabels.forEach((el, i) => { if (t.sections[i]) el.textContent = t.sections[i]; });

    // Update topstrip title for current page
    const titleEl = document.getElementById('topstrip-title');
    if (titleEl) titleEl.textContent = t.pageLabels[currentPage] || '';
    if (titleEl) titleEl.textContent = t.pageLabels[currentPage] || '';

    // Apply body direction class for mirror layout
    document.body.classList.toggle('rtl-layout', t.dir === 'rtl');

    showToast('✅ ' + t.toast);
  }

  // Apply saved language on load
  (function() {
    const savedLang = localStorage.getItem('bs-lang');
    if (savedLang && TRANSLATIONS[savedLang]) {
      const sel = document.getElementById('lang-select');
      if (sel) sel.value = savedLang;
      applyLanguage();
    }
  })();
  
  /* ═══════════════════════════════════════
     DYNAMIC SHORTCUT KEYDOWN HANDLER
  ═══════════════════════════════════════ */
  function showKbHint(text) {
    const hint = document.getElementById('kb-hint');
    hint.textContent = text;
    hint.classList.add('show');
    setTimeout(() => hint.classList.remove('show'), 1500);
  }

  function execShortcutAction(action) {
    if (action === 'toggleSidebar') { toggleSidebar(); return; }
    if (action === '_fontUp') { changeFontSize(1); return; }
    if (action === '_fontDown') { changeFontSize(-1); return; }
    goTo(action);
  }

  function matchesShortcut(e, combo) {
    const parts = combo.split('+');
    const needCtrl = parts.includes('Ctrl');
    const needAlt = parts.includes('Alt');
    const needShift = parts.includes('Shift');
    const keyPart = parts.filter(p => !['Ctrl','Alt','Shift'].includes(p)).join('+');
    const eKey = e.key.length === 1 ? e.key.toUpperCase() : e.key;
    return (needCtrl === (e.ctrlKey || e.metaKey)) &&
           (needAlt === e.altKey) &&
           (needShift === e.shiftKey) &&
           (eKey === keyPart || e.key === keyPart);
  }

  document.addEventListener('keydown', e => {
    if (capturingFor !== null) return; // handled by capture listener
    if (e.key === 'Escape') { closeModal(); return; }
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') return;
    for (const sc of shortcuts) {
      if (matchesShortcut(e, sc.key)) {
        e.preventDefault();
        execShortcutAction(sc.action);
        showKbHint(sc.key + ' — ' + sc.label);
        return;
      }
    }
  });
/* ═══════════════════════════════════════
     INITIALIZATION & SAFE CONFIG LISTENERS
   ═══════════════════════════════════════ */
   document.addEventListener('DOMContentLoaded', () => { 
    renderShortcuts(); 

    // Control seguro del toggle de etiquetas
    const toggleLabels = document.getElementById('toggle-labels');
    if (toggleLabels) {
      toggleLabels.addEventListener('change', function() {
        const sidebar = document.getElementById('sidebar');
        if (!sidebar) return;
        if (!this.checked) sidebar.classList.add('collapsed');
        else if (!document.getElementById('toggle-collapsed')?.checked) sidebar.classList.remove('collapsed');
      });
    }

    // Control seguro del toggle colapsado
    const toggleCollapsed = document.getElementById('toggle-collapsed');
    if (toggleCollapsed) {
      toggleCollapsed.addEventListener('change', function() {
        const sidebar = document.getElementById('sidebar');
        if (!sidebar) return;
        if (this.checked) { sidebarCollapsed = true; sidebar.classList.add('collapsed'); }
        else { sidebarCollapsed = false; sidebar.classList.remove('collapsed'); }
      });
    }
});