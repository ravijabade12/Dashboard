import React from "react";

const Widget = ({ widget, onRemove }) => {
  return (
    <div className=" flex flex-col justify-between   widget shadow-xl">
      <div>
        <h3 className="font-bold">{widget.name}</h3>
        {widget.image && (
          <img
            src={widget.image}
            alt={widget.name}
            className="w-40 float-left"
          />
        )}
        <p className="">{widget.text}</p>
      </div>

      <div className="flex justify-end">
        <button className="" onClick={onRemove}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Widget;
