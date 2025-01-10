{

if (localStorage.getItem('newsletterEnviado') === 'true') {
  document.getElementById('newsletter-container').style.display = 'none';
  document.getElementById('mensagem-obrigado').style.display = 'block';
} else {
  document.getElementById('newsletter-container').style.display = 'block';
}

setTimeout(() => {
  document.getElementById('newsletter-container').style.display = 'block';
}, 2000);

document.getElementById('fechar').addEventListener('click', () => {
  document.getElementById('newsletter-container').style.display = 'none';
});

document.getElementById('form-newsletter').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email-input').value;
  fetch('https://formspree.io/f/id-formulario', {
    method: 'POST',
    body: JSON.stringify({ email }),
    headers: { 'Content-Type': 'application/json' }
  })
  .then((res) => res.json())
  .then((data) => {
    console.log('E-mail enviado:', data);
    document.getElementById('newsletter-container').style.display = 'none';
    document.getElementById('mensagem-obrigado').style.display = 'block';
    localStorage.setItem('newsletterEnviado', 'true');
  })
  .catch((err) => {
    console.error('Erro:', err);
  });
});

}
