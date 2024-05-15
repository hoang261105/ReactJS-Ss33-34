import Search from "./Search";

export default function Sort() {
  return (
    <div className="navbar">
      <div></div>
      <div className="sort">
        <select>
          <option value="">Sắp xếp theo tuổi</option>
          <option value="">Từ thấp đến cao</option>
          <option value="">Từ cao đến thấp</option>
        </select>
        <Search />
      </div>
    </div>
  );
}
