/**
 * Created by hao.cheng on 2017/4/15.
 */
import React from 'react';
import {Table, Icon} from 'antd';

const columns = [{
  title: '名字',
  dataIndex: 'name',
  key: 'name',
  render: text => <a>{text}</a>,
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '地址',
  dataIndex: 'address',
  key: 'address',
}, {
  title: '操作',
  key: 'action',
  render: (text, record) => (
      <span>
      {/*<a>Action 一 {record.name}</a>*/}
        {/*<span className="ant-divider" />*/}
        <a>查看详情</a>
        {/*<span className="ant-divider" />*/}
        {/*<a className="ant-dropdown-link">*/}
        {/*More actions <Icon type="down" />*/}
        {/*</a>*/}
    </span>
  ),
}];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `地址 ${i}`,
  });
}

const BasicTable = () => (
    <Table columns={columns} dataSource={data} onRow={(record) => {
      return {
        onClick: () => {
          console.log(record)
        },       // 点击行
        onMouseEnter: () => {
        }
      };
    }}/>
);


export default BasicTable;