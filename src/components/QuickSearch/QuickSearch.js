import React, { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import { Input } from "../Input/Input";
import { ListSearch } from "../ListSearch/ListSearch";
import data from "../../data.json";

export const QuickSearch = () => {
  const [search, setSearch] = useState("");
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (search !== "") {
      setOptions(filterSearch());
    } else {
      setOptions([]);
    }
  }, [search]);

  const handleChangeInput = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const filterSearch = () => {
    return data.filter((el) => {
      return el.title.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  };

  return (
    <div>
      <Card>
        <Input
          label="Search"
          name="search"
          handleChange={handleChangeInput}
          value={search}
        />
        <ListSearch options={options} />
      </Card>
    </div>
  );
};
