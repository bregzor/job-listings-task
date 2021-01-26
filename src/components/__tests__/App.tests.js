import React, { useContext } from "react";
import { mount, shallow } from "enzyme";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import SearchContextProvider, {
  SearchContext,
} from "../../context/SearchValueContext";

import App from "../../App";
import StartPage from "../../pages/StartPage";
import JobPage from "../../pages/JobPage";
import SearchPanel from "../SearchPanel";
import JobCardItem from "../JobCardItem";
import JobResultList from "../JobResultList";
import LoadContentWrapper from "../LoadContentWrapper";

import BaseLayout from "../parts/BaseLayout";

const listData = [
  {
    id: 1,
    title: "React",
    type: "fullstack",
    company_logo: "none",
    description: "<p>Hello</p>",
    company_url: "www.google.se",
  },
];

const jobData = {
  company: "EventMobi",
  company_logo:
    "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdENXIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--78d9681a7475e92db796ae3c406ce4f8d2640864/em-logo.jpg",
  company_url: "http://eventmobi.com",
  created_at: "Tue Jan 26 13:44:38 UTC 2021",
  description:
    "<p><strong>EventMobi is a remote-first company and this is a remote job.",
  how_to_apply: "<p>Please visit",
  id: "cd91e908-4316-4315-91b9-3f3879932e0b",
  location: "Remote",
  title: "Senior Frontend Engineer - Remote",
  type: "Full Time",
  url: "https://jobs.github.com/positions/cd91e908-4316-4315-91b9-3f3879932e0b",
};

///ROUTING--------------------
describe("Test routing", () => {
  it("renders correct StartPage by path /", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(StartPage)).toHaveLength(1);
  });

  it("renders correct JobPage by path /jobs/random", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/jobs/random"]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(JobPage)).toHaveLength(1);
  });
});

//Baselayout
describe("test Baselayout", () => {
  it("renders correct title", () => {
    const wrapper = mount(
      <SearchContextProvider>
        <BaseLayout title="headline" />
      </SearchContextProvider>
    );
    expect(wrapper.find("h1").text()).toBe("headline");
  });

  it("renders children correctly", () => {
    const wrapper = mount(
      <BaseLayout title="hej">
        <p>Hej</p>
      </BaseLayout>
    );
    expect(wrapper.find("p").text()).toBe("Hej");
  });
});

//Loader Component
describe("test Loader component", () => {
  it("renders loading icon when loading === true", () => {
    const wrapper = shallow(<LoadContentWrapper loading={true} />);
    expect(wrapper.find("#loader").exists()).toBe(true);
  });

  it("renders loading comp with children only if loading == false", () => {
    const wrapper = shallow(
      <LoadContentWrapper loading={false}>
        <p>Halloj!</p>
      </LoadContentWrapper>
    );
    expect(wrapper.find("p").exists()).toBe(true);
  });
});

//Job result component
describe("test JobList component", () => {
  it("renders jobList when data is empty jobList correctly", () => {
    const wrapper = shallow(<JobResultList resultData={null} />);
    expect(wrapper.find("p").text()).toBe("No jobs to be found!");
  });

  it("renders jobList with data correctly", () => {
    const wrapper = shallow(<JobResultList resultData={listData} />);
    expect(wrapper.find("h2").text()).toBe("React");
  });
});

//Job card item component
describe("test JobCardItem(detail) component", () => {
  it("renders jobListPAge when data is empty jobList correctly", () => {
    const wrapper = shallow(<JobCardItem data={null} />);
    expect(wrapper.find("p").text()).toBe("Nothing to be found");
  });

  it("renders jobListPage with data correctly", () => {
    const wrapper = shallow(<JobCardItem data={jobData} />);
    expect(wrapper.find("h2").text()).toBe(jobData.title);
    expect(wrapper.find("img").prop("src")).toBe(jobData.company_logo);
  });
});

//Search component
describe("test Search component", () => {

    it("renders disabled button when length is < 2", () => {
        const wrapper = shallow(<SearchPanel inputValue={"o"}  />);
        expect(wrapper.find("#btn").prop("disabled")).toBe(true);
    });

    it("renders disabled button when length is > 2", () => {
        const wrapper = shallow(<SearchPanel inputValue={"osd"}  />);
        expect(wrapper.find("#btn").prop("disabled")).toBe(false);
    });


})
