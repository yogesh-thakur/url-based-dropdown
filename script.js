const data = {
  fruits: {
    citrus: ['Orange', 'Lemon'],
    berries: ['Strawberry', 'Blueberry']
  },
  vegetables: {
    leafy: ['Spinach', 'Lettuce'],
    root: ['Carrot', 'Potato']
  }
};

const categorySelect = document.getElementById('category');
const subcategorySelect = document.getElementById('subcategory');
const itemsList = document.getElementById('items');

function updateQuery(category, subcategory) {
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);

  // Set or update the category and subcategory
  params.set("category", category);
  params.set("subcategory", subcategory);

  url.search = params.toString();
  window.history.pushState({}, '', url.href);
}

// Populate subcategory options
function populateSubcategories(selectedCategory) {
  subcategorySelect.innerHTML = '<option value="">Subcategory</option>';
  itemsList.innerHTML = '';

  if (selectedCategory && data[selectedCategory]) {
    const subcategories = Object.keys(data[selectedCategory]);

    subcategories.forEach(sub => {
      const option = document.createElement('option');
      option.value = sub;
      option.textContent = sub.charAt(0).toUpperCase() + sub.slice(1);
      subcategorySelect.appendChild(option);
    });
  }
}

function showItems(category, subcategory) {
  itemsList.innerHTML = '';
  if (category && subcategory && data[category][subcategory]) {
    data[category][subcategory].forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      itemsList.appendChild(li);
    });
  }
}

categorySelect.addEventListener('change', () => {
  const selectedCategory = categorySelect.value;
  populateSubcategories(selectedCategory);
  updateQuery(selectedCategory, '');
});


subcategorySelect.addEventListener('change', () => {
  const category = categorySelect.value;
  const subcategory = subcategorySelect.value;
  showItems(category, subcategory);
  updateQuery(category, subcategory);
});


window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const category = params.get('category');
  const subcategory = params.get('subcategory');

  if (category) {
    categorySelect.value = category;
    populateSubcategories(category);

    if (subcategory) {
      subcategorySelect.value = subcategory;
      showItems(category, subcategory);
    }
  }
});