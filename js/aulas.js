// Dados das aulas de Lógica de Programação
const aulas = [
    {
        numero: 1,
        tema: 'Introdução à Lógica',
        categoria: 'Fundamentos',
        descricao: 'Conceitos básicos · O que é lógica · Variáveis · Tipos de dados · Operadores',
        topicos: ['Conceitos Básicos', 'Variáveis', 'Tipos de Dados', 'Operadores', 'Expressões'],
        link: 'aula1/',
        cor: '#ff6b35'
    },
    {
        numero: 2,
        tema: 'Estruturas Condicionais',
        categoria: 'Controle',
        descricao: 'If/Else · Switch/Case · Operadores lógicos · Tomadas de decisão',
        topicos: ['If/Else', 'Switch/Case', 'Operadores Lógicos', 'Decisões', 'Aninhamento'],
        link: 'aula2/',
        cor: '#4a90a4'
    },
    {
        numero: 3,
        tema: 'Loops e Iterações',
        categoria: 'Controle',
        descricao: 'For · While · Do-while · Break/Continue · Iterações aninhadas',
        topicos: ['For', 'While', 'Do-while', 'Break/Continue', 'Aninhamento'],
        link: 'aula3/',
        cor: '#9b59b6'
    },
    {
        numero: 4,
        tema: 'Arrays e Listas',
        categoria: 'Estruturas de Dados',
        descricao: 'Declaração · Indexação · Iteração · Métodos · Busca e Ordenação',
        topicos: ['Declaração', 'Indexação', 'Iteração', 'Métodos', 'Busca/Ordenação'],
        link: 'aula4/',
        cor: '#e74c3c'
    },
    {
        numero: 5,
        tema: 'Funções e Procedimentos',
        categoria: 'Modularização',
        descricao: 'Declaração · Parâmetros · Retorno · Escopo · Recursão',
        topicos: ['Declaração', 'Parâmetros', 'Retorno', 'Escopo', 'Recursão'],
        link: 'aula5/',
        cor: '#f39c12'
    },
    {
        numero: 6,
        tema: 'Strings e Manipulação',
        categoria: 'Estruturas de Dados',
        descricao: 'Concatenação · Métodos · Busca · Substituição · Formatação',
        topicos: ['Concatenação', 'Métodos', 'Busca', 'Substituição', 'Formatação'],
        link: 'aula6/',
        cor: '#1abc9c'
    },
    {
        numero: 7,
        tema: 'Objetos e Dicionários',
        categoria: 'Estruturas de Dados',
        descricao: 'Criação · Propriedades · Métodos · Acesso · Iteração',
        topicos: ['Criação', 'Propriedades', 'Métodos', 'Acesso', 'Iteração'],
        link: 'aula7/',
        cor: '#e67e22'
    },
    {
        numero: 8,
        tema: 'Algoritmos Clássicos',
        categoria: 'Algoritmos',
        descricao: 'Busca Linear · Busca Binária · Ordenação · Fibonacci · Fatorial',
        topicos: ['Busca Linear', 'Busca Binária', 'Ordenação', 'Fibonacci', 'Fatorial'],
        link: 'aula8/',
        cor: '#c0392b'
    },
    {
        numero: 9,
        tema: 'Complexidade e Otimização',
        categoria: 'Otimização',
        descricao: 'Big O · Análise de Complexidade · Otimização · Trade-offs',
        topicos: ['Big O', 'Complexidade', 'Otimização', 'Trade-offs', 'Benchmarking'],
        link: 'aula9/',
        cor: '#16a085'
    },
    {
        numero: 10,
        tema: 'Padrões e Boas Práticas',
        categoria: 'Avançado',
        descricao: 'Design Patterns · Clean Code · Debugging · Testing · Documentação',
        topicos: ['Design Patterns', 'Clean Code', 'Debugging', 'Testing', 'Documentação'],
        link: 'aula10/',
        cor: '#8e44ad'
    }
];

// Cores para os cards (paleta consistente)
const coresToCard = [
    '#ff6b35', '#4a90a4', '#9b59b6', '#e74c3c', '#f39c12',
    '#1abc9c', '#e67e22', '#c0392b', '#16a085', '#8e44ad'
];

// Renderizar os cards dinamicamente
const aulasGrid = document.querySelector('.aulas-grid');

if (aulasGrid) {
    aulas.forEach((aula, index) => {
        const card = document.createElement('div');
        card.className = 'aula-card';
        card.style.setProperty('--card-color', coresToCard[index % coresToCard.length]);
        
        const tagsHTML = aula.topicos.map(topico => `<span class="tag">${topico}</span>`).join('');
        
        card.innerHTML = `
            <div class="aula-card-header">
                <div>
                    <div class="aula-number">${String(aula.numero).padStart(2, '0')}</div>
                    <span class="aula-label">AULA</span>
                </div>
                <span class="aula-tag">${aula.categoria}</span>
            </div>
            <h3>${aula.tema}</h3>
            <p>${aula.descricao}</p>
            <div class="tags">${tagsHTML}</div>
            <span class="aula-em-breve">Em breve</span>
        `;
        
        aulasGrid.appendChild(card);
    });
}
