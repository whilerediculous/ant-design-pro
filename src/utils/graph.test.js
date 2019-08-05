import { getDeepVec, getGraphData } from './graph';

const deployInfos = [
  {
    id: 1,
    name: 'phoenix',
    module_id: 1,
    l5_info: [
      {
        upstream_deployment_id: 1,
        mod_id: 123456,
        cmd_id: 456789,
        logic_area: 'IDC',
        env_type: 'TEST',
        addr: '192.168.1.1:8080',
        description: 'Description...',
      },
      {
        upstream_deployment_id: 2,
        mod_id: 123456,
        cmd_id: 456789,
        logic_area: 'IDC',
        env_type: 'TEST',
        addr: '192.168.1.2:8080',
        description: 'Description...',
      },
      {
        upstream_deployment_id: 3,
        mod_id: 123456,
        cmd_id: 456789,
        logic_area: 'IDC',
        env_type: 'TEST',
        addr: '192.168.1.3:8080',
        description: 'Description...',
      },
    ],
  },
  {
    id: 2,
    name: 'marketing',
    module_id: 2,
    l5_info: [
      {
        upstream_deployment_id: 1,
        mod_id: 123456,
        cmd_id: 456789,
        logic_area: 'IDC',
        env_type: 'TEST',
        addr: '192.168.1.1:8080',
        description: 'Description...',
      },
      {
        upstream_deployment_id: 2,
        mod_id: 123456,
        cmd_id: 456789,
        logic_area: 'IDC',
        env_type: 'TEST',
        addr: '192.168.1.2:8080',
        description: 'Description...',
      },
      {
        upstream_deployment_id: 3,
        mod_id: 123456,
        cmd_id: 456789,
        logic_area: 'IDC',
        env_type: 'TEST',
        addr: '192.168.1.3:8080',
        description: 'Description...',
      },
    ],
  },
  {
    id: 3,
    name: 'ad_service',
    module_id: 3,
    l5_info: [
      {
        upstream_deployment_id: 1,
        mod_id: 123456,
        cmd_id: 456789,
        logic_area: 'IDC',
        env_type: 'TEST',
        addr: '192.168.1.1:8080',
        description: 'Description...',
      },
      {
        upstream_deployment_id: 2,
        mod_id: 123456,
        cmd_id: 456789,
        logic_area: 'IDC',
        env_type: 'TEST',
        addr: '192.168.1.2:8080',
        description: 'Description...',
      },
      {
        upstream_deployment_id: 3,
        mod_id: 123456,
        cmd_id: 456789,
        logic_area: 'IDC',
        env_type: 'TEST',
        addr: '192.168.1.3:8080',
        description: 'Description...',
      },
    ],
  },
  {
    id: 4,
    name: 'di',
    module_id: 4,
    l5_info: [
      {
        upstream_deployment_id: 1,
        mod_id: 123456,
        cmd_id: 456789,
        logic_area: 'IDC',
        env_type: 'TEST',
        addr: '192.168.1.1:8080',
        description: 'Description...',
      },
      {
        upstream_deployment_id: 2,
        mod_id: 123456,
        cmd_id: 456789,
        logic_area: 'IDC',
        env_type: 'TEST',
        addr: '192.168.1.2:8080',
        description: 'Description...',
      },
      {
        upstream_deployment_id: 3,
        mod_id: 123456,
        cmd_id: 456789,
        logic_area: 'IDC',
        env_type: 'TEST',
        addr: '192.168.1.3:8080',
        description: 'Description...',
      },
    ],
  },
  {
    id: 5,
    name: 'jd',
    module_id: 5,
    l5_info: [
      {
        upstream_deployment_id: 1,
        mod_id: 123456,
        cmd_id: 456789,
        logic_area: 'IDC',
        env_type: 'TEST',
        addr: '192.168.1.1:8080',
        description: 'Description...',
      },
      {
        upstream_deployment_id: 2,
        mod_id: 123456,
        cmd_id: 456789,
        logic_area: 'IDC',
        env_type: 'TEST',
        addr: '192.168.1.2:8080',
        description: 'Description...',
      },
      {
        upstream_deployment_id: 3,
        mod_id: 123456,
        cmd_id: 456789,
        logic_area: 'IDC',
        env_type: 'TEST',
        addr: '192.168.1.3:8080',
        description: 'Description...',
      },
    ],
  },
  {
    id: 6,
    name: 'pegasus',
    module_id: 6,
    l5_info: [
      {
        upstream_deployment_id: 1,
        mod_id: 123456,
        cmd_id: 456789,
        logic_area: 'IDC',
        env_type: 'TEST',
        addr: '192.168.1.1:8080',
        description: 'Description...',
      },
      {
        upstream_deployment_id: 2,
        mod_id: 123456,
        cmd_id: 456789,
        logic_area: 'IDC',
        env_type: 'TEST',
        addr: '192.168.1.2:8080',
        description: 'Description...',
      },
      {
        upstream_deployment_id: 3,
        mod_id: 123456,
        cmd_id: 456789,
        logic_area: 'IDC',
        env_type: 'TEST',
        addr: '192.168.1.3:8080',
        description: 'Description...',
      },
    ],
  },
  {
    id: 7,
    name: 'AAA',
    module_id: 7,
    l5_info: [
      {
        upstream_deployment_id: 1,
        mod_id: 123456,
        cmd_id: 456789,
        logic_area: 'IDC',
        env_type: 'TEST',
        addr: '192.168.1.1:8080',
        description: 'Description...',
      },
      {
        upstream_deployment_id: 2,
        mod_id: 123456,
        cmd_id: 456789,
        logic_area: 'IDC',
        env_type: 'TEST',
        addr: '192.168.1.2:8080',
        description: 'Description...',
      },
      {
        upstream_deployment_id: 3,
        mod_id: 123456,
        cmd_id: 456789,
        logic_area: 'IDC',
        env_type: 'TEST',
        addr: '192.168.1.3:8080',
        description: 'Description...',
      },
    ],
  },
  {
    id: 8,
    name: 'CKV',
    module_id: 8,
    l5_info: [
      {
        upstream_deployment_id: 1,
        mod_id: 123456,
        cmd_id: 456789,
        logic_area: 'IDC',
        env_type: 'TEST',
        addr: '192.168.1.1:8080',
        description: 'Description...',
      },
      {
        upstream_deployment_id: 2,
        mod_id: 123456,
        cmd_id: 456789,
        logic_area: 'IDC',
        env_type: 'TEST',
        addr: '192.168.1.2:8080',
        description: 'Description...',
      },
      {
        upstream_deployment_id: 3,
        mod_id: 123456,
        cmd_id: 456789,
        logic_area: 'IDC',
        env_type: 'TEST',
        addr: '192.168.1.3:8080',
        description: 'Description...',
      },
    ],
  },
];
const routeList = [
  { from: 1, to: 3 },
  { from: 2, to: 3 },
  { from: 2, to: 4 },
  { from: 5, to: 3 },
  { from: 3, to: 6 },
  { from: 3, to: 7 },
  { from: 3, to: 8 },
  { from: 8, to: null },
];

describe('getAuthority should be strong', () => {
  it('getDeepVec', () => {
    const deepVec = getDeepVec(routeList, deployInfos);
    console.log(deepVec);
    expect(deepVec).toEqual(['admin']);
  });
  it('getGraphData', () => {
    const graphData = getGraphData(
      routeList,
      deployInfos,
      ['version', 'address', 'message'],
      ['color'],
    );
    console.log(graphData);
    expect(graphData).toEqual(['admin']);
  });
});
