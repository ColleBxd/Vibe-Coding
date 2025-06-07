
# 📘 PROMPTS.md – To‑Do List com IA (Gemini / ChatGPT)

## 🧠 Ferramenta Utilizada
- Nome da IA: Gemini (https://gemini.google.com)
- Alternativa utilizada: (ChatGPT / outra)

---

## 🎨 HTML e Layout

### Prompt 1
**Prompt:**  
Crie o HTML básico para uma aplicação de To‑Do List com um campo de input, um botão para adicionar tarefas e uma lista de tarefas.

**Resposta:**  
Código com elementos `<input>`, `<button>` e `<ul>` com IDs para manipulação via JS.

**Ajustes manuais:**  
Centralizamos tudo em uma `<div class="container">` e adicionamos um `<h1>`.

---

## 🎨 CSS e Estilização

### Prompt 2  
**Prompt:**  
Estilize a To‑Do List com CSS moderno. Centralize na tela, use bordas arredondadas e uma paleta clara. Input e botão devem ficar na mesma linha.

**Resposta:**  
CSS com `flexbox`, `box-shadow`, padding e cores suaves.

**Ajustes manuais:**  
Aumentamos o espaçamento entre elementos e ajustamos fonte e cores.

---

## ⚙️ Funcionalidades em JavaScript

### Prompt 3  
**Prompt:**  
Crie uma função JavaScript chamada `adicionarTarefa()` que pegue o texto do input e adicione à lista.

**Resposta:**  
Função que cria um novo `<li>` e insere dentro da `<ul>` com o texto digitado.

**Ajustes manuais:**  
Adicionamos verificação para evitar entrada de tarefas vazias.

---

### Prompt 4  
**Prompt:**  
Como marcar uma tarefa como concluída ao clicar nela?

**Resposta:**  
Adicionar um `eventListener` ao `<li>` que alterna uma classe `.concluida` com `text-decoration: line-through`.

**Ajustes manuais:**  
Estilizamos `.concluida` no CSS com cor cinza e risco no texto.

---

### Prompt 5  
**Prompt:**  
Adicione um botão "Remover" em cada tarefa, com funcionalidade para remover o item da lista.

**Resposta:**  
Código para criar `<button>` dentro de cada `<li>` e função `.remove()` no clique.

**Ajustes manuais:**  
Estilizamos o botão para deixá-lo discreto, com `margin-left`.

---

## 💾 (Opcional) Salvamento com LocalStorage

### Prompt 6  
**Prompt:**  
Como posso salvar e carregar a lista de tarefas usando `localStorage`?

**Resposta:**  
Armazenar um array de tarefas como JSON. No `onload`, carregar do `localStorage` e recriar os elementos da lista.

**Ajustes manuais:**  
Usamos `JSON.parse()` e `JSON.stringify()` e adicionamos chamada a `salvarTarefas()` após cada modificação.

---

## ✅ Conclusão

**Pontos positivos da IA:**
- Agilizou a criação de HTML e CSS básico
- Sugeriu nomes de funções claros e lógicos
- Ajudou com exemplos de eventos em JavaScript

**Desafios enfrentados:**
- Alguns snippets não funcionaram direto (precisaram de ajustes)
- A IA nem sempre entendeu o contexto da lista dinâmica
- Precisamos combinar várias respostas para formar a versão final

**Lições aprendidas:**
- IA ajuda, mas entender lógica de programação é essencial
- Testar no navegador a cada passo evita bugs acumulados
- Documentar prompts nos ajudou a não repetir erros
