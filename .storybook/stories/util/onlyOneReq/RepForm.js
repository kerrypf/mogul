import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Form } from "../../../../src";
import { Input, Button, Radio, Select } from "antd";
import styled from "styled-components";


const Title = styled.div`
  font-size: 24px;
  text-align: center;
  margin-bottom: 30px;
  width: 100%;
`;

const SubmitControls = styled.div`
  width: 100%;
  text-align: center;
`;

const Lans = ["javascript","java","c#","c++","prolog","nodejs"];

@inject("store")
@observer
export default class extends Component {

  render() {

    const { creatingRep, createRep } = this.props.store;
    return (
      <Form ref={form => (this.form = form ? form.getForm() : null)}>
        <Form.Box
          fieldName={"repForm"}
          labelStyle={{ width: "100px" }}
          wrap={"wrap"}
          containerStyle={{
            width: "100%"
          }}
          style={{ width: 600, margin: "0 auto" }}
        >
          <Title>创建仓库</Title>
          <Form.Input
            fieldName={"name"}
            label={"仓库名称"}
            initialValue={""}
            placeholder={"请输入仓库名称"}
            rules={[
              ["required", "名称必填"],
              ["maxLength", 30, "名称最长为30位"]
            ]}
          />

          <Form.Connect
            fieldName={"description"}
            label={"仓库描述"}
            labelStyle={{
              alignSelf: "flex-start"
            }}
            initialValue={""}
            rules={[
              ["required", "描述必填"],
              ["maxLength", 10, "名称最长为30位"]
            ]}
          >
            {form => {
              return (
                <Input.TextArea
                  autosize={{ minRows: 2, maxRows: 6 }}
                  value={form.value}
                  onChange={event => {
                    form.changeValue(event.target.value);
                    form.validate();
                  }}
                />
              );
            }}
          </Form.Connect>

          <Form.Connect
            labelStyle={{
              alignSelf: "flex-start"
            }}
            fieldName={"tags"}
            label={"标签"}
            initialValue={[]}
          >
            {form => {
              return (
                <Select
                  mode="tags"
                  placeholder="tags"
                  onChange={value => {
                    form.changeValue(value);
                  }}
                  style={{ width: "100%" }}
                  value={form.value}
                >
                  {Lans.map(lan => (
                    <Select.Option key={lan} value={lan}>
                      {lan}
                    </Select.Option>
                  ))}
                </Select>
              );
            }}
          </Form.Connect>

          <Form.FormSelect
            label={ "主语言" }
            fieldName={"language"}
            rules={ [
              ["required","请选择语言"]
            ] }
            options={ Lans.map( lan => ({
              label: lan,
              value: lan
            }) ) }
          />

          <Form.Input
            fieldName={"homepage"}
            label={"地址"}
            initialValue={""}
            placeholder={"请输入仓库名称"}
            rules={[
              ["required", "必填"]
            ]}
          />

          <Form.FormRadioGroup
            fieldName={"private"}
            label={"私有"}
            rules={[["required", "必填"]]}
            initialValue={"0"}
            options={[
              {
                label: "公开",
                value: "0"
              },
              {
                label: "私有",
                value: "1"
              }
            ]}
          />

          <Form.Connect
            fieldName={"billWay"}
            label={"付费方式"}
            rules={[
              [
                value =>
                  this.form.findFormByFieldName("private").value === "1"
                    ? value
                      ? true
                      : "付费方式必选"
                    : true
              ]
            ]}
          >
            {form => {
              // 当 选择是公开时, 不需要填写 billWay, 返回 null 不显示组件
              if (form.root.findFormByFieldName("private").value !== "1") {
                return null;
              }
              return (
                <Radio.Group
                  onChange={event => {
                    form.changeValue(event.target.value);
                  }}
                  value={form.value}
                >
                  <Radio value={"alipay"}>支付宝</Radio>
                  <Radio value={"wechat"}>微信</Radio>
                  <Radio value={"credit"}>信用卡</Radio>
                </Radio.Group>
              );
            }}
          </Form.Connect>

          <SubmitControls>
            <Button
              loading={ creatingRep }
              type={"primary"}
              onClick={() => {
                let form = this.form.$("repForm");
                if (form && form.validate()) {
                  this.props.store.createRep(form);
                }
              }}
            >
              创建
            </Button>
          </SubmitControls>
        </Form.Box>
      </Form>
    );
  }
}
