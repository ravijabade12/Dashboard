import React from "react";
import Widget from "./Widget";

const Category = ({ category, openSidebar, removeWidget }) => {
  return (
    <div className="mx-10">
      <h2 className="font-bold">{category.name}</h2>
      <div className="flex flex-wrap">
        {category.widgets.map((widget) => (
          <Widget
            key={widget.id}
            widget={widget}
            onRemove={() => removeWidget(category.id, widget.id)}
          />
        ))}
        <div className="empty-widget" onClick={openSidebar}>
          <button className="border-2 p-1 rounded-md">+ Add Widget</button>
        </div>
      </div>
    </div>
  );
};

export default Category;
