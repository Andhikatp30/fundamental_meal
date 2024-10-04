class MealItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set meal(meal) {
    this._meal = meal;
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
          display: block;
          margin-bottom: 20px;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
          border-radius: 16px;
          overflow: hidden;
          background-color: #ffffff;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        :host(:hover) {
          transform: translateY(-8px);
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.2);
        }
        .fan-art-meal {
          width: 100%;
          height: 320px;
          object-fit: cover;
          object-position: center;
          border-bottom: 2px solid #eeeeee;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        :host(:hover) .fan-art-meal {
          transform: scale(1.05);
        }
        .meal-info {
          padding: 20px 24px;
          font-family: 'Roboto', sans-serif;
          color: #333;
          transition: background-color 0.3s ease;
        }
        .meal-info > h2 {
          font-family: 'Georgia', serif;
          font-size: 1.8rem;
          color: #222;
          margin-bottom: 10px;
        }
        .meal-info > h3 {
          font-size: 1.3rem;
          color: #444;
          margin-top: 12px;
          margin-bottom: 5px;
        }
        .meal-info > p {
          font-size: 1rem;
          line-height: 1.6;
          color: #555;
          margin-bottom: 15px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 4;
        }
        .meal-info a {
          display: inline-block;
          text-decoration: none;
          color: #007BFF;
          font-weight: bold;
          padding: 10px 15px;
          background-color: #f1f1f1;
          border-radius: 8px;
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        .meal-info a:hover {
          background-color: #007BFF;
          color: #fff;
        }
      </style>
      
      <img class="fan-art-meal" src="${this._meal.strMealThumb}" alt="Meal Image">
      <div class="meal-info">
        <h2>${this._meal.strMeal}</h2>
        <h3>Category: ${this._meal.strCategory}</h3>
        <h3>Country: ${this._meal.strArea}</h3>
        <h3>Instructions:</h3>
        <p>${this._meal.strInstructions}</p>
        <h3>YouTube:</h3>
        <p><a href="${this._meal.strYoutube}" target="_blank">Watch on YouTube</a></p>
      </div>
    `;
  }
}

customElements.define("meal-item", MealItem);
