document.getElementById('pedidoForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const pedido = {
      nome: document.getElementById('nome').value,
      telefone: document.getElementById('telefone').value,
      email: document.getElementById('email').value,
      brigadeiros: document.getElementById('brigadeiros').value,
      cupcakes: document.getElementById('cupcakes').value,
      docinhos: document.getElementById('docinhos').value,
      data: document.getElementById('data').value,
      observacoes: document.getElementById('observacoes').value
    };
  
    if (pedido.brigadeiros === '0' && pedido.cupcakes === '0' && pedido.docinhos === '0') {
      alert('Por favor, selecione pelo menos um produto!');
      return;
    }
  
    console.log('Pedido recebido:', pedido);
    alert('Pedido enviado com sucesso! Entraremos em contato em breve.');
    this.reset();
  });
  
  document.getElementById('telefone').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    
    if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    }
    if (value.length > 9) {
      value = `${value.slice(0, 9)}-${value.slice(9)}`;
    }
    
    e.target.value = value;
  });
  
  const hoje = new Date().toISOString().split('T')[0];
  document.getElementById('data').min = hoje;