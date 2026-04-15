/**
 * Bella Annac - Professional Retail Script
 * Versão 2.0 - Refatorado para Enterprise
 */

document.addEventListener('DOMContentLoaded', () => {
    "use strict";

    // --- CONFIGURAÇÕES ---
    const WHATSAPP_NUM = "55062993901617";
    const productGrid = document.getElementById('mainGrid');
    const header = document.getElementById('mainHeader');

    // --- BANCO DE DADOS FICTÍCIO (Simulando API) ---
    const products = [
        { id: 1, name: "Vestido Gala Rosa Choque", category: "festa", price: "459,90" },
        { id: 2, name: "Conjunto Business Lux", category: "casual", price: "320,00" },
        { id: 3, name: "Saia Plissada Bella", category: "verao", price: "189,00" },
        { id: 4, name: "Blazer Empoderamento", category: "casual", price: "550,00" },
        { id: 5, name: "Macacão Noite Estelar", category: "festa", price: "380,00" },
        { id: 6, name: "Top Cropped Silk", category: "verao", price: "120,00" },
        { id: 7, name: "Vestido Midi Alfaiataria", category: "casual", price: "420,00" },
        { id: 8, name: "Calça Pantalona Prime", category: "casual", price: "290,00" },
        { id: 9, name: "Vestido Renda Sensation", category: "festa", price: "610,00" },
        { id: 10, name: "Body Shine Glitter", category: "festa", price: "195,00" },
        { id: 11, name: "Shorts High Waist", category: "verao", price: "145,00" },
        { id: 12, name: "Kimono Seda Floral", category: "verao", price: "310,00" },
        { id: 13, name: "Trench Coat Elegance", category: "casual", price: "890,00" },
        { id: 14, name: "Vestido Longo Boho", category: "verao", price: "440,00" },
        { id: 15, name: "Saia Couro Vegan", category: "casual", price: "275,00" },
        { id: 16, name: "Blusa Cetim Glam", category: "festa", price: "215,00" },
        { id: 17, name: "Vestido Tubinho Classic", category: "casual", price: "330,00" },
        { id: 18, name: "Conjunto Linho Summer", category: "verao", price: "490,00" },
        { id: 19, name: "Echarpe Silk Touch", category: "casual", price: "110,00" },
        { id: 20, name: "Vestido Debut Annac", category: "festa", price: "1.200,00" }
    ];

    // --- FUNÇÃO: RENDERIZAR PRODUTOS ---
    const renderProducts = (filter = 'all') => {
        productGrid.innerHTML = '';
        
        const filtered = filter === 'all' 
            ? products 
            : products.filter(p => p.category === filter);

        filtered.forEach(p => {
            const card = document.createElement('article');
            card.className = 'product-card';
            card.setAttribute('data-category', p.category);
            
            card.innerHTML = `
                <div class="product-card__img-wrapper">
                    <img src="images/${p.id}.jpg" alt="${p.name}" loading="lazy">
                    <div class="product-card__overlay">
                        <p>Destaque da Coleção Bella Annac</p>
                        <small>Pronta entrega</small>
                    </div>
                </div>
                <div class="product-card__content">
                    <h3 class="product-card__title">${p.name}</h3>
                    <p class="product-card__price">R$ ${p.price}</p>
                    
                    <div class="product-card__controls">
                        <select class="select-premium" id="size-${p.id}">
                            <option value="">Tamanho</option>
                            <option value="PP">PP</option>
                            <option value="P">P</option>
                            <option value="M">M</option>
                            <option value="G">G</option>
                            <option value="GG">GG</option>
                        </select>
                        <select class="select-premium" id="color-${p.id}">
                            <option value="">Cor</option>
                            <option value="Rosa Choque">Rosa Choque</option>
                            <option value="Branco">Branco</option>
                            <option value="Preto">Preto</option>
                        </select>
                        <button class="btn btn--primary" style="width:100%; border:none; cursor:pointer;" 
                                onclick="handlePurchase('${p.name}', ${p.id})">
                            Pedir no WhatsApp
                        </button>
                    </div>
                </div>
            `;
            productGrid.appendChild(card);
        });
    };

    // --- FUNÇÃO: COMPRA ---
    window.handlePurchase = (name, id) => {
        const size = document.getElementById(`size-${id}`).value;
        const color = document.getElementById(`color-${id}`).value;

        if(!size || !color) {
            alert("Por favor, selecione o tamanho e a cor desejada.");
            return;
        }

        const msg = `Olá Bella Annac! ✨%0AQuero solicitar o seguinte item:%0A%0A*Produto:* ${name}%0A*Tamanho:* ${size}%0A*Cor:* ${color}%0A%0APoderia me enviar as fotos reais?`;
        window.open(`https://wa.me/${WHATSAPP_NUM}?text=${msg}`, '_blank');
    };

    // --- FILTROS ---
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelector('.filter-btn.active').classList.remove('active');
            e.target.classList.add('active');
            renderProducts(e.target.dataset.filter);
        });
    });

    // --- SCROLL EFFECT (HEADER) ---
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
    });

    // --- FAQ ACCORDION ---
    document.querySelectorAll('.faq__question').forEach(btn => {
        btn.addEventListener('click', () => {
            const answer = btn.nextElementSibling;
            const icon = btn.querySelector('i');
            
            // Toggle
            const isOpen = answer.style.display === 'block';
            answer.style.display = isOpen ? 'none' : 'block';
            icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
        });
    });

    // Iniciar Grid
    renderProducts();

    console.log("Bella Annac Core Engine Loaded Successfully.");
});