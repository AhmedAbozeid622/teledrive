import { GithubOutlined, TwitterOutlined } from '@ant-design/icons'
import { Button, Col, Divider, Layout, Row, Space, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return <>
    <Layout.Footer style={{ background: '#f0f2f5', paddingTop: '50px' }}>
      <Row>
        <Col lg={{ span: 18, offset: 3 }} md={{ span: 24, offset: 1 }} span={24}>
          <Row gutter={48}>
            <Col md={6} sm={12} span={24} style={{ marginBottom: '30px' }}>
              <Typography.Paragraph>
                <Button type="link" href="/" style={{ fontSize: '20px', fontWeight: 'bolder' }}
                  icon={<img src="/teledrive-logo/logoteledrive.png" style={{ height: '24px' }} />}>
                </Button>
              </Typography.Paragraph>
              <Typography.Paragraph type="secondary">
                Your free unlimited cloud storage service using the Telegram API.
              </Typography.Paragraph>
              <Typography.Paragraph type="secondary">
                Made with &hearts; from Indonesia 🇮🇩
              </Typography.Paragraph>
            </Col>
            <Col md={6} sm={12} span={24} style={{ marginBottom: '30px' }}>
              <Typography.Title level={5}>Support Us</Typography.Title>
              <Typography.Paragraph>
                <a href="https://opencollective.com/teledrive/contribute" target="_blank">
                  <img src="https://opencollective.com/teledrive/contribute/button@2x.png?color=blue" style={{ width: '100%', maxWidth: '240px' }} />
                </a>
              </Typography.Paragraph>
              <Typography.Paragraph type="secondary">
                Or, become <a href="https://teledriveapp.com/contact?intent=sponsor">a sponsor</a>.
              </Typography.Paragraph>
            </Col>
            <Col md={6} sm={12} span={24} style={{ marginBottom: '30px' }}>
              <Typography.Title level={5}>Links</Typography.Title>
              <Row>
                <Col span={12}>
                  <Space direction="vertical">
                    <Link to="/pricing">Pricing</Link>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="/terms">Terms</Link>
                    <Link target="_blank" to={{ pathname: 'https://mgilangjanuar.notion.site/TeleDrive-Blog-ea8c422dfa8046cda6655cddec0cd8e8' }}>Blog</Link>
                  </Space>
                </Col>
                <Col span={12}>
                  <Space direction="vertical">
                    <Link to="/faq">FAQ</Link>
                    <Link to="/privacy">Privacy Policy</Link>
                    <Link to="/refund">Refund Policy</Link>
                  </Space>
                </Col>
              </Row>
            </Col>
            <Col md={6} sm={12} span={24} style={{ marginBottom: '30px' }}>
              <Typography.Title level={5}>Social Media</Typography.Title>
              <Space direction="horizontal">
                <Button type="link" size="small" href="https://github.com/mgilangjanuar/teledrive" target="_blank" icon={<GithubOutlined />}>GitHub</Button>
                <Button type="link" size="small" href="https://twitter.com/teledriveapp" target="_blank" icon={<TwitterOutlined />}>Twitter</Button>
              </Space>
            </Col>
          </Row>
        </Col>
      </Row>
      <Divider />
      <Typography.Paragraph style={{ textAlign: 'center' }}>
        Copyright &copy; {new Date().getFullYear()}
      </Typography.Paragraph>
    </Layout.Footer>
  </>
}

export default Footer