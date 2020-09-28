import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from "enzyme-to-json";

import App from './App';
import Account from './components/Account';

it('Pages App running without crash', () => {
  shallow(<App />);
});

it('Render account header', () => {
  const wrapper = shallow(<App />);
  const header = <h1>Display Active Users Account Details</h1>
  expect(wrapper.contains(header)).toEqual(true);
})

const user = {
  name: 'David Winalda',
  email: 'davidwinalda94@gmail.com',
  username: 'davidwinalda',
}

describe('Test Account Component', () => {
  it('accept user account props', () => {
    const wrapper = mount(<Account user={user} />);
    expect(wrapper.props().user).toEqual(user);
  });

  it('contains users account email', () => {
    const wrapper = mount(<Account user={user} />);
    const email = wrapper.find("p").text();
    expect(email).toEqual("davidwinalda94@gmail.com");
  });
})

it("renders correctly", () => {
  const tree = mount(<Account user={user} />);
  expect(toJson(tree)).toMatchSnapshot();
});

