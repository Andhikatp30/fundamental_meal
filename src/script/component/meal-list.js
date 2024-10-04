import './meal-item.js';

class MealList extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set meals(meals) {
    this._meals = meals;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        .meals-wrapper {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
          padding: 20px;
          justify-items: center;
        }
      </style>
      <div class="meals-wrapper"></div>
    `;

    const mealsWrapper = this.shadowDOM.querySelector('.meals-wrapper');
    
    this._meals.forEach((meal) => {
      const mealItemElement = document.createElement('meal-item');
      mealItemElement.meal = meal;
      mealsWrapper.appendChild(mealItemElement);
    });
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
        .error-message {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          height: 100%;
          font-family: 'Roboto', sans-serif;
          color: rgba(0, 0, 0, 0.5);
          font-size: 1.5rem;
          font-weight: lighter;
          padding: 20px;
        }
      </style>
      <div class="error-message">${message}</div>
    `;
  }
}

customElements.define('meal-list', MealList);
