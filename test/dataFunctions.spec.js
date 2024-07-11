import { computeStats, filterData, sortData } from "../src/lib/dataFunctions.js";
import { data } from "./data.js";

describe("dataFunctions", () => {
  describe("dataFunctions.filterData", () => {
    it("should return 1 object for filterBy ='type' and value = 'Markup'", () => {
      expect(filterData(data, "type", "Markup").length).toBe(1);
    });
    it('return filters data by applicationField "Data"', () => {
      const filteredData = filterData(data, 'applicationField', 'Data');
      expect(filteredData.some(obj => obj.id === "python")).toBe(true);
    });
    it('return filters data by applicationField 0', () => {
      const filteredData = filterData(data, 'applicationField', '');
      expect(filteredData.length).toBe(0);
    });
    it("should return 2 objects for filterBy = 'applicationField' and value = 'Data'", () => {
      expect(filterData(data, "applicationField", "Data").length).toBe(
        2
      );
    });
  });

  describe("dataFunctions.sortData", () => {
    it("should return 'Angular' as the first object name when sorting by filter type = 'Framework' and sortOrder = 'asc' ", () => {
      expect(sortData(data, "name", "asc")[0].name).toBe("Angular");
    });
    it("should return 'Vue.js' as the first object name when sorting by filter applicationField = 'Front-End' and sortOrder = 'desc' ", () => {
      expect(sortData(data, "name", "desc")[0].name).toBe("Vue.js");
    });
  });

  describe("dataFunctions.computeStats", () => {
    it("should return 3 object como return del Top 3", () => {
      expect(computeStats(data).length).toBe(3);
    });
    it('should return id=javascript"', () => {
      expect(computeStats(data)[0].name).toBe("JavaScript");
    });
  });
});