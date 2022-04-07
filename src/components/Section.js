
export class Section {
  constructor({ items, renderer }, containerSelector ) {
    this._container =  document.querySelector(containerSelector);
    this._renderedItems = items;
    this._renderer = renderer;
  }
    renderItems() {
      this._renderedItems.forEach( (data) => { 
        this._renderer(data);
       });
    }

    addItem(element) {
      this._container.prepend(element)
    }
};
