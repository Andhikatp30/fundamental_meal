class AppBar extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          background: linear-gradient(90deg, #00A9FF, #007BFF);
          color: white;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        h2 {
          padding: 16px 24px;
          font-family: 'Mochiy Pop One', sans-serif;
          font-size: 24px;
          text-align: center;
          letter-spacing: 1.2px;
        }
        @media (max-width: 768px) {
          h2 {
            font-size: 20px;
          }
        }
      </style>
      
      <h2>Meal Finder</h2>
    `;
  }
}

customElements.define('app-bar', AppBar);
