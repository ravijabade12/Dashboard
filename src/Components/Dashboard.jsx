import React, { useState } from "react";
import Navbar from "./Navbar";
import Category from "./Category";
import jsonData from "../data/dashboardData.json";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const [categories, setCategories] = useState(jsonData.categories);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");

  const openSidebar = (categoryId) => {
    setCurrentCategory(categoryId);
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setWidgetName("");
    setWidgetText("");
  };

  const addWidget = () => {
    const newWidget = {
      id: `widget${Date.now()}`,
      name: widgetName,
      text: widgetText,
    };

    setCategories(
      categories.map((category) =>
        category.id === currentCategory
          ? { ...category, widgets: [...category.widgets, newWidget] }
          : category
      )
    );

    closeSidebar();
  };

  const removeWidget = (categoryId, widgetId) => {
    setCategories(
      categories.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              widgets: category.widgets.filter(
                (widget) => widget.id !== widgetId
              ),
            }
          : category
      )
    );
  };

  return (
    <div className="bg-blue-50">
      <Navbar title="CNAPP Dashboard" />
      {categories.map((category) => (
        <Category
          key={category.id}
          category={category}
          openSidebar={() => openSidebar(category.id)}
          removeWidget={removeWidget}
        />
      ))}
      {isSidebarOpen && (
        <Sidebar
          widgetName={widgetName}
          widgetText={widgetText}
          setWidgetName={setWidgetName}
          setWidgetText={setWidgetText}
          onClose={closeSidebar}
          onConfirm={addWidget}
        />
      )}
    </div>
  );
};

export default Dashboard;
