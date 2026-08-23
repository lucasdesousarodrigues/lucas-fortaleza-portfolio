// 
document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. ALTERNÂNCIA DE TEMA (CLARO/ESCURO) --- */
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        body.classList.toggle('light-theme');

        // Atualiza o texto do botão conforme o tema atual
        if (body.classList.contains('dark-theme')) {
            themeToggleBtn.textContent = '☀️ Tema';
        } else {
            themeToggleBtn.textContent = '🌙 Tema';
        }
    });

    /* --- 2. MENU RESPONSIVO (MOBILE) --- */
    const menuToggleBtn = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggleBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Fecha o menu mobile ao clicar em um link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    /* --- 3. VALIDAÇÃO E SIMULAÇÃO DE ENVIO DO FORMULÁRIO --- */
    const contactForm = document.getElementById('contact-form');
    const feedbackDiv = document.getElementById('form-feedback');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o recarregamento da página

        // Captura dos campos
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        // Limpeza prévia de mensagens de erro
        document.getElementById('error-nome').textContent = '';
        document.getElementById('error-email').textContent = '';
        document.getElementById('error-mensagem').textContent = '';
        feedbackDiv.classList.add('hidden');

        let isValid = true;

        // Validação do campo Nome
        if (nome === '') {
            document.getElementById('error-nome').textContent = 'Por favor, preencha o seu nome.';
            isValid = false;
        }

        // Validação do campo E-mail com expressão regular (Regex)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '') {
            document.getElementById('error-email').textContent = 'Por favor, preencha o seu e-mail.';
            isValid = false;
        } else if (!emailRegex.test(email)) {
            document.getElementById('error-email').textContent = 'Insira um formato de e-mail válido (ex: nome@dominio.com).';
            isValid = false;
        }

        // Validação do campo Mensagem
        if (mensagem === '') {
            document.getElementById('error-mensagem').textContent = 'Por favor, escreva uma mensagem.';
            isValid = false;
        }

        // Se todos os campos estiverem válidos, simula o envio
        if (isValid) {
            // Limpa os campos do formulário
            contactForm.reset();

            // Exibe mensagem de sucesso visual
            feedbackDiv.textContent = 'Mensagem enviada com sucesso! Obrigado pelo contato.';
            feedbackDiv.className = 'feedback-message success';
            feedbackDiv.classList.remove('hidden');

            // Oculta a mensagem de sucesso após 5 segundos
            setTimeout(() => {
                feedbackDiv.classList.add('hidden');
            }, 5000);
        }
    });
});