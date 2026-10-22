
import React from 'react';
import { shallow } from 'enzyme';
import DeployServiceMesh from './index';
it('Blog-sidebar renders without crashing', () => {
  shallow(<DeployServiceMesh />);
});