class MealItem extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
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
          margin-bottom: 18px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
          border-radius: 10px;
          overflow: hidden;
        }
        .fan-art-meal{
          width: 100%;
          max-height: 300px;
          object-fit: cover;
          object-position: center;
        }
        .meal-info {
          padding: 24px;
        }
        .meal-info > h2, p {
          font-family : Bitter;
        }
        .meal-info > h2 {
          font-weight: lighter;
        }
        .meal-info > p {
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: justify;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 10; /* number of lines to show */
        }
      </style>
      
      <img class="fan-art-meal" src="${this._meal.strMealThumb}" alt="Fan Art">
      <div class="meal-info">
        <h2>Name : ${this._meal.strMeal}</h2>
        <h2>Category : ${this._meal.strCategory}</h2>
        <h2>Country : ${this._meal.strArea}</h2>
        <h2>Instruction :</h2>
        <p>${this._meal.strInstructions}</p>
        <h2>YouTube :</h2>
        <p><a href="">${this._meal.strYoutube}</a></p>
      </div>
    `;
  }
}

customElements.define('meal-item', MealItem);
