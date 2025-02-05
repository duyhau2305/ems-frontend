import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Tab 1',
    
  },
  {
    key: '2',
    label: 'Tab 2',
    
  },
  {
    key: '3',
    label: 'Tab 3',
    
  },
];

const TabStation: React.FC = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;


export default TabStation;