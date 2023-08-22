document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-button");
  const modal = document.getElementById("modal");
  const closeButton = document.getElementById("close-button");
  const addNoteButton = document.getElementById("add-note");
  const notesContainer = document.getElementById("notes-container");

  addButton.addEventListener("click", function () {
      modal.style.display = "flex";
  });

  closeButton.addEventListener("click", function () {
      modal.style.display = "none";
  });

  addNoteButton.addEventListener("click", function () {
    const title = document.getElementById("note-title").value;
    const text = document.getElementById("note-text").value;

    if (title && text) {
        const article = document.createElement("article");
        article.className = "styled_article";

        const header = document.createElement("header");
        const h3 = document.createElement("h3");
        h3.textContent = title;

        const small = document.createElement("small");
          const today = new Date();
          const formattedDate = formatDate(today);
          small.textContent = `${formattedDate} • ☕️ ${calculateReadingTime(text)} minuto de leitura`;

        const p = document.createElement("p");
        p.textContent = text;

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.textContent = "Excluir";

        // Adicionar evento de exclusão ao botão
        deleteButton.addEventListener("click", function () {
          notesContainer.removeChild(article);
        });

        header.appendChild(h3);
        header.appendChild(small);
        header.appendChild(p);
        header.appendChild(deleteButton);
        article.appendChild(header);

        // Adicionar a margem superior no novo artigo
        article.style.marginTop = "32px";

        notesContainer.appendChild(article);

        modal.style.display = "none";
        document.getElementById("note-title").value = "";
        document.getElementById("note-text").value = "";
    }
  });

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function calculateReadingTime(text) {
    const wordsPerMinute = 200; // Média de palavras por minuto
    const words = text.split(/\s+/).length; // Contar as palavras no texto
    const minutes = words / wordsPerMinute;
    return Math.ceil(minutes);
  }
});
