import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  }
  const [formData, setFormData] = useState({...initialFormState});
  const handleChange = ({target}) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData);
    setFormData({...initialFormState})
  };  

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
                <input
                  id="name"
                  placeholder="Name"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                />
              </label>
            </td>
            <td>
              <label htmlFor="cuisine">
                <input
                  id="cuisine"
                  placeholder="Cuisine"
                  type="text"
                  name="cuisine"
                  onChange={handleChange}
                  value={formData.cuisine}
                />
              </label>
            </td>
            <td>
            <label htmlFor="photo">
              <input
              id="photo"
              placeholder="URL"
              name="photo"
              type="url"
              onChange={handleChange}
              value={formData.photo}
              size="10px"
              />
            </label>
            </td>
            <td>
              <label htmlFor="Ingredients">
                <textarea
                id="ingredients"
                placeholder="Ingredients"
                name="ingredients"
                type="text"
                onChange={handleChange}
                value={formData.ingredients}
                />
              </label>
            </td>
            <td>
              <label htmlFor="Preparation">
                <textarea
                id="preparation"
                placeholder="Preparation"
                name="preparation"
                type="text"
                onChange={handleChange}
                value={formData.preparation}
                />
              </label>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
