import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Button, Space, Input, Col, Row, Tooltip } from 'antd';
import 'antd/dist/antd.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

const { TextArea } = Input;
library.add(fas);
library.add(far);
library.add(fab);

const Hello = () => {
  return (
    <Space direction="vertical" style={{ width: 480 }}>
      <Row align="middle">
        <Col flex="25px">
          <FontAwesomeIcon icon={['fas', 'fa-server']} />
        </Col>
        <Col flex="130px">Hostname:</Col>
        <Col flex="auto">
          <Space>
            <Input />
            <Button type="primary">Set</Button>
            <Tooltip title="The hostname the Android Companion App will connect to. When chnaged port 80 needs to be opened for SSL vertificate registration. Also for reneweal every 3 months">
              <FontAwesomeIcon icon={['fas', 'fa-circle-question']} />
            </Tooltip>
          </Space>
        </Col>
      </Row>
      <Row align="middle">
        <Col flex="25px">
          <FontAwesomeIcon icon={['fas', 'fa-envelope']} />
        </Col>
        <Col flex="130px">SSL Email:</Col>
        <Col flex="auto">
          <Space>
            <Input />
            <Button type="primary">Set</Button>
            <Tooltip title="An email address is required for SSL certificate registraion.">
              <FontAwesomeIcon icon={['fas', 'fa-circle-question']} />
            </Tooltip>
          </Space>
        </Col>
      </Row>
      <Row align="middle">
        <Col flex="25px">
          <FontAwesomeIcon icon={['fab', 'fa-telegram']} />
        </Col>
        <Col flex="130px">TelegramBot Token:</Col>
        <Col flex="auto">
          <Space>
            <Input />
            <Button type="primary">Set</Button>
            <Tooltip title="Contact @botfather using Telegram to create a bot token. Send '/start' and '/newbot' to create a bot. After the token is entered in this field contact the bot by the name you gave the bot to request authorization.">
              <FontAwesomeIcon icon={['fas', 'fa-circle-question']} />
            </Tooltip>
          </Space>
        </Col>
      </Row>
      <Row>
        <Col flex="25px">
          <FontAwesomeIcon icon={['far', 'fa-file']} />
        </Col>
        <Col flex="130px">Log:</Col>
      </Row>
      <TextArea style={{ resize: 'none' }} disabled rows={13} />
    </Space>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
