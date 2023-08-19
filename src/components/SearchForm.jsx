import { Link } from "react-router-dom";

export default function SearchForm() {
  return (
    <form method="post" className="w-full " action="/searchResults">
      <div className="form-control">
        <label htmlFor="keyword">Keyword</label>
        <input type="text" name="keyword" id="keyword" />
      </div>

      <div className="form-control">
        <label htmlFor="Address">Address</label>
        <input type="text" name="address" id="address" />
      </div>
      <div className="form-control">
        <label htmlFor="Category">Category</label>
        <select
          type="text"
          name="category"
          id="category"
          defaultValue="Select a category"
        >
          <option value="hindu"> Select </option>
          <option value="hindu">Hindu priest</option>
          <option value="reiki">Reiki healer</option>
        </select>
      </div>

      <div className="form-control">
        {/* <button className="w-1/2" id="primary-btn" type="submit">
          {" "}
          Search{" "}
        </button> */}
        <Link
          className="w-1/2 text-center "
          id="primary-btn"
          to="/searchResults"
        >
          {" "}
          Search{" "}
        </Link>
      </div>
    </form>
  );
}
