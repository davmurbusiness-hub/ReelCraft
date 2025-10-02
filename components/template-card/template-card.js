// template-card.js

export function createTemplateCard() {
    const card = document.createElement('div');
    card.className = 'template-card';
    card.innerHTML = `
    <div class="template-preview">
      <img src="https://i.pinimg.com/736x/8f/85/8d/8f858d773528e374b47b4f233ff9d373.jpg" alt="Превью шаблона" />
    </div>
    <my-button props="123"></my-button>
    <div class="template-info">
      <h3>Крутой переход для рилса</h3>
      <div class="author">@videomaster</div>
      <div class="stats">
        <span>1.2k <i class="icon-download"></i></span>
        <span>543 <i class="icon-like"></i></span>
      </div>
      <button class="download-btn">Скачать шаблон</button>
    </div>
  `;
    return card;
}