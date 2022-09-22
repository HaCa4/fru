export const handleSearch = (
  event: React.ChangeEvent<HTMLInputElement>,
  setSearchValue: React.Dispatch<React.SetStateAction<string>>,
  setIsFilterSelected: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setSearchValue(event.target.value);
  setIsFilterSelected(false);
};

export const handleFilter = (
  setCategoryValue: React.Dispatch<React.SetStateAction<string>>,
  setReleaseYearValue: React.Dispatch<React.SetStateAction<string>>,
  setIsFilterSelected: React.Dispatch<React.SetStateAction<boolean>>,
  setIsSearchSelected: React.Dispatch<React.SetStateAction<boolean>>,
  setSearchValue: React.Dispatch<React.SetStateAction<string>>,
  category: string,
  year: string
) => {
  setCategoryValue(category);
  setReleaseYearValue(year);
  setIsFilterSelected(true);
  setIsSearchSelected(false);
  setSearchValue("");
};

export const handleClear = (
  setIsFilterSelected: React.Dispatch<React.SetStateAction<boolean>>,
  setIsSearchSelected: React.Dispatch<React.SetStateAction<boolean>>,
  setSearchValue: React.Dispatch<React.SetStateAction<string>>,
  setCategory: React.Dispatch<React.SetStateAction<string>>,
  setYear: React.Dispatch<React.SetStateAction<string>>
) => {
  setIsFilterSelected(false);
  setIsSearchSelected(false);
  setSearchValue("");
  setCategory("none");
  setYear("none");
};
