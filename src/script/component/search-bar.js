class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector("#searchElement").value;
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        .search-container {
          max-width: 100%;
          width: 800px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          padding: 16px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: #ffffff;
          margin: 10px auto;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }
        .search-container:hover {
          background-color: #f0f8ff;
          transform: translateY(-3px);
        }
        .search-container > input {
          flex: 1;
          padding: 12px 20px;
          border: none;
          border-bottom: 2px solid #00A9FF;
          font-size: 1rem;
          color: #333;
          border-radius: 8px;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .search-container > input:focus {
          outline: none;
          border-color: #007BFF;
          box-shadow: 0 4px 12px rgba(0, 123, 255, 0.1);
        }
        .search-container > input::placeholder {
          color: #999;
          font-size: 1rem;
        }
        .search-container > button {
          padding: 12px 20px;
          margin-left: 16px;
          background-color: #007BFF;
          color: white;
          border: none;
          font-size: 1rem;
          font-weight: bold;
          text-transform: uppercase;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.2s ease;
        }
        .search-container > button:hover {
          background-color: #0056b3;
          transform: translateY(-2px);
        }
        .search-container > button:active {
          background-color: #003f7f;
          transform: translateY(1px);
        }
        @media screen and (max-width: 768px) {
          .search-container {
            flex-direction: column;
            padding: 20px;
          }
          .search-container > input {
            width: 100%;
            margin-bottom: 12px;
          }
          .search-container > button {
            width: 100%;
            margin-left: 0;
          }
        }
      </style>
      
      <div id="search-container" class="search-container">
        <input placeholder="Search Meal" id="searchElement" type="search">
        <button id="searchButtonElement" type="submit">Search</button>
      </div>
    `;

    this.shadowDOM
      .querySelector("#searchButtonElement")
      .addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);
  