
const Filter = ({
  selectedExpertise,
  selectedIndustry,
  expertiseSort,
  industrySort,
}) => {
  return (
    <div className="ui segment">
      <h2>Search for Projects:</h2>
      <div className="flex container">
        <label htmlFor="expertise" className="ui header">
          <br/>
          Domain:
        </label>
        <select
          name="expertise"
          value={selectedExpertise}
          onChange={(e) => expertiseSort(e.target.value)}
          className="ui select dropdown custom-select">
          <option value="" hidden>
            {" "}
            Select
          </option>
          <option value="All" className="ui button">
            All
          </option>
          <option value="accounting" className="ui button">
           Environment
          </option>
          <option value="data science" className="ui button">
            Education
          </option>
          <option value="software engineering" className="ui button">
            Health Care
          </option>
        </select>
        <label htmlFor="industry" className="ui header">
          Location:
        </label>
        <select
          name="industry"
          value={selectedIndustry}
          onChange={(e) => industrySort(e.target.value)}
          className="ui select dropdown custom-select">
          <option value="" hidden>
            {" "}
            Select
          </option>
          <option value="All" className="ui button">
            All
          </option>
          <option value="accounting" className="ui button">
           Bangalore
          </option>
          <option value="Data Science" className="ui button">
            Mysore
          </option>
          <option value="Computer services" className="ui button">
           Hassan
          </option>
          <option value="Business consulting" className="ui button">
           Tumakuru
          </option>
          <option value="Digital marketing" className="ui button">
            Kolar
          </option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
