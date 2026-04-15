document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('productGrid');
    const phoneNumber = "55062993901617";
    
    // Array de nomes fictícios para os 20 produtos
    const productNames = [
        "Vestido Verão Rosa", "Conjunto Casual Bella", "Blusa Seda Luxo", 
        "Saia Midi Elegance", "Calça Pantalona Chic", "Body Renda Intime",
        "Shorts Jeans Premium", "Casaco Inverno Soft", "Macacão Noite",
        "T-Shirt Basic Pink", "Top Fitness Bella", "Kimono Floral",
        "Blazer Office", "Vestido Festa Glamour", "Saia Couro Eco",
        "Camisa Social Prime", "Biquíni Verão 26", "Suéter Tricot",
        "Jaqueta Bomber", "Vestido Longo Boho"
    ];

    // Gerar os 20 produtos dinamicamente
    for (let i = 1; i <= 20; i++) {
        const productId = i;
        const productName = productNames[i-1] || `Produto Bella Annac ${i}`;
        
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="images/${i}.jpg" alt="${productName}">
            <h3>${productName}</h3>
            <p class="price">R$ ${(Math.random() * (250 - 80) + 80).toFixed(2)}</p>
            
            <div class="product-options">
                <select id="size-${productId}">
                    <option value="">Escolha o Tamanho</option>
                    <option value="P">Tamanho P</option>
                    <option value="M">Tamanho M</option>
                    <option value="G">Tamanho G</option>
                    <option value="GG">Tamanho GG</option>
                </select>

                <select id="color-${productId}">
                    <option value="">Escolha a Cor</option>
                    <option value="Rosa Choque">Rosa Choque</option>
                    <option value="Preto">Preto</option>
                    <option value="Branco">Branco</option>
                </select>
            </div>

            <a href="#" class="btn-buy" onclick="sendOrder(event, '${productName}', ${productId})">
                Solicitar no WhatsApp
            </a>
        `;
        productGrid.appendChild(card);
    }

    // Função global para enviar o pedido
    window.sendOrder = (event, name, id) => {
        event.preventDefault();
        
        const size = document.getElementById(`size-${id}`).value;
        const color = document.getElementById(`color-${id}`).value;

        if (!size || !color) {
            alert("Por favor, selecione o tamanho e a cor antes de continuar.");
            return;
        }

        const message = `Olá! Vi no site e quero solicitar o produto: ${name}%0A` +
                        `Tamanho: ${size}%0A` +
                        `Cor: ${color}%0A` +
                        `Poderia me informar a disponibilidade?`;

        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };
});