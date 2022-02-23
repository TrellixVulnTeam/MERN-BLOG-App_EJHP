import React from "react";
import { useNavigate } from 'react-router-dom';
import { Layout, Menu, Divider, Row, Col, Card, Typography } from 'antd';
import { UploadOutlined, AntCloudOutlined, UserOutlined, ShoppingOutlined, AppleOutlined, RightOutlined, VideoCameraOutlined, WhatsAppOutlined, DashboardOutlined, LogoutOutlined, RightCircleOutlined, TeamOutlined, UnlockOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;
const Home = () => {
  const navigate = useNavigate();
  const handleLogout = ()=>{
     navigate('/login')
  }
  return (
    <>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu className="side-menu" theme="light" mode="inline" defaultSelectedKeys={['8']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              Safdar
            </Menu.Item>
            <Menu.Item key="2" icon={<RightCircleOutlined />} > Collapse </Menu.Item>
            <Divider />
            <Menu.Item key="3" icon={<DashboardOutlined />}>
              Dashboard
            </Menu.Item>
            <Menu.Item key="4" icon={<AppleOutlined />}>
              Apple
            </Menu.Item>
            <Menu.Item key="5" icon={<AntCloudOutlined />}>
              AntCloud
            </Menu.Item>
            <Menu.Item key="6" icon={<VideoCameraOutlined />}>
              Camera
            </Menu.Item>
            <Menu.Item key="7" icon={<UploadOutlined />}>
              Upload
            </Menu.Item>
            <Menu.Item key="8" icon={<ShoppingOutlined />}>
              Shopping
            </Menu.Item>
            <Menu.Item key="9" icon={<TeamOutlined />} >Team</Menu.Item>
            <Menu.Item key="10" icon={<WhatsAppOutlined />} >Whatsapp</Menu.Item>
            <Menu.Item key="11" icon={<UnlockOutlined />}>Unlock</Menu.Item>
            <Divider />
            <Menu.Item key="12" onClick={handleLogout} icon={<LogoutOutlined />} >
              Log out
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="site-layout-sub-header-background" >
            perkforce </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 500 }}>
              <div className="site-card-wrapper">
                <Row gutter={16}>
                  <Col span={8}>
                    <Card style={{ width: 300 }}>
                      <Title level={4}>Perks</Title>
                      <p>Delight your people and support local businesses.</p>
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card style={{ width: 300 }}>
                      <Title level={4}>Benefits</Title>
                      <p>Corporate support for wellness and wellbeing.</p>
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card style={{ width: 300 }}>
                      <Title level={4}>Business Connections</Title>
                      <p>Easily increase your portfolio and your users even more.</p>
                    </Card>
                  </Col>
                </Row>
              </div>
              <Row gutter={16}>
                <Col span={8}>
                  <Card style={{ width: 300 }}>
                    <Title level={4}>Insight Reports</Title>
                    <p>User Engagement and maximising your User Value Proposition. </p>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card style={{ width: 300 }}>
                    <Title level={4}>Users</Title>
                    <p>Onboard and manage your users through  well organized sysytem.</p>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card style={{ width: 300 }}>
                    <Title level={4}>Account Settings</Title>
                    <p>Manage your company profile and show it to whole world.</p>
                  </Card>
                </Col>
              </Row>
            </div>
          </Content>
          <Footer className="footer-per" >Privacy Statement Terms & Conditions</Footer>
          </Layout>
          </Layout>
    </>
  )
}

export default Home;