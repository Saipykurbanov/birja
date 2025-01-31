import React, { useState } from "react";

const FilterComponent = () => {
  const [filters, setFilters] = useState([
    { parameter: "", value: "", logic: "" },
  ]);

  const parameters = ["Category", "Name", "Date", "Status"];
  const categories = ["Category 1", "Category 2", "Category 3"];
  const logicOperators = ["AND", "OR", "NOT"];

  const handleChange = (index, field, value) => {
    const newFilters = [...filters];
    newFilters[index][field] = value;

    // Автоматическое добавление нового фильтра
    if (field === "value" && value !== "") {
      newFilters.push({ parameter: "", value: "", logic: "" });
    }

    setFilters(newFilters);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", border: "1px solid #ddd" }}>
      <h3>Фильтр</h3>
      {filters.map((filter, index) => (
        <div
          key={index}
          style={{ marginBottom: "10px", display: "flex", gap: "10px" }}
        >
          {index > 0 && (
            <select
              value={filter.logic}
              onChange={(e) => handleChange(index, "logic", e.target.value)}
            >
              <option value="">Выберите</option>
              {logicOperators.map((op) => (
                <option key={op} value={op}>
                  {op}
                </option>
              ))}
            </select>
          )}
          <select
            value={filter.parameter}
            onChange={(e) => handleChange(index, "parameter", e.target.value)}
          >
            <option value="">Выберите параметр</option>
            {parameters.map((param) => (
              <option key={param} value={param}>
                {param}
              </option>
            ))}
          </select>
          {filter.parameter === "Category" ? (
            <select
              value={filter.value}
              onChange={(e) => handleChange(index, "value", e.target.value)}
            >
              <option value="">Выберите категорию</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          ) : (
            <input
              type="text"
              value={filter.value}
              placeholder="Введите значение"
              onChange={(e) => handleChange(index, "value", e.target.value)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default FilterComponent;
